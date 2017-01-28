const Promise = require('bluebird');
const cheerio = require('cheerio');
const elasticsearch = require('elasticsearch');
const map = require('async/map');

const fs = Promise.promisifyAll(require('fs'));

const schema = require('./schema');
const parseSchema = require('./parseSchema');
const walk = require('./walk');

const spawn = require('child_process').spawn;
const cmd = spawn('docker-machine', ['ip']);
const NUMBER_OF_PARALLEL_READ = 20;

console.time('walk');
cmd.stdout.on('data', (dockerMachineIp) => {
  walk(process.env.DATA_SOURCE_FOLDER)
    .then((files) => {
      const errors = [];
      console.timeEnd('walk');
      console.log('number of files', files.length);
      const client = new elasticsearch.Client({
        host: `${dockerMachineIp.toString().trim()}:9200`,
        // log: 'trace'
      });

      client.ping({
        requestTimeout: 1000,
      }).then(() => {
        console.log('All is well');
      }, (error) => {
        console.trace('elasticsearch cluster is down!');
      });

      console.time('sendingFiles');

      indexing(client, files.slice(0, 10000), () => {
        console.timeEnd('sendingFiles');
        console.log('errors', errors.length);
      });
    });
});

function indexing(client, files, cb) {
  if (!files.length) {
    return cb();
  }
  const nextFiles = files.splice(0, NUMBER_OF_PARALLEL_READ);

  readFiles(nextFiles, (err, datas) => {
    if (err) {
      console.log('err', err)
    }
    const body = [];
    datas.forEach((data) => {
      body.push({
        index: {
          '_index': 'doctrine',
          '_type': 'legalCase',
          '_id': data.TEXTE_JURI_JUDI.META.META_COMMUN.ID,
        },
      });
      body.push(data);
    });
    client.bulk({
      body: body,
    }, (err) => {
      console.log('bulk end', err);
      indexing(client, files, cb);
    });
  });
}

function readFiles(files, cb) {
  map(files, (file, transformed) => {
    fs.readFileAsync(file)
      .then((data) => {
        let $ = cheerio.load(data, {
          normalizeWhitespace: true,
          xmlMode: true,
        });
        transformed(null, parseSchema($.root(), schema));
      });
  }, cb);
}
