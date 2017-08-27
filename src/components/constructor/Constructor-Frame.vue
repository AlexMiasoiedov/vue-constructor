<template>
  <div id="constructor-frame">
    <h3>Constructor</h3>
    <div id="frame-body" v-for="txtField in txtFields">
      <component
        is="txtField"
        v-on:remove-txt-block="removeTxtChild"
        v-on:updateTxtField="updateTxtField"
        v-bind:key="txtField.id"
        v-bind:id="txtField.id"
        v-bind:message="txtField.message"
      ></component>
    </div>
    <button v-on:click="addTxtBlock">Add TextField</button>
  </div>
</template>

<script src="./constructor-frame.js"></script>

<style scoped>
  #constructor-frame {
    width: 600px;
    height: 600px;
    border: solid 1px;
    border-radius: 2px;
  }
</style>