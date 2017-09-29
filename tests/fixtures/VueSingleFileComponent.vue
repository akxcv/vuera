<template>
  <div>
    <span>{{ message }}</span>
    <button @click="reset"></button>
  </div>
</template>

<script>
  export default {
    name: 'what',
    props: ['message', 'reset'],
  }
</script>
