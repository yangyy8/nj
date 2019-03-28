import Vue from 'vue'
import Vuex from 'vuex'
import global_ from '../../Global.js'
import api from '../../api/index.js';
import {ToArray} from './ToArray.js'

Vue.use(Vuex);


var store =new Vuex.Store({
  state:{
    token:localStorage.getItem('TOKEN')||'',
    uname:localStorage.getItem('UNAME')||'',
    gjdq:[],
    zjzl:[],
    qzzl:[],
    rjkn:[],
    rjsy:[],
    qfjg:[],
    pcs:[],
    jzlx:[],
    zsxz:[],
    jzzt:[],
    xzqh:[]
  },
  mutations:{
    getToken(state,data){
      localStorage.setItem('TOKEN',data)
      state.token=data;
    },
    getUname(state,data){
      localStorage.setItem('UNAME',data)
      state.uname=data;
    },
    getGjdq(state,data){
      state.gjdq=data;
    },
    getZjzl(state,data){
      state.zjzl=data;
    },
    getQzzl(state,data){
      state.qzzl=data;
    },
    getRjkn(state,data){
      state.rjkn=data;
    },
    getRjsy(state,data){
      state.rjsy=data;
    },
    getQfjg(state,data){
      state.qfjg=data;
    },
    getPcs(state,data){
      state.pcs=data;
    },
    getJzlx(state,data){
      state.jzlx=data;
    },
    getZsxz(state,data){
      state.zsxz=data;
    },
    getJzzt(state,data){
      state.jzzt=data;
    },
    getXzqh(state,data){
      state.xzqh=data;
    },
  },
  actions:{
    getGjdq(context){
      api.get(global_.aport1+global_.gjdq, null,
          r => {
            context.commit('getGjdq',ToArray(r.data))
        })
    },
    getGjdq(context){
      api.get(global_.aport1+global_.gjdq, null,
          r => {
            context.commit('getGjdq',ToArray(r.data))
        })
    },
    getZjzl(context){
      api.get(global_.aport1+global_.zjzl, null,
          r => {
            context.commit('getZjzl',ToArray(r.data))
        })
    },
    getQzzl(context){
      api.get(global_.aport1+global_.qzzl, null,
          r => {
            context.commit('getQzzl',ToArray(r.data))
        })
    },
    getRjkn(context){
      api.get(global_.aport1+global_.rjkn, null,
          r => {
            context.commit('getRjkn',ToArray(r.data))
        })
    },
    getRjsy(context){
      api.get(global_.aport1+global_.rjsy, null,
          r => {
            context.commit('getRjsy',ToArray(r.data))
        })
    },
    getQfjg(context){
      api.get(global_.aport1+global_.qfjg, null,
          r => {
            context.commit('getQfjg',ToArray(r.data))
        })
    },
    getPcs(context){
      api.get(global_.aport1+global_.pcs, null,
          r => {
            context.commit('getPcs',ToArray(r.data))
        })
    },
    getJzlx(context){
      api.get(global_.aport1+global_.jzlx, null,
          r => {
            context.commit('getJzlx',ToArray(r.data))
        })
    },
    getZsxz(context){
      api.get(global_.aport1+global_.zsxz, null,
          r => {
            context.commit('getZsxz',ToArray(r.data))
        })
    },
    getJzzt(context){
      api.get(global_.aport1+global_.jzzt, null,
          r => {
            context.commit('getJzzt',ToArray(r.data))
        })
    },
    getXzqh(context){
      api.get(global_.aport1+global_.xzqh, null,
          r => {
            context.commit('getXzqh',ToArray(r.data))
        })
    },
  }
});
export default store;
