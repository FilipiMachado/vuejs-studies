<template>
  <section>
    <header>
    <div>
      <h3>{{ fullName }}</h3>
      <BaseBadge :type="role" :caption="role.toUpperCase()" />
    </div>
    <p>{{ infoText }}</p>
    </header>
  </section>
</template>

<script>
import BaseBadge from './BaseBadge.vue'

export default {
  name: 'UserInfo',
  components: {
    BaseBadge
  },
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>