<template>
  <base-container title="Vuex">
    <button>Add 2</button>
    <br/><br/>
    <ChangeCounter />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  data() {
    return {};
  },
  components: {
    BaseContainer,
    ChangeCounter,
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