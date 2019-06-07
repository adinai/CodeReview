import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// eslint-disable-next-line import/order
import ElementUI from 'element-ui';
// eslint-disable-next-line import/first
import 'element-ui/lib/theme-chalk/index.css';
// eslint-disable-next-line import/order
import locale from 'element-ui/lib/locale/lang/en';


Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
