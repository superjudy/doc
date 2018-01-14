// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';
import Vuex from 'vuex'
import store from './vuex/store'
import "./components/common/style/reset.css";
import "./components/common/fonts/font.css";
Vue.use(Vuex);

Vue.use(Mint);
Vue.component(Swipe.name, Swipe);
/* Vue.component(SwipeItem.name, SwipeItem); */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
