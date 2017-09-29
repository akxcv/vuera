import { __vueraReactResolver, VueWrapper } from '../../src'
import React from 'react'
import ReactComponent from '../fixtures/ReactComponent'
import ReactPureFunctionalComponent from '../fixtures/ReactPureFunctionalComponent'
import VueComponent from '../fixtures/VueComponent'
import VueRegisteredComponent from '../fixtures/VueRegisteredComponent'
import VueSingleFileComponent from '../fixtures/VueSingleFileComponent.vue'

describe('__vueraReactResolver', () => {
  it('behaves like React.createElement when a string is given', () => {
    expect(__vueraReactResolver('div', { id: 'hi' })).toEqual(
      React.createElement('div', { id: 'hi' })
    )
  })

  it('behaves like React.createElement when a React component is given', () => {
    expect(__vueraReactResolver(ReactComponent, { message: 'hi' })).toEqual(
      React.createElement(ReactComponent, { message: 'hi' })
    )
  })

  it('behaves like React.createElement when a React functional component is given', () => {
    expect(__vueraReactResolver(ReactPureFunctionalComponent, { message: 'hi' })).toEqual(
      React.createElement(ReactPureFunctionalComponent, { message: 'hi' })
    )
  })

  it('wraps Vue component', () => {
    expect(__vueraReactResolver(VueComponent, { message: 'hi' })).toEqual(
      React.createElement(VueWrapper, { component: VueComponent, message: 'hi' })
    )
  })

  it('wraps Vue registered component', () => {
    expect(__vueraReactResolver(VueRegisteredComponent, { message: 'hi' })).toEqual(
      React.createElement(VueWrapper, { component: VueRegisteredComponent, message: 'hi' })
    )
  })

  it('wraps Vue single file component', () => {
    expect(__vueraReactResolver(VueSingleFileComponent, { message: 'hi' })).toEqual(
      React.createElement(VueWrapper, { component: VueSingleFileComponent, message: 'hi' })
    )
  })
})
