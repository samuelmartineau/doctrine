<template>
  <div class="pagination" v-if="numberOfPages > 0">
    <button v-on:click="onPreviousPage" class="mdl-button mdl-js-button mdl-button--raised" :disabled="currentPage === 0">previous page</button>
    <span>{{ currentPage }}</span>
    <button v-on:click="onNextPage" class="mdl-button mdl-js-button mdl-button--raised">next page</button>
  </div>
</template>

<script>

export default {
  name: 'pagination',
  props: ['onPreviousPage', 'onNextPage', 'currentPage', 'numberOfPages']
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
