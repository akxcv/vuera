import React from 'react'
import ReactDOM from 'react-dom'
import VueWrapper from './Vue'

const makeReactContainer = Component => {
  return class ReactInVue extends React.Component {
    static displayName = `ReactInVue${Component.displayName || Component.name || 'Component'}`

    constructor (props) {
      super(props)

      /**
       * We create a stateful component in order to attach a ref on it. We will use that ref to
       * update component's state, which seems better than re-rendering the whole thing with
       * ReactDOM.
       */
      this.state = props
    }

    wrapVueChildren (children) {
      return {
        render: createElement => createElement('div', children),
      }
    }

    render () {
      const { children, ...rest } = this.state
      const wrappedChildren = this.wrapVueChildren(children)

      return (
        <Component {...rest}>
          <VueWrapper component={wrappedChildren} />
        </Component>
      )
    }
  }
}

export default {
  props: ['component', 'passedProps'],
  render (createElement) {
    return createElement('div', { ref: 'react' })
  },
  methods: {
    mountReactComponent (component) {
      const Component = makeReactContainer(component)
      ReactDOM.render(
        <Component
          {...this.$props.passedProps}
          {...this.$attrs}
          {...this.$listeners}
          children={this.$slots.default}
          ref={ref => (this.reactComponentRef = ref)}
        />,
        this.$refs.react
      )
    },
  },
  mounted () {
    this.mountReactComponent(this.$props.component)
  },
  beforeDestroy () {
    ReactDOM.unmountComponentAtNode(this.$refs.react)
  },
  updated () {
    /**
     * AFAIK, this is the only way to update children. It doesn't seem to be possible to watch
     * `$slots` or `$children`.
     */
    this.reactComponentRef.setState({ children: this.$slots.default })
  },
  inheritAttrs: false,
  watch: {
    $attrs: {
      handler () {
        this.reactComponentRef.setState({ ...this.$attrs })
      },
      deep: true,
    },
    '$props.component': {
      handler (newValue) {
        this.mountReactComponent(newValue)
      },
    },
    $listeners: {
      handler () {
        this.reactComponentRef.setState({ ...this.$listeners })
      },
      deep: true,
    },
    '$props.passedProps': {
      handler () {
        this.reactComponentRef.setState({ ...this.$props.passedProps })
      },
      deep: true,
    },
  },
}
