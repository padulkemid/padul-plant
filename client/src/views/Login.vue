<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          - Sign In -
        </h1>
        <h2 class="subtitle">
          To access endless plants!
        </h2>
        <LoginForm />
      </div>
    </div>
  </section>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
};
</script>
