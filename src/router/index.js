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
      redirect:'/home',
      meta:{
        login:true
      }
    },
    {
      path: '/',
      component: home,
      meta:{
        login:true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{
        login:true
      }
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
      component: classify,
      meta:{
        login:true
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta:{
        login:true
      }
    },
    {
      path:'/search',
      name:'search',
      component:search,
      meta:{
        login:true
      }
    },
    {
      path:'/productDetial',
      name:productDetial,
      component:productDetial,
      meta:{
        login:true
      }
    },
    {
      path:'/login',
      name:login,
      component:login,
      meta:{
        login:true
      }
    }
  ],
  mode: 'history'
})

// router.beforeEach((to,from,next) => {
//   if(to.matched.some((item) => item.meta.login)){
//     let intro = router.app.$local.fetch("miPre");
//     console.log(intro);
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
