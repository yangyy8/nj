webpackJsonp([24],{IqyF:function(t,e){},P2R7:function(t,e){},ZEr0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={components:{QZSQ:a("WY/o").a},data:function(){return{radio1:"0",radio2:"0",typet:"1",CurrentPage:1,pageSize:10,TotalResult:0,pd:{CSRQ_DateRange:{begin:"",end:"",dataType:"date"},SQSJ_DateRange:{begin:"",end:"",dataType:"date"}},pm:{},imagess:[],imgshow1:!1,imgshow2:!0,shm:!1,lg:!1,type:1,xid:"",random:"",dbqzDialogVisible:!1,options:[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}],tableData:[],checkItem:[{code:"YMQZZLDM",label:"签证种类"},{code:"QZGJDM",label:"签证国家"},{code:"XBDM",label:"性别"}],checkedList:[],checkItemReal:[],tableHead:[{code:"YMQZZLDM_DESC",label:"签证种类"},{code:"QZGJDM_DESC",label:"签证国家"},{code:"XBDM_DESC",label:"性别"}],configHeader:[],pd0:{},form:{},falg:!1,disa:!1,czinfo:{},multipleSelection:[],selectionAll:[],yuid:[],selectionReal:[]}},mounted:function(){this.$store.dispatch("getGjdq"),this.$store.dispatch("getXB"),this.$store.dispatch("getQzzl")},watch:{falg:function(t,e){this.multipleSelection=[],this.selectionAll=[],this.selectionReal=[]},checkedList:{handler:function(t,e){t.toString()!=e.toString()&&(this.multipleSelection=[],this.selectionAll=[],this.selectionReal=[])}}},methods:{selectfn:function(t,e){this.multipleSelection=t,this.dataSelection()},dataSelection:function(){console.log("this.multipleSelection",this.multipleSelection),this.selectionReal.splice(this.CurrentPage-1,1,this.multipleSelection),console.log("this.selectionReal",this.selectionReal),this.selectionAll=[];for(var t=0;t<this.selectionReal.length;t++)if(this.selectionReal[t])for(var e=0;e<this.selectionReal[t].length;e++)this.selectionAll.push(this.selectionReal[t][e]);console.log("this.selectionAll",this.selectionAll)},download:function(){var t=this,e={};if(0==this.checkedList.length)if(0==this.selectionAll.length)e={pd:this.pd};else{for(var a in this.yuid=[],this.selectionAll)this.yuid.push(this.selectionAll[a].RGUID);this.pd.RGUID=this.yuid,e={pd:this.pd}}else e=0==this.selectionAll.length?{pd:this.pd,groupList:this.checkedList}:{requestTempList:this.selectionAll,groupList:this.checkedList};this.$api.post(this.Global.aport5+"/esDbqzController/exportDbqz",e,function(e){t.downloadM(e)},function(t){},{},"blob")},downloadM:function(t){if(t){var e=window.URL.createObjectURL(new Blob([t],{type:"application/xls"})),a=document.createElement("a");a.style.display="none",a.href=e,a.setAttribute("download","代办签证统计人员列表"+this.format(new Date,"yyyyMMddhhmmss")+".xls"),document.body.appendChild(a),a.click()}},handleSelectionChange:function(t){this.multipleSelection=t},pageSizeChange:function(t){this.getList(this.CurrentPage,t,this.pd),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.getList(t,this.pageSize,this.pd),console.log("当前页: "+t)},open:function(t){this.$alert(t,"提示",{confirmButtonText:"确定"})},getList:function(t,e,a){var l=this;this.checkItemReal=[];for(var s=0;s<this.checkedList.length;s++)for(var i=0;i<this.checkItem.length;i++)this.checkedList[s]==this.checkItem[i].code&&this.checkItemReal.push(this.checkItem[i]);a.hasOwnProperty("RGUID")&&delete a.RGUID;var n={currentPage:t,showCount:e,pd:a,groupList:this.checkedList};this.$api.post(this.Global.aport5+"/esDbqzController/getCount",n,function(t){if("true"==t.data.isFenLei){l.falg=!0,l.tableData=t.data.resultList,l.TotalResult=t.data.totalAllResult,l.configHeader=[];for(var a=l,s=0;s<a.checkItemReal.length;s++){for(var i={},o=0;o<a.tableHead.length;o++)a.tableHead[o].label==a.checkItemReal[s].label&&(i.code=a.tableHead[o].code,i.label=a.tableHead[o].label);a.configHeader.push(i)}0==l.selectionReal.length&&(l.selectionReal=new Array(Math.ceil(l.TotalResult/e))),l.$nextTick(function(){l.multipleSelection=[];for(var t=0;t<l.tableData.length;t++)for(var e=0;e<l.selectionAll.length;e++)l.chargeObjectEqual(l.tableData[t],l.selectionAll[e])&&l.$refs.multipleTable.toggleRowSelection(l.tableData[t],!0)})}else{l.falg=!1;var c=l.Global.aport5+"/esDbqzController/getResultListByParams";l.$api.post(c,n,function(t){t.success&&(l.tableData=t.data.resultList,l.TotalResult=t.data.totalResult,0==l.selectionReal.length&&(l.selectionReal=new Array(Math.ceil(l.TotalResult/e))),l.$nextTick(function(){l.multipleSelection=[];for(var t=0;t<l.tableData.length;t++)for(var e=0;e<l.selectionAll.length;e++)l.tableData[t].RGUID==l.selectionAll[e].RGUID&&l.$refs.multipleTable.toggleRowSelection(l.tableData[t],!0)}))})}})},details:function(t){var e=this,a={pd:{RGUID:t.RGUID}};this.$api.post(this.Global.aport5+"/esDbqzController/getResultListByParams",a,function(t){t.success&&(t.data.resultList[0]?e.czinfo=t.data.resultList[0]:e.czinfo={},e.dbqzDialogVisible=!0)})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yymain tshu"},[a("div",{staticClass:"yytitle"},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:"br pr-20",attrs:{span:22}},[a("el-row",{attrs:{align:"center",gutter:2}},[a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("签证种类：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.YMQZZLDM,callback:function(e){t.$set(t.pd,"YMQZZLDM",e)},expression:"pd.YMQZZLDM"}},t._l(t.$store.state.qzzl,function(t){return a("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("签证国家：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.QZGJDM,callback:function(e){t.$set(t.pd,"QZGJDM",e)},expression:"pd.QZGJDM"}},t._l(t.$store.state.gjdq,function(t){return a("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("申请日期：")]),t._v(" "),a("div",{staticClass:"input-input t-flex t-date"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyyMMdd",placeholder:"开始时间"},model:{value:t.pd.SQSJ_DateRange.begin,callback:function(e){t.$set(t.pd.SQSJ_DateRange,"begin",e)},expression:"pd.SQSJ_DateRange.begin"}}),t._v(" "),a("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyyMMdd",placeholder:"结束时间"},model:{value:t.pd.SQSJ_DateRange.end,callback:function(e){t.$set(t.pd.SQSJ_DateRange,"end",e)},expression:"pd.SQSJ_DateRange.end"}})],1)]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("性别：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.XBDM,callback:function(e){t.$set(t.pd,"XBDM",e)},expression:"pd.XBDM"}},t._l(t.$store.state.xb,function(t){return a("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("单位名称：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.DWMC,callback:function(e){t.$set(t.pd,"DWMC",e)},expression:"pd.DWMC"}})],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("出生日期：")]),t._v(" "),a("div",{staticClass:"input-input t-flex t-date"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyyMMdd",placeholder:"开始时间"},model:{value:t.pd.CSRQ_DateRange.begin,callback:function(e){t.$set(t.pd.CSRQ_DateRange,"begin",e)},expression:"pd.CSRQ_DateRange.begin"}}),t._v(" "),a("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyyMMdd",placeholder:"结束时间"},model:{value:t.pd.CSRQ_DateRange.end,callback:function(e){t.$set(t.pd.CSRQ_DateRange,"end",e)},expression:"pd.CSRQ_DateRange.end"}})],1)])],1)],1),t._v(" "),a("el-col",{staticClass:"down-btn-area",attrs:{span:2}},[a("el-button",{staticClass:"mb-10",attrs:{type:"success",size:"small"},on:{click:function(e){t.CurrentPage=1,t.getList(t.CurrentPage,t.pageSize,t.pd)}}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.download}},[t._v("导出")])],1)],1)],1),t._v(" "),a("div",{staticClass:"yycontent"},[a("div",{staticClass:"yylbt mb-15"},[t._v("统计类别")]),t._v(" "),a("div",{staticClass:"mb-15"},[a("el-checkbox-group",{model:{value:t.checkedList,callback:function(e){t.checkedList=e},expression:"checkedList"}},t._l(t.checkItem,function(e){return a("el-checkbox",{key:e.code,attrs:{label:e.code}},[t._v(t._s(e.label))])}),1)],1),t._v(" "),t.falg?a("div",[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{select:t.selectfn}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),t._l(t.configHeader,function(t,e){return a("el-table-column",{key:e,attrs:{prop:t.code,label:t.label}})}),t._v(" "),a("el-table-column",{attrs:{prop:"count_DESC",label:"统计数量"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-document"},on:{click:function(a){t.$router.push({name:"DBQZRYXX",query:{row:e.row,queryPd:t.pd}})}}})]}}])})],2),t._v(" "),a("div",{staticClass:"middle-foot"},[a("div",{staticClass:"page-msg"},[a("div",{},[t._v("\n          共"+t._s(t.TotalResult)+"条记录\n            ")]),t._v(" "),a("div",{},[t._v("\n              每页显示\n              "),a("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n              条\n            ")],1),t._v(" "),a("div",{},[t._v("\n            共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n            ")])]),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.CurrentPage=e}}})],1)],1):a("div",[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{select:t.selectfn}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"XM",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"XBMC",label:"性别"}}),t._v(" "),a("el-table-column",{attrs:{prop:"CSRQ",label:"出生日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"SFZH",label:"身份证号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"YMQZZLMC",label:"移民签证种类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"QZGJMC",label:"签证国家"}}),t._v(" "),a("el-table-column",{attrs:{prop:"DWMC",label:"单位名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"SQSJ",label:"申请时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-document"},on:{click:function(a){t.details(e.row)}}})]}}])})],1),t._v(" "),a("div",{staticClass:"middle-foot"},[a("div",{staticClass:"page-msg"},[a("div",{},[t._v("\n        共"+t._s(t.TotalResult)+"条记录\n          ")]),t._v(" "),a("div",{},[t._v("\n            每页显示\n            "),a("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n            条\n          ")],1),t._v(" "),a("div",{},[t._v("\n          共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n          ")])]),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.CurrentPage=e}}})],1)],1)]),t._v(" "),a("div",{staticClass:"bj"},[a("el-dialog",{attrs:{title:"代办签证信息详情",visible:t.dbqzDialogVisible,"custom-class":"big_dialog","append-to-body":!1,modal:!1},on:{"update:visible":function(e){t.dbqzDialogVisible=e}}},[a("el-row",{staticClass:"mb-6",attrs:{gutter:3}},[a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("姓名：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.XM))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("性别名称：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.XBMC))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("出生日期：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v(" "+t._s(t.czinfo.CSRQ))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("身份证号：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.SFZH))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("移民签证种类名称：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.YMQZZLMC))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("签证国家名称：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.QZGJMC))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("单位名称：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.DWMC))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("申请时间：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.SQSJ))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("操作人：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.CZR))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("操作时间：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.CZSJ))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("修改人：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.czinfo.XGR))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:8}},[a("span",{staticClass:"input-text"},[t._v("修改时间：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v(" "+t._s(t.czinfo.XGSJ))])])],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dbqzDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)])},staticRenderFns:[]};var i=a("VU/8")(l,s,!1,function(t){a("P2R7"),a("IqyF")},"data-v-e09fb7f0",null);e.default=i.exports}});
//# sourceMappingURL=24.1423e4a5400da8352f5e.js.map