import isReactComponent from './utils/isReactComponent'
import VueResolver from './resolvers/Vue'

/**
 * This mixin automatically wraps all React components into Vue.
 */
export default {
  install (Vue, options) {
    /**
     * We define a custom merging strategy for the `components` field. This strategy really just
     * wraps all the React components while leaving Vue components as is.
     */
    const originalComponentsMergeStrategy = Vue.config.optionMergeStrategies.components
    Vue.config.optionMergeStrategies.components = function (parent, ...args) {
      const mergedValue = originalComponentsMergeStrategy(parent, ...args)
      const wrappedComponents = mergedValue
        ? Object.entries(mergedValue).reduce(
            (acc, [k, v]) => ({
              ...acc,
              [k]: isReactComponent(v) ? VueResolver(v) : v,
            }),
            {}
          )
        : mergedValue
      return Object.assign(mergedValue, wrappedComponents)
    }
    Object.getPrototypeOf(Vue).constructor.isVue = true
  },
}
