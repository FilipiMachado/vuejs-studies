<template>
    <h3>{{ counter }}</h3>
    <p>We do more...</p>
</template>

<script>
export default {
    name:"FavoriteValue",
    data() {
        
    },
    computed: {
    counter(){
      return this.$store.getters.normalizedCounter
    }
  },
}
</script>

<style scoped>

</style>