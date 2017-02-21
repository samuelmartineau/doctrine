<template>
  <div class="legal-case">
     <spinner v-if="legalCase.loading"></spinner>
     <legal-case-details v-if="!legalCase.loading" :legal-case="legalCase.legalCase._source"></legal-case-details>
     <button v-on:click="toggleFavorite()" v-bind:class="{ 'favorite--saved': isFavoriteSelected(id) }" class="favorite mdl-button mdl-js-button mdl-button--fab" >
       <i class="material-icons">
         <svg class="heart" viewBox="0 0 32 29.6">
           <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
           c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
         </svg>
       </i>
     </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Spinner from '../components/Spinner'
import LegalCaseDetails from '../components/LegalCaseDetails'
export default {
  name: 'legal-case',
  computed: {
    ...mapGetters([
      'isFavoriteSelected'
    ]),
    legalCase () {
      return this.$store.state.legalCase
    },
    id () {
      return this.$route.params.id
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
    toggleFavorite () {
      this.$store.dispatch('toggleFavorite', {id: this.id, title: this.legalCase.legalCase._source.texteJuriJudi.meta.metaSpec.metaJuri.titre})
    },
    fetchData () {
      this.$store.dispatch('fetchLegalCase', this.id)
    }
  }
}
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import 'material-design-lite/src/button/button';

.legal-case {
}

.favorite {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background: grey;

  .heart {
    fill: white;
  }

  &.favorite--saved {
    background: $primary_color;
  }

  &:hover, &:active {
    background: white;

    .heart {
      fill: $primary_color;
    }
  }
}
</style>
