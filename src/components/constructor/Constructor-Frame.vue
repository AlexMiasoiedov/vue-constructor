<template>
  <div id="constructor-frame">
    <h3>Constructor</h3>
    <div id="frame-body" v-for="txtField in txtFields">
      <component is="txtField" v-on:remove-txt-block="removeTxtChild" v-bind:message="txtField.message"></component>
    </div>
    <button v-on:click="addTxtBlock">Add TextField</button>
  </div>
</template>

<script>
  import txtField from './txt-field'

  export default {
    name: 'constructor-frame',

    components: {
      txtField
    },

    methods: {
      addTxtBlock: function (e) {
        e.preventDefault()
        this.txtFields.push({ message: '' })
      },
      removeTxtChild: function (elem) {
        console.log(elem)
      }
    },

    data: function () {
      return {
        txtFields: [
          { message: 'text message 1' },
          { message: 'text message 2' }
        ]
      }
    }
  }
</script>

<style scoped>
  #constructor-frame {
    width: 600px;
    height: 600px;
    border: solid 1px;
    border-radius: 2px;
  }
</style>