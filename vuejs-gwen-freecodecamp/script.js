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
        <div>
            <h3>Email: </h3>
            <input type="email"/>
            <h3>Password: </h3>
            <input type="password"/>
        </div>
    `
})

app.mount("#first-app")