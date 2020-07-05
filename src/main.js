import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
import App from './App.vue';
import router from './router';
import './styles/main.css';

Vue.config.productionTip = false;
Vue.use(AsyncComputed);

new Vue({
  ...App,
  router,
}).$mount('#app');
