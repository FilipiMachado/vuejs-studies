<template>
    <form v-on:click.prevent="onSubmit">
      <input v-model="newFriendText" type="text">
      <button>Send Form</button>
    </form>
</template>

<script>
export default {
    name: 'NewFriend',
    data() {
      return {
          newFriendText: ''
      }  
    },
    methods: {
      onSubmit() {
        console.log(this.newFriendText);
      }
    }
}
</script>
