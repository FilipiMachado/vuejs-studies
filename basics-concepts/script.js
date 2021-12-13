/* const ListRendering = {
  data() {
    return {
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
    };
  },
};

Vue.createApp(ListRendering).mount("#list-rendering");
 */

/* const app = Vue.createApp({
  data(){
    return {
      courseGoal: "Finish the course and learn Vue!"
    }
  }
});

app.mount("#user-goal");
 */

const app = Vue.createApp({
  data() {
    return {
      message: "Some Text",
      vueLink: "https://v3.vuejs.org",
      helloWorld() {
        console.log("Hello World")
      }
    };
  },
});

app.mount("#user-goal")
