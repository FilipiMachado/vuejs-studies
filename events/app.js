/* const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() { */
/* e.preventDefault(); */
/*       alert("Submitted!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
 */
/* setName() {
  this.confirmedName = this.name;
},
increaseCounter(num) {
  this.counter += num;
},
decreaseCounter(num) {
  this.counter -= num;
},
addName(event) {
  this.name = event.target.value; 
},
submitForm(){
  alert("Submitted!")
}, */
/* counter: 0,
name: "",
confirmedName: "", */

const app = Vue.createApp({
  data() {
    return {
      counter: "",
    };
  },
  methods: {
  },
});

app.mount("#events");
