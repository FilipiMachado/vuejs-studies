const app = Vue.createApp({
    data(){
        return {
            product: "Socks",
            brand: 'Vue Mastery',
            selectedVariant: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'Green', image: "./assets/images/socks_green.jpg", quantity: 50},
                { id: 2235, color: 'Blue', image: "./assets/images/socks_blue.jpg", quantity: 0}
            ],
            sizes: [
                {id: 1, size: 'P'},
                {id: 2, size: 'M'},
                {id: 3, size: 'G'}
            ],
            cart: 0
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed: {
        newBrand(){
            return `${this.brand} ${this.product}`
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        isOnSale(){
            if(this.onSale === false) {
                `${this.brand} ${this.product} is on sale`
            }
        }
    }
})

app.mount('#app')