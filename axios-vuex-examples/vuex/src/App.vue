<template>
  <div>
    <h1>
      {{ msg }}
    </h1>
    <p>{{ this.$store.state.test }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World!',
    }
  }
}
</script>

<style>

</style>
