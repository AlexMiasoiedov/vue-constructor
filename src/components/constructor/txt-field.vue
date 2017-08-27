<template>
  <div id='txt-field'>
    <p>Text Field</p>
    <button v-on:click="removeTxtBlock">remove block</button>
    <input v-model="message"></input>
    <p>{{message}}</p>
  </div>
</template>

<!--<script src="./txt-field.js"></script> -->
<script>
  export default {
    name: 'txt-field',

    methods: {
      removeTxtBlock: function (e) {
        e.preventDefault()
        this.$emit('remove-txt-block', this)
      }
    },

    props: ['message']
  }
</script>

<!--<style src="./txt-field.css"></style> -->
<style>
  #txt-field {
    border: solid 1px;
    border-radius: 2px;
    width: 96%;
    margin: auto;
    margin-top: 5px;
    display: block;
  }
</style>