<template>
<div class="search">
  <input v-model="query" placeholder="edit me">
  <div v-if="results">
    <p>Number of results: {{ results.total }} in {{ took }} ms</p>
    <ul>
      <li v-for="hit in results.hits">
        <div v-for="keys in Object.keys(hit.highlight)">
          <h1>Donnée: {{ keys.split('.')[0] }} </h1>
          <p v-for="sentence in hit.highlight[keys]" v-html="sentence"></p>
        </div>
        <div>{{ hit._source.texteJuriJudi.meta.metaSpec.metaJuri.titre }}</div>
        <!-- <p v-for="sentence in hit._source.texteJuriJudi.texte.blocTextuel.contenu">
          {{ sentence }}
        </p> -->
      </li>
    </ul>
  </div>

</div>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  name: 'search',
  data: () => ({
    query: '',
    results: 0,
    took: 0
  }),
  computed: {
    throttleUpdates () {
      return debounce(this.updateFilters, 300)
    }
  },
  methods: {
    updateFilters (val, oldVal) {
      this.$http.post('http://192.168.99.100:9200/_search', {
        query: {
          match: {
            _all: val
          }
        },
        highlight: {
          'pre_tags': ['<span class="highlight">'],
          'post_tags': ['</span>'],
          'require_field_match': false,
          fields: {
            '*': {
            }
          }
        }
      }).then((response) => {
        this.took = response.body.took
        this.results = response.body.hits
      })
    }
  },
  watch: {
    'query': function (val, oldVal) {
      this.throttleUpdates(val, oldVal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .highlight {
    background-color: yellow;
    font-style: italic;
  }
</style>
