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

<style scoped>

</style>