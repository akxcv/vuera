import Vue from 'vue'
import React from 'react'
import ReactDOM from 'react-dom'

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

    render () {
      return <Component {...this.state} />
    }
  }
}

export default Vue.component('react', {
  /**
   * Since we have to specify all props in Vue, we use `passedProps` as an object of props to pass
   * to React.
   */
  props: ['component', 'passedProps'],
  template: '<div ref="react"></div>',
  methods: {
    mountReactComponent () {
      const Component = makeReactContainer(this.$props.component)
      ReactDOM.render(
        <Component {...this.$props.passedProps} ref={ref => (this.reactComponentRef = ref)} />,
        this.$refs.react
      )
    },
  },
  mounted () {
    this.mountReactComponent()
  },
  /**
   * We need to update React component's state every time passedProps change, so we implement a
   * custom deep watcher for that.
   */
  watch: {
    '$props.passedProps': {
      handler () {
        this.reactComponentRef.setState(this.$props.passedProps)
      },
      deep: true,
    },
  },
})
