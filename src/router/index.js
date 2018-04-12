import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/search'
import home from '@/components/home'
import cart from '@/components/cart'
import mine from '@/components/mine'
import classify from '@/components/classify'
import productDetial from '@/components/productDetial'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path:'/search',
      name:'search',
      component:search
    },
    {
      path:'/productDetial',
      name:productDetial,
      component:productDetial
    },
    {
      path:'/login',
      name:login,
      component:login
    }
  ],
  mode: 'history'
})
