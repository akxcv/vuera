import React from 'react'
import ReactDOM from 'react-dom'
import VueWrapper from './Vue'

const makeReactContainer = Component => {
  return class ReactInVue extends React.Component {
    static displayName = `ReactInVue${Component.displayName || Component.name || 'Component'}`

    constructor (props) {
      super(props)

      /**
       * We previously created a stateful component in order to attach a ref on it. We have used that ref to
       * update component's state, which seemed better than re-rendering the whole thing with
       * ReactDOM.
       * Since React 16.5.0 the above would have logged errors, so we continue to shallow copy props. See
       * https://github.com/facebook/react/pull/11658
       */
      this.state = { ...props }
    }

    wrapVueChildren (children) {
      return {
        render: createElement => createElement('div', children),
      }
    }

    render () {
      const {
        children,
        // Vue attaches an event handler, but it is missing an event name, so
        // it ends up using an empty string. Prevent passing an empty string
        // named prop to React.
        '': _invoker,
        ...rest
      } = this.state
      const wrappedChildren = this.wrapVueChildren(children)

      return (
        <Component {...rest}>
          {children && <VueWrapper component={wrappedChildren} />}
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
      const children = this.$slots.default !== undefined ? { children: this.$slots.default } : {}
      ReactDOM.render(
        <Component
          {...this.$props.passedProps}
          {...this.$attrs}
          {...this.$listeners}
          {...children}
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
    if (this.$slots.default !== undefined) {
      this.reactComponentRef.setState({ children: this.$slots.default })
    } else {
      this.reactComponentRef.setState({ children: null })
    }
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
