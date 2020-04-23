import Vue from 'vue';
import Vuex from 'vuex';

import { login, register } from '@/assets/js/user.js';
import { list, cleanCart } from '@/assets/js/product.js';

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
    userCart({ commit }) {
      let cart = JSON.parse(localStorage.getItem('cartList'));
      if (!cart) {
        commit('SET_CART', []);
      } else {
        commit('SET_CART', cart);
      }
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
    productBought({ state, commit }, payload) {
      let tempCart = state.cart;
      tempCart.push(payload);
      localStorage.setItem('cartList', JSON.stringify(tempCart));
      commit('SET_CART', tempCart);
    },
  },
});

export default store;
