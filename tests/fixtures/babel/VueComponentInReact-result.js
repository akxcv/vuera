import { wrapReactElement } from 'vuera'
import React from 'react'
import Vue from 'vue'

const VueComponent = Vue.component('hello', {})
const VueComponent2 = Vue.component('hello', {})

const result1 = () => wrapReactElement(VueComponent, { message: 'Hi' })
const result2 = () => wrapReactElement(VueComponent2, { message: 'Hi' })
