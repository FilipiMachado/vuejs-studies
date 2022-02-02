<template>
  <div>
    <h2>Username</h2>
    <h3>Age</h3>
  </div>
</template>

<script>
export default {
    name: 'ActiveUser',
    props: [],
    data() {
        return {
            userData: {
                name: 'Zueiro',
                age: '25'
            }
        }
    },
}
</script>

<style scoped>

</style>