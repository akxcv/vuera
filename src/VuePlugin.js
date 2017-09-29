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
    Vue.config.optionMergeStrategies.components = function (parent, child, vm) {
      const mergedValue = originalComponentsMergeStrategy(parent, child, vm)
      return mergedValue
        ? Object.entries(mergedValue).reduce(
            (acc, [k, v]) => ({
              ...acc,
              [k]: isReactComponent(v) ? VueResolver(v) : v,
            }),
            {}
          )
        : mergedValue
    }
  },
}
