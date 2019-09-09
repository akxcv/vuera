export const Plugin = {}
Plugin.install = function (Vue) {
  Vue.mixin({
    beforeCreate () {
      const options = this.$options
      if (options.foo) {
        this.$foo = options.foo
      } else if (options.parent && options.parent.$foo) {
        this.$foo = options.parent.$foo
      }
    },
  })
}

export default {
  props: [],
  render (createElement) {
    return createElement('div', [
      createElement('span', this.$options.parent.$options.bar),
      createElement('span', this.$foo),
    ])
  },
}
