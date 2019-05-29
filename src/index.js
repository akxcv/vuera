import ReactWrapper from './wrappers/React'
import VueWrapper, { setVueInstanceOptions } from './wrappers/Vue'
import VuePlugin from './VuePlugin'
import VueInReact, { babelReactResolver as __vueraReactResolver } from './resolvers/React'
import ReactInVue from './resolvers/Vue'

export {
  setVueInstanceOptions,
  ReactWrapper,
  VueWrapper,
  __vueraReactResolver,
  VuePlugin,
  VueInReact,
  ReactInVue,
}
