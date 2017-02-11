<template>
  <div class="highlight" v-if="search.results && search.results.hits">
  <ul>
    <li v-for="hit in search.results.hits.hits">
      <div v-for="keys in Object.keys(hit.highlight)">
        <h1>Donnée: {{ keys.split('.')[0] }} </h1>
        <p v-for="sentence in hit.highlight[keys]" v-html="sentence"></p>
      </div>
      <div>{{ hit._source.texteJuriJudi.meta.metaSpec.metaJuri.titre }}</div>
    </li>
  </ul>
</div>
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
  .highlight {
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
