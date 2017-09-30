import React from 'react'
import ReactDOM from 'react-dom'
import { VueWrapper } from '../../src'
import VueComponent from '../fixtures/VueComponent'
import VueRegisteredComponent from '../fixtures/VueRegisteredComponent'
import VueSingleFileComponent from '../fixtures/VueSingleFileComponent.vue'

const mockReset = jest.fn()
const makeReactInstanceWithVueComponent = passedComponent => {
  class ReactApp extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        message: props.message,
      }
    }

    onChange = e => {
      this.setState({ message: e.currentTarget.value })
    }

    render () {
      return (
        <div>
          <input
            type='text'
            value={this.state.message}
            onChange={this.onChange}
          />
          <VueWrapper
            ref={ref => (this.vueWrapperRef = ref)}
            component={passedComponent}
            message={this.state.message}
            reset={mockReset}
          />
        </div>
      )
    }
  }
  const instance = ReactDOM.render(
    <ReactApp message='Message for Vue' />,
    document.getElementById('root')
  )
  // React 15 compat
  document.querySelectorAll('[data-reactroot]').forEach(el => {
    el.removeAttribute('data-reactroot')
  })
  // React 15.2.0 compat
  document.querySelectorAll('input[name=""]').forEach(el => {
    el.removeAttribute('name')
  })
  return instance
}

describe('VueInReact', () => {
  beforeEach(() => {
    const reactRoot = document.getElementById('root')
    if (reactRoot) ReactDOM.unmountComponentAtNode(reactRoot)
    document.body.innerHTML = '<div id="root"></div>'
  })

  it('mounts the Vue component correctly', () => {
    makeReactInstanceWithVueComponent(VueComponent)
    expect(document.body.innerHTML).toBe(
      normalizeHTMLString(
        `<div id="root">
          <div>
            <input type="text" value="Message for Vue">
            <div>
              <span>Message for Vue</span>
              <button></button>
            </div>
          </div>
        </div>`
      )
    )
  })

  it('mounts the Vue registered component correctly', () => {
    makeReactInstanceWithVueComponent(VueRegisteredComponent)
    expect(document.body.innerHTML).toBe(
      normalizeHTMLString(
        `<div id="root">
          <div>
            <input type="text" value="Message for Vue">
            <div>
              <span>Message for Vue</span>
              <button></button>
            </div>
          </div>
        </div>`
      )
    )
  })

  it('mounts the Vue single file component correctly', () => {
    makeReactInstanceWithVueComponent(VueSingleFileComponent)
    expect(document.body.innerHTML).toBe(
      normalizeHTMLString(
        `<div id="root">
          <div>
            <input type="text" value="Message for Vue">
            <div>
              <span>Message for Vue</span> <button></button>
            </div>
          </div>
        </div>`
      )
    )
  })

  it('synchronises props', () => {
    const reactAppInstance = makeReactInstanceWithVueComponent(VueComponent)
    reactAppInstance.setState({ message: 'New message!' })
    expect(document.body.innerHTML).toContain('New message!')
  })

  test('functions work', () => {
    makeReactInstanceWithVueComponent(VueComponent)
    expect(mockReset.mock.calls.length).toBe(0)
    document.querySelector('button').click()
    expect(mockReset.mock.calls.length).toBe(1)
  })

  test('when React component is unmounted, Vue instance gets destroyed', () => {
    const reactAppInstance = makeReactInstanceWithVueComponent(VueComponent)
    const vm = reactAppInstance.vueWrapperRef.vueInstance

    expect(vm._isDestroyed).toBe(false)
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    expect(vm._isDestroyed).toBe(true)
  })
})
