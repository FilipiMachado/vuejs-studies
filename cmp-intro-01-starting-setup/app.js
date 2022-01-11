const app = Vue.createApp({
    data(){
        return {
            friends: {
                id: "zueiro",
                name: "Zueiro Lorenz",
                phone: "40028922"
            }
        }
    }
})

app.mount("#app")