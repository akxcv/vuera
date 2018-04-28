import isReactComponent from './utils/isReactComponent'
import VueResolver from './resolvers/Vue'

/**
 * This mixin automatically wraps all React components into Vue.
 */

const reactRegistry = {}

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
        ? Object.entries(mergedValue).reduce((acc, [k, v]) => {
            const components = {
              ...acc,
              [k]: isReactComponent(v) ? VueResolver(v, reactRegistry) : v
            }
            if (isReactComponent(v)) {
              reactRegistry[k] = v
            }
            return components
          }, {})
        : mergedValue

      return Object.assign(parent, wrappedComponents)
    }
  },
}
