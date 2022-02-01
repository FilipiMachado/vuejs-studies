<template>
  <form v-on:submit.prevent="addContact">
    <div>
      <label>Name</label>
      <input v-model="enteredName" type="text" />
    </div>
    <div>
      <label>Phone</label>
      <input v-model="enteredPhone" type="tel" />
    </div>
    <div>
      <label>E-mail</label>
      <input v-model="enteredEmail" type="email" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "NewFriend",
  emits: ['add-new-contact'],
  props: {},
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    addContact() {
      this.$emit('add-new-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
    },
  },
};
</script>
