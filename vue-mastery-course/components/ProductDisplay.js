app.component('product-display', {
    template: 
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
          <div class="product-image">
              <img :src="image"
                   :class="{'out-of-stock-img': !inStock}"
              />
          </div>
          <div class="product-info">
            <h1 v-if="onSale">{{ newBrand }}</h1>
            <p v-if="inStock">Em Estoque</p>
            <p v-else>Fora de Estoque</p>
            
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
              <br />
              <li v-for="size in sizes" :key="size.id">Tamanho: {{ size.size }}</li>
              <br />
              <li v-for="(variant, index) in variants" 
                  :key="variant.id"
                  v-on:mouseover="updateVariant(index)"
                  class="color-circle"
                  :style="{ backgroundColor: variant.color }"
                  >
              </li>
            </ul>
            <button class="button" 
                    :class="{ disabledButton: !inStock }"
                    v-on:click="addToCart"
                    :disabled="!inStock">
                      Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    `,
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