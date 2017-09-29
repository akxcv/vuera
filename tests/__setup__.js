import './polyfills/raf'

global.normalizeHTMLString = function normalizeHTMLString (string) {
  return string.replace(/\n\s*/g, '')
}
