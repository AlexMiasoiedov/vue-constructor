<template>
  <div id="app">
    <img src="./assets/logo.png">
    <constructor></constructor>
  </div>
</template>

<script>
import Constructor from './components/constructor'

export default {
  name: 'app',
  components: {
    Constructor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
