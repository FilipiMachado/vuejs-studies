<template>
  <div class="burger-table">
    <div>
      <div class="burger-table-heading">
        <div class="order-id">#:</div>
        <div>Client:</div>
        <div>Bread:</div>
        <div>Meat:</div>
        <div>Optionals:</div>
        <div>Actions:</div>
      </div>
    </div>
    <div class="burger-table-rows">
      <div class="burger-table-row">
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

</style>
