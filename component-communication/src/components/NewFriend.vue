<template>
  <form>
    <div>
      <label>Name</label>
      <input v-model="newFriendText" type="text" />
    </div>
    <div>
      <label>Phone</label>
      <input v-model="newFriendText" type="tel" />
    </div>
    <div>
      <label>E-mail</label>
      <input v-model="newFriendText" type="email" />
    </div>
    <div>
      <button v-on:click.prevent="onSubmit">Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "NewFriend",
  props: {},
  data() {
    return {
      newFriendText: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.newFriendText);
    },
  },
};
</script>
