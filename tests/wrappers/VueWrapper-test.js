import React from 'react'
import ReactDOM from 'react-dom'
import Vue from 'vue'
import { VueWrapper, config } from '../../src'
import VueComponent from '../fixtures/VueComponent'
import VueInstanceOptionsComponent, { Plugin } from '../fixtures/VueInstanceOptionsComponent'
import VueRegisteredComponent from '../fixtures/VueRegisteredComponent'
import VueSingleFileComponent from '../fixtures/VueSingleFileComponent.vue'
import VueSingleFileComponentWithChildren from '../fixtures/VueSingleFileComponentWithChildren.vue'

const mockReset = () => {
  return jest.fn()
}
const makeReactInstanceWithVueComponent = (passedComponent, events) => {
  class ReactApp extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        message: props.message,
      }
      this.mockReset = mockReset()
    }

    onChange = e => {
      this.setState({ message: e.currentTarget.value })
    }

    render () {
      return (
        <div>
          <input type='text' value={this.state.message} onChange={this.onChange} />
          <VueWrapper
            ref={ref => (this.vueWrapperRef = ref)}
            component={passedComponent}
            on={events}
            message={this.state.message}
            reset={this.mockReset}
            testSlot={<p>testSlot</p>}
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
    document.body.innerHTML = '<div id="root"></div>'
  })

  it('mounts the Vue component correctly', () => {
    makeReactInstanceWithVueComponent(VueComponent)
    expect(document.body.innerHTML).toBe(
      html`<div id="root">
        <div>
          <input type="text" value="Message for Vue">
          <div>
            <span>Message for Vue</span>
            <button></button>
            <div><p>testSlot</p></div>
          </div>
        </div>
      </div>`
    )
  })

  it('mounts the Vue registered component correctly', () => {
    makeReactInstanceWithVueComponent(VueRegisteredComponent)
    expect(document.body.innerHTML).toBe(
      html`<div id="root">
        <div>
          <input type="text" value="Message for Vue">
          <div>
            <span>Message for Vue</span>
            <button></button>
            <div><p>testSlot</p></div>
          </div>
        </div>
      </div>`
    )
  })

  it('mounts the Vue single file component correctly', () => {
    makeReactInstanceWithVueComponent(VueSingleFileComponent)
    expect(document.body.innerHTML).toBe(
      html`<div id="root">
        <div>
          <input type="text" value="Message for Vue">
          <div>
            <span>Message for Vue</span> <button></button> 
            <div><p>testSlot</p></div>
          </div>
        </div>
      </div>`
    )
  })

  it('wires up events correctly', () => {
    let eventRaised = false
    const hndlr = () => (eventRaised = true)
    const events = { 'custom-event': hndlr }
    makeReactInstanceWithVueComponent(VueSingleFileComponent, events)
    expect(eventRaised).toBe(false)
    document.querySelector('button').click()
    expect(eventRaised).toBe(true)
  })

  it('synchronises props', () => {
    const reactAppInstance = makeReactInstanceWithVueComponent(VueComponent)
    reactAppInstance.setState({ message: 'New message!' })
    expect(document.body.innerHTML).toContain('New message!')
  })

  test('functions work', () => {
    const reactAppInstance = makeReactInstanceWithVueComponent(VueComponent)
    expect(reactAppInstance.mockReset.mock.calls.length).toBe(0)
    document.querySelector('button').click()
    expect(reactAppInstance.mockReset.mock.calls.length).toBe(1)
  })

  test('when React component is unmounted, Vue instance gets destroyed', () => {
    const reactAppInstance = makeReactInstanceWithVueComponent(VueComponent)
    const vm = reactAppInstance.vueWrapperRef.vueInstance

    expect(vm._isDestroyed).toBe(false)
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    expect(vm._isDestroyed).toBe(true)
  })

  describe('children', () => {
    const componentWithChildren = VueSingleFileComponentWithChildren

    const render = (...children) => {
      ReactDOM.render(
        <VueWrapper component={componentWithChildren}>{children}</VueWrapper>,
        document.getElementById('root')
      )
      // React 15 compat
      document.querySelectorAll('[data-reactroot]').forEach(el => {
        el.removeAttribute('data-reactroot')
      })
      document.body.innerHTML = document.body.innerHTML.replace(/<!--[\s\S]*?-->/g, '')
    }

    it('works with a string', () => {
      render('Hello')
      expect(document.querySelector('#root div div').innerHTML).toBe('Hello')
    })

    it('works with a React component', () => {
      render(<div>Hello</div>)
      expect(document.querySelector('#root div div').innerHTML).toBe('<div>Hello</div>')
    })

    it('works with a React component', () => {
      render(<VueWrapper component={componentWithChildren}>wow so nested</VueWrapper>)
      expect(document.querySelector('#root div div').innerHTML).toBe(
        '<div><div>wow so nested</div></div>'
      )
    })

    it('works with multiple children', () => {
      render(
        'Hi there',
        <div>Hello</div>,
        <VueWrapper component={componentWithChildren}>wow so nested</VueWrapper>
      )
      expect(document.querySelector('#root div div').innerHTML).toBe(
        normalizeHTMLString(
          `
          Hi there
          <div>
            Hello
          </div>
          <div>
            <div>wow so nested</div>
          </div>
          `
        )
      )
    })
  })

  describe('config', () => {
    afterEach(() => {
      config.vueInstanceOptions = {}
    })

    it('adds vue instance options', () => {
      Vue.use(Plugin)

      config.vueInstanceOptions = { foo: 'New message!', bar: 'Other message' }
      makeReactInstanceWithVueComponent(VueInstanceOptionsComponent)
      expect(document.body.innerHTML).toContain('New message!')
      expect(document.body.innerHTML).toContain('Other message')
    })
  })
})
