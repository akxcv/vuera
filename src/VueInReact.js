import React from 'react'
import Vue from 'vue'

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

    const { component } = reactThisBinding.props
    // `this` refers to Vue instance in the constructor
    reactThisBinding.vueInstance = new Vue({
      el: targetElement,
      data: { ...reactThisBinding.props },
      render (createElement) {
        return createElement(component.name, {
          props: this.$data,
        })
      },
      components: {
        [component.name]: component,
      },
    })
  }

  render () {
    return <div ref={this.createVueInstance} />
  }
}
