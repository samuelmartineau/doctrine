<template>
  <div class="legal-case">
     {{ $route.params.id }}
     <spinner v-if="legalCase.loading"></spinner>
     <div v-if="!legalCase.loading">
       {{ JSON.stringify(legalCase, null, 6) }}
     </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
export default {
  name: 'legal-case',
  computed: {
    legalCase () {
      return this.$store.state.legalCase
    }
  },
  created () {
    this.fetchData()
  },
  components: {
    Spinner
  },
  methods: {
    fetchData () {
      this.$store.dispatch('fetchLegalCase', this.$route.params.id)
    }
  }
}
</script>

<style>
.legal-case {
  background-color: red;
}
</style>
