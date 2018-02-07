import Vue from 'vue'
import React from 'react'
import { ReactWrapper } from '../../src'
import PureFunctionalComponent from '../fixtures/ReactPureFunctionalComponent'
import Component from '../fixtures/ReactComponent'
import ChildlessComponent from '../fixtures/ReactChildlessComponent'
import olderVueCompat from '../utils/olderVueCompat'

const mockReset = jest.fn()
const makeVueInstanceWithReactComponent = (
  passedComponent,
  optionalRenderFn
) => {
  const vm = new Vue({
    el: '#app',
    data: {
      component: passedComponent,
      message: 'Message for React',
    },
    methods: {
      reset: mockReset,
    },
    render:
      optionalRenderFn ||
      function (createElement) {
        return createElement('div', [
          createElement('input', {
            htmlAttrs: {
              value: this.message,
            },
          }),
          createElement(
            'react',
            olderVueCompat({
              props: {
                component: this.component,
              },
              attrs: {
                message: this.message,
              },
              on: {
                reset: this.reset,
              },
            })
          ),
        ])
      },
    components: { react: ReactWrapper },
  })
  // React 15 compat
  document.querySelectorAll('[data-reactroot]').forEach(el => {
    el.removeAttribute('data-reactroot')
  })
  return vm
}

describe('ReactInVue', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>'
  })

  it('mounts the React component correctly', () => {
    makeVueInstanceWithReactComponent(Component)
    expect(document.body.innerHTML).toBe(
      '<div><input><div><div><span>Message for React</span><button></button></div></div></div>'
    )
  })

  it('mounts the pure React component correctly', () => {
    makeVueInstanceWithReactComponent(PureFunctionalComponent)
    expect(document.body.innerHTML).toBe(
      '<div><input><div><div><span>Message for React</span><button></button></div></div></div>'
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

  test('when Vue instance is destroyed, the React instance is unmounted', () => {
    const vm = makeVueInstanceWithReactComponent(Component)
    const reactInstance = vm.$children[0].reactComponentRef

    /**
     * Perhaps not the cleanest way to check if the component is mounted, but it works
     */
    expect(reactInstance.updater.isMounted(reactInstance)).toBe(true)
    vm.$destroy()
    expect(reactInstance.updater.isMounted(reactInstance)).toBe(false)
  })

  describe('children', () => {
    const componentWithChildren = ({ children }) => <div>{children}</div>

    it('works with a string', () => {
      makeVueInstanceWithReactComponent(componentWithChildren, function (
        createElement
      ) {
        return createElement('div', [
          createElement(
            'react',
            olderVueCompat({ props: { component: this.component } }),
            'string inside'
          ),
        ])
      })
      expect(document.body.innerHTML).toBe(
        '<div><div><div><div>string inside</div></div></div></div>'
      )
    })

    it('works with a Vue component', () => {
      makeVueInstanceWithReactComponent(componentWithChildren, function (
        createElement
      ) {
        return createElement('div', [
          createElement(
            'react',
            olderVueCompat({ props: { component: this.component } }),
            [createElement('span', 'hello from span')]
          ),
        ])
      })
      expect(document.body.innerHTML).toBe(
        normalizeHTMLString(
          `<div><div><div><div>
            <span>hello from span</span>
          </div></div></div></div>`
        )
      )
    })

    it('works with a React component', () => {
      makeVueInstanceWithReactComponent(componentWithChildren, function (
        createElement
      ) {
        return createElement('div', [
          createElement(
            'react',
            olderVueCompat({ props: { component: this.component } }),
            [
              createElement(
                'react',
                olderVueCompat({ props: { component: this.component } }),
                'child'
              ),
            ]
          ),
        ])
      })
      expect(document.body.innerHTML).toBe(
        normalizeHTMLString(
          `<div><div><div><div><div><div><div>
            child
          </div></div></div></div></div></div></div>`
        )
      )
    })

    it('works with multiple children', () => {
      makeVueInstanceWithReactComponent(componentWithChildren, function (
        createElement
      ) {
        return createElement('div', [
          createElement(
            'react',
            olderVueCompat({ props: { component: this.component } }),
            ['string inside', createElement('span', 'hello from span')]
          ),
        ])
      })
      expect(document.body.innerHTML).toBe(
        normalizeHTMLString(
          `<div><div><div><div>
            string inside
            <span>hello from span</span>
          </div></div></div></div>`
        )
      )
    })

    it('works with no children', () => {
      const spy = jest.spyOn(console, 'error')

      makeVueInstanceWithReactComponent(ChildlessComponent)
      expect(document.body.innerHTML).toBe(
        '<div><input><div><div><span>Message for React</span><button></button></div></div></div>'
      )
      expect(spy.mock.calls.length).toBe(0)

      spy.mockReset()
      spy.mockRestore()
    })

    it('raises underlying prop type errors with children in childless component', () => {
      const spy = jest.spyOn(console, 'error')

      makeVueInstanceWithReactComponent(ChildlessComponent, function (
        createElement
      ) {
        return createElement('div', [
          createElement(
            'react',
            olderVueCompat({ props: { component: this.component } }),
            'child'
          ),
        ])
      })
      expect(document.body.innerHTML).toBe(
        '<div><div><div><span></span><button></button></div></div></div>'
      )
      expect(spy.mock.calls.length).toBe(1)

      spy.mockReset()
      spy.mockRestore()
    })
  })
})
