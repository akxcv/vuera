import { wrapReactElement, Vue } from '../src'
import React from 'react'
import ReactComponent from './fixtures/ReactComponent'
import ReactPureFunctionalComponent from './fixtures/ReactPureFunctionalComponent'
import VueComponent from './fixtures/VueComponent'
import VueSingleFileComponent from './fixtures/VueSingleFileComponent.vue'

describe('wrapReactElement', () => {
  it('behaves like React.createElement when a string is given', () => {
    expect(wrapReactElement('div', { id: 'hi' })).toEqual(React.createElement('div', { id: 'hi' }))
  })

  it('behaves like React.createElement when a React component is given', () => {
    expect(wrapReactElement(ReactComponent, { message: 'hi' })).toEqual(
      React.createElement(ReactComponent, { message: 'hi' })
    )
  })

  it('behaves like React.createElement when a React functional component is given', () => {
    expect(wrapReactElement(ReactPureFunctionalComponent, { message: 'hi' })).toEqual(
      React.createElement(ReactPureFunctionalComponent, { message: 'hi' })
    )
  })

  it('wraps Vue component', () => {
    expect(wrapReactElement(VueComponent, { message: 'hi' })).toEqual(
      React.createElement(Vue, { component: VueComponent, message: 'hi' })
    )
  })

  it('wraps Vue single file component', () => {
    expect(wrapReactElement(VueSingleFileComponent, { message: 'hi' })).toEqual(
      React.createElement(Vue, { component: VueSingleFileComponent, message: 'hi' })
    )
  })
})
