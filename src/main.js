// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import './assets/css/normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './api/index.js';
import App from './App'
import global_ from './Global'
import router from './router'
import './assets/icon/iconfont.css'
import vueValidateEasy from './assets/js/vue-validate-easy'
var validators ={
   cname(val){
     var len = 0;
      for (var i=0; i<val.length; i++) {
          if (val.charCodeAt(i)>127 || val.charCodeAt(i)==94) {
               len += 3;
           } else {
               len ++;
           }
       }
     // var p = /^[a-zA-Z0-9]{0,35}$|^[\u4e00-\u9fa5]{0,11}$/.test(val)
     if(len>35) return '字符不能超过35位'
   },
   noCinese(val){
     var p = /[\u4E00-\u9FA5]/g.test(val)
     if(p) return '不可以输入中文'
   },
   number(val){
     var p = !(/^-?\d+(\.\d{1,5})?$/.test(val))
     if(p) return '请输入数字aaa'
   }
};
Vue.use(vueValidateEasy,{validators});
Vue.use(ElementUI);
Vue.use(Vuex);

Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.prototype.Global = global_;


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
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
