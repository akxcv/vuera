/* global document */

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
    /**
     * We have to "mark" the component so that we can detect if the prop has
     * been updated later. This mutates the actual component.
     */
    props.component.__vueraMark = true
    super(props)

    /**
     * Modify createVueInstance function to pass this binding correctly. Doing this in the
     * constructor to avoid instantiating functions in render.
     */
    const createVueInstance = this.createVueInstance
    const self = this
    this.createVueInstance = function (element, component, prevComponent) {
      createVueInstance(element, self, component, prevComponent)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.component.__vueraMark) {
      /**
       * If the `component` prop has changed, we have to clear the innerHTML
       * of the vue ref before creating a new Vue instance.
       */
      this.vueRef.innerHTML = ''
      const prevComponent = this.props.component
      Vue.nextTick(() => {
        this.createVueInstance(this.vueRef, nextProps.component, prevComponent)
      })
    }
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
   * @param {VueComponent} explicitlyPassedComponent (optional)
   * @param {VueComponent} prevComponent (only used if explicitlyPassedComponent is provided)
   */
  createVueInstance (parentElement, reactThisBinding, explicitlyPassedComponent, prevComponent) {
    reactThisBinding.vueRef = parentElement

    if (explicitlyPassedComponent) {
      /**
       * Component is explicitly passed, which means we actually mean to update
       * the previous Vue instance. Here, we update the mark so that we can
       * detect `component` prop update later.
       */
      delete prevComponent.__vueraMark
      explicitlyPassedComponent.__vueraMark = true
    }

    const component = explicitlyPassedComponent || reactThisBinding.props.component
    const { children, ...props } = reactThisBinding.props
    // If component has a name, use it; otherwise assign an arbitrary name
    const componentName = component.name || 'vue-component'

    /**
     * Vue replaces the element it mounts into, so we have to create a child
     * element so that we don't override the ref.
     */
    const targetElement = document.createElement('div')
    parentElement.appendChild(targetElement)
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
