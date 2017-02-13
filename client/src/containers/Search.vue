<template>
  <div class="search-container">
    <field></field>
    <spinner v-if="search.isFetching"></spinner>
    <div v-if="!search.isFetching">
      <result-stats></result-stats>
      <pagination
        :onNextPage="nextPage"
        :onPreviousPage="previousPage"
        :numberOfPages="numberOfPages"
        :currentPage='search.from'></pagination>
      <highlight></highlight>
      <pagination
        :onNextPage="nextPage"
        :onPreviousPage="previousPage"
        :numberOfPages="numberOfPages"
        :currentPage="search.from"></pagination>
      </div>
</template>

<script>
import { mapActions } from 'vuex'
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
    },
    numberOfPages () {
      const result = this.$store.state.search.results
      return result && result.hits ? result.hits.total : 0
    }
  },
  components: {
    Field,
    ResultStats,
    Highlight,
    Pagination,
    Spinner
  },
  methods: mapActions(['nextPage', 'previousPage'])
}
</script>

<style>
.search-container {
  margin: -1em 1em 0.5em 1em;
}
</style>
