<template>
  <div id="app">
    <h2>My Friends</h2>
    <ul>
      <li>{{  }}</li>
      <li>{{  }}</li>
    </ul>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      friends: [
        {
          id: "filipi",
          name: "Filipi",
          phone: "184151854",
          email: "filipi@gmail.com"
        },
        {
          id: "zueiro",
          name: "Zueiro",
          phone: "841554184",
          email: "zueiro@gmail.com"
        }
      ]
    }
  }
}
</script>

<style>
#app {
}
</style>
