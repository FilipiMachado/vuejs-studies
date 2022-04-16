<template>
  <div>
    <div>
      <form class="lunch-form">
        <div class="input-container">
          <label for="name">Your Name:</label>
          <input type="text" id="name" name="name" v-model="name" placeholder="Enter your name">
        </div>
        <div class="input-container">
          <label for="bread">Choose the bread:</label>
          <select name="bread" id="bread" v-model="bread">
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
        <div id="optionals-container" class="input-container">
          <label class="optionals-title" for="meat">Choose the optionals:</label>
          <div class="checkbox-container">
            <input type="checkbox" name="optionals" v-model="optionals" value="salami">
            <span>Salami</span>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="optionals" v-model="optionals" value="salami">
            <span>Salami</span>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="optionals" v-model="optionals" value="salami">
            <span>Salami</span>
          </div>
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Create my lunch">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LunchForm',
  data() {
    return {
      name: undefined,
      bread: undefined,
      breadData: undefined,
      meat: undefined,
      meatData: undefined,
      optionals: [],
      optionalsData: undefined,
      status: "Requested",
      msg: undefined,
    }
  },
  methods: {
    async getIngredients() {
      const req = await fetch('http://localhost:3000/ingredients')
      const data = await req.json()
    },
  },
}
</script>

<style scoped>
.lunch-form {
  max-width: 400px;
  margin: 0 auto;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}
input, 
select {
  padding: 5px 10px;
  width: 300px;
}
#optionals-container {
  flex-direction: row;
  flex-wrap: wrap;
}
.optionals-title {
  width: 100%;
}
.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}
.checkbox-container span,
.checkbox-container input {
  width: auto;
}
.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}
.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: .5s;
}
.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>