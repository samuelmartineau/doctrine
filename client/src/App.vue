<template>
<div id="app" class="app">
  <header class="header">
    <div class="header__logo">Doctrine</div>
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
  background: radial-gradient(circle at 0% 50%, $primary_color 9px, $white_color 10px, rgba($white_color, 0) 11px) 0px 10px, radial-gradient(at 100% 100%, $primary_color 9px, $white_color 10px, rgba($white_color, 0) 11px), $primary_color;
  background-size: 20px 20px;
  color: $secondary_color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header__logo {
  font-size: 2rem;
  padding: 0.5em 0;
  text-shadow: 1px 1px $primary_color;
  font-weight: bold;
}

.header__baseline {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1em;
  text-shadow: 1px 1px $primary_color;
}
</style>
