import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home
      component: () => import('@/components/home/Home')
    },
    
    {
      path: '/city',
      name: 'City',
      component: () => import('@/components/city/City')
    },
    {
      path: '/detail',
      name: 'Details',
      component: () => import('@/components/detail/Details')
    }
  ]
})
