<template>
  <base-container title="Vuex">
    <TheCounter />
    <button @click="addTwo">Add 2</button>
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
    addTwo() {
      //this.$store.commit('increaseCounter', {value: 2});
      this.$store.commit({
        type: 'increaseCounter',
        value: 2,
      });
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