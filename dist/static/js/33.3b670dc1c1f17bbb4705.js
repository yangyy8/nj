webpackJsonp([33],{eZnB:function(t,e){},ij2k:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i,l,r=s("+5I8"),o=s("bOdI"),n=s.n(o);function c(t,e){i.clearLayers();var s=new SuperMap.GetFeaturesBySQLParameters({queryParameter:{name:"dz_mlp@ORCL_gt8",attributeFilter:"DZMC='"+t+"'"},datasetNames:["ORCL_gt8:dz_mlp"]}),a=[];L.supermap.featureService("http://10.33.66.183:2333/iserver/services/data-gt8/rest/data").getFeaturesBySQL(s,function(s){if((a=s.result.features.features).length>0){var i=a[0].properties.SMX,l=a[0].properties.SMY,r=[];r.push(l),r.push(i),p(r,e,t,t)}else window.lzvm.getXY(t,function(s){if(void 0!=s&&s.ycoord>0&&s.xcoord>0){var a=[];a.push(s.ycoord),a.push(s.xcoord),p(a,e,t,t)}})})}function p(t,e,s,a){var l=L.divIcon({html:"<div style='line-height:38px;text-align:center;'>"+e+"</div>",className:"my-div-icon lzgreen",iconSize:50}),r=L.marker(t,{icon:l,pcsdm:s,pcsmc:a,num:e});i.addLayer(r),i.on("mousemove",function(t){t.layer.bindPopup("<div style='font-weight:bold; font-size: 13px; padding-bottom:5px'>"+t.layer.options.pcsmc+"</div><div>总人数："+t.layer.options.num+"</div>").openPopup()}),i.on("mouseout",function(t){t.layer.closePopup()}),r.on("click",function(t){window.lzvm.getRyxx(1,5,s,s)})}var d={data:function(){return{CurrentPage:1,pageSize:5,TotalResult:0,pd:{},swdw:[],show:!0,bzhshow:!1,lgshow:!1,zsbg:[],list:[],tableData:[],ssfj:[],loading:!1,lzhDialogVisible:!1,diatext:"标准化地址",bzhid:"",mc:"",lrdw:"",centers:[]}},mounted:function(){var t;window.lzvm=this,this.$store.dispatch("getGjdq"),this.$store.dispatch("getRjsy"),this.$store.dispatch("getZjzl"),this.$store.dispatch("getRjqzzl"),a=L.map("mainMap",(t={crs:L.CRS.EPSG4326,preferCanvas:!0,center:[32.03613281,118.78211975],maxZoom:18,zoom:10},n()(t,"maxZoom",16),n()(t,"zoomControl",!1),n()(t,"attributionControl",!1),n()(t,"closePopupOnClick",!1),t)),L.supermap.wmtsLayer("http://10.33.66.183:2333/iserver/services/map-wmts-GADT/wmts-china",{layer:"GADT",style:"default",tilematrixSet:"ChinaPublicServices_GADT",format:"image/png",transparent:!0}).addTo(a),i=L.featureGroup().addTo(a),new SuperMap.ElasticSearch("http://10.33.69.24:9200/"),this.getFJ(),this.getZsbg()},methods:{pageSizeChange:function(t){this.getRyxx(this.CurrentPage,t,this.bzhid,this.mc),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.getRyxx(t,this.pageSize,this.bzhid,this.mc),console.log("当前页: "+t)},getFJ:function(){var t=this,e={operatorId:this.$store.state.uid,operatorNm:this.$store.state.uname};this.$api.post(this.Global.aport2+"/data_report/selectSsfjDm",e,function(e){t.ssfj=e.data.SSFJ})},remoteMethod:function(t){var e=this;""!==t?(this.loading=!0,setTimeout(function(){e.loading=!1,e.zsbg=e.list.filter(function(e){return e.mc.toLowerCase().indexOf(t.toLowerCase())>-1})},200)):this.zsbg=[]},changtab:function(){this.show=!this.show},changeTSY:function(t){"2"==t?(this.lgshow=!0,this.bzhshow=!1):"1"==t?(this.lgshow=!1,this.bzhshow=!0):(this.lgshow=!1,this.bzhshow=!1)},getZsbg:function(){var t=this,e=this.Global.aport1+this.Global.zsbg;this.$api.get(e,null,function(e){t.list=Object(r.a)(e.data)})},doset:function(){this.$set(this.pd,"zjzl",""),this.$set(this.pd,"qzzl",""),this.$set(this.pd,"gjdq",""),this.$set(this.pd,"tlsy",""),this.$set(this.pd,"ssfj",""),this.$set(this.pd,"beginTime",""),this.$set(this.pd,"endTime",""),this.$set(this.pd,"tsj",""),this.$set(this.pd,"bzhdz",""),this.$set(this.pd,"zsbg","")},doSearch:function(){if(void 0!=this.pd.ssfj&&""!=this.pd.ssfj){var t;switch(this.pd.ssfj.substr(0,6)){case"320116":this.centers=[32.39215480155289,118.81641980133281];break;case"320112":this.centers=[32.03613281,118.78211975];break;case"320113":this.centers=[32.137307901838255,118.9995913711449];break;case"320102":this.centers=[32.062475576087024,118.8436456413333];break;case"320106":this.centers=[32.08265178165445,118.75812113098544];break;case"320111":this.centers=[31.943626916199264,118.35524238617728];break;case"320104":this.centers=[32.01143013679143,118.81736758064937];break;case"320105":this.centers=[32.0275950355325,118.70538415685343];break;case"320114":this.centers=[31.94205101079558,118.69497417187063];break;case"320115":this.centers=[31.865733721334237,118.79198266097109];break;case"320124 ":this.centers=[31.726803147547287,119.1224894259463];break;case"320125 ":this.centers=[31.3703836314495,119.19202124153713]}if(void 0!=this.pd.beginTime||void 0!=this.pd.endTime)t=this.centers,null!=l&&l.clearLayers(),a.flyTo(t,11),i.clearLayers(),window.lzvm.getBZHDZ(function(t){if(t.length>0)for(var e=0;e<t.length;e++)c(t[e].dm,t[e].count)});else this.$message.error("请输入住宿的开始时间或结束时间!")}else this.$message.error("请选择所属分局!")},getBZHDZ:function(t){var e=this,s=[],a={zjzl:this.pd.zjzl,qzzl:this.pd.qzzl,gjdq:this.pd.gjdq,tlsy:this.pd.tlsy,rzsjStart:this.pd.beginTime,rzsjEnd:this.pd.endTime,zsbg:this.pd.zsbg,likeBzhdzMc:this.pd.bzhdz,ssfj:this.pd.ssfj.substr(0,6),tsy:this.pd.tsj},i=this.Global.aport+"/zxdt/getLSZSDJXXBZHDZList";this.$api.post(i,a,function(a){if(a.success){for(var i=a.data,l=0;l<i.length;l++)s.push(i[l]);if(0==s.length)return void e.$message.error("没有查询到数据信息! ");t&&t(s)}})},getRyxx:function(t,e,s,a){var i=this;1==t&&(this.CurrentPage=1,this.tableData=[],this.TotalResult=0,this.bzhid=s,this.mc=a),this.diatext=this.mc;var l={currentPage:t,showCount:e,bzhdzMc:this.bzhid,zjzl:this.pd.zjzl,qzzl:this.pd.qzzl,gjdq:this.pd.gjdq,tlsy:this.pd.tlsy,rzsjStart:this.pd.beginTime,rzsjEnd:this.pd.endTime,zsbg:this.pd.zsbg,ssfj:this.pd.ssfj.substr(0,6),tsy:this.pd.tsj},r=this.Global.aport+"/zxdt/getLSZSDJXXRYList";this.$api.post(r,l,function(t){t.success&&(console.log(t.data),i.tableData=t.data.resultList,i.TotalResult=t.data.totalResult)}),this.lzhDialogVisible=!0},getXY:function(t,e){var s={url:this.Global.xyaddress+"?dz="+t};this.$api.post(this.Global.aport+"/zxdt/getCtUrl",s,function(t){e&&e(t.data.result)})},gotos:function(t,e){var s=this.$router.resolve({path:"/Home/RYHX_NX",query:{zjhm:t,gjdq:e}});window.open(s.href,"_blank")}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yymain "},[a("div",{staticClass:"mapbj lzxx",attrs:{id:"mainMap"}}),t._v(" "),a("div",{staticClass:"fxleft"},[a("div",{staticClass:"fxbnt"},[t.show?a("el-button",{staticStyle:{"border-radius":"0px!important","border-width":"1px 1px 0px 1px"},attrs:{size:"mini",type:"primary",icon:"iconfont el-icon-yy-xiangshangjiantou"},on:{click:function(e){t.changtab()}}}):a("el-button",{staticStyle:{"border-radius":"0px!important"},attrs:{size:"mini",type:"primary",icon:"iconfont el-icon-yy-xiangxiajiantou"},on:{click:function(e){t.changtab()}}})],1),t._v(" "),a("el-collapse-transition",[t.show?a("div",{staticClass:"fxcont"},[a("el-row",{attrs:{gutter:1}},[a("el-col",{attrs:{span:24}},[a("span",{staticClass:"yy-input-text"},[a("font",{attrs:{color:"red"}},[t._v("*")]),t._v(" 所属分局：")],1),t._v(" "),a("el-select",{staticClass:"yy-input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.ssfj,callback:function(e){t.$set(t.pd,"ssfj",e)},expression:"pd.ssfj"}},t._l(t.ssfj,function(t,e){return a("el-option",{key:e,attrs:{label:t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("span",{staticClass:"yy-input-text"},[a("font",{attrs:{color:"red"}},[t._v("*")]),t._v(" 住宿时间：")],1),t._v(" "),a("el-date-picker",{staticClass:"yy-input-input",attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"开始时间"},model:{value:t.pd.beginTime,callback:function(e){t.$set(t.pd,"beginTime",e)},expression:"pd.beginTime"}})],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("span",{staticClass:"yy-input-text"}),t._v(" "),a("el-date-picker",{staticClass:"yy-input-input",attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"结束时间"},model:{value:t.pd.endTime,callback:function(e){t.$set(t.pd,"endTime",e)},expression:"pd.endTime"}})],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("span",{staticClass:"yy-input-text"},[t._v("证件种类：")]),t._v(" "),a("el-select",{staticClass:"yy-input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.zjzl,callback:function(e){t.$set(t.pd,"zjzl",e)},expression:"pd.zjzl"}},t._l(t.$store.state.zjzl,function(t,e){return a("el-option",{key:e,attrs:{label:t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("span",{staticClass:"yy-input-text"},[t._v("签证种类：")]),t._v(" "),a("el-select",{staticClass:"yy-input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.qzzl,callback:function(e){t.$set(t.pd,"qzzl",e)},expression:"pd.qzzl"}},t._l(t.$store.state.rjqzzl,function(t,e){return a("el-option",{key:e,attrs:{label:t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("span",{staticClass:"yy-input-text"},[t._v("国家地区：")]),t._v(" "),a("el-select",{staticClass:"yy-input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.gjdq,callback:function(e){t.$set(t.pd,"gjdq",e)},expression:"pd.gjdq"}},t._l(t.$store.state.gjdq,function(t,e){return a("el-option",{key:e,attrs:{label:t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("span",{staticClass:"yy-input-text"},[t._v("停留事由：")]),t._v(" "),a("el-select",{staticClass:"yy-input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.tlsy,callback:function(e){t.$set(t.pd,"tlsy",e)},expression:"pd.tlsy"}},t._l(t.$store.state.rjsy,function(t,e){return a("el-option",{key:e,attrs:{label:t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("span",{staticClass:"yy-input-text"},[t._v("投宿于：")]),t._v(" "),a("el-select",{staticClass:"yy-input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},on:{change:function(e){t.changeTSY(t.pd.tsj)}},model:{value:t.pd.tsj,callback:function(e){t.$set(t.pd,"tsj",e)},expression:"pd.tsj"}},[a("el-option",{attrs:{label:"旅馆",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"社会面",value:"1"}})],1)],1),t._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:t.bzhshow,expression:"bzhshow"}],attrs:{span:24}},[a("span",{staticClass:"yy-input-text",attrs:{title:"标准化地址"}},[t._v("标准化地址：")]),t._v(" "),a("el-input",{staticClass:"yy-input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.bzhdz,callback:function(e){t.$set(t.pd,"bzhdz",e)},expression:"pd.bzhdz"}})],1),t._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:t.lgshow,expression:"lgshow"}],attrs:{span:24}},[a("el-col",{attrs:{span:24}},[a("span",{staticClass:"yy-input-text"},[t._v("住宿宾馆：")]),t._v(" "),a("el-select",{staticClass:"yy-input-input",attrs:{filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"请输入关键词","remote-method":t.remoteMethod,loading:t.loading,size:"small"},model:{value:t.pd.zsbg,callback:function(e){t.$set(t.pd,"zsbg",e)},expression:"pd.zsbg"}},t._l(t.zsbg,function(t,e){return a("el-option",{key:e,attrs:{label:t.mc,value:t.dm}})}),1)],1)],1)],1),t._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.doSearch()}}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.doset()}}},[t._v("重置")])],1)],1)],1):t._e()])],1),t._v(" "),a("div",{staticClass:"bghome"},[a("el-dialog",{attrs:{title:t.diatext,visible:t.lzhDialogVisible},on:{"update:visible":function(e){t.lzhDialogVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{label:"照片"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.zp?a("div",[a("el-popover",{attrs:{placement:"right",title:"",trigger:"hover"}},[a("img",{staticStyle:{"max-width":"700px","max-height":"700px"},attrs:{src:e.row.zp}}),t._v(" "),a("img",{attrs:{slot:"reference",src:e.row.zp,alt:e.row.zp,width:"50",height:"50"},slot:"reference"})])],1):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"ywxm",label:"英文姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"zwxm",label:"中文姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"xb",label:"性别",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"csrq",label:"出生日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"djrq",label:"登记日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"gjdq",label:"国家地区"}}),t._v(" "),a("el-table-column",{attrs:{prop:"zjzl",label:"证件种类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"zjhm",label:"证件号码"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{color:"yellow",cursor:"pointer"},on:{click:function(s){t.gotos(e.row.zjhm,e.row.gjdqdm)}}},[t._v(t._s(e.row.zjhm))])]}}])})],1),t._v(" "),a("div",{staticClass:"middle-foot mt-10"},[a("div",{staticClass:"page-msg"},[a("div",{staticClass:"crrcolor"},[t._v("\n            共"+t._s(t.TotalResult)+"条记录\n            ")]),t._v(" "),a("div",{staticClass:"crrcolor"}),t._v(" "),a("div",{staticClass:"crrcolor"})]),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.CurrentPage=e}}})],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("img",{staticStyle:{cursor:"pointer"},attrs:{src:s("JmKm"),border:"0"},on:{click:function(e){t.lzhDialogVisible=!1}}})]),t._v(" "),a("div",{staticClass:"arrow_line",staticStyle:{left:"0px",top:"0px","border-bottom-width":"0","border-right-width":"0"}}),t._v(" "),a("div",{staticClass:"arrow_line",staticStyle:{right:"0px",top:"0px","border-bottom-width":"0","border-left-width":"0"}}),t._v(" "),a("div",{staticClass:"arrow_line",staticStyle:{left:"0px",bottom:"0px","border-top-width":"0","border-right-width":"0"}}),t._v(" "),a("div",{staticClass:"arrow_line",staticStyle:{right:"0px",bottom:"0px","border-top-width":"0","border-left-width":"0"}})],1)],1)])},staticRenderFns:[]};var u=s("VU/8")(d,h,!1,function(t){s("eZnB"),s("reXc")},"data-v-77c4cd75",null);e.default=u.exports},reXc:function(t,e){}});
//# sourceMappingURL=33.3b670dc1c1f17bbb4705.js.map