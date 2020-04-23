<template>
  <section>
    <div v-if="!getCart.length">
      <h1 class="subtitle">
        Nothing inside cart yet.
      </h1>
    </div>
    <div v-else>
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
        <button @click="openModal" class="button is-success is-medium">
          <span>Checkout</span>
          <span class="icon is-small">
            <i class="fas fa-money-bill-wave"></i>
          </span>
        </button>
      </div>
      <div class="modal" :class="showModal ? 'is-active' : ''">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Are you sure?</p>
          </header>
          <section class="modal-card-body">
            This action <b>cannot be reversed!</b><br />
            Are you really sure want to checkout?
          </section>
          <footer class="modal-card-foot">
            <button @click="checkout" class="button is-success">Checkout!</button>
            <button @click="showModal = false" class="button">Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CartTable',
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    getCart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    checkout() {
      const cart = this.$store.state.cart;

      for (let i = 0; i < cart.length; i++) {
        const payload = {
          data: {
            qty: cart[i].qty,
          },
          id: cart[i].id,
        };

        this.$store.dispatch('userCleanCart', payload);
      }

      this.$store.dispatch('userPristineCart');
      this.$noty.success('Thank you very much!');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
div {
  margin: 0 15%;
}
</style>
