<template>
  <div>
    <Message v-if="msgIsActive" :msg="msg"/>
    <div>
      <form @submit.prevent="createLunch" method="POST" class="lunch-form">
        <div class="input-container">
          <label for="name">Your Name:</label>
          <input type="text" 
                 id="name" 
                 name="name" 
                 v-model="name" 
                 placeholder="Enter your name"/>
        </div>
        <div class="input-container">
          <label for="bread">Choose the bread:</label>
          <select name="bread" id="bread" v-model="bread">
            <option value="">Select your bread</option>
            <option v-for="bread in breadData" 
                    :key="bread.id"
                    :value="bread.type">
              {{ bread.type }}
            </option>
          </select>
        </div>
        <div class="input-container">
          <label for="meat">Choose the meat:</label>
          <select name="meat" id="meat" v-model="meat">
            <option value="">Select your meat</option>
            <option v-for="meat in meatData" 
                    :key="meat.id"
                    :value="meat.type">
              {{ meat.type }}
            </option>
          </select>
        </div>
        <div id="optionals-container" class="input-container">
          <label class="optionals-title" for="optionals">Choose the optionals:</label>
          <div class="checkbox-container" v-for="optional in optionalsData" :key="optional.id">
            <input type="checkbox" 
                   name="optionals" 
                   v-model="optionals" 
                   :value="optional.type">
            <span>{{ optional.type }}</span>
          </div>
        </div>
        <div class="input-container">
          <input type="submit" 
                 class="submit-btn" 
                 value="Create my lunch">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Message from '../components/Message.vue'

export default {
  name: 'LunchForm',
  components: {
    Message,
  },
  data() {
    return {
      name: undefined,
      bread: undefined,
      meat: undefined,
      optionals: [],
      breadData: undefined,
      meatData: undefined,
      optionalsData: undefined,
      status: "Requested",
      msg: undefined,
      msgIsActive: false,
    }
  },
  mounted() {
    this.getIngredients()
  },
  methods: {
    async getIngredients() {
      const req = await fetch('http://localhost:3000/ingredients')
      const data = await req.json()
      
      this.breadData = data.breads
      this.meatData = data.meats
      this.optionalsData = data.optionals
    },
    async createLunch() {
      const data = {
        name: this.name,
        meat: this.meat,
        bread: this.bread,
        optionals: Array.from(this.optionals),
        status: "Requested",
      }
      
      const dataJson = JSON.stringify(data)

      const req = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      })

      const res = await req.json()

      this.msgIsActive = !this.msgIsActive
      this.msg = `Order ${res.id} successfully requested!`

      this.name = ''
      this.meat = ''
      this.bread = ''
      this.optionals = []
    },
    showSelectedIngredients() {
      console.log(this.name, this.bread, this.meat)
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