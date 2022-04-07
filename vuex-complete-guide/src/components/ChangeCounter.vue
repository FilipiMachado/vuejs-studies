<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  name: 'ChangeCounter',
  data() {
    return {};
  },
  methods: {
    addOne() {
      this.$store.commit('incrementOne');
    },
  },
};
</script>
