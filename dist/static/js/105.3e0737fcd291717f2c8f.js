webpackJsonp([105],{"3iFK":function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{CurrentPage:1,pageSize:10,TotalResult:0,pd:{HCMX:"YYRY",SSPCS:this.$store.state.orgid},options:this.pl.ps,tableData:[],userCode:"",userName:"",orgCode:"",orgName:"",multipleSelection:[],selectionAll:[],yuid:[],selectionReal:[]}},activated:function(){var t=this;setTimeout(function(){t.getList(t.CurrentPage,t.pageSize,t.pd)},1e3)},mounted:function(){this.$store.dispatch("getGjdq"),this.$store.dispatch("getClzt"),this.$store.dispatch("getZjzl"),this.$store.dispatch("getXB"),this.$store.dispatch("getRjqzzl"),this.$store.dispatch("getLgyj"),this.$store.dispatch("getGljb"),this.userCode=this.$store.state.uname,this.userName=this.$store.state.uid,this.orgCode=this.$store.state.orgname,this.orgName=this.$store.state.orgid},methods:{selectfn:function(t,e){this.multipleSelection=t,this.dataSelection()},dataSelection:function(){this.selectionReal.splice(this.CurrentPage-1,1,this.multipleSelection),this.selectionAll=[];for(var t=0;t<this.selectionReal.length;t++)if(this.selectionReal[t])for(var e=0;e<this.selectionReal[t].length;e++)this.selectionAll.push(this.selectionReal[t][e])},download:function(){var t=this,e={};if(0==this.selectionAll.length)e={pd:this.pd,orderBy:"SBSJ",orderType:"DESC"};else{for(var l in this.yuid=[],this.selectionAll)this.yuid.push(this.selectionAll[l].YJID);this.pd.YJID=this.yuid,e={pd:this.pd,orderBy:"SBSJ",orderType:"DESC"}}this.$api.post(this.Global.aport4+"/warningInfoController/exportByMxLx",e,function(e){t.downloadM(e)},function(t){},{},"blob")},downloadM:function(t){if(t){var e=window.URL.createObjectURL(new Blob([t],{type:"application/xls"})),l=document.createElement("a");l.style.display="none",l.href=e,l.setAttribute("download","违临预判报表"+this.format(new Date,"yyyyMMddhhmmss")+".xls"),document.body.appendChild(l),l.click()}},pageSizeChange:function(t){this.pageSize=t,this.getList(this.CurrentPage,this.pageSize,this.pd),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.CurrentPage=t,this.getList(this.CurrentPage,this.pageSize,this.pd),console.log("当前页: "+t)},getList:function(t,e,l){var a=this;l.hasOwnProperty("YJID")&&delete l.YJID;var s={currentPage:t,showCount:e,pd:l,orderBy:"SBSJ",orderType:"DESC"};this.$api.post(this.Global.aport4+"/SWDWWarningInfoController/getInfoListByHCMX",s,function(t){t.success&&(a.tableData=t.data.resultList,a.TotalResult=t.data.totalResult,0==a.selectionReal.length&&(a.selectionReal=new Array(Math.ceil(a.TotalResult/e))),a.$nextTick(function(){a.multipleSelection=[];for(var t=0;t<a.tableData.length;t++)for(var e=0;e<a.selectionAll.length;e++)a.tableData[t].YJID==a.selectionAll[e].YJID&&a.$refs.multipleTable.toggleRowSelection(a.tableData[t],!0)}))})}}},s={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"yymain"},[l("div",{staticClass:"yytitle"},[l("el-row",{attrs:{type:"flex"}},[l("el-col",{staticClass:"br pr-20",attrs:{span:22}},[l("el-row",{attrs:{align:"center",gutter:2}},[l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("英文姓：")]),t._v(" "),l("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.YWX,callback:function(e){t.$set(t.pd,"YWX",e)},expression:"pd.YWX"}})],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("英文名：")]),t._v(" "),l("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.YWM,callback:function(e){t.$set(t.pd,"YWM",e)},expression:"pd.YWM"}})],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("国家地区：")]),t._v(" "),l("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"",multiple:"","collapse-tags":"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.GJDQ,callback:function(e){t.$set(t.pd,"GJDQ",e)},expression:"pd.GJDQ"}},t._l(t.$store.state.gjdq,function(t){return l("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("证件号码：")]),t._v(" "),l("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.ZJHM,callback:function(e){t.$set(t.pd,"ZJHM",e)},expression:"pd.ZJHM"}})],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("核查状态：")]),t._v(" "),l("el-select",{staticClass:"input-input",attrs:{placeholder:"请选择",filterable:"",clearable:"","default-first-option":"",size:"small"},model:{value:t.pd.CLZT,callback:function(e){t.$set(t.pd,"CLZT",e)},expression:"pd.CLZT"}},[l("el-option",{attrs:{label:"已核查",value:"0"}}),t._v(" "),l("el-option",{attrs:{label:"未核查",value:"1"}})],1)],1)],1)],1),t._v(" "),l("el-col",{staticClass:"down-btn-area",attrs:{span:2}},[l("el-button",{staticClass:"t-mb",attrs:{type:"success",size:"small"},on:{click:function(e){t.CurrentPage=1,t.getList(t.CurrentPage,t.pageSize,t.pd)}}},[t._v("查询")])],1)],1)],1),t._v(" "),l("div",{staticClass:"yycontent"},[l("div",{staticClass:"yylbt mb-15"},[t._v("甄别信息列表")]),t._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","highlight-current-row":!0},on:{select:t.selectfn}},[l("el-table-column",{attrs:{prop:"YWX",label:"英文姓"}}),t._v(" "),l("el-table-column",{attrs:{prop:"YWM",label:"英文名"}}),t._v(" "),l("el-table-column",{attrs:{prop:"GJDQ_DESC",label:"国家地区"}}),t._v(" "),l("el-table-column",{attrs:{prop:"ZJHM",label:"证件号码"}}),t._v(" "),l("el-table-column",{attrs:{prop:"SBDWMC",label:"上报单位"}}),t._v(" "),l("el-table-column",{attrs:{prop:"SBSJ",label:"上报时间"}}),t._v(" "),l("el-table-column",{attrs:{prop:"CLZT_DESC",label:"核查状态"}}),t._v(" "),l("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("div",[l("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"处理",icon:"el-icon-edit"},on:{click:function(l){t.$router.push({name:"WLJ_XQ",query:{hiType:"wlj",row:e.row}})}}})],1)]}}])})],1),t._v(" "),l("div",{staticClass:"middle-foot"},[l("div",{staticClass:"page-msg"},[l("div",{},[t._v("\n      共"+t._s(t.TotalResult)+"条记录\n        ")]),t._v(" "),l("div",{},[t._v("\n          每页显示\n          "),l("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}},t._l(t.options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n          条\n        ")],1),t._v(" "),l("div",{},[t._v("\n          共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n        ")])]),t._v(" "),l("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.CurrentPage=e}}})],1)],1)])},staticRenderFns:[]};var i=l("VU/8")(a,s,!1,function(t){l("5nT6")},"data-v-042bc486",null);e.default=i.exports},"5nT6":function(t,e){}});
//# sourceMappingURL=105.3e0737fcd291717f2c8f.js.map