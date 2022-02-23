import React from "react";
export default function ReactResolver(component: any): any;
/**
 * This function gets imported by the babel plugin. It wraps a suspected React element and, if it
 * isn't a valid React element, wraps it into a Vue container.
 */
export declare function babelReactResolver(component: any, props: any, children: any): React.ReactElement<{}, string | React.JSXElementConstructor<any>>;
