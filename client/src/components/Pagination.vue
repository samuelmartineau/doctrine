<template>
  <div class="pagination" v-if="search.results && search.results.hits">
    <button v-on:click="nextPage" class="mdl-button mdl-js-button mdl-button--raised" :disabled="search.from === 0">previous page</button>
    <span>{{ search.from }}</span>
    <button v-on:click="nextPage" class="mdl-button mdl-js-button mdl-button--raised">next page</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'pagination',
  computed: {
    search () {
      return this.$store.state.search
    }
  },
  methods: mapActions(['nextPage'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'material-design-lite/src/button/button';
  .pagination {
    margin: 1em;
    text-align: center;
  }
</style>
