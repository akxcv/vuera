import ReactWrapper from './wrappers/React'
import VueWrapper from './wrappers/Vue'
import VuePlugin from './VuePlugin'
import VueInReact, {
  babelReactResolver as __vueraReactResolver,
} from './resolvers/React'
import ReactInVue from './resolvers/Vue'

export {
  ReactWrapper,
  VueWrapper,
  __vueraReactResolver,
  VuePlugin,
  VueInReact,
  ReactInVue,
}
