export default function isReactComponent (component) {
  if (typeof component === 'object' && !isReactForwardReference(component)) {
    return false
  }

  return !(
    typeof component === 'function' &&
    component.prototype &&
    component.prototype.constructor.super &&
    component.prototype.constructor.super.name.startsWith('Vue')
  )
}

function isReactForwardReference (component) {
  return component.$$typeof && component.$$typeof.toString() === 'Symbol(react.forward_ref)'
}
