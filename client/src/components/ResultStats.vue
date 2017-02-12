<template>
<div class="result-stats" v-if="search.results && search.results.hits">
  <p>Number of results: {{ search.results.hits.total }} in {{ search.results.took }}ms</p>
</div>
</template>

<script>
export default {
  name: 'result-stats',
  computed: {
    search () {
      return this.$store.state.search
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .result-stats {
    max-width: 500px;
    margin: auto;
  }
</style>
