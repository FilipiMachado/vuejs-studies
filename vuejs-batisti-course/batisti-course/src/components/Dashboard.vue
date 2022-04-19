<template>
  <div class="lunch-table">
    <div>
      <Message v-if="msgIsActive" :msg="msg"/>
      <div class="lunch-table-heading">
        <div class="order-id">#:</div>
        <div>Client:</div>
        <div>Bread:</div>
        <div>Meat:</div>
        <div>Optionals:</div>
        <div>Actions:</div>
      </div>
    </div>
    <div class="lunch-table-rows">
      <div v-for="data in ordersData" 
           :key="data.id" 
           class="lunch-table-row">
        <div class="order-number">{{ data.id }}</div>
        <div>{{ data.name }}</div>
        <div>{{ data.bread }}</div>
        <div>{{ data.meat }}</div>
        <div>
          <ul>
            <li v-for="(optional, idx) in data.optionals" :key="idx">{{ optional }}</li>
          </ul>
        </div>
        <div>
          <select name="status" class="status" @change="updateBurger($event, data.id)">
            <option value="">Select</option>
            <option v-for="s in status" 
                    :key="s.id" 
                    :value="s.type" 
                    :selected="data.status == s.type">
              {{ s.type }}
            </option>
          </select>
          <button @click="deleteBurger(data.id)" 
                  class="delete-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from '../components/Message.vue'

export default {
  name: 'DashBoard',
  components: {
    Message,
  },
  data() {
    return {
      burgers: undefined,
      burgers_id: undefined,
      status: [],
      ordersData: undefined,
      msg: undefined,
      msgIsActive: false,
    }
  },
  mounted() {
    this.getOrders()
  },
  methods: {
    async getOrders() {
      const req = await fetch('http://localhost:3000/burgers')
      const data = await req.json()
      
      this.ordersData = data

      this.getStatus()
    },
    async getStatus() {
      const req = await fetch('http://localhost:3000/status')
      const data = await req.json()

      this.status = data
    },
    async deleteBurger(id) {
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: 'DELETE',
      })

      const res = await req.json()

      console.log(res)

      this.msgIsActive = !this.msgIsActive
      this.msg = `Order ${id} successfully deleted!`

      setTimeout(() => {
        this.msg = ''
        this.msgIsActive = !this.msgIsActive
      }, 5000);

      this.getOrders()
    },
    async updateBurger(e, id) {
      const option = e.target.value

      const dataJson = JSON.stringify({ status: option })

      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      })

      const res = await req.json()

      if (res.status == '') {
        return
      }

      this.msgIsActive = !this.msgIsActive
      this.msg = `Order ${id} changed to ${res.status}!`

      setTimeout(() => {
        this.msg = ''
        this.msgIsActive = !this.msgIsActive
      }, 5000);

      console.log(res)
    },
  },
};
</script>

<style scoped>
.lunch-table {
  max-width: 1200px;
  margin: 0 auto;
}

.lunch-table-heading,
.lunch-table-rows,
.lunch-table-row {
    display: flex;
    flex-wrap: wrap;
}

.lunch-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

.lunch-table-heading div,
.lunch-table-row div {
  width: 19%;
}

.lunch-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

.lunch-table-heading .order-id,
.lunch-table-row .order-number {
  width: 5%;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn {
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

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
