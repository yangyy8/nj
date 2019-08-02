// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'es6-promise/auto'
import store from './assets/js/store' //注册store
import './assets/css/normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './api/index.js';
import App from './App'
import global_ from './Global.js'
import pl from './assets/js/pl.js'
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
// import Viewer from 'v-viewer'
// import 'viewerjs/dist/viewer.css'
//
// Vue.use(Viewer);
// Viewer.setDefaults({
//   Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
// });
Vue.use(vueValidateEasy,{validators});
Vue.use(ElementUI);
Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.prototype.Global = global_;
Vue.prototype.pl = pl;
Vue.prototype.objCompare=function(objRow,objPd){
  for(var i in objPd){
    for(var j in objRow){
      if(j==i){
        delete objPd[i]
      }
    }
  }
};
router.beforeResolve((to, from, next) => {
  // console.log("token",store.state.token)
  let state=store.state.token;
  if(!state&&to.matched.some(function (item) {
    return item.meta.logined;
  })){
    console.log("未登录")
    next({
      path: '/',
      query:{isLogin:false}
    })
  }else{
    // console.log("已登录")
    next();
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

//自定义拖动
Vue.directive('drag',
     function (el, binding) {
        let oDiv = el;   //当前元素
         oDiv.onmousedown = function (e) {
            e.preventDefault();
            let bw = document.body.clientWidth;
            let bh = document.body.clientHeight;
            //鼠标按下，计算当前元素距离可视区的距离
             let disX = e.clientX - oDiv.offsetLeft;
             let disY = e.clientY - oDiv.offsetTop;
             // 计算两边坐标
             document.onmousemove = function (e) {
                 let l = 0, t = 0;
                 // 拖动边界
                 if (e.clientX >= bw) {
                     l = bw - disX;
                 } else if (e.clientX <= 0) {
                     {
                         l = 0- disX;
                     }
                 } else {
                     l = e.clientX - disX;
                 }
                 if (e.clientY >= bh) {
                     t = bh - disY;
                 }else if(e.clientY <= 0) {
                     t = 0- disY;
                 }
                 else {
                     t = e.clientY - disY;
                 }
                 //移动当前元素
                 oDiv.style.left = l + 'px';
                 oDiv.style.top = t + 'px';
             };
             // 鼠标停止移动时，事件移除
             document.onmouseup = function (e) {
                 document.onmousemove = null;
                 document.onmouseup = null;
             };
         };
     }
 );
