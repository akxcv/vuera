import Vue from 'vue'

export default Vue.component('vue-registered-component', {
  props: ['message', 'reset'],
  render (createElement) {
    return createElement('div', [
      createElement('span', this.message),
      createElement('button', {
        on: {
          click: this.reset,
        },
      }),
      [this.$scopedSlots.testSlot && this.$scopedSlots.testSlot()],
    ])
  },
})
