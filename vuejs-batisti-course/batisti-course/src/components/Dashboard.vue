<template>
  <div class="lunch-table">
    <div>
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
      <div class="lunch-table-row">
        <div class="order-number">1</div>
        <div>Fil</div>
        <div>Pão de Trigo</div>
        <div>Maminha</div>
        <div>
          <ul>
            <li>Salami</li>
            <li>Tomato</li>
          </ul>
        </div>
        <div>
          <select name="status" class="status">
            <option value="">Select the lunch status</option>
          </select>
          <button class="delete-btn">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  data() {
    return {}
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
.burger-table-row div {
  width: 19%;
}
</style>
