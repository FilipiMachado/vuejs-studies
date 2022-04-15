<template>
  <div>
    <p>Message Component</p>
    <div>
      <form class="lunch-form">
        <div class="input-container">
          <label for="name"></label>
          <input type="text" id="name" name="name" v-model="name" placeholder="Enter your name">
        </div>
        <div class="input-container">
          <label for="bread">Choose the bread:</label>
          <select name="bread" id="bread">
            <option value="">Select your bread</option>
            <option value="coarse">Coarse bread</option>
          </select>
        </div>
        <div class="input-container">
          <label for="meat">Choose the meat:</label>
          <select name="meat" id="meat" v-model="meat">
            <option value="">Select your meat</option>
            <option value="rumptail">Rump tail</option>
          </select>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        name: undefined,
        meat: undefined,
      }
    },
}
</script>

<style scoped>

</style>