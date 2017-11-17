<template>
  <div>
    <my-react-component message="Hi" type="plugin" />
    <react :component="component" message="from" type="wrapper" />
    <my-react-component-via-hoc message="Vue" type="hoc" />
  </div>
</template>

<script>
  import { ReactWrapper, ReactInVue } from 'vuera'
  import MyReactComponent from './MyReactComponent'

  export default {
    components: {
      MyReactComponent,
      react: ReactWrapper,
      'my-react-component-via-hoc': ReactInVue(MyReactComponent),
    },
    data () {
      return {
        component: MyReactComponent,
      }
    },
  }
</script>
