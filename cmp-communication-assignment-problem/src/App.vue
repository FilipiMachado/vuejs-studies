<template>
    <ActiveUser :username="user.name" :userage="user.age"/>
    <UserData v-on:set-data='setUserData'/>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'

export default {
    name: 'App',
    components: {
      ActiveUser,
      UserData
    },
    data() {
      return {
        user: {
          name: 'Zueiro',
          age: 25
        }
      }
    },
    methods: {
      setUserData(name, age){
        this.user = {
          name: name,
          age: +age
        }
      }
    }
    
// Task 1: 
// Add two components to the app: 
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice

// Task 2: Output both components side-by-side in your main App template

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component

}
</script>

<style scoped>

</style>




