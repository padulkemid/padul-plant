<template>
  <article class="media has-background-info">
    <figure class="media-left">
      <p class="image is-128x128">
        <img :src="product.image_url" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <strong class="has-text-white">{{ product.name }}</strong>
        <hr />
        <div v-if="product.stock == 0">
          Item is unavailable right now.
        </div>
        <div v-else>
          Stock available: <strong class="has-text-white subtitle">{{ product.stock }}</strong>
        </div>
        <br />
        Last Updated on
        <strong class="has-text-white">{{
          new Date(product.updatedAt).toString().slice(0, 21)
        }}</strong>
      </div>
    </div>
    <div class="media-right">
      <div class="buttons">
        <button class="button is-static is-fullwidth">Rp. {{ product.price }}</button>
      </div>
      <form @submit.prevent="buy">
        <div class="field">
          <div class="control">
            <input v-model="qty" class="input" type="number" placeholder="Quantity" required />
          </div>
        </div>
        <div class="buttons">
          <button type="submit" class="button is-success is-fullwidth">
            <span>Add</span>
            <span class="icon is-small">
              <i class="fas fa-shopping-cart"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['product'],
  data() {
    return {
      qty: '',
    };
  },
  methods: {
    buy() {
      const { id, name, image_url, price, stock } = this.product;
      const qty = Number(this.qty);
      const struct = {
        id,
        name,
        image_url,
        price,
        stock,
        qty,
      };

      if (qty == 0) {
        this.$noty.error('How much did you want to buy?');
      } else if (qty > stock) {
        this.$noty.error(`Item is only available for ${stock} bundle`);
      } else {
        this.$store.dispatch('productBought', struct);
        this.$noty.success(`${name} added to cart!`);
      }

      this.qty = '';
    },
  },
};
</script>

<style scoped>
article {
  padding: 2%;
  margin: 2% 15%;
}

hr {
  border: 1px solid white;
  margin: 2% 0;
}
</style>
