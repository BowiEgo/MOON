import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Play from '@/pages/play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    }
  ]
})
