<template>
  <div>
    <p>test</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('loadPosts').then((response) => {
        console.log(response)
      })
    }, 1000)
  },
  data () {
    return {}
  },
}
</script>

<style>

</style>
