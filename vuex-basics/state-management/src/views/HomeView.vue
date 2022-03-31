<template>
  <div>
    <label>Nome</label>
    <input v-model="myName" type="text" />
    <label>Sobrenome</label>
    <input v-model="myLastName" type="text" />
    <label>Senha</label>
    <input v-model="myPassword" type="password" />
    <label>Email</label>
    <input v-model="myEmail" type="email" />
    <button>Salvar</button>
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

button {
  border: none;
  background-color: #ff6347;
  padding: 12px 15px;
  color: #fff;
  border-radius: 10px;
}

button:hover {
  background-color: #fc3917;
  transition: all 0.5s;
}
</style>
