<template>
  <section class="hero is-info is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          - Register -
        </h1>
        <h2 class="subtitle">
          To get access to this plant heaven!
        </h2>
        <RegisterForm />
      </div>
    </div>
  </section>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue';

export default {
  name: 'Register',
  components: {
    RegisterForm,
  },
};
</script>
