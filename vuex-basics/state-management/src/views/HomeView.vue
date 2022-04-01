<template>
  <div>
    <label>Nome</label>
    <p>jk</p>
    <input type="text" />
    <label>Sobrenome</label>
    <p>klçklç</p>
    <input type="text" />
    <label>Senha</label>
    <p>asdasd</p>
    <input type="password" />
    <label>Email</label>
    <p>iuuiiuo</p>
    <input type="email" />
    <button>Salvar</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {};
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
