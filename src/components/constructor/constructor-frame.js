import txtField from './txt-field.vue'

export default {
  name: 'constructor-frame',

  components: {
    txtField
  },

  methods: {
    addTxtBlock: function (e) {
      e.preventDefault()
      this.txtFields.push({ id: this.txtFields[this.txtFields.length - 1]['id'] + 1, message: '' })
    },
    removeTxtChild: function (index) {
      this.txtFields.splice(index, 1)
    },
    updateTxtField: function (index, data) {
      this.txtFields[index]['message'] = data
    }
  },

  data: function () {
    return {
      txtFields: [
        {
          id: 1,
          message: 'text message 1'
        },
        {
          id: 2,
          message: 'text message 2'
        }
      ]
    }
  }
}
