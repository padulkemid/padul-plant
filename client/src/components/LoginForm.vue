<template>
  <form @submit.prevent="submitLogin">
    <div class="field">
      <p class="control has-icons-left">
        <input v-model="form.email" class="input" type="email" placeholder="Email" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input v-model="form.password" class="input" type="password" placeholder="Password" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="buttons">
      <button type="submit" class="button is-link is-medium is-fullwidth">
        Login
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    formPristine() {
      this.form.email = '';
      this.form.password = '';
    },
    submitLogin() {
      const { email, password } = this.form;
      const struct = {
        email,
        password,
      };

      this.$store.dispatch('userLogin', struct).then((res) => {
        this.formPristine();

        if (!res.token) {
          this.$noty.error(res.message);
        } else {
          this.$noty.info(res.message);
          this.$router.push('/');
        }
      });
    },
  },
};
</script>

<style scoped>
form {
  margin: 0 30%;
}
</style>
