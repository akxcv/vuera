import { VueInReact } from '../../src'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactComponent from '../fixtures/ReactComponent'
import ReactPureFunctionalComponent from '../fixtures/ReactPureFunctionalComponent'
import VueComponent from '../fixtures/VueComponent'
import VueRegisteredComponent from '../fixtures/VueRegisteredComponent'
import VueSingleFileComponent from '../fixtures/VueSingleFileComponent.vue'

describe('VueInReact', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>'
  })

  it('returns given component when a string is given', () => {
    expect(VueInReact('div')).toBe('div')
  })

  it('returns given component when a React component is given', () => {
    expect(VueInReact(ReactComponent)).toBe(ReactComponent)
  })

  it('returns given component when a React functional component is given', () => {
    expect(VueInReact(ReactPureFunctionalComponent)).toBe(ReactPureFunctionalComponent)
  })

  it('wraps Vue component', () => {
    const Component = VueInReact(VueComponent)
    ReactDOM.render(<Component message='hi' reset={jest.fn()} />, document.getElementById('root'))
    expect(document.getElementById('root').innerHTML).toBe(
      '<div><span>hi</span><button></button></div>'
    )
  })

  it('wraps Vue registered component', () => {
    const Component = VueInReact(VueRegisteredComponent)
    ReactDOM.render(<Component message='hi' reset={jest.fn()} />, document.getElementById('root'))
    expect(document.getElementById('root').innerHTML).toBe(
      '<div><span>hi</span><button></button></div>'
    )
  })

  it('wraps Vue single file component', () => {
    const Component = VueInReact(VueSingleFileComponent)
    ReactDOM.render(<Component message='hi' reset={jest.fn()} />, document.getElementById('root'))
    expect(document.getElementById('root').innerHTML).toBe(
      '<div><span>hi</span> <button></button></div>'
    )
  })
})
