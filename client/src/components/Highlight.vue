<template>
  <div class="highlight" v-if="search.results && search.results.hits">
    <router-link :to="{ name: 'legal-case', params: { id: hit._id }}" class="mdl-card mdl-shadow--2dp highlight__card" v-for="hit in search.results.hits.hits">
      <div v-for="keys in Object.keys(hit.highlight)">
        <h2 class="highlight__category"> {{ [...keys.split('.')].pop() }} </h2>
        <p v-for="sentence in hit.highlight[keys]" v-html="sentence"></p>
      </div>
      <div>{{ hit._source.texteJuriJudi.meta.metaSpec.metaJuri.titre }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'highlight',
  computed: {
    search () {
      return this.$store.state.search
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/variables';
@import 'material-design-lite/src/shadow/shadow';
@import 'material-design-lite/src/card/card';

.highlight {
  &__card {
    text-decoration: none;
    color: $secondary_color;
    max-width: $wrapper;
    margin: auto;
    width: inherit;
    padding: 1em;

    &:hover {
      @extend .mdl-shadow--4dp;
    }

    & + & {
      margin-top: 1em;
    }
  }

  &__category {
    color: $primary_color;
  }
}
</style>
<style lang="scss">
  .highlight {
    &__word {
      background-color: yellow;
      font-style: italic;
    }
  }
</style>
