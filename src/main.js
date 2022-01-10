import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store/index'
import router from './router/index'


Vue.config.productionTip = false

/* Styles */
import './assets/styles/style.css';

new Vue({
  vuetify,store,router,
  render: h => h(App)
}).$mount('#app')
