<template>
  <form v-on:submit.prevent="onSubmit">
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
  emits: ['add-contact'],
  props: {},
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit('add-contact')
    },
  },
};
</script>
