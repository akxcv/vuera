import React from 'react'
import Vue from 'vue'
import ReactWrapper from './React'

const wrapReactChildren = (createElement, children) =>
  createElement('vuera-internal-react-wrapper', {
    props: {
      component: () => <div>{children}</div>,
    },
  })

export default class VueContainer extends React.Component {
  constructor (props) {
    super(props)

    /**
     * Modify createVueInstance function to pass this binding correctly. Doing this in the
     * constructor to avoid instantiating functions in render.
     */
    const createVueInstance = this.createVueInstance
    const self = this
    this.createVueInstance = function (element) {
      createVueInstance(element, self)
    }
  }

  componentWillReceiveProps (nextProps) {
    /**
     * NOTE: we're not comparing this.props and nextProps here, because I didn't want to write a
     * function for deep object comparison. I don't know if this hurts performance a lot, maybe
     * we do need to compare those objects.
     */
    Object.assign(this.vueInstance.$data, nextProps)
  }

  componentWillUnmount () {
    this.vueInstance.$destroy()
  }

  /**
   * Creates and mounts the Vue instance.
   * NOTE: since we need to access the current instance of VueContainer, as well as the Vue instance
   * inside of the Vue constructor, we cannot bind this function to VueContainer, and we need to
   * pass VueContainer's binding explicitly.
   * @param {HTMLElement} targetElement - element to attact the Vue instance to
   * @param {ReactInstance} reactThisBinding - current instance of VueContainer
   */
  createVueInstance (targetElement, reactThisBinding) {
    // If the Vue instance has already been initialized, do nothing
    if (reactThisBinding.vue) return

    const { component, children, ...props } = reactThisBinding.props
    // If component has a name, use it; otherwise assign an arbitrary name
    const componentName = component.name || 'vue-component'
    // `this` refers to Vue instance in the constructor
    reactThisBinding.vueInstance = new Vue({
      el: targetElement,
      data: { ...props },
      render (createElement) {
        return createElement(
          componentName,
          {
            props: this.$data,
          },
          [wrapReactChildren(createElement, children)]
        )
      },
      components: {
        [componentName]: component,
        'vuera-internal-react-wrapper': ReactWrapper,
      },
    })
  }

  render () {
    return <div ref={this.createVueInstance} />
  }
}
