<template>
  <section>
    <div class="table-container">
      <table class="table is-bordered is-striped is-hoverable is-fullwidth">
        <thead>
          <tr class="is-selected">
            <th>Plant</th>
            <th>Qty.</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody v-for="item in getCart" :key="item.id">
          <tr>
            <td>{{ item.name }}</td>
            <td>{{ item.qty }} bundle</td>
            <td>Rp. {{ item.price * item.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="buttons is-centered">
      <button class="button is-success is-medium">
        <span>Checkout</span>
        <span class="icon is-small">
          <i class="fas fa-money-bill-wave"></i>
        </span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CartTable',
  computed: {
    getCart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped>
div {
  margin: 0 15%;
}
</style>
