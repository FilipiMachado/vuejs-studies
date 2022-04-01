<template>
  <div>
    <label>Nome</label>
    <p>{{ data.firstName }}</p>
    <input v-model="newFirstName" type="text" />
    <label>Sobrenome</label>
    <p>{{ data.lastName }}</p>
    <input v-model="newLastName" type="text" />
    <label>Senha</label>
    <p>{{ data.password }}</p>
    <input v-model="newPassword" type="password" />
    <label>Email</label>
    <p>{{ data.email }}</p>
    <input v-model="newEmail" type="email" />
    <button @click="saveUser">Salvar</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      newFirstName: undefined,
      newLastName: undefined,
      newPassword: undefined,
      newEmail: undefined,
      data: {
        firstName: "fil",
        lastName: "machado",
        password: "123123",
        email: "machado@localhost.com",
      },
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
p {
  color: #ff6347;
}
</style>
