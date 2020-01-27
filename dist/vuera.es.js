import React from 'react';
import ReactDOM from 'react-dom';
import Vue from 'vue';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var VUE_COMPONENT_NAME = 'vuera-internal-component-name';

var wrapReactChildren = function wrapReactChildren(createElement, children) {
  return createElement('vuera-internal-react-wrapper', {
    props: {
      component: function component() {
        return React.createElement(
          'div',
          null,
          children
        );
      }
    }
  });
};

var VueContainer = function (_React$Component) {
  inherits(VueContainer, _React$Component);

  function VueContainer(props) {
    classCallCheck(this, VueContainer);

    /**
     * We have to track the current Vue component so that we can reliably catch updates to the
     * `component` prop.
     */
    var _this = possibleConstructorReturn(this, (VueContainer.__proto__ || Object.getPrototypeOf(VueContainer)).call(this, props));

    _this.currentVueComponent = props.component;

    /**
     * Modify createVueInstance function to pass this binding correctly. Doing this in the
     * constructor to avoid instantiating functions in render.
     */
    var createVueInstance = _this.createVueInstance;
    var self = _this;
    _this.createVueInstance = function (element, component, prevComponent) {
      createVueInstance(element, self, component, prevComponent);
    };
    return _this;
  }

  createClass(VueContainer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var component = nextProps.component,
          props = objectWithoutProperties(nextProps, ['component']);


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
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
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

  }, {
    key: 'createVueInstance',
    value: function createVueInstance(targetElement, reactThisBinding) {
      var _components;

      var _reactThisBinding$pro = reactThisBinding.props,
          component = _reactThisBinding$pro.component,
          on = _reactThisBinding$pro.on,
          props = objectWithoutProperties(_reactThisBinding$pro, ['component', 'on']);

      // `this` refers to Vue instance in the constructor

      reactThisBinding.vueInstance = new Vue(_extends({
        el: targetElement,
        data: props
      }, config.vueInstanceOptions, {
        render: function render(createElement) {
          return createElement(VUE_COMPONENT_NAME, {
            props: this.$data,
            on: on
          }, [wrapReactChildren(createElement, this.children)]);
        },

        components: (_components = {}, defineProperty(_components, VUE_COMPONENT_NAME, component), defineProperty(_components, 'vuera-internal-react-wrapper', ReactWrapper), _components)
      }));
    }
  }, {
    key: 'updateVueComponent',
    value: function updateVueComponent(prevComponent, nextComponent) {
      this.currentVueComponent = nextComponent;

      /**
       * Replace the component in the Vue instance and update it.
       */
      this.vueInstance.$options.components[VUE_COMPONENT_NAME] = nextComponent;
      this.vueInstance.$forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('div', { ref: this.createVueInstance });
    }
  }]);
  return VueContainer;
}(React.Component);

var makeReactContainer = function makeReactContainer(Component) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    inherits(ReactInVue, _React$Component);

    function ReactInVue(props) {
      classCallCheck(this, ReactInVue);

      /**
       * We create a stateful component in order to attach a ref on it. We will use that ref to
       * update component's state, which seems better than re-rendering the whole thing with
       * ReactDOM.
       */
      var _this = possibleConstructorReturn(this, (ReactInVue.__proto__ || Object.getPrototypeOf(ReactInVue)).call(this, props));

      _this.state = _extends({}, props);
      return _this;
    }

    createClass(ReactInVue, [{
      key: 'wrapVueChildren',
      value: function wrapVueChildren(children) {
        return {
          render: function render(createElement) {
            return createElement('div', children);
          }
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            children = _state.children,
            _invoker = _state[''],
            rest = objectWithoutProperties(_state, ['children', '']);

        var wrappedChildren = this.wrapVueChildren(children);

        return React.createElement(
          Component,
          rest,
          children && React.createElement(VueContainer, { component: wrappedChildren })
        );
      }
    }]);
    return ReactInVue;
  }(React.Component), _class.displayName = 'ReactInVue' + (Component.displayName || Component.name || 'Component'), _temp;
};

var ReactWrapper = {
  props: ['component', 'passedProps'],
  render: function render(createElement) {
    return createElement('div', { ref: 'react' });
  },

  methods: {
    mountReactComponent: function mountReactComponent(component) {
      var _this2 = this;

      var Component = makeReactContainer(component);
      var children = this.$slots.default !== undefined ? { children: this.$slots.default } : {};
      ReactDOM.render(React.createElement(Component, _extends({}, this.$props.passedProps, this.$attrs, this.$listeners, children, {
        ref: function ref(_ref) {
          return _this2.reactComponentRef = _ref;
        }
      })), this.$refs.react);
    }
  },
  mounted: function mounted() {
    this.mountReactComponent(this.$props.component);
  },
  beforeDestroy: function beforeDestroy() {
    ReactDOM.unmountComponentAtNode(this.$refs.react);
  },
  updated: function updated() {
    /**
     * AFAIK, this is the only way to update children. It doesn't seem to be possible to watch
     * `$slots` or `$children`.
     */
    if (this.$slots.default !== undefined) {
      this.reactComponentRef.setState({ children: this.$slots.default });
    } else {
      this.reactComponentRef.setState({ children: null });
    }
  },

  inheritAttrs: false,
  watch: {
    $attrs: {
      handler: function handler() {
        this.reactComponentRef.setState(_extends({}, this.$attrs));
      },

      deep: true
    },
    '$props.component': {
      handler: function handler(newValue) {
        this.mountReactComponent(newValue);
      }
    },
    $listeners: {
      handler: function handler() {
        this.reactComponentRef.setState(_extends({}, this.$listeners));
      },

      deep: true
    },
    '$props.passedProps': {
      handler: function handler() {
        this.reactComponentRef.setState(_extends({}, this.$props.passedProps));
      },

      deep: true
    }
  }
};

function isReactComponent(component) {
  if ((typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object' && !isReactForwardReference(component)) {
    return false;
  }

  return !(typeof component === 'function' && component.prototype && (component.prototype.constructor.super && component.prototype.constructor.super.isVue || component.prototype instanceof Vue));
}

function isReactForwardReference(component) {
  return component.$$typeof && component.$$typeof.toString() === 'Symbol(react.forward_ref)';
}

function VueResolver$$1(component) {
  return {
    components: { ReactWrapper: ReactWrapper },
    props: ['passedProps'],
    inheritAttrs: false,
    render: function render(createElement) {
      return createElement('react-wrapper', {
        props: {
          component: component,
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
  install: function install(Vue$$1, options) {
    /**
     * We define a custom merging strategy for the `components` field. This strategy really just
     * wraps all the React components while leaving Vue components as is.
     */
    var originalComponentsMergeStrategy = Vue$$1.config.optionMergeStrategies.components;
    Vue$$1.config.optionMergeStrategies.components = function (parent) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var mergedValue = originalComponentsMergeStrategy.apply(undefined, [parent].concat(args));
      var wrappedComponents = mergedValue ? Object.entries(mergedValue).reduce(function (acc, _ref) {
        var _ref2 = slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        return _extends({}, acc, defineProperty({}, k, isReactComponent(v) ? VueResolver$$1(v) : v));
      }, {}) : mergedValue;
      return Object.assign(mergedValue, wrappedComponents);
    };
    Vue$$1.prototype.constructor.isVue = true;
  }
};

/* eslint-disable prefer-object-spread/prefer-object-spread */
function ReactResolver$$1(component) {
  return isReactComponent(component) ? component : function (props) {
    return React.createElement(VueContainer, _extends({}, props, { component: component }));
  };
}

/**
 * This function gets imported by the babel plugin. It wraps a suspected React element and, if it
 * isn't a valid React element, wraps it into a Vue container.
 */
function babelReactResolver$$1(component, props, children) {
  return isReactComponent(component) ? React.createElement(component, props, children) : React.createElement(VueContainer, Object.assign({ component: component }, props), children);
}

function defaultConfig() {
  return {
    vueInstanceOptions: {}
  };
}

var config = defaultConfig();

export { ReactWrapper, VueContainer as VueWrapper, babelReactResolver$$1 as __vueraReactResolver, VuePlugin, ReactResolver$$1 as VueInReact, VueResolver$$1 as ReactInVue, config };
