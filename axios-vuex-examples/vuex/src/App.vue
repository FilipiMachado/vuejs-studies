<template>
  <div>
    <h1 v-for="(item, idx) in posts" :key="idx">{{ item.title }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('loadPosts')
  },
  computed: {
    ...mapState([
      'posts'
    ])
  },
}
</script>

<style>

</style>
