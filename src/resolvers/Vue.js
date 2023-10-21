import { ReactWrapper } from '../'
import { camelCaseKeys } from '../utils/camelCase'

export default function VueResolver (component) {
  return {
    components: { ReactWrapper },
    props: ['passedProps'],
    inheritAttrs: false,
    render (createElement) {
      return createElement(
        'react-wrapper',
        {
          props: {
            component,
            passedProps: this.$props.passedProps,
          },
          attrs: camelCaseKeys(this.$attrs),
          on: this.$listeners,
        },
        this.$slots.default
      )
    },
  }
}
