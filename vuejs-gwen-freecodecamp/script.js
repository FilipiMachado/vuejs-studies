const app = Vue.createApp({
    data() {
        return {
            greeting: "Welcome to Vue!",
            isVisible: false,
            isVisible2: false,
        }
    },
    methods: {
        showBox(){
            this.isVisible = !this.isVisible
        },
        greet(greeting){
            console.log(greeting)
        }
    }
})
app.component("login-form", {
    template: `
        <form v-on:submit.prevent="handleSubmit">
            <h1>{{ title }}</h1>
            <h3>Email: </h3>
            <input type="email" v-model="email"/>
            <h3>Password: </h3>
            <input type="password" v-model="password"/>
            <button id="submit-button">Submit</button>
        </form>
    `,
    data(){
        return {
            title: "Login Form",
            email: "",
            password: "",
        }
    },
    methods: {
        handleSubmit(){
            console.log(this.email, this.password);
            this.email = ""
            this.password = ""
        }
    },
})

app.mount("#first-app")