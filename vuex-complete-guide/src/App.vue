<template>
  <base-container title="Vuex">
    <TheCounter />
    <button @click="addTwo">Add 2</button>
    <br/><br/>
    <ChangeCounter />
    <FavoriteValue />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  data() {
    return {};
  },
  components: {
    BaseContainer,
    ChangeCounter,
    TheCounter,
    FavoriteValue,
  },
  methods: {
    addTwo() {
      this.$store.commit({
        type: 'increaseTwo',
        value: 2,
      })
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