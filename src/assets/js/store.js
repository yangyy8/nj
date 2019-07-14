import Vue from 'vue'
import Vuex from 'vuex'
import global_ from '../../Global.js'
import api from '../../api/index.js';
import {
  ToArray
} from './ToArray.js'

Vue.use(Vuex);
var store = new Vuex.Store({
  state: {
    token: localStorage.getItem('TOKEN') || '',
    wtoken: localStorage.getItem('WTOKEN') || '',
    serverip: localStorage.getItem('SERVERIP') || '',
    uname: localStorage.getItem('UNAME') || '',
    uid: localStorage.getItem('UID') || '',
    orgname: localStorage.getItem('ORGNAME') || '',
    orgid: localStorage.getItem('ORGID') || '',
    type: localStorage.getItem('Type') || '',
    ssdw: [],
    gjdq: [],
    zjzl: [],
    qzzl: [],
    rjkn: [],
    rjsy: [],
    qfjg: [],
    pcs: [],
    jzlx: [],
    zsxz: [],
    jzzt: [],
    xzqh: [],
    jtgx: [],
    sflx: [],
    xb: [],
    rjqzzl: [],
    dwlb:[],
    dwxz:[],
    zsbg:[],
    tlyxq:[],
    sf:[],
    clzt:[],
    sjly:[],
    rzfs:[],
    zflx:[],
    jzztlx:[],
    xxdm:[],
    erxxdm:[],
    shzt:[],
  },
  mutations: {
    getToken(state, data) {
      localStorage.setItem('TOKEN', data)
      state.token = data;
    },
    getWtoken(state, data) {
      localStorage.setItem('WTOKEN', data)
      state.wtoken = data;
    },
    getServerip(state, data) {
      localStorage.setItem('SERVERIP', data)
      state.serverip = data;
    },
    getUname(state, data) {
      localStorage.setItem('UNAME', data)
      state.uname = data;
    },
    getUid(state, data) {
      localStorage.setItem('UID', data)
      state.uid = data;
    },
    getOrgname(state, data) {
      localStorage.setItem('ORGNAME', data)
      state.orgname = data;
    },
    getOrgid(state, data) {
      localStorage.setItem('ORGID', data)
      state.orgid = data;
    },
    getType(state, data) {
      localStorage.setItem('Type', data)
      state.type = data;
    },
    getSsdw(state, data) {
      state.ssdw = data;
    },
    getGjdq(state, data) {
      state.gjdq = data;
    },
    getZjzl(state, data) {
      state.zjzl = data;
    },
    getQzzl(state, data) {
      state.qzzl = data;
    },
    getRjkn(state, data) {
      state.rjkn = data;
    },
    getRjsy(state, data) {
      state.rjsy = data;
    },
    getQfjg(state, data) {
      state.qfjg = data;
    },
    getPcs(state, data) {
      state.pcs = data;
    },
    getJzlx(state, data) {
      state.jzlx = data;
    },
    getZsxz(state, data) {
      state.zsxz = data;
    },
    getJzzt(state, data) {
      state.jzzt = data;
    },
    getXzqh(state, data) {
      state.xzqh = data;
    },
    getJtgx(state, data) {
      state.jtgx = data;
    },
    getSflx(state, data) {
      state.sflx = data;
    },
    getXB(state, data) {
      state.xb = data;
    },
    getRjqzzl(state, data) {
      state.rjqzzl = data;
    },
    getDwlb(state, data) {
      state.dwlb = data;
    },
    getDwxz(state, data) {
      state.dwxz = data;
    },
    getZsbg(state, data) {
      state.zsbg = data;
    },
    getTlyxq(state, data) {
      state.tlyxq = data;
    },
    getSf(state, data) {
      state.sf = data;
    },
    getClzt(state,data){
      state.clzt=data;
    },
    getSjly(state,data){
      state.sjly=data;
    },
    getRzfs(state,data){
      state.rzfs=data;
    },
    getZflx(state,data){
      state.zflx=data;
    },
    getJzztlx(state,data){
      state.jzztlx=data;
    },
    getXxdm(state,data){
      state.xxdm=data;
    },
    geterXxdm(state,data){
      state.erxxdm=data;
    },
    getShzt(state,data){
      state.shzt=data;
    }
  },
  actions: {
    getSsdw(context) {
      var formData = new FormData();
      formData.append("org", global_.org);
      formData.append("token",store.state.token);
      let p = formData;
      api.post(global_.aport1 + global_.ssdw, p,
        r => {
          context.commit('getSsdw', r.data)
        })
    },
    getGjdq(context) {
      api.get(global_.aport1 + global_.gjdq, null,
        r => {
          context.commit('getGjdq', ToArray(r.data))
        })
    },
    getZjzl(context) {
      api.get(global_.aport1 + global_.zjzl, null,
        r => {
          context.commit('getZjzl', ToArray(r.data))
        })
    },
    getQzzl(context) {
      api.get(global_.aport1 + global_.qzzl, null,
        r => {
          context.commit('getQzzl', ToArray(r.data))
        })
    },
    getRjkn(context) {
      api.get(global_.aport1 + global_.rjkn, null,
        r => {
          context.commit('getRjkn', ToArray(r.data))
        })
    },
    getRjsy(context) {
      api.get(global_.aport1 + global_.rjsy, null,
        r => {
          context.commit('getRjsy', ToArray(r.data))
        })
    },
    getQfjg(context) {
      api.get(global_.aport1 + global_.qfjg, null,
        r => {
          context.commit('getQfjg', ToArray(r.data))
        })
    },
    getPcs(context) {
      api.get(global_.aport1 + global_.pcs, null,
        r => {
          context.commit('getPcs', ToArray(r.data))
        })
    },
    getJzlx(context) {
      api.get(global_.aport1 + global_.jzlx, null,
        r => {
          context.commit('getJzlx', ToArray(r.data))
        })
    },
    getZsxz(context) {
      api.get(global_.aport1 + global_.zsxz, null,
        r => {
          context.commit('getZsxz', ToArray(r.data))
        })
    },
    getJzzt(context) {
      api.get(global_.aport1 + global_.jzzt, null,
        r => {
          context.commit('getJzzt', ToArray(r.data))
        })
    },
    getXzqh(context) {
      api.get(global_.aport1 + global_.xzqh, null,
        r => {
          context.commit('getXzqh', ToArray(r.data))
        })
    },
    getJtgx(context) {
      api.get(global_.aport1 + global_.jtgx, null,
        r => {
          context.commit('getJtgx', ToArray(r.data))
        })
    },
    getSflx(context) {
      api.get(global_.aport1 + global_.sflx, null,
        r => {
          context.commit('getSflx', ToArray(r.data))
        })
    },
    getXB(context) {
      api.get(global_.aport1 + global_.xb, null,
        r => {
          context.commit('getXB', ToArray(r.data))
        })
    },
    getRjqzzl(context) {
      api.get(global_.aport1 + global_.rjqzzl, null,
        r => {
          context.commit('getRjqzzl', ToArray(r.data))
        })
    },
    getDwlb(context) {
      api.get(global_.aport1 + global_.dwlb, null,
        r => {
          context.commit('getDwlb', ToArray(r.data))
        })
    },
    getDwxz(context) {
      api.get(global_.aport1 + global_.dwxz, null,
        r => {
          context.commit('getDwxz', ToArray(r.data))
        })
    },
    getZsbg(context) {
      api.get(global_.aport1 + global_.zsbg, null,
        r => {
          context.commit('getZsbg', ToArray(r.data))
        })
    },
    getTlyxq(context) {
      api.get(global_.aport1 + global_.tlyxq, null,
        r => {
          context.commit('getTlyxq', ToArray(r.data))
        })
    },
    getSf(context) {
      api.get(global_.aport1 + global_.sf, null,
        r => {
          context.commit('getSf', ToArray(r.data))
        })
    },
    getClzt(context){
      api.get(global_.aport1 + global_.clzt, null,
        r => {
          context.commit('getClzt', ToArray(r.data))
        })
    },
    getSjly(context){
      api.get(global_.aport1 + global_.sjly, null,
        r => {
          context.commit('getSjly', ToArray(r.data))
        })
    },
    getRzfs(context){
      api.get(global_.aport1 + global_.rzfs, null,
        r => {
          context.commit('getRzfs', ToArray(r.data))
        })
    },
    getZflx(context){
      api.get(global_.aport1 + global_.zflx, null,
        r => {
          context.commit('getZflx', ToArray(r.data))
        })
    },
    getJzztlx(context){
      api.get(global_.aport1 + global_.jzztlx, null,
        r => {
          context.commit('getJzztlx', ToArray(r.data))
        })
    },
    getXxdm(context){
      api.get(global_.aport1 + global_.xxdm, null,
        r => {
          context.commit('getXxdm', ToArray(r.data))
        })
    },
    geterXxdm(context){
      api.get(global_.aport1 + global_.erxxdm, null,
        r => {
          context.commit('geterXxdm', ToArray(r.data))
        })
    },
    getShzt(context){
      api.get(global_.aport1 + global_.shzt, null,
        r => {
          context.commit('getShzt', ToArray(r.data))
        })
    }
  }
});
export default store;
