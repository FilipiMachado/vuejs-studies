<template>
  <div>
    {{ $store.state.user.first_name }}
    <input type="text" v-model="myName" />
    <button @click.prevent.stop="saveName">Salvar</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      myName: undefined,
    };
  },
  methods: {
    saveName() {},
  },
};
</script>

<style scoped>
input {
  display: block;
  margin: 20px auto;
}
</style>
