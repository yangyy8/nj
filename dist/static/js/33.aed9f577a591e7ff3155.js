webpackJsonp([33],{"6ffJ":function(t,e){},WHRK:function(t,e){},tWDE:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,o,s,r=i("//Fk"),n=i.n(r),l=i("+5I8"),c=i("bOdI"),d=i.n(c),u=[],h=0;function p(t,e,i,a){if(u.push(e),u.length==h)window.ffvm.getXXDZ(t,function(a){for(var o=0;o<a.length;o++)m("dz_mlp","DZMC='"+t+"'",a[o],0,5,function(t,a){if(t.length>0)for(var o=0;o<t.length;o++)f(t[o].geometry.coordinates.reverse(),a.dm,a.dm,e,a.count,i);else window.ffvm.getXY2(a,function(t,e,a){if(void 0!=t&&t.ycoord>0&&t.xcoord>0){var o=[];o.push(t.ycoord),o.push(t.xcoord),f(o,e,e,u,a,i)}})})})}function f(t,e,i,a,o,s){!function(t,e,i,a,o,s,r){for(var n=0,l=0;l<i.length;l++){var c=i[l][0],d=i[l][1];l+1;var u=L.polyline([[t,e],[c,d]]),h=new SuperMap.MeasureParameters(u);L.supermap.measureService("http://10.33.66.183:2334/iserver/services/map-world/rest/maps/World").measureDistance(h,function(l){var c=parseInt(l.result.distance/1e3);c>window.ffvm.jlsz&&(n+=1)==i.length&&v([t,e],s,a,r,o,c)})}}(t[0],t[1],a,e,i,o,s)}function v(t,e,i,a,s,r){!function(t,e,i,a){var s=L.divIcon({html:"<div style='line-height:38px;text-align:center;'>"+e+"</div>",className:"my-div-icon cqred",iconSize:50}),r=L.marker(t,{icon:s,pcsdm:i,pcsmc:a,num:e});o.addLayer(r),o.on("mousemove",function(t){t.layer.bindPopup("<div style=''>"+t.layer.options.pcsmc+"</div>").openPopup()}),o.on("mouseout",function(t){t.layer.closePopup()}),r.on("click",function(t){window.ffvm.getRyxx(1,5,i,i)})}(t,e,i,"<div style='line-height:25px;'>距离<font color=blue>"+a+"</font>： 大约 <font style='color:red;font-weight:bold;font-size:16px;'>"+r+"</font>  公里<br/>"+s+" <br/>总人数："+e+"</div>")}function m(t,e,i,a,o,s){var r=new SuperMap.GetFeaturesBySQLParameters({queryParameter:{name:t+"@ORCL_gt8",attributeFilter:e},datasetNames:["ORCL_gt8:"+t],fromIndex:0,toIndex:10});L.supermap.featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data").getFeaturesBySQL(r,function(t){var e=t.result.features.features;s&&s(e,i)})}var g={data:function(){return{CurrentPage:1,pageSize:5,TotalResult:0,pd:{},swdw:[],show:!0,bzhshow:!1,lgshow:!1,jlsz:10,pcs:[],xzqh:[],tableData:[],datastr:[],bzhDialogVisible:!1,diatext:"标准化地址",bzhid:"",mc:"",lrdw:"",iid:"",xydata:[],cuint:0}},mounted:function(){var t;window.ffvm=this,a=L.map("mainMap",(t={crs:L.CRS.EPSG4326,preferCanvas:!0,center:[32.03613281,118.78211975],maxZoom:18,zoom:10},d()(t,"maxZoom",16),d()(t,"zoomControl",!1),d()(t,"attributionControl",!1),d()(t,"closePopupOnClick",!1),t)),L.supermap.wmtsLayer("http://10.33.66.183:2333/iserver/services/map-wmts-GADT/wmts-china",{layer:"GADT",style:"default",tilematrixSet:"ChinaPublicServices_GADT",format:"image/png",transparent:!0}).addTo(a),o=L.featureGroup().addTo(a),s=L.featureGroup().addTo(a),this.getGX()},methods:{pageSizeChange:function(t){this.getRyxx(this.CurrentPage,t,this.bzhid,this.mc,this.lrdw),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.getRyxx(t,this.pageSize,this.bzhid,this.mc,this.lrdw),console.log("当前页: "+t)},changtab:function(){this.show=!this.show},changeTSY:function(t){"1"==t?(this.lgshow=!0,this.bzhshow=!1):"2"==t?(this.lgshow=!1,this.bzhshow=!0):(this.lgshow=!1,this.bzhshow=!1)},getPcs:function(){var t=this,e=this.Global.aport1+this.Global.pcs;this.$api.get(e,null,function(e){t.pcs=Object(l.a)(e.data)})},getXzqh:function(){var t=this,e=this.Global.aport1+this.Global.xzqh;this.$api.get(e,null,function(e){t.xzqh=Object(l.a)(e.data)})},doset:function(){this.$set(this.pd,"dwlb","")},getGX:function(){var t=this;this.$api.get(this.Global.aport1+"/servicemap/getUniversity",null,function(e){t.datastr=e.data})},getInfo:function(t,e){void 0!=this.jlsz?(this.show=!this.show,this.iid=e,function(t,e){o.clearLayers(),s.clearLayers(),window.ffvm.getxxinfo(t,function(i){if(i.length>0){u=[],h=i.length;for(var a=0;a<i.length;a++){var o=i[a].DZXQ;window.ffvm.getXY(o,function(i){var a=[];if(void 0!=i&&i.ycoord>0&&i.xcoord>0){a.push(i.ycoord+""),a.push(i.xcoord+"");var o="<div style='line-height:25px;'>学校："+e+" <br/>地址："+i.src_addr+"</div>",r=L.marker([a[0],a[1]]).bindPopup(o);s.addLayer(r),p(t,a,e,i.src_addr)}})}}})}(t,e)):this.$message.error("距离设置不能为空！")},getxxinfo:function(t,e){var i={xxbh:t},a=this.Global.aport+"/zxdt/getXXDZList";this.$api.post(a,i,function(t){t.success&&e&&e(t.data)})},getXY1:function(t,e){for(var i=this,a=function(t){return new n.a(function(e,a){var o={url:i.Global.xyaddress+"?dz="+t};i.$api.post(i.Global.aport+"/zxdt/getCtUrl",o,function(i){var a=[];a.push(i.data.result.ycoord),a.push(i.data.result.xcoord);var o={};o.dm=t,o.zb=a,e(o)})})},o=[],s=0;s<t.length;s++)o.push(a(t[s].DZXQ)),console.log(a(t[s].DZXQ));e&&e(o)},getXXDZ:function(t,e){var i={xxdm:t,xxmc:this.iid,sf:"61"};this.$api.post(this.Global.aport+"/ywczdt/getFfjlBzhdz",i,function(t){e&&e(t.data)})},getXY:function(t,e){var i={url:this.Global.xyaddress+"?dz="+t};this.$api.post(this.Global.aport+"/zxdt/getCtUrl",i,function(t){e&&e(t.data.result)})},getRyxx:function(t,e,i,a){var o=this;1==t&&(this.tableData=[],this.TotalResult=0,this.CurrentPage=1),this.bzhid=i,this.mc=a,this.diatext=this.mc;var s={currentPage:t,showCount:e,xxdz:this.bzhid,fwcs:this.iid,sf:"61"},r=this.Global.aport+"/ywczdt/getCZDJXXRYList";this.$api.post(r,s,function(t){t.success&&(o.tableData=t.data.resultList,o.TotalResult=t.data.totalResult)}),this.bzhDialogVisible=!0},getXY2:function(t,e){var i={url:this.Global.xyaddress+"?dz="+t.dm};this.$api.post(this.Global.aport+"/zxdt/getCtUrl",i,function(i){e&&e(i.data.result,t.dm,t.count)})},gotos:function(t,e){var i=this.$router.resolve({path:"/Home/RYHX_NX",query:{zjhm:t,gjdq:e}});window.open(i.href,"_blank")}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yymain "},[a("div",{staticClass:"mapbj lzxx",attrs:{id:"mainMap"}}),t._v(" "),a("div",{staticClass:"fxleft"},[a("div",{staticClass:"fxbnt"},[t.show?a("el-button",{staticStyle:{"border-radius":"0px!important","border-width":"1px 1px 0px 1px"},attrs:{size:"mini",type:"primary",icon:"iconfont el-icon-yy-xiangshangjiantou"},on:{click:function(e){t.changtab()}}}):a("el-button",{staticStyle:{"border-radius":"0px!important"},attrs:{size:"mini",type:"primary",icon:"iconfont el-icon-yy-xiangxiajiantou"},on:{click:function(e){t.changtab()}}})],1),t._v(" "),a("el-collapse-transition",[t.show?a("div",{staticClass:"fxcont"},[a("el-row",{attrs:{gutter:1}},[a("el-col",{attrs:{span:24}},[a("span",{staticClass:"input-text",staticStyle:{width:"25%!important"}},[t._v("距离设置：")]),t._v(" "),a("el-input-number",{attrs:{"controls-position":"right",size:"mini",min:5,max:10},model:{value:t.jlsz,callback:function(e){t.jlsz=e},expression:"jlsz"}}),t._v(" "),a("span",{staticStyle:{"font-size":"12px"}},[t._v("公里")])],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("span",{staticStyle:{"font-size":"12px",color:"red"}},[t._v("* 距离设置区间5-10")])])],1),t._v(" "),a("div",{staticClass:"resultpaneltitle"},[t._v("南京高校列表")]),t._v(" "),a("div",{staticStyle:{"max-height":"500px","overflow-y":"scroll"}},t._l(t.datastr,function(e){return a("div",{attrs:{id:"resultpanel"}},[a("div",{staticClass:"fflist",on:{click:function(i){t.getInfo(e.jgid,e.mc)}}},[t._v("\n                  "+t._s(e.mc)+"\n                 ")])])}),0)],1):t._e()])],1),t._v(" "),a("div",{staticClass:"bghome"},[a("el-dialog",{attrs:{title:t.diatext,visible:t.bzhDialogVisible},on:{"update:visible":function(e){t.bzhDialogVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{label:"照片"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.zp?a("div",[a("el-popover",{attrs:{placement:"right",title:"",trigger:"hover"}},[a("img",{staticStyle:{"max-width":"700px","max-height":"700px"},attrs:{src:e.row.zp}}),t._v(" "),a("img",{attrs:{slot:"reference",src:e.row.zp,alt:e.row.zp,width:"50",height:"50"},slot:"reference"})])],1):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"sf",label:"身份"}}),t._v(" "),a("el-table-column",{attrs:{prop:"fwcs",label:"服务处所"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ywxm",label:"英文姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"zwxm",label:"中文姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"xb",label:"性别",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"csrq",label:"出生日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"djrq",label:"登记日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"gjdq",label:"国家地区"}}),t._v(" "),a("el-table-column",{attrs:{prop:"zjzl",label:"证件种类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"zjhm",label:"证件号码"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{color:"yellow",cursor:"pointer"},on:{click:function(i){t.gotos(e.row.zjhm,e.row.gjdqdm)}}},[t._v(t._s(e.row.zjhm))])]}}])})],1),t._v(" "),a("div",{staticClass:"middle-foot mt-10"},[a("div",{staticClass:"page-msg"},[a("div",{staticClass:"crrcolor"},[t._v("\n              共"+t._s(t.TotalResult)+"条记录\n              ")]),t._v(" "),a("div",{staticClass:"crrcolor"}),t._v(" "),a("div",{staticClass:"crrcolor"})]),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.CurrentPage=e}}})],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("img",{staticStyle:{cursor:"pointer"},attrs:{src:i("JmKm"),border:"0"},on:{click:function(e){t.bzhDialogVisible=!1}}})]),t._v(" "),a("div",{staticClass:"arrow_line",staticStyle:{left:"0px",top:"0px","border-bottom-width":"0","border-right-width":"0"}}),t._v(" "),a("div",{staticClass:"arrow_line",staticStyle:{right:"0px",top:"0px","border-bottom-width":"0","border-left-width":"0"}}),t._v(" "),a("div",{staticClass:"arrow_line",staticStyle:{left:"0px",bottom:"0px","border-top-width":"0","border-right-width":"0"}}),t._v(" "),a("div",{staticClass:"arrow_line",staticStyle:{right:"0px",bottom:"0px","border-top-width":"0","border-left-width":"0"}})],1)],1)])},staticRenderFns:[]};var x=i("VU/8")(g,b,!1,function(t){i("WHRK"),i("6ffJ")},"data-v-84fc4822",null);e.default=x.exports}});
//# sourceMappingURL=33.aed9f577a591e7ff3155.js.map