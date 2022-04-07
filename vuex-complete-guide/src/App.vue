<template>
  <base-container title="Vuex">
    <TheCounter />
    <button @click="addEleven">Add 11</button>
    <br/><br/>
    <ChangeCounter />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  data() {
    return {};
  },
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
  },
  methods: {
    addEleven() {
      this.$store.state.counter += 11;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>