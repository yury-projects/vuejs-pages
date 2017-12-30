import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'Vuex'

import store from './store/index'

import App from './App.vue'
import TodoApp from './components/TodoApp.vue'
import SettingsApp from './components/SettingsApp.vue'
import ChatBotApp from './components/ChatBotApp.vue'

Vue.use(Router)
Vue.use(VueResource)


Vue.http.interceptors.push((request, next) => {
  request.headers.set('Accept', 'application/json')
  request.headers.set('Content-Type', 'application/json')
  next()
})

const routes = [
  { path: '/todo', component: TodoApp },
  { path: '/settings', component: SettingsApp },
  { path: '/chatbot', component: ChatBotApp }
]

const router = new Router({
  routes // short for `routes: routes`
})

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})

// const app = new Vue({
  // router
// }).$mount('#app')
