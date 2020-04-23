<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          This is our plants!
        </h1>
        <h2 class="subtitle">
          List full of leafy-ish stuffs!
        </h2>
        <div v-if="getProducts.length">
          <ProductList v-for="item in getProducts" :key="item.id" :product="item" />
        </div>
        <div v-else>
          <button class="button is-loading is-info is-large">Loading</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'Home',
  created() {
    this.$store.dispatch('productList');
  },
  computed: {
    getProducts() {
      return this.$store.state.items;
    },
  },
  components: {
    ProductList,
  },
};
</script>
