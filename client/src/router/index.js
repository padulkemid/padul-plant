import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Checkout from '../views/Checkout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const guard = (to, _, next) => {
  const token = localStorage.getItem('token');

  if (to.name !== 'Login' && !token) {
    if (to.name === 'Register') {
      next();
    } else {
      next('/login');
    }
  } else if (to.name === 'Login' && token) {
    next('/');
  } else {
    next();
  }
};

router.beforeEach(guard);

export default router;
