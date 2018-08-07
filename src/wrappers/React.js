import React from 'react'
import ReactDOM from 'react-dom'
import Vue from 'vue'
import VueWrapper from './Vue'

const makeVueContainer = () => {
  return class ReactInReact extends VueWrapper {};
}

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

    wrapReactChildren(children, reactChildren) {
      return children.map((child, index) => {
        const wrappedChildren = this.wrapVueChildren(child.componentOptions.children)
        const childrenComponent = child.componentOptions.children
          ? React.createElement(makeVueContainer(), { component: wrappedChildren })
          : null
        return React.createElement(
          reactChildren[index],
          {
            key: `${this.constructor.displayName}Child${index}`,
            ...child.componentOptions.propsData
          },
          childrenComponent
        )
      })
    }

    render() {
      const {
        children,
        // Vue attaches an event handler, but it is missing an event name, so
        // it ends up using an empty string. Prevent passing an empty string
        // named prop to React.
        '': _invoker,
        __vueraReactChildren,
        ...rest
      } = this.state
      const wrappedChildren = this.wrapVueChildren(children)

      return (
        <Component {...rest}>
          {(children && __vueraReactChildren.length === children.length)
            ? this.wrapReactChildren(children, __vueraReactChildren)
            : (children && <VueWrapper component={wrappedChildren} />)}
        </Component>
      )
    }
  }
}

const camelizeRE = /-(\w)/g
const camelize = function(str) {
  return str.replace(camelizeRE, function(_, c) {
    return c ? c.toUpperCase() : ''
  })
}
const capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default {
  props: ['component', 'passedProps', 'reactRegistry'],
  render (createElement) {
    return createElement('div', { ref: 'react' })
  },
  methods: {
    computeReactChildren () {
      const reactChildren = []
      if (this.$slots.default && this.$slots.default.length) {
        this.$slots.default.forEach(child => {
          if (child.componentOptions && child.componentOptions.tag) {
            const id = child.componentOptions.tag
            const camelizedId = camelize(id)
            const pascalCaseId = capitalize(camelizedId)
            reactChildren.push(
              this.reactRegistry[id] ||
                this.reactRegistry[camelizedId] ||
                this.reactRegistry[pascalCaseId]
            )
          }
        })
      }
      return reactChildren
    },
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
          __vueraReactChildren={this.computeReactChildren()}
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
      this.reactComponentRef.setState({
        children: this.$slots.default,
        __vueraReactChildren: this.computeReactChildren()
      })
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
