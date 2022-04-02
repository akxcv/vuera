import { __vueraReactResolver } from 'vuera'
import { createElement } from 'react'
import Vue from '@vue/compat'

const VueComponent = Vue.component('hello', {})
const VueComponent2 = Vue.component('hello', {})

const result1 = () => __vueraReactResolver(VueComponent, { message: 'Hi' })
const result2 = () => __vueraReactResolver(VueComponent2, { message: 'Hi' })
