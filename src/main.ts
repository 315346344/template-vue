import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/element.js'
// 全局css
import '@/assets/css/reset.css'
import '@/assets/css/global.scss'
// icon
// import '@/assets/icon/iconfont.css'

import axios from 'axios'
// 请求根路径
// axios.defaults.baseURL = 'http://10.10.10.155/'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
