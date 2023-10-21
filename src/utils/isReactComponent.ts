import Vue from "vue";

export default function isReactComponent(component: any) {
  if (typeof component === "object" && !isReactForwardReference(component)) {
    return false;
  }

  return !(
    typeof component === "function" &&
    component.prototype &&
    ((component.prototype.constructor.super &&
      component.prototype.constructor.super.isVue) ||
      component.prototype instanceof Vue)
  );
}

function isReactForwardReference(component: any) {
  return (
    component.$$typeof &&
    component.$$typeof.toString() === "Symbol(react.forward_ref)"
  );
}
