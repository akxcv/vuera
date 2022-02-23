import React from "react";
import ReactDOM from "react-dom";
import VueWrapper from "./Vue";

const makeReactContainer = (Component: any) =>
  class ReactInVue extends React.Component {
    static displayName = `ReactInVue${
      Component.displayName || Component.name || "Component"
    }`;

    constructor(props: any) {
      super(props);

      /**
       * We create a stateful component in order to attach a ref on it. We will use that ref to
       * update component's state, which seems better than re-rendering the whole thing with
       * ReactDOM.
       */
      this.state = { ...props };
    }

    wrapVueChildren(children: any) {
      // console.log("wrapVueChildren: ", children);
      if (children)
        return {
          render: (createElement: any) => createElement("div", children),
        };
      return null;
    }

    render() {
      const {
        children,
        // Vue attaches an event handler, but it is missing an event name, so
        // it ends up using an empty string. Prevent passing an empty string
        // named prop to React.
        "": _invoker,
        ...rest
      } = (this as any).state;
      const wrappedChildren = this.wrapVueChildren(children);

      const VueWrapperRender = VueWrapper as unknown as (props: {
        component: any;
      }) => JSX.Element;

      if ("ReactInVueTestAA" === ReactInVue.displayName) {
        // console.log("THIS IS IT!", Component.render);
      }

      // console.log("wrappedChildren: ", wrappedChildren);

      return (
        <Component {...rest}>
          {wrappedChildren && <VueWrapperRender component={wrappedChildren} />}
        </Component>
      );
    }
  };

export default {
  name: "ReactInVueRawVueComp",
  props: ["component", "passedProps"],
  render(createElement: any) {
    (this as any).createElement = createElement; // save for later
    return createElement("div", { ref: "react" });
  },
  methods: {
    mountReactComponent(comp: any) {
      const s = this as any;
      // console.log("before creating NewComp");
      // console.log("Name: ", comp.name || comp.displayName);
      // console.log(comp);

      const children =
        s.$slots.default !== undefined ? { children: s.$slots.default } : {};

      let NewComp: React.FC;
      // if (!comp.functional) {
        const Component = makeReactContainer(comp);
        NewComp = (props: any) => (
          <Component
            {...props}
            ref={(ref: any) => (s.reactComponentRef = ref)}
          />
        );
      // } else {
      //   NewComp = (props: any) => <>{comp.render(s.createElement, props)}</>;
      // }
      // NewComp = (props: any) => <>{comp.render(s.createElement, props)}</>;

      ReactDOM.render(
        <NewComp
          {...s.$props.passedProps}
          {...s.$attrs}
          {...s.$listeners}
          {...children}
        />,
        s.$refs.react
      );
      // console.log("after creating NewComp");
    },
  },
  mounted() {
    (this as any).mountReactComponent((this as any).$props.component);
  },
  beforeDestroy() {
    ReactDOM.unmountComponentAtNode((this as any).$refs.react);
  },
  updated() {
    /**
     * AFAIK, this is the only way to update children. It doesn't seem to be possible to watch
     * `$slots` or `$children`.
     */
    if ((this as any).$slots.default !== undefined) {
      (this as any).reactComponentRef.setState({
        children: (this as any).$slots.default,
      });
    } else {
      (this as any).reactComponentRef.setState({ children: null });
    }
  },
  inheritAttrs: false,
  watch: {
    $attrs: {
      handler() {
        (this as any).reactComponentRef.setState({ ...(this as any).$attrs });
      },
      deep: true,
    },
    "$props.component": {
      handler(newValue: any) {
        (this as any).mountReactComponent(newValue);
      },
    },
    $listeners: {
      handler() {
        (this as any).reactComponentRef.setState({
          ...(this as any).$listeners,
        });
      },
      deep: true,
    },
    "$props.passedProps": {
      handler() {
        (this as any).reactComponentRef.setState({
          ...(this as any).$props.passedProps,
        });
      },
      deep: true,
    },
  },
};
