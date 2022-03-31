<template>
  <div>
    <label>Nome</label>
    <p>{{ $store.state.user.first_name }}</p>
    <input v-model="myName" type="text" />
    <label>Sobrenome</label>
    <p>{{ $store.state.user.last_name }}</p>
    <input v-model="myLastName" type="text" />
    <label>Senha</label>
    <p>{{ $store.state.user.password }}</p>
    <input v-model="myPassword" type="password" />
    <label>Email</label>
    <p>{{ $store.state.user.email }}</p>
    <input v-model="myEmail" type="email" />
    <button @click="saveUser">Salvar</button>
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
      this.$store.commit("saveFirstName", this.myName);
      this.$store.commit("saveLastName", this.myLastName);
      this.$store.commit("savePassword", this.myPassword);
      this.$store.commit("saveEmail", this.myEmail);
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
p {
  color: #ff6347;
}
</style>
