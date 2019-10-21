<template>
  <div>
    <span>{{displayname}}</span>
  </div>
</template>

<script>
  export default {
    name: 'what2',
    data(){
        return {
            displayname: 'VueSingleFileComponentChanged'
        }
    },
    mounted(){
        console.log(this.message);
    },
    methods: {
      mayLog(e) {
          console.log(this.displayname);
      }
    }
  }
</script>
