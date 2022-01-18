const app = Vue.createApp({
    data() {
        return {
            greeting: "Welcome to Vue!",
            isVisible: false,
            isVisible2: false,
        }
    }
})

app.mount("#first-app")