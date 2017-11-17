import Vue from 'vue'
import { VuePlugin } from 'vuera'
import MyVueComponent from './MyVueComponent.vue'

Vue.use(VuePlugin)

new Vue({
  el: '#app',
  render: h => h(MyVueComponent),
})
