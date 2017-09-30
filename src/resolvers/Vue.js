import { ReactWrapper } from '../'

export default function VueResolver (component) {
  return {
    components: { ReactWrapper },
    inheritAttrs: false,
    render (createElement) {
      return createElement('react-wrapper', {
        props: {
          component,
        },
        attrs: this.$attrs,
        on: this.$listeners,
      })
    },
  }
}
