import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routes/route.js'
import App from './App.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes,// short for `routes: routes`
  mode: "history",
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
