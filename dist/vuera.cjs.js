'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactDOM = _interopDefault(require('react-dom'));
var Vue = _interopDefault(require('vue'));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





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

      _this.state = props;
      return _this;
    }

    createClass(ReactInVue, [{
      key: 'render',
      value: function render() {
        return React.createElement(Component, this.state);
      }
    }]);
    return ReactInVue;
  }(React.Component), _class.displayName = 'ReactInVue' + (Component.displayName || Component.name || 'Component'), _temp;
};

var ReactWrapper = {
  props: ['component'],
  render: function render(createElement) {
    return createElement('div', { ref: 'react' });
  },

  methods: {
    mountReactComponent: function mountReactComponent() {
      var _this2 = this;

      var Component = makeReactContainer(this.$props.component);
      ReactDOM.render(React.createElement(Component, _extends({}, this.$attrs, this.$listeners, {
        ref: function ref(_ref) {
          return _this2.reactComponentRef = _ref;
        }
      })), this.$refs.react);
    }
  },
  mounted: function mounted() {
    this.mountReactComponent();
  },
  beforeDestroy: function beforeDestroy() {
    ReactDOM.unmountComponentAtNode(this.$refs.react);
  },

  inheritAttrs: false,
  /**
   * We need to update React component's state every time passedProps change, so we implement a
   * custom deep watcher for that.
   */
  watch: {
    $attrs: {
      handler: function handler() {
        this.reactComponentRef.setState(_extends({}, this.$attrs));
      },

      deep: true
    },
    $listeners: {
      handler: function handler() {
        this.reactComponentRef.setState(_extends({}, this.$listeners));
      },

      deep: true
    }
  }
};

var VueContainer = function (_React$Component) {
  inherits(VueContainer, _React$Component);

  function VueContainer(props) {
    classCallCheck(this, VueContainer);

    /**
     * Modify createVueInstance function to pass this binding correctly. Doing this in the
     * constructor to avoid instantiating functions in render.
     */
    var _this = possibleConstructorReturn(this, (VueContainer.__proto__ || Object.getPrototypeOf(VueContainer)).call(this, props));

    var createVueInstance = _this.createVueInstance;
    var self = _this;
    _this.createVueInstance = function (element) {
      createVueInstance(element, self);
    };
    return _this;
  }

  createClass(VueContainer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      /**
       * NOTE: we're not comparing this.props and nextProps here, because I didn't want to write a
       * function for deep object comparison. I don't know if this hurts performance a lot, maybe
       * we do need to compare those objects.
       */
      Object.assign(this.vueInstance.$data, nextProps);
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
      // If the Vue instance has already been initialized, do nothing
      if (reactThisBinding.vue) return;

      var component = reactThisBinding.props.component;
      // If component has a name, use it; otherwise assign an arbitrary name

      var componentName = component.name || 'vue-component';
      // `this` refers to Vue instance in the constructor
      reactThisBinding.vueInstance = new Vue({
        el: targetElement,
        data: _extends({}, reactThisBinding.props),
        render: function render(createElement) {
          return createElement(componentName, {
            props: this.$data
          });
        },

        components: defineProperty({}, componentName, component)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('div', { ref: this.createVueInstance });
    }
  }]);
  return VueContainer;
}(React.Component);

function isReactComponent(component) {
  if ((typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object') {
    return false;
  } else if (typeof component === 'function' && component.prototype.constructor.super && component.prototype.constructor.super.name.startsWith('Vue')) {
    return false;
  } else {
    return true;
  }
}

function VueResolver(component) {
  return {
    components: { ReactWrapper: ReactWrapper },
    inheritAttrs: false,
    render: function render(createElement) {
      return createElement('react-wrapper', {
        props: {
          component: component
        },
        attrs: this.$attrs,
        on: this.$listeners
      });
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
    Vue$$1.config.optionMergeStrategies.components = function (parent, child, vm) {
      var mergedValue = originalComponentsMergeStrategy(parent, child, vm);
      return mergedValue ? Object.entries(mergedValue).reduce(function (acc, _ref) {
        var _ref2 = slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        return _extends({}, acc, defineProperty({}, k, isReactComponent(v) ? VueResolver(v) : v));
      }, {}) : mergedValue;
    };
  }
};

/* eslint-disable prefer-object-spread/prefer-object-spread */
/**
 * This function gets imported by the babel plugin. It wraps a suspected React element and, if it
 * isn't a valid React element, wraps it into a Vue container.
 */
function ReactResolver$$1(component, props) {
  return isReactComponent(component) ? React.createElement(component, props) : React.createElement(VueContainer, Object.assign({ component: component }, props));
}

exports.ReactWrapper = ReactWrapper;
exports.VueWrapper = VueContainer;
exports.__vueraReactResolver = ReactResolver$$1;
exports.VuePlugin = VuePlugin;
