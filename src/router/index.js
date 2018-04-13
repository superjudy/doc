import Vue from 'vue'
import Router from 'vue-router'

const search = () => import('@/components/search');
const home = () => import('@/components/home');
const cart = () => import('@/components/cart');
const mine = () => import('@/components/mine');
const classify = () => import('@/components/classify');
const productDetial = () => import('@/components/productDetial');
const login = () => import('@/components/login');

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path:'*',
      redirect:'/home'
    },
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
      component: cart,
      meta:{
        login:false
      }
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

// router.beforeEach((to,from,next) => {
//   if(to.matched.some((item) => item.meta.login)){
//     let intro = router.app.$local.fetch("miPre")
//     if(intro.login){
//       next();
//     }else{
//       router.push({
//         path:'/login'
//       })
//     }
//   }  
// })

export default router
