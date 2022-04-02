import './polyfills/raf'
import Vue from '@vue/compat'

global.normalizeHTMLString = function normalizeHTMLString (string) {
  return string.replace(/\n\s*/g, '')
}

Vue.config.productionTip = false
Vue.prototype.constructor.isVue = true
