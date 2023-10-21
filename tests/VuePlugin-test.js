import Vue from 'vue'
import React from 'react'
import { VuePlugin } from '../src'
import VueComponent from './fixtures/VueComponent'
import ReactComponent from './fixtures/ReactComponent'
import ReactPureFunctionalComponent from './fixtures/ReactPureFunctionalComponent'
import ReactComponentWithHooks from './fixtures/ReactComponentWithHooks'
import './fixtures/VueRegisteredComponent' // globally registered Vue component
import VueSingleFileComponent from './fixtures/VueSingleFileComponent.vue'
import olderVueCompat from './utils/olderVueCompat'

Vue.use(VuePlugin)

describe('VuePlugin', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>'
  })

  it('wraps React components into Vue', () => {
    new Vue({
      el: '#app',
      components: {
        'react-component': ReactComponent,
        'react-pure-functional-component': ReactPureFunctionalComponent,
        'react-with-children': ({ children }) => <div>{children}</div>,
        'react-component-with-hooks': ReactComponentWithHooks,
        'vue-component': VueComponent,
        'vue-single-file-component': VueSingleFileComponent,
      },
      render (createElement) {
        const elements = [
          createElement('vue-component', {
            props: {
              message: 'VUE',
              reset: jest.fn(),
            },
          }),
          createElement('vue-registered-component', {
            props: {
              message: 'VUE REGISTERED',
              reset: jest.fn(),
            },
          }),
          createElement('vue-single-file-component', {
            props: {
              message: 'VUE SINGLE FILE',
              reset: jest.fn(),
            },
          }),
          createElement(
            'react-component',
            olderVueCompat({
              attrs: {
                message: 'REACT',
              },
              on: {
                reset: jest.fn(),
              },
            })
          ),
          createElement(
            'react-pure-functional-component',
            olderVueCompat({
              attrs: {
                message: 'REACT FUNC',
              },
              on: {
                reset: jest.fn(),
              },
            })
          ),
          createElement('react-with-children', ['child1', createElement('div', 'child2')]),
        ]

        if (React.version >= '16.8.0') {
          elements.push(createElement('react-component-with-hooks'))
        }

        return createElement('div', elements)
      },
    })
    return Vue.nextTick().then(() => {
      // React 15 compat
      document.querySelectorAll('[data-reactroot]').forEach(el => {
        el.removeAttribute('data-reactroot')
      })
      expect(document.body.innerHTML).toBe(
        normalizeHTMLString(
          `<div>
            <div>
              <span>VUE</span>
              <button></button>
            </div>
            <div>
              <span>VUE REGISTERED</span>
              <button></button>
            </div>
            <div>
              <span>VUE SINGLE FILE</span> <button></button>
            </div>
            <div>
              <div>
                <span>REACT</span>
                <button></button>
              </div>
            </div>
            <div>
              <div>
                <span>REACT FUNC</span>
                <button></button>
              </div>
            </div>
            ${React.version >= '16.8.0' ? `<div>
              <input type="text" value="">
            </div>` : ''}
            <div>
              <div>
                <div>
                  child1
                  <div>child2</div>
                </div>
              </div>
            </div>
          </div>`
        )
      )
    })
  })
})
