<template>
  <div class="search-container">
    <field></field>
    <result-stats></result-stats>
    <highlight></highlight>
</template>

<script>
import Field from '../components/Field'
import ResultStats from '../components/ResultStats'
import Highlight from '../components/Highlight'
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
    Highlight
  }
}
</script>

<style>
.search-container {
  margin: -1em 1em 0.5em 1em;
}
</style>
