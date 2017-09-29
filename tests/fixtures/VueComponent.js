import Vue from 'vue'

export default Vue.component('vue-component', {
  props: ['message', 'reset'],
  template: `
    <div>
      <span>{{ message }}</span>
      <button @click="reset"></button>
    </div>
  `,
})
