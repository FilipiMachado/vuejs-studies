<template>
    <form v-on:click.prevent="submitData">
        <input type="text" placeholder="Your Name" v-model="enteredName" />
        <input type="number" placeholder="Your Age" v-model="enteredAge" />
        <button>Submit</button>
    </form>
</template>

<script>
export default {
  name: "UserData",
  emits: ['set-data'],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData(){
        this.$emit("set-data", this.enteredName, this.enteredAge)
    }
  },
};
</script>

<style scoped></style>
