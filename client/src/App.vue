<template>
  <div id="app">
    <div id="nav">
      <div v-if="!showNav">
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>
      </div>
      <div v-else>
        <router-link to="/">Home</router-link> |
        <router-link to="/checkout">Cart : 0</router-link> |||
        <a @click="logout">Logout</a>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
  created() {
    this.loginCheck();
  },
  beforeUpdate() {
    this.loginCheck();
  },
  methods: {
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
