<template>
  <Counter :counter="counter"/>
  <button v-on:click="addCounter">Add 1</button>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
  },
  data(){
    return {
      counter: 0
    }
  },
  methods: {
    addCounter(){
       this.counter += 1
    }
  }
}
</script>

<style scoped>

</style>
