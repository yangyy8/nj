webpackJsonp([120],{"E3+6":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("CgCp"),s=a("XLwt"),i=a.n(s),n={components:{LXSXX:l.a},data:function(){return{lxsDialogVisible:!1,type:2,xid:"",pd:{MXLX:"LXS_202TFZL",BJSJ_DateRange:{begin:"",end:""}},pdList:{},lineChart:null,page:0,tableData:[],CurrentPage:1,pageSize:10,TotalResult:0,options:[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}]}},mounted:function(){this.$store.dispatch("geterXxdm"),this.getListTu(this.pd)},methods:{pageSizeChange:function(e){this.getList(this.CurrentPage,e,this.pdList)},handleCurrentChange:function(e){this.getList(e,this.pageSize,this.pdList)},details:function(e){this.xid=e.RGUID,target.scrollIntoView(),this.lxsDialogVisible=!0},getList:function(e,t,a){var l=this,s={currentPage:e,showCount:t,pd:a,orderBy:"STUID",orderType:"ASC"};this.$api.post(this.Global.aport4+"/jiaoYuTing202Controller/getResultListByParams",s,function(e){e.success&&(l.tableData=e.data.resultList,l.TotalResult=e.data.totalResult)})},getListTu:function(e){var t=this;""==e.BJSJ_DateRange.begin?e.BJSJ_DateRange.begin="":null==e.BJSJ_DateRange.begin?e.BJSJ_DateRange.begin=null:e.BJSJ_DateRange.begin=e.BJSJ_DateRange.begin+"000000",""==e.BJSJ_DateRange.end?e.BJSJ_DateRange.end="":null==e.BJSJ_DateRange.end?e.BJSJ_DateRange.end=null:e.BJSJ_DateRange.end=e.BJSJ_DateRange.end+"000000";var a={pd:e};this.$api.post(this.Global.aport4+"/warningInfoController/get202tfzlyjxx",a,function(e){e.success&&t.drawLine(e.data.legend,e.data.header,e.data.series)})},drawLine:function(e,t,a){this.lineChart=i.a.init(document.getElementById("echarts")),window.onresize=i.a.init(document.getElementById("echarts")).resize;var l=this;l.lineChart.setOption({legend:{data:e},tooltip:{trigger:"axis"},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},axisLine:{onZero:!1},data:t}],yAxis:[{type:"value"}],series:a},!0),l.lineChart.on("click",function(e){console.log(e);var t={};t.YEAR=e.name,t.BELONGID=e.seriesName,l.pdList=t,l.page=1,l.CurrentPage=1,l.getList(l.CurrentPage,l.pageSize,l.pdList)}),l.lineChart.resize()}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"yymain"},[a("div",{staticClass:"yytitle",attrs:{id:"target"}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:"br pr-20",attrs:{span:22}},[a("el-row",{attrs:{align:"center",gutter:2}},[a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[e._v("时间范围：")]),e._v(" "),a("div",{staticClass:"input-input t-flex t-date"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyyMMdd",placeholder:"开始时间"},model:{value:e.pd.BJSJ_DateRange.begin,callback:function(t){e.$set(e.pd.BJSJ_DateRange,"begin",t)},expression:"pd.BJSJ_DateRange.begin"}}),e._v(" "),a("span",{staticClass:"septum"},[e._v("-")]),e._v(" "),a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyyMMdd",placeholder:"结束时间"},model:{value:e.pd.BJSJ_DateRange.end,callback:function(t){e.$set(e.pd.BJSJ_DateRange,"end",t)},expression:"pd.BJSJ_DateRange.end"}})],1)]),e._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[e._v("学校代码：")]),e._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:e.pd.DWID,callback:function(t){e.$set(e.pd,"DWID",t)},expression:"pd.DWID"}},e._l(e.$store.state.erxxdm,function(e){return a("el-option",{key:e.dm,attrs:{label:e.dm+" - "+e.mc,value:e.dm}})}),1)],1)],1)],1),e._v(" "),a("el-col",{staticClass:"down-btn-area",attrs:{span:2}},[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(t){e.page=0,e.tableData=[],e.CurrentPage=1,e.TotalResult=0,e.getListTu(e.pd)}}},[e._v("查询")])],1)],1)],1),e._v(" "),a("div",{staticClass:"yycontent"},[a("div",{staticClass:"ak-tabs"},[a("div",{staticClass:"ak-tab-item hand",class:{"ak-checked":0==e.page},on:{click:function(t){e.page=0,e.getListTu(e.pd)}}},[e._v("\n        图表\n      ")]),e._v(" "),a("div",{staticClass:"ak-tab-item hand",class:{"ak-checked":1==e.page},on:{click:function(t){e.page=1}}},[e._v("\n        列表\n      ")])]),e._v(" "),a("div",{staticClass:"ak-tab-pane"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.page,expression:"page==0"}],staticClass:"chart",staticStyle:{width:"100%"}},[a("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"echarts"}})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.page,expression:"page==1"}]},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"ENAME",label:"英文名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EFAMILY",label:"英文姓"}}),e._v(" "),a("el-table-column",{attrs:{prop:"CNAME",label:"中文姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"SEX",label:"性别"}}),e._v(" "),a("el-table-column",{attrs:{prop:"BIRTHDAY",label:"出生日期"}}),e._v(" "),a("el-table-column",{attrs:{prop:"NATIONALITY",label:"国籍"}}),e._v(" "),a("el-table-column",{attrs:{prop:"PASSNO",label:"护照号码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EDUCATION",label:"最高学历"}}),e._v(" "),a("el-table-column",{attrs:{prop:"REPLACE",label:"家庭地址"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EMAIL",label:"电子邮箱"}}),e._v(" "),a("el-table-column",{attrs:{prop:"STUID",label:"学号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"CFACULTY",label:"院系中文名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"YEAR",label:"入学学年度"}}),e._v(" "),a("el-table-column",{attrs:{prop:"WORK",label:"工作或学习单位"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",size:"mini",icon:"el-icon-tickets"},on:{click:function(a){e.details(t.row)}}})]}}])})],1),e._v(" "),a("div",{staticClass:"middle-foot"},[a("div",{staticClass:"page-msg"},[a("div",{},[e._v("\n                      共"+e._s(e.TotalResult)+"条记录\n              ")]),e._v(" "),a("div",{},[e._v("\n                每页显示\n                "),a("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(t){e.pageSizeChange(e.pageSize)}},model:{value:e.pageSize,callback:function(t){e.pageSize=t},expression:"pageSize"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v("\n                条\n              ")],1),e._v(" "),a("div",{},[e._v("\n              共"+e._s(Math.ceil(e.TotalResult/e.pageSize))+"页\n              ")])]),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.CurrentPage,"page-size":e.pageSize,layout:"prev, pager, next",total:e.TotalResult},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.CurrentPage=t}}})],1)],1)])]),e._v(" "),a("el-dialog",{attrs:{title:"留学生申请信息详情",visible:e.lxsDialogVisible,"custom-class":"big_dialog","append-to-body":!1,modal:!1},on:{"update:visible":function(t){e.lxsDialogVisible=t}}},[a("LXSXX",{attrs:{type:e.type,xid:e.xid}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.lxsDialogVisible=!1}}},[e._v("取 消")])],1)],1)],1)},staticRenderFns:[]},r=a("VU/8")(n,o,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=120.2d95b25753ec1b9cb11f.js.map