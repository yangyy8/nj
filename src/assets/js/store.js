import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
var store =new Vuex.Store({
  state:{
    token:''||localStorage.getItem('TOKEN'),
    token:''||localStorage.getItem('UNAME')
  },
  mutations:{
    getToken(state,data){
      localStorage.setItem('TOKEN',data)
      state.token=data;
    },
    getUname(state,data){
      localStorage.setItem('UNAME',data)
      state.uname=data;
    }
  }
});
export default store;
