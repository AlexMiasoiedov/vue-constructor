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
    },

    styleObjectOut: function () {
      return {
        'border': this.styleObject.border + 'px',
        'border-radius': this.styleObject['border-radius'] + 'px',
        'width': this.styleObject.width + '%',
        'height': this.styleObject.height + 'px',
        'margin': this.styleObject.margin,
        'margin-top': this.styleObject['margin-top'] + 'px',
        'display': this.styleObject.display
      }
    },

    changeProportions: function(prop, typ) {
      const operations = {
        "inc": function(prop) { this.styleObject[prop] = parseInt(this.styleObject[prop]) + 1 },
        "dec": function(prop) { this.styleObject[prop] = parseInt(this.styleObject[prop]) - 1 }
      }

      operations[typ].bind(this)(prop);
    }
  },

  props: ['id', 'message'],

  data: function () {
    return {
      mutableMessage: this.message,
      styleObject: {
        'border': 'dashed 1',
        'border-radius': '2',
        'width': '96',
        'height': '200',
        'margin': 'auto',
        'margin-top': '5',
        'display': 'block'
      }
    }
  }
}
