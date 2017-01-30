<template>
<div class="search">
  <input v-model="query" placeholder="edit me">
  <p v-if="query">Number of results: {{ results.total }}</p>
  <ul>
    <li v-for="hit in results.hits">
      <p v-for="sentence in hit._source.texteJuriJudi.texte.blocTextuel.contenu">
        {{ sentence }}
      </p>
    </li>
  </ul>
</div>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  name: 'search',
  data: () => ({
    query: '',
    results: 0
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
        }
      }).then((response) => {
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
<style scoped>

</style>
