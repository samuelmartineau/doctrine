<template>
  <div class="legal-case">
     <spinner v-if="legalCase.loading"></spinner>
     <legal-case-details v-if="!legalCase.loading" :legal-case="legalCase.legalCase._source"></legal-case-details>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import LegalCaseDetails from '../components/LegalCaseDetails'
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
    Spinner,
    LegalCaseDetails
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
}
</style>
