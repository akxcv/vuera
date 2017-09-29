import { ReactWrapper } from '../'

export default function VueResolver (component) {
  return {
    components: { ReactWrapper },
    props: ['passedProps'],
    render (createElement) {
      return createElement('react-wrapper', {
        props: {
          component,
          passedProps: this.$props.passedProps,
        },
      })
    },
  }
}
