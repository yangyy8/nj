webpackJsonp([28],{"/R6c":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("woOf"),s=a.n(l),i={components:{LZXX:a("yHYR").a},data:function(){return{type:1,rybh:"",xid:"",CurrentPage:1,pageSize:10,TotalResult:0,form:{},pd:{},imagess:[],radio1:"0",radio2:"0",typet:"1",imgshow1:!1,imgshow2:!0,shm:!1,lg:!1,tableData:[],detailsDialogVisible:!1,options:[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}],row:[],queryPd:{}}},activated:function(){this.row=this.$route.query.row,this.queryPd=this.$route.query.queryPd,console.log("row",this.row),this.getList(this.CurrentPage,this.pageSize,this.pd)},mounted:function(){this.$store.dispatch("getGjdq")},methods:{handleSelectionChange:function(t){this.multipleSelection=t},pageSizeChange:function(t){this.getList(this.CurrentPage,t,this.pd),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.getList(t,this.pageSize,this.pd),console.log("当前页: "+t)},getList:function(t,e,a){var l=this;this.objCompare(this.row,this.queryPd);var i={currentPage:t,showCount:e,pd:a=s()({},a,this.row,this.queryPd)};this.$api.post(this.Global.aport5+"/linZhuInfoComprehensiveAnalysisController/getComprehensivePersonList",i,function(t){l.tableData=t.data.resultList,l.TotalResult=t.data.totalResult})},details:function(t){this.xid=t.DTID,this.rybh=t.RYBH,this.detailsDialogVisible=!0}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yymain tshu"},[a("div",{staticClass:"yytitle"},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:"br pr-20",attrs:{span:21}},[a("el-row",{attrs:{align:"center",gutter:2}},[a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("姓名：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.ZWXM,callback:function(e){t.$set(t.pd,"ZWXM",e)},expression:"pd.ZWXM"}})],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("国家地区：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.GJDQ,callback:function(e){t.$set(t.pd,"GJDQ",e)},expression:"pd.GJDQ"}},t._l(t.$store.state.gjdq,function(t){return a("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("证件号码：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.ZJHM,callback:function(e){t.$set(t.pd,"ZJHM",e)},expression:"pd.ZJHM"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{staticClass:"mb-15",staticStyle:{"margin-right":"10px"},attrs:{type:"success",size:"small"},on:{click:function(e){t.getList(t.CurrentPage,t.pageSize,t.pd)}}},[t._v("查询")]),t._v(" "),a("el-button",{staticClass:"mb-15",attrs:{type:"primary",size:"small"},on:{click:function(e){t.$router.go(-1)}}},[t._v("返回")])],1)],1)],1),t._v(" "),a("div",{staticClass:"yycontent"},[a("div",{staticClass:"yylbt mb-15"},[t._v("人员列表")]),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"ZWXM",label:"中文姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"YWXM",label:"英文姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"XB_DESC",label:"性别"}}),t._v(" "),a("el-table-column",{attrs:{prop:"GJDQ_DESC",label:"国家地区"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ZJZL_DESC",label:"证件种类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ZJHM",label:"证件号码"}}),t._v(" "),a("el-table-column",{attrs:{prop:"QZZL_DESC",label:"签证种类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"QZHM",label:"签证号码"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-document"},on:{click:function(a){t.details(e.row)}}})]}}])})],1),t._v(" "),a("div",{staticClass:"middle-foot"},[a("div",{staticClass:"page-msg"},[a("div",{},[t._v("\n      共"+t._s(t.TotalResult)+"条记录\n        ")]),t._v(" "),a("div",{},[t._v("\n          每页显示\n          "),a("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n          条\n        ")],1),t._v(" "),a("div",{},[t._v("\n        共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n        ")])]),t._v(" "),a("el-pagination",{attrs:{background:"","page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),a("div",{staticClass:"bj"},[a("el-dialog",{attrs:{title:"临住详情",visible:t.detailsDialogVisible,"custom-class":"big_dialog","append-to-body":!1,modal:!1},on:{"update:visible":function(e){t.detailsDialogVisible=e}}},[a("LZXX",{attrs:{type:t.type,xid:t.xid,rybh:t.rybh,random:(new Date).getTime()}}),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.detailsDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)])},staticRenderFns:[]};var o=a("VU/8")(i,n,!1,function(t){a("SoZ5"),a("0UBP")},"data-v-9a4e38e8",null);e.default=o.exports},"0UBP":function(t,e){},SoZ5:function(t,e){}});
//# sourceMappingURL=28.df90300ddb76b420a01d.js.map