import React from 'react'
import ReactDOM from 'react-dom'

const makeReactContainer = Component => {
  return class ReactInVue extends React.Component {
    static displayName = `ReactInVue${Component.displayName ||
      Component.name ||
      'Component'}`;

    constructor (props) {
      super(props)

      /**
       * We create a stateful component in order to attach a ref on it. We will use that ref to
       * update component's state, which seems better than re-rendering the whole thing with
       * ReactDOM.
       */
      this.state = props
    }

    render () {
      return <Component {...this.state} />
    }
  }
}

export default {
  props: ['component', 'passedProps'],
  render (createElement) {
    return createElement('div', { ref: 'react' })
  },
  methods: {
    mountReactComponent () {
      const Component = makeReactContainer(this.$props.component)
      ReactDOM.render(
        <Component
          {...this.$props.passedProps}
          {...this.$attrs}
          {...this.$listeners}
          ref={ref => (this.reactComponentRef = ref)}
        />,
        this.$refs.react
      )
    },
  },
  mounted () {
    this.mountReactComponent()
  },
  beforeDestroy () {
    ReactDOM.unmountComponentAtNode(this.$refs.react)
  },
  inheritAttrs: false,
  /**
   * We need to update React component's state every time passedProps change, so we implement a
   * custom deep watcher for that.
   */
  watch: {
    $attrs: {
      handler () {
        this.reactComponentRef.setState({ ...this.$attrs })
      },
      deep: true,
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
