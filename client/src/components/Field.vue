<template>
<form class="field">
  <input aria-label="query" class="field__input" v-model="query" placeholder="Type your field here">
  <button type="button" v-if="hits" v-on:click="resetResearch">x</button>
</form>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  name: 'field',
  data: () => ({
    query: ''
  }),
  computed: {
    throttleUpdates () {
      return debounce(this.updateFilters, 500)
    },
    hits () {
      return this.$store.state.search.results.hits
    }
  },
  methods: {
    resetResearch () {
      this.query = ''
      this.$store.dispatch('resetResearch')
    },
    updateFilters (value) {
      this.$store.dispatch('search', {
        value
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
<style scoped lang="scss">
  .field {
    text-align: center;
    display: flex;
  }
  .field__input {
    width: 100%;
    padding: 1em;
    max-width: 500px;
  }
</style>
