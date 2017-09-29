import Vue from 'vue'
import { React } from '../src'
import PureFunctionalComponent from './fixtures/ReactPureFunctionalComponent'
import Component from './fixtures/ReactComponent'

const mockReset = jest.fn()
const makeVueInstanceWithReactComponent = passedComponent =>
  new Vue({
    el: '#app',
    data: {
      component: passedComponent,
      message: 'Message for React',
    },
    computed: {
      passedProps () {
        return {
          message: this.message,
          reset: this.reset,
        }
      },
    },
    methods: {
      reset: mockReset,
    },
    template: `
      <div>
        <input v-model="message" />
        <react :component="component" :passedProps="passedProps"></react>
      </div>
    `,
    components: { React },
  })

describe('ReactInVue', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>'
  })

  it('mounts the React component correctly', () => {
    makeVueInstanceWithReactComponent(Component)
    expect(document.body.innerHTML).toBe(
      '<div><input> <div><div><span>Message for React</span><button></button></div></div></div>'
    )
  })

  it('mounts the pure React component correctly', () => {
    makeVueInstanceWithReactComponent(PureFunctionalComponent)
    expect(document.body.innerHTML).toBe(
      '<div><input> <div><div><span>Message for React</span><button></button></div></div></div>'
    )
  })

  it('synchronises props', () => {
    const vm = makeVueInstanceWithReactComponent(Component)
    vm.message = 'New message!'
    return Vue.nextTick().then(() => {
      expect(vm.$data.message).toBe('New message!')
      expect(document.body.innerHTML).toContain('New message!')
    })
  })

  test('functions work', () => {
    makeVueInstanceWithReactComponent(Component)
    const button = document.querySelector('button')

    expect(mockReset.mock.calls.length).toBe(0)
    button.click()
    expect(mockReset.mock.calls.length).toBe(1)
  })
})
