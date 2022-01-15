<template>
  <div id="app">
    <FriendContact />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import FriendContact from "./components/FriendContact.vue"

export default {
  name: 'App',
  components: {
    FriendContact,
  },
  data(){
    return {
    }
  }
}
</script>

<style>
#app {
}
</style>
