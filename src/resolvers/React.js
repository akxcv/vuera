/* eslint-disable prefer-object-spread/prefer-object-spread */
import React from 'react'
import { VueWrapper } from '../'
import isReactComponent from '../utils/isReactComponent'

/**
 * This function gets imported by the babel plugin. It wraps a suspected React element and, if it
 * isn't a valid React element, wraps it into a Vue container.
 */
export default function ReactResolver (component, props) {
  return isReactComponent(component)
    ? React.createElement(component, props)
    : React.createElement(VueWrapper, Object.assign({ component }, props))
}
