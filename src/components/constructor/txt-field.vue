<template>
  <div id='txt-field' v-bind:style="styleObjectOut()">
    <p>Text Field</p>
    <button v-on:click="removeTxtBlock">remove block</button>
    <input v-model="mutableMessage" v-on:keyup="updateTxtField"></input>
    <p>{{mutableMessage}}</p>

    Width:
    <button v-on:click="incrementWidth()">+</button>
    {{styleObject.width}}%
    <button v-on:click="decrementWidth()">-</button>
    <br/>
    Height:
    <button v-on:click="incrementHeight()">+</button>
    {{styleObject.height}}px
    <button v-on:click="decrementHeight()">-</button>
  </div>
</template>

<!--<script src="./txt-field.js"></script> -->
<script src="./txt-field.js"></script>

<!--<style src="./txt-field.css"></style> -->
<style>
  #txt-field {
/*    border: dashed 1px;
    border-radius: 2px;
    width: 96%;
    margin: auto;
    margin-top: 5px;
    display: block;*/
  }
</style>
