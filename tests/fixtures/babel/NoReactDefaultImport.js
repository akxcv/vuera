import Vue from 'vue'

const VueComponent = Vue.component('hello', {})
const VueComponent2 = Vue.component('hello', {})

const result1 = () => ReactLOL.createElement(VueComponent, { message: 'Hi' })
const result2 = () => ReactLOL.createElement(VueComponent2, { message: 'Hi' })
