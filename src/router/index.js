import Vue from 'vue'
import Router from 'vue-router'
import loginUI from '@/components/loginUI'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginUI',
      component: loginUI
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
