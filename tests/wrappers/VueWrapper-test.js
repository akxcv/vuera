import React from 'react'
import ReactDOM from 'react-dom'
import { VueWrapper } from '../../src'
import VueComponent from '../fixtures/VueComponent'
import VueRegisteredComponent from '../fixtures/VueRegisteredComponent'
import VueSingleFileComponent from '../fixtures/VueSingleFileComponent.vue'

const mockReset = jest.fn()
const makeReactInstanceWithVueComponent = (passedComponent, events) => {
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
            on={events}
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

  describe('children', () => {
    const componentWithChildren = {
      render (createElement) {
        return createElement('div', this.$slots.default)
      },
    }

    const render = (...children) => {
      ReactDOM.render(
        <VueWrapper component={componentWithChildren}>{children}</VueWrapper>,
        document.getElementById('root')
      )
      // React 15 compat
      document.querySelectorAll('[data-reactroot]').forEach(el => {
        el.removeAttribute('data-reactroot')
      })
      document.body.innerHTML = document.body.innerHTML.replace(
        /<!--[\s\S]*?-->/g,
        ''
      )
    }

    it('works with a string', () => {
      render('Hello')
      expect(document.querySelector('#root div div').innerHTML).toBe(
        '<div>Hello</div>'
      )
    })

    it('works with a React component', () => {
      render(<div>Hello</div>)
      expect(document.querySelector('#root div div').innerHTML).toBe(
        '<div><div>Hello</div></div>'
      )
    })

    it('works with a React component', () => {
      render(
        <VueWrapper component={componentWithChildren}>wow so nested</VueWrapper>
      )
      expect(document.querySelector('#root div div').innerHTML).toBe(
        '<div><div><div><div>wow so nested</div></div></div></div>'
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
          `<div>
            Hi there
            <div>Hello</div>
            <div><div><div>
              wow so nested
            </div></div></div>
          </div>`
        )
      )
    })
  })
})
