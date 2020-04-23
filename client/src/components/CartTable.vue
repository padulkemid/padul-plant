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
        <tbody>
          <tr>
            <td>Anggrek</td>
            <td>5 pot</td>
            <td>Rp 250.000</td>
          </tr>
          <tr>
            <td>Lidah Buaya</td>
            <td>2 pot</td>
            <td>Rp 100.000</td>
          </tr>
          <tr>
            <td>Jeruk</td>
            <td>1 pot</td>
            <td>Rp 50.000</td>
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
};
</script>

<style scoped>
div {
  margin: 0 15%;
}
</style>
