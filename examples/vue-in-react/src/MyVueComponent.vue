<template>
  <div :title="type">
    Message from React: <strong>{{ message }}</strong>
  </div>
</template>

<script>
  export default {
    props: ['message', 'type']
  }
</script>
