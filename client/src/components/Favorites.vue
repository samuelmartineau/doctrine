<template>
  <div class="favorites">
    <h2>Offline:</h2>
    <router-link class="mdl-card mdl-shadow--2dp card" :to="{ name: 'legal-case', params: { id: favorite.id }}" v-for="favorite in favorites">
      {{ favorite.title }}
    </router-link>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
export default {
  name: 'favorites',
  computed: {
    favorites () {
      return this.$store.state.favorites
    }
  },
  components: {
    Spinner
  },
  mounted: function () {
    this.$store.dispatch('loadFavorites')
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import 'material-design-lite/src/shadow/shadow';
@import 'material-design-lite/src/card/card';
.favorites {
  margin: 1em;
}

.card {
  min-height: inherit;
  width: 100%;
  padding: 1em;

  & + & {
    margin-top: 1em;
  }
}
</style>
