webpackJsonp([64],{"13Mg":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("woOf"),l=s.n(e),i={components:{LZXX:s("yHYR").a},data:function(){return{rybh:"",CurrentPage:1,pageSize:10,TotalResult:0,form:{},pd:{},pm:{},type:0,xid:"",tableData:[],basedata:[],detailsDialogVisible:!1,options:[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}],row:[]}},activated:function(){this.row=this.$route.query.row,console.log("row",this.row),this.getBase(this.row.RGUID),this.getList(this.CurrentPage,this.pageSize)},mounted:function(){this.$store.dispatch("getGjdq")},methods:{handleSelectionChange:function(t){this.multipleSelection=t},pageSizeChange:function(t){this.getList(this.CurrentPage,t),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.getList(t,this.pageSize),console.log("当前页: "+t)},getBase:function(t){var a=this;this.pd.RGUID=t;var s={pd:this.pd};this.$api.post(this.Global.aport5+"/nanMinController/getEntityByRGUID",s,function(t){a.basedata=t.data})},getList:function(t,a){var s=this;this.pd=l()({},this.pd,this.row),console.log(this.pd),this.pm.RYBH=this.pd.RYBH;var e={currentPage:t,showCount:a,pd:this.pm,orderBy:{value:"ZSRQ",dataType:"date"},orderType:"DESC"};this.$api.post(this.Global.aport5+"/eS_LZ_LZXXController/getResultListByParams",e,function(t){s.tableData=t.data.resultList,s.TotalResult=t.data.totalResult})},details:function(t){this.xid=t.DTID,this.rybh=t.RYBH,this.detailsDialogVisible=!0}}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"yymain tshu"},[s("div",{staticClass:"yycontent"},[s("div",{staticClass:"yylbt mb-15"},[s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{span:12}},[t._v("\n                基本信息\n        ")]),t._v(" "),s("el-col",{staticStyle:{"text-align":"right","margin-top":"-10px"},attrs:{span:12}},[s("el-button",{attrs:{type:"info",size:"small"},on:{click:function(a){t.$router.go(-1)}}},[t._v("返回")])],1)],1)],1),t._v(" "),s("el-row",{attrs:{type:"flex"}},[s("el-col",{staticClass:"br pr-20",attrs:{span:24}},[s("el-row",{attrs:{align:"center",gutter:2}},[s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:6}},[s("span",{staticClass:"input-text"},[t._v("国家地区：")]),t._v("\n                  "+t._s(t.basedata.GJDQ_DESC)+"\n              ")]),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:6}},[s("span",{staticClass:"input-text"},[t._v("案卷编号：")]),t._v("\n                  "+t._s(t.basedata.AJBH)+"\n              ")]),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:6}},[s("span",{staticClass:"input-text"},[t._v("注册时间：")]),t._v("\n                  "+t._s(t.basedata.ZCRQ)+"\n              ")]),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:6}},[s("span",{staticClass:"input-text"},[t._v("户室人数：")]),t._v("\n                  "+t._s(t.basedata.RS)+"\n              ")]),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:6}},[s("span",{staticClass:"input-text"},[t._v("姓名：")]),t._v("\n                  "+t._s(t.basedata.XM)+"\n              ")]),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:6}},[s("span",{staticClass:"input-text"},[t._v("性别：")]),t._v("\n                  "+t._s(t.basedata.XB_DESC)+"\n              ")]),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:6}},[s("span",{staticClass:"input-text"},[t._v("出生日期：")]),t._v("\n                  "+t._s(t.basedata.CSRQ)+"\n              ")]),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:6}},[s("span",{staticClass:"input-text"},[t._v("护照号码：")]),t._v("\n                  "+t._s(t.basedata.HZHM)+"\n              ")]),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:6}},[s("span",{staticClass:"input-text"},[t._v("身份类型：")]),t._v("\n                  "+t._s(t.basedata.SFDM_DESC)+"\n              ")]),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:6}},[s("span",{staticClass:"input-text"},[t._v("电话号码：")]),t._v("\n                  "+t._s(t.basedata.DHHM)+"\n              ")]),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:6}},[s("span",{staticClass:"input-text"},[t._v("邮箱地址：")]),t._v("\n                  "+t._s(t.basedata.YXDZ)+"\n              ")])],1),t._v(" "),s("el-row",{attrs:{gutter:1}},[s("el-col",{staticClass:"input-item",attrs:{span:24}},[s("span",{staticClass:"input-text",staticStyle:{width:"7.5%!important"}},[t._v("详细地址：")]),t._v("\n              "+t._s(t.basedata.XXDZ)+"\n          ")])],1)],1)],1)],1),t._v(" "),s("div",{staticClass:"yycontent"},[s("div",{staticClass:"yylbt mb-15"},[t._v("临住信息列表")]),t._v(" "),s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[s("el-table-column",{attrs:{prop:"ZSRQ",label:"住宿时间"}}),t._v(" "),s("el-table-column",{attrs:{prop:"LSDWDZ",label:"住宿地址"}}),t._v(" "),s("el-table-column",{attrs:{prop:"NLKRQ",label:"拟离开时间"}}),t._v(" "),s("el-table-column",{attrs:{prop:"ZFZL_DESC",label:"住宿类型"}}),t._v(" "),s("el-table-column",{attrs:{prop:"DJDWMC",label:"登记单位"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-document"},on:{click:function(s){t.details(a.row)}}})]}}])})],1),t._v(" "),s("div",{staticClass:"middle-foot"},[s("div",{staticClass:"page-msg"},[s("div",{},[t._v("\n      共"+t._s(t.TotalResult)+"条记录\n        ")]),t._v(" "),s("div",{},[t._v("\n          每页显示\n          "),s("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(a){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(a){t.pageSize=a},expression:"pageSize"}},t._l(t.options,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n          条\n        ")],1),t._v(" "),s("div",{},[t._v("\n        共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n        ")])]),t._v(" "),s("el-pagination",{attrs:{background:"","page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),s("div",{staticClass:"bj"},[s("el-dialog",{attrs:{title:"临住详情",visible:t.detailsDialogVisible,"custom-class":"big_dialog","append-to-body":!1,modal:!1},on:{"update:visible":function(a){t.detailsDialogVisible=a}}},[s("LZXX",{attrs:{type:t.type,xid:t.xid,rybh:t.rybh,random:(new Date).getTime()}}),t._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"small"},on:{click:function(a){t.detailsDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)])},staticRenderFns:[]};var o=s("VU/8")(i,n,!1,function(t){s("471c"),s("38AL")},"data-v-156c7bcc",null);a.default=o.exports},"38AL":function(t,a){},"471c":function(t,a){}});
//# sourceMappingURL=64.2844c57eacef96a1e0c3.js.map