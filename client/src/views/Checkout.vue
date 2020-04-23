<template>
  <section class="hero is-light is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          - Checkout -
        </h1>
        <h2 class="subtitle">
          This is your shopping cart list
        </h2>
        <CartTable />
      </div>
    </div>
  </section>
</template>

<script>
import CartTable from '@/components/CartTable.vue';

export default {
  name: 'Checkout',
  components: {
    CartTable,
  },
};
</script>
