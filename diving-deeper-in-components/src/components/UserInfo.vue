<template>
  <BaseCard>
    <header>
    <div>
      <h3>{{ fullName }}</h3>
      <BaseBadge :type="role" :caption="role.toUpperCase()" />
    </div>
    <p>{{ infoText }}</p>
    </header>
  </BaseCard>
</template>

<script>
import BaseBadge from './BaseBadge.vue'
import BaseCard from './BaseCard.vue'

export default {
  name: 'UserInfo',
  components: {
    BaseBadge,
    BaseCard
  },
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>

</style>