import { ReactWrapper } from '../'
import {h} from "vue"

export default function VueResolver (component) {
  return {
    components: { ReactWrapper },
    props: ['passedProps'],
    inheritAttrs: false,
    render () {
      return h(
        'react-wrapper',
        {
          props: {
            component,
            passedProps: this.$props.passedProps,
          },
          attrs: this.$attrs,
          on: this.$listeners,
        },
        this.$slots.default
      )
    },
  }
}
