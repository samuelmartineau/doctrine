<template>
  <div class="search-container">
    <field></field>
    <spinner v-if="search.isFetching"></spinner>
    <div v-if="!search.isFetching">
      <result-stats></result-stats>
      <pagination></pagination>
      <highlight></highlight>
      <pagination></pagination>
    </div>
</template>

<script>
import Field from '../components/Field'
import ResultStats from '../components/ResultStats'
import Highlight from '../components/Highlight'
import Pagination from '../components/Pagination'
import Spinner from '../components/Spinner'
export default {
  name: 'search',
  computed: {
    search () {
      return this.$store.state.search
    }
  },
  components: {
    Field,
    ResultStats,
    Highlight,
    Pagination,
    Spinner
  }
}
</script>

<style>
.search-container {
  margin: -1em 1em 0.5em 1em;
}
</style>
