import './polyfills/raf'
import Vue from 'vue'

global.normalizeHTMLString = function normalizeHTMLString (string) {
  return string.replace(/\n\s*/g, '')
}

global.html = (strs, ...exprs) => normalizeHTMLString(String.raw(strs, ...exprs))

Vue.config.productionTip = false
Vue.prototype.constructor.isVue = true
