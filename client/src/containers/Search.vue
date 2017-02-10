<template>
  <div id="search">
    <h1>Sam</h1>
    <Search></Search>
  </div>
</template>

<script>
import Search from '../components/Search'
export default {
  name: 'search',
  components: {
    Search
  }
}
</script>

<style>
#legal-case {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
