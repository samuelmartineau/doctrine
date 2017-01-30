const Promise = require('bluebird');
const cheerio = require('cheerio');
const elasticsearch = require('elasticsearch');
const mapLimit = require('async/mapLimit');

const fs = Promise.promisifyAll(require('fs'));

const schema = require('./schema');
const parseSchema = require('./parseSchema');
const walk = require('./walk');

const spawn = require('child_process').spawn;
const cmd = spawn('docker-machine', ['ip']);
const NUMBER_OF_PARALLEL_READ = 3;

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

      mapLimit(files, NUMBER_OF_PARALLEL_READ, (file, next) => {
        fs.readFileAsync(file)
          .then((data) => {
            let $ = cheerio.load(data, {
              normalizeWhitespace: true,
              xmlMode: true,
            });
            return parseSchema($.root(), schema);
          })
          .then((data) => {
            return client.create({
              index: 'doctrine',
              type: 'legalCase',
              id: data.texteJuriJudi.meta.metaCommun.id,
              body: data,
            });
          })
          .then(() => {
            next();
          }, (err) => {
            console.log('file', file);
            console.log('err', err);
            // next();
          });
      }, () => {
        console.timeEnd('sendingFiles');
        console.log('errors', errors.length);
      });
    });
});
