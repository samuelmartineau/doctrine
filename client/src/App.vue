<template>
<div id="app" class="app">
  <header class="header">
    <router-link :to="{ name: 'search' }" class="header__logo" >Doctrine</router-link>
    <div class="header__baseline">Find your legal case</div>
  </header>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import 'styles/variables.scss';

html {
  height: 100%;
}
body {
  min-height: 100%;
    background-color: #e7e7e7;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin: 0;
}

* {
  box-sizing: border-box;
}

.header {
  height: 200px;
  background:
  linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
  linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
  linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
  linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
  linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
  linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
  background-color: #131313;
  background-size: 20px 20px;
  color: $primary_color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header__logo {
  font-size: 2rem;
  padding: 0.5em 0;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}

.header__baseline {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1em;
}
</style>
