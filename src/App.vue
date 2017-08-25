<template>
  <div id="app">
    <img src="./assets/logo.png">
    <constructor-frame></constructor-frame>
  </div>
</template>

<script>
import constructorFrame from './components/constructor/Constructor-Frame'

export default {
  name: 'app',
  components: {
    constructorFrame
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
