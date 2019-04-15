
// 配置API接口地址
var root = ''


var script = document.createElement("script");
script.type = "text/javascript";
script.src = "./static/IPConfig.js";
script.onload = script.onreadystatechange = function() {
  if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete" ) {
    root=''
    script.onload = script.onreadystatechange = null;
  }
};
document.body.appendChild(script);


// 引用axios
var axios = require('axios');
import store from '../assets/js/store' //注册store
import { Message } from 'element-ui';
import { Loading } from 'element-ui';

// 自定义判断元素类型JS
function toType (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key]
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key])
        }
    }
    return o
}
function apiAxios (method, url, params, success, failure) {
  let loadingInstance1=null;
  loadingInstance1 = Loading.service({ fullscreen: true, spinner: 'el-icon-loading',text:'正在加载中',background:'rgba(0,0,0,0.6)',customClass:'loadingClass'});

    if (params) {
        // params = filterNull(params);
        if(store.state.token){
          // params.token=store.state.token
        }
    }

    axios({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        baseURL: root,
        withCredentials: false
    })
    .then(function (res) {

      if (res.status === 200) {
          if(loadingInstance1){
            loadingInstance1.close();
          }
          if (success) {
<<<<<<< HEAD
              success(res.data)

=======
            success(res.data)
>>>>>>> 156eed893df7f7f98d1affb5863c040934952404
          }
          if(res.data.code=='1000001'){
            window.location.href ="#/";
          }else if(!res.data.success){
            // console.log(",,,,")
            Message.error(res.data.message);
          }

      } else {
          if(loadingInstance1){
            loadingInstance1.close();
          }
          if (failure) {
              failure(res.data)
          } else {
              console.log('error: ' + JSON.stringify(res.data));
          }
      }


    })
    .catch(function (err) {
      if(loadingInstance1){
        loadingInstance1.close();
      }
        let res = err.response
        if (err) {
            // console.log('api error, HTTP CODE: ' + res.status)
        }
    })
}
// 返回在vue模板中的调用接口
export default {
    get: function (url, params, success, failure) {
        return apiAxios('GET', url, params, success, failure)
    },
    post: function (url, params, success, failure) {
        return apiAxios('POST', url, params, success, failure)
    },
    put: function (url, params, success, failure) {
        return apiAxios('PUT', url, params, success, failure)
    },
    delete: function (url, params, success, failure) {
        return apiAxios('DELETE', url, params, success, failure)
    }
}
