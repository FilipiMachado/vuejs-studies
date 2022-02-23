<template>
  <button :style="{color}" class="btn">{{ text }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
      text: String,
      color: String
    },
    data() {
      return {}
    },
}
</script>

<style scoped>

</style>