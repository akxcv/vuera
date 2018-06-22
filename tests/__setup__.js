import './polyfills/raf'
import Vue from 'vue'

global.normalizeHTMLString = function normalizeHTMLString (string) {
  return string.replace(/\n\s*/g, '')
}

Vue.config.productionTip = false
