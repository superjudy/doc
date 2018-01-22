import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/search'
import home from '@/components/home'
import cart from '@/components/cart'
import mine from '@/components/mine'
import classify from '@/components/classify'
import productDetial from '@/components/productDetial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      
      children: [ 
    　　　{ 
            path: 'home',
            component: home
    　　  },
          { 
      　　　　path: 'cart', 
        　　　component: cart 
      　　 },
          {
            path:'classify',
            component:classify
          },
          {
            path:'mine',
            component:mine
          }
    　　]
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
      path:'*',
      redirect:'/'
    }
  ],
  mode: 'history'
})
