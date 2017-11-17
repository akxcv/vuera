import React from 'react'
import { VueWrapper, VueInReact } from 'vuera'
import MyVueComponent from './MyVueComponent.vue'

export default () => {
  const Component = VueInReact(MyVueComponent)
  return [
    <MyVueComponent message='Hi' type='babel' />,
    <VueWrapper component={MyVueComponent} message='from' type='wrapper' />,
    <Component message='React' type='hoc' />,
  ]
}
