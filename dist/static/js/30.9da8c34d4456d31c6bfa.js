webpackJsonp([30],{"+Bu4":function(t,e){},Mzrr:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l("woOf"),s=l.n(a),i={data:function(){return{CurrentPage:1,pageSize:10,TotalResult:0,form:{},pd:{},pc:{},tableData:[],options:[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}],row:[],queryPd:{},multipleSelection:[],selectionAll:[],yuid:[],selectionReal:[]}},activated:function(){this.row=this.$route.query.row,this.queryPd=this.$route.query.queryPd,console.log("row",this.row),this.getList(this.CurrentPage,this.pageSize,this.pd)},mounted:function(){this.$store.dispatch("getGjdq")},methods:{selectfn:function(t,e){this.multipleSelection=t,this.dataSelection()},dataSelection:function(){this.selectionReal.splice(this.CurrentPage-1,1,this.multipleSelection),this.selectionAll=[];for(var t=0;t<this.selectionReal.length;t++)if(this.selectionReal[t])for(var e=0;e<this.selectionReal[t].length;e++)this.selectionAll.push(this.selectionReal[t][e])},download:function(){var t=this,e={};if(this.objCompare(this.row,this.queryPd),this.pd=s()({},this.pd,this.row,this.queryPd),0==this.selectionAll.length)e={pd:this.pd};else{for(var l in this.yuid=[],this.selectionAll)this.yuid.push(this.selectionAll[l].RGUID);this.pd.RGUID=this.yuid,e={pd:this.pd}}this.$api.post(this.Global.aport5+"/nanMinController/export",e,function(e){t.downloadM(e)},function(t){},{},"blob")},downloadM:function(t){if(t){var e=window.URL.createObjectURL(new Blob([t],{type:"application/xls"})),l=document.createElement("a");l.style.display="none",l.href=e,l.setAttribute("download","难民综合分析列表"+this.format(new Date,"yyyyMMddhhmmss")+".xls"),document.body.appendChild(l),l.click()}},handleSelectionChange:function(t){this.multipleSelection=t},pageSizeChange:function(t){this.pageSize=t,this.getList(this.CurrentPage,t,this.pd)},handleCurrentChange:function(t){this.CurrentPage=t,this.getList(t,this.pageSize,this.pd)},getList:function(t,e,l){var a=this;this.objCompare(this.row,this.queryPd),void 0!=(l=s()({},l,this.row,this.queryPd)).GJDQDM&&""!=l.GJDQDM&&(this.pc.GJDQDM=l.GJDQDM),void 0!=l.XBDM&&""!=l.XBDM&&(this.pc.XBDM=l.XBDM),void 0!=l.RS_Nokeyword&&""!=l.RS_Nokeyword&&(this.pc.RS_Nokeyword=l.RS_Nokeyword),void 0!=l.SFDM&&""!=l.SFDM&&(this.pc.SFDM=l.SFDM),l.hasOwnProperty("RGUID")&&delete l.RGUID;var i={currentPage:t,showCount:e,pd:this.pc};this.$api.post(this.Global.aport5+"/nanMinController/getResultListByParams",i,function(t){a.tableData=t.data.resultList,a.TotalResult=t.data.totalResult,0==a.selectionReal.length&&(a.selectionReal=new Array(Math.ceil(a.TotalResult/e))),a.$nextTick(function(){a.multipleSelection=[];for(var t=0;t<a.tableData.length;t++)for(var e=0;e<a.selectionAll.length;e++)a.tableData[t].RGUID==a.selectionAll[e].RGUID&&a.$refs.multipleTable.toggleRowSelection(a.tableData[t],!0)})})}}},n={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"yymain tshu"},[l("div",{staticClass:"yytitle"},[l("el-row",{attrs:{type:"flex"}},[l("el-col",{staticClass:"br pr-20",attrs:{span:22}},[l("el-row",{attrs:{align:"center",gutter:2}},[l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("姓名：")]),t._v(" "),l("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.XM,callback:function(e){t.$set(t.pd,"XM",e)},expression:"pd.XM"}})],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("国家地区：")]),t._v(" "),l("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.GJDQDM,callback:function(e){t.$set(t.pd,"GJDQDM",e)},expression:"pd.GJDQDM"}},t._l(t.$store.state.gjdq,function(t){return l("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("护照号码：")]),t._v(" "),l("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.HZHM,callback:function(e){t.$set(t.pd,"HZHM",e)},expression:"pd.HZHM"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:4}},[l("el-button",{staticClass:"mb-15 t-mr10",attrs:{type:"success",size:"small"},on:{click:function(e){t.getList(t.CurrentPage,t.pageSize,t.pd)}}},[t._v("查询")]),t._v(" "),l("el-button",{staticClass:"mb-15 t-mr10",attrs:{type:"info",size:"small"},on:{click:function(e){t.$router.go(-1)}}},[t._v("返回")]),t._v(" "),l("el-button",{staticClass:"mb-15",attrs:{type:"warning",size:"small"},on:{click:t.download}},[t._v("导出")])],1)],1)],1),t._v(" "),l("div",{staticClass:"yycontent"},[l("div",{staticClass:"yylbt mb-15"},[t._v("人员信息列表")]),t._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{select:t.selectfn}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),l("el-table-column",{attrs:{prop:"GJDQ_DESC",label:"国家地区"}}),t._v(" "),l("el-table-column",{attrs:{prop:"AJBH",label:"案卷编号"}}),t._v(" "),l("el-table-column",{attrs:{prop:"ZCRQ",label:"注册时间"}}),t._v(" "),l("el-table-column",{attrs:{prop:"XM",label:"姓名"}}),t._v(" "),l("el-table-column",{attrs:{prop:"XB_DESC",label:"性别"}}),t._v(" "),l("el-table-column",{attrs:{prop:"HZHM",label:"护照号码"}}),t._v(" "),l("el-table-column",{attrs:{prop:"SFDM_DESC",label:"身份类型"}}),t._v(" "),l("el-table-column",{attrs:{prop:"DHHM",label:"电话号码"}}),t._v(" "),l("el-table-column",{attrs:{label:"操作",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-document"},on:{click:function(l){t.$router.push({name:"NMFX_XQ",query:{row:e.row}})}}})]}}])})],1),t._v(" "),l("div",{staticClass:"middle-foot"},[l("div",{staticClass:"page-msg"},[l("div",{},[t._v("\n      共"+t._s(t.TotalResult)+"条记录\n        ")]),t._v(" "),l("div",{},[t._v("\n          每页显示\n          "),l("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}},t._l(t.options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n          条\n        ")],1),t._v(" "),l("div",{},[t._v("\n        共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n        ")])]),t._v(" "),l("el-pagination",{attrs:{background:"","page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange}})],1)],1)])},staticRenderFns:[]};var o=l("VU/8")(i,n,!1,function(t){l("cjyu"),l("+Bu4")},"data-v-b16623ec",null);e.default=o.exports},cjyu:function(t,e){}});
//# sourceMappingURL=30.9da8c34d4456d31c6bfa.js.map