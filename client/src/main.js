import Vue from 'vue';
import VueNoty from 'vuejs-noty';

import App from './App.vue';
import router from './router';
import store from './store';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'vuejs-noty/dist/vuejs-noty.css';

Vue.config.productionTip = false;

Vue.use(VueNoty);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
