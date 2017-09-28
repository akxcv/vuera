/* eslint-disable prefer-object-spread/prefer-object-spread, dot-notation */
import React from 'react'
import Vue from './VueInReact'

/**
 * This function gets imported by the babel plugin. It wraps a suspected React element and, if it
 * isn't a valid React element, wraps it into a Vue container.
 */
export default function wrapReactElement (el, props) {
  if (typeof el === 'object' && !el['$$typeof']) {
    return React['createElement'](Vue, Object.assign({ component: el }, props))
  } else {
    return React['createElement'](el, props)
  }
}
