export default function isReactComponent (component) {
  if (typeof component === 'object') {
    return false
  } else if (
    typeof component === 'function' &&
    component.prototype.constructor.super &&
    component.prototype.constructor.super.name.startsWith('Vue')
  ) {
    return false
  } else {
    return true
  }
}
