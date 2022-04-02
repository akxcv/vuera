import Vue from '@vue/compat'

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
    ])
  },
})
