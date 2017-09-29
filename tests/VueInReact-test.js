import React from 'react'
import ReactDOM from 'react-dom'
import { Vue } from '../src'
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
          <Vue component={passedComponent} message={this.state.message} reset={mockReset} />
        </div>
      )
    }
  }
  ReactDOM.render(<ReactApp message='Message for Vue' />, document.getElementById('root'))
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
              <span>Message for Vue</span> <button></button>
            </div>
          </div>
        </div>`
      )
    )
  })

  /**
   * SKIPPING: having trouble with jest-vue-preprocessor
   */
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
})
