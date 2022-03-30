<template>
  <div>
    {{ $store.state.user.first_name }}
    {{ $store.state.user.password }}
    <label>Username</label>
    <input type="text" v-model="myName" />
    <label>Password</label>
    <input type="password" v-model="myPassword" />
    <button @click.prevent="saveUser" class="btn btn-primary">Salvar</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      myName: undefined,
      myPassword: undefined,
    };
  },
  methods: {
    saveUser() {
      // Mutation
      // this.$store.commit();
      // Action
      /* this.$store.dispatch("saveUserName", this.myName);
      this.$store.dispatch("saveUserPassword", this.myPassword); */
      this.$store.commit("saveUserName", this.myName);
      this.$store.commit("saveUserPassword", this.myPassword);
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
