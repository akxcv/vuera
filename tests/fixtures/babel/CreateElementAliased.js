import { createElement as e } from 'react'
import Vue from 'vue'

const VueComponent = Vue.component('hello', {})
const VueComponent2 = Vue.component('hello', {})

const result1 = () => e(VueComponent, { message: 'Hi' })
const result2 = () => e(VueComponent2, { message: 'Hi' })
