<template>
  <Navbar :logo="logo_src" :alt="app_name"/>
  <router-view />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      logo_src: "/img/logo.png",
      app_name: "Make your Lunch",
    }
  },
};
</script>

<style>
* {
  font-family: "Helvetica", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
