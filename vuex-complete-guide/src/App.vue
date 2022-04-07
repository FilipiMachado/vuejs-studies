<template>
  <base-container title="Vuex">
    <TheCounter />
    <button>Add 2</button>
    <br/><br/>
    <ChangeCounter />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  data() {
    return {};
  },
  components: {
    BaseContainer,
    ChangeCounter,
    TheCounter,
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