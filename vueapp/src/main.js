import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import News from './components/News'

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
