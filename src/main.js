import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

import $$ from './libs'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import '@/assets/css/css.css'


import ElementUI from 'element-ui'
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$$ = $$

Vue.prototype.toUrl = function(url, params) {
  this.$router.push({path: url, query: params})
}
Vue.prototype.msgError = function(txt) {
  if (txt && txt.error) {
    txt = txt.error
  }
  this.$message({
    showClose: true,
    message: txt,
    type: 'error',
    customClass:'mzindex'
  })
}

Vue.prototype.msgSuccess = function(txt) {
  this.$message({
    showClose: true,
    message: txt,
    type: 'success',
    customClass:'mzindex'
  })
}

Vue.prototype.msgWarning = function(txt) {
  this.$message({
    showClose: true,
    message: txt,
    type: 'warning',
    customClass:'mzindex'
  })
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
