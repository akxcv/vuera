import React from "react";
export default class VueContainer extends React.Component {
    constructor(props: {
        component: any;
    });
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    /**
     * Creates and mounts the Vue instance.
     * NOTE: since we need to access the current instance of VueContainer, as well as the Vue instance
     * inside of the Vue constructor, we cannot bind this function to VueContainer, and we need to
     * pass VueContainer's binding explicitly.
     * @param {HTMLElement} targetElement - element to attact the Vue instance to
     * @param {ReactInstance} reactThisBinding - current instance of VueContainer
     */
    createVueInstance(targetElement: any, reactThisBinding: any, _component?: any, _prevComponent?: any): void;
    updateVueComponent(_prevComponent: any, nextComponent: any): void;
    render(): JSX.Element;
}
