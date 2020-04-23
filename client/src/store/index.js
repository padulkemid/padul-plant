import Vue from 'vue';
import Vuex from 'vuex';

import { login, register } from '@/assets/js/user.js';
import { list, buy, cartList, cleanCart } from '@/assets/js/product.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCT(state, payload) {
      state.items = payload;
    },
    SET_CART(state, payload) {
      state.cart = payload;
    },
  },
  actions: {
    userLogin(_, payload) {
      return login(payload).then((res) => {
        localStorage.setItem('token', res.token);
        return res;
      });
    },
    userRegister(_, payload) {
      return register(payload).then((res) => {
        return res;
      });
    },
    userCart() {
      cartList().then((res) => {
        console.log(res);
      });
    },
    userCleanCart() {
      cleanCart().then((res) => {
        console.log(res);
        // commit('SET_CART', res.cart)
      });
    },
    productList({ commit }) {
      list().then((res) => {
        commit('SET_PRODUCT', res.items);
      });
    },
    productBought(_, id) {
      buy(id).then((res) => {
        console.log(res);
      });
    },
  },
});

export default store;
