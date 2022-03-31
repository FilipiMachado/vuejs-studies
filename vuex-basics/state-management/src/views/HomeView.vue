<template>
  <div>
    <label>Nome</label>
    <input type="text" />
    <label>Sobrenome</label>
    <input type="text" />
    <label>Senha</label>
    <input type="password" />
    <label>Email</label>
    <input type="email" />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      myName: undefined,
      myLastName: undefined,
      myPassword: undefined,
      myEmail: undefined,
    };
  },
  methods: {
    saveUser() {
      // Mutation
      // this.$store.commit();
      // Action
      // this.$store.dispatch();
    },
  },
};
</script>

<style scoped>
input,
label {
  display: block;
  margin: 20px auto;
}
</style>
