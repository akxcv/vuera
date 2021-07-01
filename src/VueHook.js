import Vue from 'vue'

export default function (useHook) {
  return new Vue({
    render (h) {
      return h('WrapComponent')
    },
    components: {
      WrapComponent: () => {
        useHook()
        return null
      },
    },
  }).$mount(null)
}
