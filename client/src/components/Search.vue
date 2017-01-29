<template>
<div class="search">
  <input v-model="query" placeholder="edit me">
  <p v-if="query">Number of results: {{ results }}</p>
</div>
</template>

<script>
export default {
  name: 'search',
  data: () => ({
    query: '',
    results: 0
  }),
  watch: {
    'query': function (val, oldVal) {
      this.$http.post('http://192.168.99.100:9200/_search', {
        query: {
          match: {
            _all: val
          }
        }
      }).then((response) => {
        this.results = response.body.hits.total
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
