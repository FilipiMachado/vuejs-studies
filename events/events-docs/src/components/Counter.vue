<template>
  <div>
    <h1>{{ counter }}</h1>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: ['counter'],
  data() {
    return {};
  },
};
</script>

<style scoped></style>
