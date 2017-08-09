import Vue from 'vue'
import Router from 'vue-router'
import Play from '@/pages/play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Play',
      component: Play
    }
    // {
    //   path: '/play',
    //   name: 'Play',
    //   component: Play
    // }
  ]
})
