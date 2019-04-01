import isReactComponent from '../../src/utils/isReactComponent'
import ReactComponent from '../fixtures/ReactComponent'
import ReactPureFunctionalComponent from '../fixtures/ReactPureFunctionalComponent'
import ReactFunctionalComponent from '../fixtures/ReactFunctionalComponent'
import StyledComponent from '../fixtures/StyledComponent'
import VueComponent from '../fixtures/VueComponent'
import VueRegisteredComponent from '../fixtures/VueRegisteredComponent'
import VueSingleFileComponent from '../fixtures/VueSingleFileComponent.vue'

describe('isReactComponent', () => {
  it('returns true for React components', () => {
    expect(isReactComponent(ReactComponent)).toBe(true)
    expect(isReactComponent(ReactPureFunctionalComponent)).toBe(true)
    expect(isReactComponent(ReactFunctionalComponent)).toBe(true)
    expect(isReactComponent(StyledComponent)).toBe(true)
  })

  it('returns false for Vue components', () => {
    expect(isReactComponent(VueComponent)).toBe(false)
    expect(isReactComponent(VueRegisteredComponent)).toBe(false)
    expect(isReactComponent(VueSingleFileComponent)).toBe(false)
  })

  it('returns false for blank input', () => {
    expect(isReactComponent(false)).toBe(false)
    expect(isReactComponent(null)).toBe(false)
    expect(isReactComponent(undefined)).toBe(false)
  })
})
