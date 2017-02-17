<template>
  <div class="mdl-card mdl-shadow--2dp legal-case-details">
    <h1>{{ legalCase.texteJuriJudi.meta.metaSpec.metaJuri.titre }}</h1>
    <div>ID: {{ legalCase.texteJuriJudi.meta.metaCommun.id }}</div>
    <div>NATURE: {{ legalCase.texteJuriJudi.meta.metaCommun.nature }}</div>

    <p v-for="sentence in legalCase.texteJuriJudi.texte.blocTextuel.contenu" v-html="sentence">{{ sentence }}</p>
  </div>
</template>

<script>
export default {
  name: 'legal-case-details',
  props: ['legalCase']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/variables';
@import 'material-design-lite/src/shadow/shadow';
@import 'material-design-lite/src/card/card';

.legal-case-details {
  margin: -1em auto 0.5em auto;
  max-width: 900px;
  width: inherit;
  padding: 1em;
}
</style>
