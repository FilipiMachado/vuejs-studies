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

/* const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Goal A",
      courseGoalB: "Goal B",
      vueLink: "https://v3.vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randNumber = Math.random();
      if (randNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
 */

const app = Vue.createApp({
  data(){
    return {
      courseGoal: [1,2,3],
    }
  }
});

app.mount("#user-goal") 