import App from './App'
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()