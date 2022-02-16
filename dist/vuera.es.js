import React from 'react';
import ReactDOM from 'react-dom';
import Vue from 'vue';

const VUE_COMPONENT_NAME = 'vuera-internal-component-name';

const wrapReactChildren = (createElement, children) => createElement('vuera-internal-react-wrapper', {
  props: {
    component: () => /*#__PURE__*/React.createElement(React.Fragment, null, children)
  }
});

class VueContainer extends React.Component {
  constructor(props) {
    super(props);
    /**
     * We have to track the current Vue component so that we can reliably catch updates to the
     * `component` prop.
     */

    this.currentVueComponent = props.component;
    /**
     * Modify createVueInstance function to pass this binding correctly. Doing this in the
     * constructor to avoid instantiating functions in render.
     */

    const createVueInstance = this.createVueInstance;
    const self = this;

    this.createVueInstance = function (element, component, prevComponent) {
      createVueInstance(element, self, component, prevComponent);
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      component,
      ...props
    } = nextProps;

    if (this.currentVueComponent !== component) {
      this.updateVueComponent(this.props.component, component);
    }
    /**
     * NOTE: we're not comparing this.props and nextProps here, because I didn't want to write a
     * function for deep object comparison. I don't know if this hurts performance a lot, maybe
     * we do need to compare those objects.
     */


    Object.assign(this.vueInstance.$data, props);
  }

  componentWillUnmount() {
    this.vueInstance.$destroy();
  }
  /**
   * Creates and mounts the Vue instance.
   * NOTE: since we need to access the current instance of VueContainer, as well as the Vue instance
   * inside of the Vue constructor, we cannot bind this function to VueContainer, and we need to
   * pass VueContainer's binding explicitly.
   * @param {HTMLElement} targetElement - element to attact the Vue instance to
   * @param {ReactInstance} reactThisBinding - current instance of VueContainer
   */


  createVueInstance(targetElement, reactThisBinding) {
    const {
      component,
      on,
      ...props
    } = reactThisBinding.props; // `this` refers to Vue instance in the constructor

    reactThisBinding.vueInstance = new Vue({
      el: targetElement,
      data: props,
      ...config.vueInstanceOptions,

      render(createElement) {
        return createElement(VUE_COMPONENT_NAME, {
          props: this.$data,
          on
        }, [wrapReactChildren(createElement, this.children)]);
      },

      components: {
        [VUE_COMPONENT_NAME]: component,
        'vuera-internal-react-wrapper': ReactWrapper
      }
    });
  }

  updateVueComponent(prevComponent, nextComponent) {
    this.currentVueComponent = nextComponent;
    /**
     * Replace the component in the Vue instance and update it.
     */

    this.vueInstance.$options.components[VUE_COMPONENT_NAME] = nextComponent;
    this.vueInstance.$forceUpdate();
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "vuera-wrapper",
      ref: this.createVueInstance
    });
  }

}

const makeReactContainer = Component => {
  return class ReactInVue extends React.Component {
    static displayName = `ReactInVue${Component.displayName || Component.name || 'Component'}`;

    constructor(props) {
      super(props);
      /**
       * We create a stateful component in order to attach a ref on it. We will use that ref to
       * update component's state, which seems better than re-rendering the whole thing with
       * ReactDOM.
       */

      this.state = { ...props
      };
    }

    wrapVueChildren(children) {
      return {
        render: createElement => createElement('div', children)
      };
    }

    render() {
      const {
        children,
        // Vue attaches an event handler, but it is missing an event name, so
        // it ends up using an empty string. Prevent passing an empty string
        // named prop to React.
        '': _invoker,
        ...rest
      } = this.state;
      const wrappedChildren = this.wrapVueChildren(children);
      return /*#__PURE__*/React.createElement(Component, rest, children && /*#__PURE__*/React.createElement(VueContainer, {
        component: wrappedChildren
      }));
    }

  };
};

var ReactWrapper = {
  props: ['component', 'passedProps'],

  render(createElement) {
    return createElement('div', {
      ref: 'react'
    });
  },

  methods: {
    mountReactComponent(component) {
      const Component = makeReactContainer(component);
      const children = this.$slots.default !== undefined ? {
        children: this.$slots.default
      } : {};
      ReactDOM.render( /*#__PURE__*/React.createElement(Component, babelHelpers.extends({}, this.$props.passedProps, this.$attrs, this.$listeners, children, {
        ref: ref => this.reactComponentRef = ref
      })), this.$refs.react);
    }

  },

  mounted() {
    this.mountReactComponent(this.$props.component);
  },

  beforeDestroy() {
    ReactDOM.unmountComponentAtNode(this.$refs.react);
  },

  updated() {
    /**
     * AFAIK, this is the only way to update children. It doesn't seem to be possible to watch
     * `$slots` or `$children`.
     */
    if (this.$slots.default !== undefined) {
      this.reactComponentRef.setState({
        children: this.$slots.default
      });
    } else {
      this.reactComponentRef.setState({
        children: null
      });
    }
  },

  inheritAttrs: false,
  watch: {
    $attrs: {
      handler() {
        this.reactComponentRef.setState({ ...this.$attrs
        });
      },

      deep: true
    },
    '$props.component': {
      handler(newValue) {
        this.mountReactComponent(newValue);
      }

    },
    $listeners: {
      handler() {
        this.reactComponentRef.setState({ ...this.$listeners
        });
      },

      deep: true
    },
    '$props.passedProps': {
      handler() {
        this.reactComponentRef.setState({ ...this.$props.passedProps
        });
      },

      deep: true
    }
  }
};

function isReactComponent(component) {
  if (typeof component === 'object' && !isReactForwardReference(component)) {
    return false;
  }

  return !(typeof component === 'function' && component.prototype && (component.prototype.constructor.super && component.prototype.constructor.super.isVue || component.prototype instanceof Vue));
}

function isReactForwardReference(component) {
  return component.$$typeof && component.$$typeof.toString() === 'Symbol(react.forward_ref)';
}

function VueResolver(component) {
  return {
    components: {
      ReactWrapper
    },
    props: ['passedProps'],
    inheritAttrs: false,

    render(createElement) {
      return createElement('react-wrapper', {
        props: {
          component,
          passedProps: this.$props.passedProps
        },
        attrs: this.$attrs,
        on: this.$listeners
      }, this.$slots.default);
    }

  };
}

/**
 * This mixin automatically wraps all React components into Vue.
 */

var VuePlugin = {
  install(Vue, options) {
    /**
     * We define a custom merging strategy for the `components` field. This strategy really just
     * wraps all the React components while leaving Vue components as is.
     */
    const originalComponentsMergeStrategy = Vue.config.optionMergeStrategies.components;

    Vue.config.optionMergeStrategies.components = function (parent) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      const mergedValue = originalComponentsMergeStrategy(parent, ...args);
      const wrappedComponents = mergedValue ? Object.entries(mergedValue).reduce((acc, _ref) => {
        let [k, v] = _ref;
        return { ...acc,
          [k]: isReactComponent(v) ? VueResolver(v) : v
        };
      }, {}) : mergedValue;
      return Object.assign(mergedValue, wrappedComponents);
    };

    Vue.prototype.constructor.isVue = true;
  }

};

/* eslint-disable prefer-object-spread/prefer-object-spread */
function ReactResolver(component) {
  return isReactComponent(component) ? component : props => /*#__PURE__*/React.createElement(VueContainer, babelHelpers.extends({}, props, {
    component: component
  }));
}
/**
 * This function gets imported by the babel plugin. It wraps a suspected React element and, if it
 * isn't a valid React element, wraps it into a Vue container.
 */

function babelReactResolver(component, props, children) {
  return isReactComponent(component) ? /*#__PURE__*/React.createElement(component, props, children) : /*#__PURE__*/React.createElement(VueContainer, Object.assign({
    component
  }, props), children);
}

function defaultConfig() {
  return {
    vueInstanceOptions: {}
  };
}
var config = defaultConfig();

export { VueResolver as ReactInVue, ReactWrapper, ReactResolver as VueInReact, VuePlugin, VueContainer as VueWrapper, babelReactResolver as __vueraReactResolver, config };
