/* eslint-disable prefer-object-spread/prefer-object-spread */
import React from 'react'
import { VueWrapper } from '../'
import isReactComponent from '../utils/isReactComponent'

export default function ReactResolver (component) {
  return isReactComponent(component)
    ? component
    : props => <VueWrapper {...props} component={component} />
}

/**
 * This function gets imported by the babel plugin. It wraps a suspected React element and, if it
 * isn't a valid React element, wraps it into a Vue container.
 */
export function babelReactResolver (component, props, children) {
  return isReactComponent(component)
    ? React.createElement(component, props, children)
    : React.createElement(VueWrapper, Object.assign({ component }, props), children)
}
