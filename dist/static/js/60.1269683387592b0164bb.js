webpackJsonp([60],{"OnD/":function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={components:{CZXX:l("7WET").a},data:function(){return{tenArr:[],tirArr:[],rybh:"",radio1:"0",radio2:"0",typet:"1",CurrentPage:1,pageSize:10,TotalResult:0,pd:{CSRQ_DateRange:{begin:"",end:"",dataType:"date"},FJJSSJ_DateRange:{begin:"",end:"",dataType:"date"},SJXFSJ_DateRange:{begin:"",end:"",dataType:"date"},PCSJSSJ_DateRange:{begin:"",end:"",dataType:"date"},JZZT:"1"},pm:{},imagess:[],imgshow1:!1,imgshow2:!0,shm:!1,lg:!1,type:3,xid:"",random:"",czDialogVisible:!1,options:[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}],tableData:[],checkItem:[{code:"GJDQ",label:"国家地区"},{code:"JZZT",label:"居住类型状态"},{code:"JZD_ZRQ",label:"居住地责任区"},{code:"JZD_PCS",label:"居住地所属派出所"},{code:"SFDM",label:"身份"},{code:"QZZL",label:"签证种类"},{code:"FWCS",label:"服务处所"},{code:"ZJZL",label:"证件种类"},{code:"XB",label:"性别"},{code:"SHIGUO",label:"十国人员"},{code:"SANSHIYIGUO",label:"三十一国人员"}],checkedList:[],checkItemReal:[],tableHead:[{code:"GJDQ_DESC",label:"国家地区"},{code:"JZZT_DESC",label:"居住类型状态"},{code:"JZD_ZRQ",label:"居住地责任区"},{code:"JZD_PCS_DESC",label:"居住地所属派出所"},{code:"SFDM_DESC",label:"身份"},{code:"QZZL_DESC",label:"签证种类"},{code:"FWCS",label:"服务处所"},{code:"ZJZL_DESC",label:"证件种类"},{code:"XB_DESC",label:"性别"}],configHeader:[],pd0:{},form:{},falg:!1,disa:!1,allData:{},totalAllResult:0,multipleSelection:[],selectionAll:[],yuid:[],selectionReal:[]}},mounted:function(){this.$store.dispatch("getGjdq"),this.$store.dispatch("getXB"),this.$store.dispatch("getSsdw"),this.$store.dispatch("getZjzl"),this.$store.dispatch("getRjqzzl"),this.$store.dispatch("getRjsy"),this.$store.dispatch("getZsxz"),this.$store.dispatch("getRzfs"),this.$store.dispatch("getJzztlx"),this.$store.dispatch("getSf")},watch:{falg:function(t,e){this.multipleSelection=[],this.selectionAll=[],this.selectionReal=[]},checkedList:{handler:function(t,e){t.toString()!=e.toString()&&(this.multipleSelection=[],this.selectionAll=[],this.selectionReal=[])}}},methods:{handleSelectionChange:function(t){},selectfn:function(t,e){this.multipleSelection=t,this.dataSelection()},dataSelection:function(){this.selectionReal.splice(this.CurrentPage-1,1,this.multipleSelection),this.selectionAll=[];for(var t=0;t<this.selectionReal.length;t++)if(this.selectionReal[t])for(var e=0;e<this.selectionReal[t].length;e++)this.selectionAll.push(this.selectionReal[t][e])},download:function(){var t=this,e={};if(0==this.selectionAll.length)e=0==this.checkedList.length?{pd:this.pd}:{pd:this.pd,groupList:this.checkedList};else if(0==this.checkedList.length){for(var l in this.yuid=[],this.selectionAll)this.yuid.push(this.selectionAll[l].RGUID);this.pd.RGUID=this.yuid,e={pd:this.pd}}else e={requestTempList:this.selectionAll,groupList:this.checkedList};this.$api.post(this.Global.aport5+"/changZhuController/export",e,function(e){t.downloadM(e)},function(t){},{},"blob")},downloadM:function(t){if(t){var e=window.URL.createObjectURL(new Blob([t],{type:"application/xls"})),l=document.createElement("a");l.style.display="none",l.href=e,l.setAttribute("download","常住信息综合分析人员列表"+this.format(new Date,"yyyyMMddhhmmss")+".xls"),document.body.appendChild(l),l.click()}},pageSizeChange:function(t){this.pageSize=t,this.getList(this.CurrentPage,t,this.pd),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.CurrentPage=t,this.getList(t,this.pageSize,this.pd),console.log("当前页: "+t)},open:function(t){this.$alert(t,"提示",{confirmButtonText:"确定"})},getList:function(t,e,l){var a=this;this.checkItemReal=[];for(var s=0;s<this.checkedList.length;s++)for(var i=0;i<this.checkItem.length;i++)this.checkedList[s]==this.checkItem[i].code&&this.checkItemReal.push(this.checkItem[i]);l.hasOwnProperty("RGUID")&&delete l.RGUID;var n={currentPage:t,showCount:e,pd:l,groupList:this.checkedList};this.$api.post(this.Global.aport5+"/changZhuController/getCount",n,function(t){if(1==t.data.isFenLei){a.falg=!0,a.tableData=t.data.resultList,a.TotalResult=t.data.totalResult,a.totalAllResult=t.data.totalAllResult,a.configHeader=[];for(var l=a,s=0;s<l.checkItemReal.length;s++){for(var i={},o=0;o<l.tableHead.length;o++)"SHIGUO"!=l.checkItemReal[s].code&&"SANSHIYIGUO"!=l.checkItemReal[s].code||(i.code="GJDQ_DESC",i.label="国家地区"),l.tableHead[o].label==l.checkItemReal[s].label&&(i.code=l.tableHead[o].code,i.label=l.tableHead[o].label);l.configHeader.push(i)}for(var c=[],d=[],r=0;r<a.configHeader.length;r++)-1==c.indexOf(a.configHeader[r].code)&&(c.push(a.configHeader[r].code),d.push(a.configHeader[r]));a.configHeader=d,0==a.selectionReal.length&&(a.selectionReal=new Array(Math.ceil(a.TotalResult/e))),a.$nextTick(function(){a.multipleSelection=[];for(var t=0;t<a.tableData.length;t++)for(var e=0;e<a.selectionAll.length;e++)a.chargeObjectEqual(a.tableData[t],a.selectionAll[e])&&a.$refs.multipleTable.toggleRowSelection(a.tableData[t],!0)})}else{a.falg=!1;var p=a.Global.aport5+"/changZhuController/getResultListByParams";a.$api.post(p,n,function(t){t.success&&(a.tableData=t.data.resultList,a.TotalResult=t.data.totalResult,0==a.selectionReal.length&&(a.selectionReal=new Array(Math.ceil(a.TotalResult/e))),a.$nextTick(function(){a.multipleSelection=[];for(var t=0;t<a.tableData.length;t++)for(var e=0;e<a.selectionAll.length;e++)a.tableData[t].RGUID==a.selectionAll[e].RGUID&&a.$refs.multipleTable.toggleRowSelection(a.tableData[t],!0)}))})}})},details:function(t){this.random=(new Date).getTime(),this.xid=t.RGUID,this.rybh=t.RYBH,this.allData=t,this.type=3,this.czDialogVisible=!0}}},s={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"yymain tshu"},[l("div",{staticClass:"yytitle"},[l("el-row",{attrs:{type:"flex"}},[l("el-col",{staticClass:"br pr-20",attrs:{span:22}},[l("el-row",{attrs:{align:"center",gutter:2}},[l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("中文姓名：")]),t._v(" "),l("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.ZWXM,callback:function(e){t.$set(t.pd,"ZWXM",e)},expression:"pd.ZWXM"}})],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("英文姓：")]),t._v(" "),l("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.YWX,callback:function(e){t.$set(t.pd,"YWX",e)},expression:"pd.YWX"}})],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("英文名：")]),t._v(" "),l("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.YWM,callback:function(e){t.$set(t.pd,"YWM",e)},expression:"pd.YWM"}})],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("性别：")]),t._v(" "),l("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.XB,callback:function(e){t.$set(t.pd,"XB",e)},expression:"pd.XB"}},t._l(t.$store.state.xb,function(t){return l("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("出生日期：")]),t._v(" "),l("div",{staticClass:"input-input t-flex t-date"},[l("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"开始时间"},model:{value:t.pd.CSRQ_DateRange.begin,callback:function(e){t.$set(t.pd.CSRQ_DateRange,"begin",e)},expression:"pd.CSRQ_DateRange.begin"}}),t._v(" "),l("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),l("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"结束时间"},model:{value:t.pd.CSRQ_DateRange.end,callback:function(e){t.$set(t.pd.CSRQ_DateRange,"end",e)},expression:"pd.CSRQ_DateRange.end"}})],1)]),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("证件号码：")]),t._v(" "),l("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.ZJHM,callback:function(e){t.$set(t.pd,"ZJHM",e)},expression:"pd.ZJHM"}})],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("停留有效期：")]),t._v(" "),l("el-date-picker",{staticClass:"input-input",attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"开始时间"},model:{value:t.pd.TLYXQ_Nokeyword,callback:function(e){t.$set(t.pd,"TLYXQ_Nokeyword",e)},expression:"pd.TLYXQ_Nokeyword"}})],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("国家地区：")]),t._v(" "),l("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.GJDQ,callback:function(e){t.$set(t.pd,"GJDQ",e)},expression:"pd.GJDQ"}},t._l(t.$store.state.gjdq,function(t){return l("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("签证种类：")]),t._v(" "),l("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.QZZL,callback:function(e){t.$set(t.pd,"QZZL",e)},expression:"pd.QZZL"}},t._l(t.$store.state.rjqzzl,function(t){return l("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("证件种类：")]),t._v(" "),l("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.ZJZL,callback:function(e){t.$set(t.pd,"ZJZL",e)},expression:"pd.ZJZL"}},t._l(t.$store.state.zjzl,function(t){return l("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("居留事由：")]),t._v(" "),l("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.TLSY,callback:function(e){t.$set(t.pd,"TLSY",e)},expression:"pd.TLSY"}},t._l(t.$store.state.rjsy,function(t){return l("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("入住方式：")]),t._v(" "),l("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.RZFS,callback:function(e){t.$set(t.pd,"RZFS",e)},expression:"pd.RZFS"}},t._l(t.$store.state.rzfs,function(t){return l("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("住房类型：")]),t._v(" "),l("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.FWXZ,callback:function(e){t.$set(t.pd,"FWXZ",e)},expression:"pd.FWXZ"}},t._l(t.$store.state.zsxz,function(t){return l("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("居住状态：")]),t._v(" "),l("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.JZZT,callback:function(e){t.$set(t.pd,"JZZT",e)},expression:"pd.JZZT"}},t._l(t.$store.state.jzztlx,function(t){return l("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("所属单位：")]),t._v(" "),l("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.SSPCS,callback:function(e){t.$set(t.pd,"SSPCS",e)},expression:"pd.SSPCS"}},t._l(t.$store.state.ssdw,function(t){return l("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("身份：")]),t._v(" "),l("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.SFDM,callback:function(e){t.$set(t.pd,"SFDM",e)},expression:"pd.SFDM"}},t._l(t.$store.state.sf,function(t){return l("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("服务处所：")]),t._v(" "),l("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.FWCS,callback:function(e){t.$set(t.pd,"FWCS",e)},expression:"pd.FWCS"}})],1),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("市局下发时间：")]),t._v(" "),l("div",{staticClass:"input-input t-flex t-date"},[l("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"开始时间"},model:{value:t.pd.SJXFSJ_DateRange.begin,callback:function(e){t.$set(t.pd.SJXFSJ_DateRange,"begin",e)},expression:"pd.SJXFSJ_DateRange.begin"}}),t._v(" "),l("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),l("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"结束时间"},model:{value:t.pd.SJXFSJ_DateRange.end,callback:function(e){t.$set(t.pd.SJXFSJ_DateRange,"end",e)},expression:"pd.SJXFSJ_DateRange.end"}})],1)]),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("分局接收时间：")]),t._v(" "),l("div",{staticClass:"input-input t-flex t-date"},[l("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"开始时间"},model:{value:t.pd.FJJSSJ_DateRange.begin,callback:function(e){t.$set(t.pd.FJJSSJ_DateRange,"begin",e)},expression:"pd.FJJSSJ_DateRange.begin"}}),t._v(" "),l("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),l("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"结束时间"},model:{value:t.pd.FJJSSJ_DateRange.end,callback:function(e){t.$set(t.pd.FJJSSJ_DateRange,"end",e)},expression:"pd.FJJSSJ_DateRange.end"}})],1)]),t._v(" "),l("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[l("span",{staticClass:"input-text"},[t._v("派出所接收时间：")]),t._v(" "),l("div",{staticClass:"input-input t-flex t-date"},[l("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"开始时间"},model:{value:t.pd.PCSJSSJ_DateRange.begin,callback:function(e){t.$set(t.pd.PCSJSSJ_DateRange,"begin",e)},expression:"pd.PCSJSSJ_DateRange.begin"}}),t._v(" "),l("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),l("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"结束时间"},model:{value:t.pd.PCSJSSJ_DateRange.end,callback:function(e){t.$set(t.pd.PCSJSSJ_DateRange,"end",e)},expression:"pd.PCSJSSJ_DateRange.end"}})],1)])],1)],1),t._v(" "),l("el-col",{staticClass:"down-btn-area",attrs:{span:2}},[l("el-button",{staticClass:"mb-15",attrs:{type:"success",size:"small"},on:{click:function(e){t.CurrentPage=1,t.getList(t.CurrentPage,t.pageSize,t.pd)}}},[t._v("查询")]),t._v(" "),l("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.download}},[t._v("导出")])],1)],1)],1),t._v(" "),l("div",{staticClass:"yycontent"},[l("el-row",{staticClass:"yylbt"},[l("el-col",{attrs:{span:22}},[l("span",[t._v("统计类别")])]),t._v(" "),l("el-col",{staticClass:"down-btn-area",attrs:{span:2}})],1),t._v(" "),l("div",{staticClass:"mb-15 t-tjCheck"},[l("el-checkbox-group",{model:{value:t.checkedList,callback:function(e){t.checkedList=e},expression:"checkedList"}},t._l(t.checkItem,function(e){return l("el-checkbox",{key:e.code,attrs:{label:e.code}},[t._v(t._s(e.label))])}),1)],1),t._v(" "),t.falg?l("div",[l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{select:t.selectfn,"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),t._l(t.configHeader,function(t,e){return l("el-table-column",{key:e,attrs:{prop:t.code,label:t.label}})}),t._v(" "),l("el-table-column",{attrs:{prop:"count_DESC",label:"统计数量"}}),t._v(" "),l("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-document"},on:{click:function(l){t.$router.push({name:"CZJWZHFXRYXX",query:{row:e.row,queryPd:t.pd}})}}})]}}])})],2),t._v(" "),l("div",{staticClass:"middle-foot"},[l("div",{staticClass:"page-msg"},[l("div",{},[t._v("\n          共"+t._s(t.TotalResult)+"条记录\n            ")]),t._v(" "),l("div",{},[t._v("\n              每页显示\n              "),l("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}},t._l(t.options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n              条\n            ")],1),t._v(" "),l("div",{},[t._v("\n            共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n            ")])]),t._v(" "),l("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.CurrentPage=e}}})],1),t._v(" "),l("div",{staticClass:"totalClass"},[t._v("\n          总数量："),l("span",[t._v(t._s(t.totalAllResult))])])],1):l("div",[l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{select:t.selectfn,"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),l("el-table-column",{attrs:{prop:"ZWXM",label:"中文姓名"}}),t._v(" "),l("el-table-column",{attrs:{prop:"YWX",label:"英文姓"}}),t._v(" "),l("el-table-column",{attrs:{prop:"YWM",label:"英文名"}}),t._v(" "),l("el-table-column",{attrs:{prop:"XB_DESC",label:"性别"}}),t._v(" "),l("el-table-column",{attrs:{prop:"CSRQ",label:"出生日期"}}),t._v(" "),l("el-table-column",{attrs:{prop:"GJDQ_DESC",label:"国家地区"}}),t._v(" "),l("el-table-column",{attrs:{prop:"ZJHM",label:"证件号码"}}),t._v(" "),l("el-table-column",{attrs:{prop:"SFDM_DESC",label:"身份"}}),t._v(" "),l("el-table-column",{attrs:{prop:"ZJZL_DESC",label:"证件种类"}}),t._v(" "),l("el-table-column",{attrs:{prop:"QZZL_DESC",label:"签证种类"}}),t._v(" "),l("el-table-column",{attrs:{label:"操作",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-document"},on:{click:function(l){t.details(e.row)}}})]}}])})],1),t._v(" "),l("div",{staticClass:"middle-foot"},[l("div",{staticClass:"page-msg"},[l("div",{},[t._v("\n        共"+t._s(t.TotalResult)+"条记录\n          ")]),t._v(" "),l("div",{},[t._v("\n            每页显示\n            "),l("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}},t._l(t.options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n            条\n          ")],1),t._v(" "),l("div",{},[t._v("\n          共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n          ")])]),t._v(" "),l("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.CurrentPage=e}}})],1)],1)],1),t._v(" "),l("div",{staticClass:"bj"},[l("el-dialog",{attrs:{title:"常住信息详情",visible:t.czDialogVisible,"custom-class":"big_dialog","append-to-body":!1,modal:!1},on:{"update:visible":function(e){t.czDialogVisible=e}}},[l("CZXX",{attrs:{type:t.type,xid:t.xid,random:t.random,rybh:t.rybh,row:t.allData}}),t._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"small"},on:{click:function(e){t.czDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)])},staticRenderFns:[]};var i=l("VU/8")(a,s,!1,function(t){l("dOrt"),l("Tvye")},"data-v-2e30027a",null);e.default=i.exports},Tvye:function(t,e){},dOrt:function(t,e){}});
//# sourceMappingURL=60.1269683387592b0164bb.js.map