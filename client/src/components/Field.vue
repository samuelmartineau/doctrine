<template>
<form class="field">
  <input aria-label="query" class="field__input" v-model="query" placeholder="Type your field here">
</form>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  name: 'field',
  data: () => ({
    query: '',
    results: 0,
    took: 0
  }),
  computed: {
    throttleUpdates () {
      return debounce(this.updateFilters, 500)
    }
  },
  methods: {
    updateFilters (value) {
      console.log(value)
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
  }
  .field__input {
    width: 100%;
    padding: 1em;
    max-width: 500px;
  }
</style>
