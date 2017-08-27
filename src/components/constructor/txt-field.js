export default {
  name: 'txt-field',

  methods: {
    removeTxtBlock: function (e) {
      e.preventDefault()
      this.$emit('remove-txt-block', this.id - 1)
    },

    updateTxtField: function (e) {
      e.preventDefault()
      this.$emit('updateTxtField', this.id - 1, this.mutableMessage)
    }
  },

  props: ['id', 'message'],

  data: function () {
    return {
      mutableMessage: this.message
    }
  }
}
