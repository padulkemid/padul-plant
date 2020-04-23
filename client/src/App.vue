<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="https://webstockreview.net/images/plant-clipart-17.png" alt="Logo" />
          <h1 class="subtitle">- Padul Plants 🍀 -</h1>
        </router-link>
        <div
          class="navbar-burger"
          @click="showBurger = !showBurger"
          :class="{ 'is-active': showNav }"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showBurger }">
        <div class="navbar-end">
          <div class="navbar-item" v-if="!showNav">
            <router-link class="navbar-item" to="/login">
              <button class="button is-success is-fullwidth">
                <span>
                  Login
                </span>
                <span class="icon is-small">
                  <i class="fas fa-lock-open"> </i>
                </span>
              </button>
            </router-link>
            <router-link class="navbar-item" to="/register">
              <button class="button is-danger is-fullwidth">
                <span>
                  Register
                </span>
                <span class="icon is-small">
                  <i class="fas fa-user-plus"></i>
                </span>
              </button>
            </router-link>
          </div>
          <div class="navbar-item" v-else>
            <router-link class="navbar-item" to="/checkout">
              <button class="button is-danger is-fullwidth">
                <span class="icon is-small">
                  <i class="fas fa-shopping-cart"></i>
                </span>
                <span> : {{ getCartLength }}</span>
              </button>
            </router-link>
            <a class="navbar-item" @click="logout">
              <button class="button is-warning is-fullwidth">
                Logout
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
      showBurger: false,
      cartLength: 0,
    };
  },
  created() {
    this.loginCheck();
  },
  beforeUpdate() {
    this.loginCheck();
  },
  computed: {
    getCartLength() {
      return this.$store.state.cart.length;
    },
  },
  methods: {
    cartLengthUpdate() {
      const newCartLength = this.$store.state.cart.length;
      this.cartLength = newCartLength;
    },
    loginCheck() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.showNav = false;
      } else {
        this.showNav = true;
      }
    },
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    },
  },
  watch: {
    getCartLength(newVal) {
      if (newVal) {
        this.cartLengthUpdate();
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
