import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pouet from '@/components/Pouet'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pouet',
      name: 'Pouet',
      component: Pouet
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
})
