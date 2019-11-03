import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto';
import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/scss/bootstrap.scss';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './../node_modules/slick-carousel/slick/slick.css';
import './../node_modules/slick-carousel/slick/slick-theme.css';
import './styles.css';
import './main.scss';

Vue.config.productionTip = false;
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
