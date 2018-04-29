import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    goodsCar: [],
    list:[],
    addInfos:[]
  },
  mutations:{
    changeData(state,list){
        state.list = list;
    }
  },
  actions:{
    getData({commit}){
      axios.get('https://easy-mock.com/mock/5ac8b1e8dc9d9d4f37716774/example/milletData')
        .then((res) => {
          console.log(res.data);
          commit('changeData', res.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
})

export default store