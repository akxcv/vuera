import Vue from 'vue'

export default Vue.component('vue-component', {
  props: ['message', 'reset'],
  render (createElement) {
    return createElement('div', [
      createElement('span', this.message),
      createElement('button', {
        on: {
          click: this.reset,
        },
      }),
    ])
  },
})
