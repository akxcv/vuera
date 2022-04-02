import React from 'react'
import Vue from '@vue/compat'

const VueComponent = Vue.component('hello', {})
const VueComponent2 = Vue.component('hello', {})

const result1 = () => React.createElement(VueComponent, { message: 'Hi' })
const result2 = () => React.createElement(VueComponent2, { message: 'Hi' })
