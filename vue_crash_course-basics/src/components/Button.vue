<template>
  <button v-on:click="onClick"
          :style="{background: color}" 
          class="btn">
    {{ text }}
  </button>
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
    methods: {
      onClick() {
        this.$emit('toggle-add-task')
      },
    }
}
</script>

<style scoped>

</style>