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
      <div class="buttons">
        <button class="button is-success is-fullwidth">
          <span>Add</span>
          <span class="icon is-small">
            <i class="fas fa-shopping-cart"></i>
          </span>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['product'],
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
