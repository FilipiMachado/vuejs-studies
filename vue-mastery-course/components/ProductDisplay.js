app.component('product-display', {
    template: `
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
    `
})