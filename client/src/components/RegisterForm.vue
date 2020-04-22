<template>
  <form @submit.prevent="submitRegister">
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
        <input v-model="form.username" class="input" type="text" placeholder="Username" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
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
      <button type="submit" class="button is-warning is-medium is-fullwidth">
        Register
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        email: '',
        username: '',
        password: '',
      },
    };
  },
  methods: {
    submitRegister() {
      console.log(this.form);
    },
  },
};
</script>

<style scoped>
form {
  margin: 0 30%;
}
</style>
