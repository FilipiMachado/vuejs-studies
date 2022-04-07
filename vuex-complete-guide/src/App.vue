<template>
  <base-container title="Vuex">
    <button>Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  data() {
    return {};
  },
  components: {
    BaseContainer,
  },
  methods: {
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