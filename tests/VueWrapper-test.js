import React from 'react'
import ReactDOM from 'react-dom'
import { VueWrapper } from '../src'
import VueComponent from './fixtures/VueComponent'
import VueSingleFileComponent from './fixtures/VueSingleFileComponent.vue'
import normalizeHTMLString from './utils/normalizeHTML'

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
          <input type='text' value={this.state.message} onChange={this.onChange} />
          <VueWrapper component={passedComponent} message={this.state.message} reset={mockReset} />
        </div>
      )
    }
  }
  return ReactDOM.render(<ReactApp message='Message for Vue' />, document.getElementById('root'))
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
})
