webpackJsonp([45],{"2Uql":function(e,t){},"9fA9":function(e,t){},uXlu:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={components:{QZSQ:l("WY/o").a},data:function(){return{radio1:"0",radio2:"0",typet:"1",CurrentPage:1,pageSize:10,TotalResult:0,pd:{SLRQ_DateRange:{begin:"",end:"",dataType:"date"},SPRQ_DateRange:{begin:"",dataType:"date"},QZQFJG_Like:"3201"},pm:{},imagess:[],imgshow1:!1,imgshow2:!0,shm:!1,lg:!1,type:1,xid:"",random:"",qzsqDialogVisible:!1,options:[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}],tableData:[],checkItem:[{code:"GJDQ",label:"国家地区"},{code:"SPJG",label:"审批结果"},{code:"SQLB",label:"申请类别"},{code:"SQSY",label:"申请事由"},{code:"XCQZZL",label:"所持签证种类"},{code:"XCZJZL",label:"所持证件种类"}],checkedList:[],checkItemReal:[],tableHead:[{code:"GJDQ_DESC",label:"国家地区"},{code:"SPJG_DESC",label:"审批结果"},{code:"SQLB_DESC",label:"申请类别"},{code:"SQSY_DESC",label:"申请事由"},{code:"XCQZZL_DESC",label:"所持签证种类"},{code:"XCZJZL_DESC",label:"所持证件种类"}],configHeader:[],pd0:{},form:{},falg:!1,disa:!1,multipleSelection:[],selectionAll:[],yuid:[],selectionReal:[]}},mounted:function(){this.$store.dispatch("getGjdq"),this.$store.dispatch("getXB"),this.$store.dispatch("getSsdw"),this.$store.dispatch("getZjzl"),this.$store.dispatch("getRjqzzl"),this.$store.dispatch("getRjsy"),this.$store.dispatch("getZsxz"),this.$store.dispatch("getSjly"),this.$store.dispatch("getSldw")},watch:{falg:function(e,t){this.multipleSelection=[],this.selectionAll=[],this.selectionReal=[]},checkedList:{handler:function(e,t){e.toString()!=t.toString()&&(this.multipleSelection=[],this.selectionAll=[],this.selectionReal=[])}}},methods:{selectfn:function(e,t){this.multipleSelection=e,this.dataSelection()},dataSelection:function(){console.log("this.multipleSelection",this.multipleSelection),this.selectionReal.splice(this.CurrentPage-1,1,this.multipleSelection),console.log("this.selectionReal",this.selectionReal),this.selectionAll=[];for(var e=0;e<this.selectionReal.length;e++)if(this.selectionReal[e])for(var t=0;t<this.selectionReal[e].length;t++)this.selectionAll.push(this.selectionReal[e][t]);console.log("this.selectionAll",this.selectionAll)},download:function(){var e=this,t={};if(0==this.checkedList.length)if(0==this.selectionAll.length)t={pd:this.pd};else{for(var l in this.yuid=[],this.selectionAll)this.yuid.push(this.selectionAll[l].RGUID);this.pd.RGUID=this.yuid,t={pd:this.pd}}else t=0==this.selectionAll.length?{pd:this.pd,groupList:this.checkedList}:{requestTempList:this.selectionAll,groupList:this.checkedList};this.$api.post(this.Global.aport5+"/esFnsqxxController/exportFnsqxx",t,function(t){e.downloadM(t)},function(e){},{},"blob")},downloadM:function(e){if(e){var t=window.URL.createObjectURL(new Blob([e],{type:"application/xls"})),l=document.createElement("a");l.style.display="none",l.href=t,l.setAttribute("download","签发信息人员列表"+this.format(new Date,"yyyyMMddhhmmss")+".xls"),document.body.appendChild(l),l.click()}},handleSelectionChange:function(e){this.multipleSelection=e},pageSizeChange:function(e){this.getList(this.CurrentPage,e,this.pd),console.log("每页 "+e+" 条")},handleCurrentChange:function(e){this.getList(e,this.pageSize,this.pd),console.log("当前页: "+e)},open:function(e){this.$alert(e,"提示",{confirmButtonText:"确定"})},getList:function(e,t,l){var a=this;this.checkItemReal=[];for(var s=0;s<this.checkedList.length;s++)for(var i=0;i<this.checkItem.length;i++)this.checkedList[s]==this.checkItem[i].code&&this.checkItemReal.push(this.checkItem[i]);l.hasOwnProperty("RGUID")&&delete l.RGUID;var n={currentPage:e,showCount:t,pd:l,orderBy:"",orderType:"DESC",groupList:this.checkedList};this.$api.post(this.Global.aport5+"/esFnsqxxController/getCount",n,function(e){if("true"==e.data.isFenLei){a.falg=!0,a.tableData=e.data.resultList,a.TotalResult=e.data.totalResult,a.configHeader=[];for(var l=a,s=0;s<l.checkItemReal.length;s++){for(var i={},o=0;o<l.tableHead.length;o++)l.tableHead[o].label==l.checkItemReal[s].label&&(i.code=l.tableHead[o].code,i.label=l.tableHead[o].label);l.configHeader.push(i)}0==a.selectionReal.length&&(a.selectionReal=new Array(Math.ceil(a.TotalResult/t))),a.$nextTick(function(){a.multipleSelection=[];for(var e=0;e<a.tableData.length;e++)for(var t=0;t<a.selectionAll.length;t++)a.chargeObjectEqual(a.tableData[e],a.selectionAll[t])&&a.$refs.multipleTable.toggleRowSelection(a.tableData[e],!0)})}else{a.falg=!1;var c=a.Global.aport5+"/esFnsqxxController/getResultListByParams";a.$api.post(c,n,function(e){e.success&&(a.tableData=e.data.resultList,a.TotalResult=e.data.totalResult,0==a.selectionReal.length&&(a.selectionReal=new Array(Math.ceil(a.TotalResult/t))),a.$nextTick(function(){a.multipleSelection=[];for(var e=0;e<a.tableData.length;e++)for(var t=0;t<a.selectionAll.length;t++)a.tableData[e].RGUID==a.selectionAll[t].RGUID&&a.$refs.multipleTable.toggleRowSelection(a.tableData[e],!0)}))})}})},details:function(e){this.random=(new Date).getTime(),this.xid=e.RGUID,this.qzsqDialogVisible=!0}}},s={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"yymain tshu"},[l("div",{staticClass:"yytitle"},[l("el-row",{attrs:{type:"flex"}},[l("el-col",{staticClass:"br pr-20",attrs:{span:22}},[l("el-row",{attrs:{align:"center",gutter:2}},[l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[e._v("受理时间：")]),e._v(" "),l("div",{staticClass:"input-input t-flex t-date"},[l("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyyMMdd",placeholder:"开始时间"},model:{value:e.pd.SLRQ_DateRange.begin,callback:function(t){e.$set(e.pd.SLRQ_DateRange,"begin",t)},expression:"pd.SLRQ_DateRange.begin"}}),e._v(" "),l("span",{staticClass:"septum"},[e._v("-")]),e._v(" "),l("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyyMMdd",placeholder:"结束时间"},model:{value:e.pd.SLRQ_DateRange.end,callback:function(t){e.$set(e.pd.SLRQ_DateRange,"end",t)},expression:"pd.SLRQ_DateRange.end"}})],1)]),e._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[e._v("签发时间：")]),e._v(" "),l("div",{staticClass:"input-input t-flex t-date"},[l("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyyMMdd",placeholder:"开始时间"},model:{value:e.pd.SPRQ_DateRange.begin,callback:function(t){e.$set(e.pd.SPRQ_DateRange,"begin",t)},expression:"pd.SPRQ_DateRange.begin"}}),e._v(" "),l("span",{staticClass:"septum"},[e._v("-")]),e._v(" "),l("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyyMMdd",placeholder:"结束时间"},model:{value:e.pd.SPRQ_DateRange.end,callback:function(t){e.$set(e.pd.SPRQ_DateRange,"end",t)},expression:"pd.SPRQ_DateRange.end"}})],1)]),e._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[e._v("国家地区：")]),e._v(" "),l("el-select",{staticClass:"input-input",attrs:{multiple:"","collapse-tags":"",filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:e.pd.GJDQ,callback:function(t){e.$set(e.pd,"GJDQ",t)},expression:"pd.GJDQ"}},e._l(e.$store.state.gjdq,function(e){return l("el-option",{key:e.dm,attrs:{label:e.dm+" - "+e.mc,value:e.dm}})}),1)],1),e._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[e._v("受理单位：")]),e._v(" "),l("el-select",{staticClass:"input-input",attrs:{multiple:"","collapse-tags":"",filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:e.pd.SLDW,callback:function(t){e.$set(e.pd,"SLDW",t)},expression:"pd.SLDW"}},e._l(e.$store.state.sldw,function(e){return l("el-option",{key:e.dm,attrs:{label:e.dm+" - "+e.mc,value:e.dm}})}),1)],1),e._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text",attrs:{title:"申请证件种类"}},[e._v("申请证件种类：")]),e._v(" "),l("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:e.pd.BZLX,callback:function(t){e.$set(e.pd,"BZLX",t)},expression:"pd.BZLX"}},e._l(e.$store.state.zjzl,function(e){return l("el-option",{key:e.dm,attrs:{label:e.dm+" - "+e.mc,value:e.dm}})}),1)],1)],1)],1),e._v(" "),l("el-col",{staticClass:"down-btn-area",attrs:{span:2}},[l("el-button",{staticClass:"mb-15",attrs:{type:"success",size:"small"},on:{click:function(t){e.CurrentPage=1,e.getList(e.CurrentPage,e.pageSize,e.pd)}}},[e._v("查询")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.download}},[e._v("导出")])],1)],1)],1),e._v(" "),l("div",{staticClass:"yycontent"},[l("div",{staticClass:"yylbt mb-15"},[e._v("统计类别")]),e._v(" "),l("div",{staticClass:"mb-15"},[l("el-checkbox-group",{model:{value:e.checkedList,callback:function(t){e.checkedList=t},expression:"checkedList"}},e._l(e.checkItem,function(t){return l("el-checkbox",{key:t.code,attrs:{label:t.code}},[e._v(e._s(t.label))])}),1)],1),e._v(" "),e.falg?l("div",[l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{select:e.selectfn}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),e._l(e.configHeader,function(e,t){return l("el-table-column",{key:t,attrs:{prop:e.code,label:e.label}})}),e._v(" "),l("el-table-column",{attrs:{prop:"count_DESC",label:"统计数量"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-document"},on:{click:function(l){e.$router.push({name:"QFRYXX",query:{row:t.row}})}}})]}}])})],2),e._v(" "),l("div",{staticClass:"middle-foot"},[l("div",{staticClass:"page-msg"},[l("div",{},[e._v("\n          共"+e._s(e.TotalResult)+"条记录\n            ")]),e._v(" "),l("div",{},[e._v("\n              每页显示\n              "),l("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(t){e.pageSizeChange(e.pageSize)}},model:{value:e.pageSize,callback:function(t){e.pageSize=t},expression:"pageSize"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v("\n              条\n            ")],1),e._v(" "),l("div",{},[e._v("\n            共"+e._s(Math.ceil(e.TotalResult/e.pageSize))+"页\n            ")])]),e._v(" "),l("el-pagination",{attrs:{background:"","current-page":e.CurrentPage,"page-size":e.pageSize,layout:"prev, pager, next",total:e.TotalResult},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.CurrentPage=t}}})],1)],1):l("div",[l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{select:e.selectfn}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),l("el-table-column",{attrs:{prop:"ZWXM",label:"中文姓名"}}),e._v(" "),l("el-table-column",{attrs:{prop:"YWXM",label:"英文姓名"}}),e._v(" "),l("el-table-column",{attrs:{prop:"GJDQ_DESC",label:"国家地区"}}),e._v(" "),l("el-table-column",{attrs:{prop:"XB_DESC",label:"性别"}}),e._v(" "),l("el-table-column",{attrs:{prop:"CSRQ",label:"出生日期"}}),e._v(" "),l("el-table-column",{attrs:{prop:"ZJZL_DESC",label:"证件种类"}}),e._v(" "),l("el-table-column",{attrs:{prop:"XCZJHM",label:"证件号码"}}),e._v(" "),l("el-table-column",{attrs:{prop:"QZZL_DESC",label:"签证种类"}}),e._v(" "),l("el-table-column",{attrs:{prop:"XCQZHM",label:"签证号码"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-document"},on:{click:function(l){e.details(t.row)}}})]}}])})],1),e._v(" "),l("div",{staticClass:"middle-foot"},[l("div",{staticClass:"page-msg"},[l("div",{},[e._v("\n        共"+e._s(e.TotalResult)+"条记录\n          ")]),e._v(" "),l("div",{},[e._v("\n            每页显示\n            "),l("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(t){e.pageSizeChange(e.pageSize)}},model:{value:e.pageSize,callback:function(t){e.pageSize=t},expression:"pageSize"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v("\n            条\n          ")],1),e._v(" "),l("div",{},[e._v("\n          共"+e._s(Math.ceil(e.TotalResult/e.pageSize))+"页\n          ")])]),e._v(" "),l("el-pagination",{attrs:{background:"","current-page":e.CurrentPage,"page-size":e.pageSize,layout:"prev, pager, next",total:e.TotalResult},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.CurrentPage=t}}})],1)],1)]),e._v(" "),l("div",{staticClass:"bj"},[l("el-dialog",{attrs:{title:"签证申请信息详情",visible:e.qzsqDialogVisible,"custom-class":"big_dialog","append-to-body":!1,modal:!1},on:{"update:visible":function(t){e.qzsqDialogVisible=t}}},[l("QZSQ",{attrs:{type:e.type,xid:e.xid,random:e.random}}),e._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"small"},on:{click:function(t){e.qzsqDialogVisible=!1}}},[e._v("取 消")])],1)],1)],1)])},staticRenderFns:[]};var i=l("VU/8")(a,s,!1,function(e){l("2Uql"),l("9fA9")},"data-v-6252b84a",null);t.default=i.exports}});
//# sourceMappingURL=45.75ecc6573ad8a5e2d157.js.map