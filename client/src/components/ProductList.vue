<template>
  <article class="media has-background-info">
    <figure class="media-left">
      <p class="image is-128x128">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <strong class="has-text-white">Anggrek</strong>
        <hr />
        Stock available: 5
        <br />
        Last Updated on 29 Mar 2020, 19:30
      </div>
    </div>
    <div class="media-right">
      <div class="buttons" style="margin: 75% 0 auto;">
        <button class="button is-success">
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
