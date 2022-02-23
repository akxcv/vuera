<template>
  <div class="toto">
    Hello there 2
    <my-test :foo="msg">
      <h4>I am VUE child!</h4>
    </my-test>
  </div>
</template>

<script>
import Vue from 'vue'
import { ReactInVue } from 'vuera'

import { Test } from './Test.react'

const TestInVue = ReactInVue(Test)
// console.log(TestInVue);

export default Vue.extend({
  data() {
    return {
      msg: 'Hi from vue 3!',
    }
  },
  components: {
    'my-test': TestInVue,
  },
})
</script>

<style scoped>
.toto {
  color: blue;
}
</style>
