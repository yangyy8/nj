import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
var store =new Vuex.Store({
  state:{
    token:''||localStorage.getItem('TOKEN')
  },
  mutations:{
    getToken(state,data){
      localStorage.setItem('TOKEN',data)
      state.token=data;
    }
  }
});
export default store;
