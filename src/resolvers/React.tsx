/* eslint-disable prefer-object-spread/prefer-object-spread */
import React from "react";
import VueWrapper from "../wrappers/Vue";
import isReactComponent from "../utils/isReactComponent";

export default function ReactResolver(component: any) {
  return isReactComponent(component)
    ? component
    : (props: any) => <VueWrapper {...props} component={component} />;
}

/**
 * This function gets imported by the babel plugin. It wraps a suspected React element and, if it
 * isn't a valid React element, wraps it into a Vue container.
 */
export function babelReactResolver(component: any, props: any, children: any) {
  return isReactComponent(component)
    ? React.createElement(component, props, children)
    : React.createElement(
        VueWrapper,
        Object.assign({ component }, props),
        children
      );
}
