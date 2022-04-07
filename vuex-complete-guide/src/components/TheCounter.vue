<template>
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  name: 'TheCounter',
  data() {
    return {};
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  }
};
</script>
