webpackJsonp([61],{Qsvd:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{CurrentPage:1,pageSize:10,TotalResult:0,CurrentPage1:1,pageSize1:10,TotalResult1:0,pd:{},pd1:{},tableData:[],tableData1:[],company:[],menudata:[],defaultProps:{children:"children",label:"mc"},defaultChecked:[],roleid:"",page:0,options:[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}],multipleSelection1:[],multipleSelection2:[]}},mounted:function(){this.getList(this.CurrentPage,this.pageSize,this.pd),this.getList1(this.CurrentPage1,this.pageSize1,this.pd1),this.getCompany(),this.getMenu()},methods:{base:function(){this.page=0},base1:function(){this.page=1},handleSelectionChange:function(t){this.multipleSelection=t},handleSelectionChange1:function(t){this.multipleSelection1=t},handleSelectionChange2:function(t){this.multipleSelection2=t},pageSizeChange:function(t){this.getList(this.CurrentPage,t,this.pd),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.getList(t,this.pageSize,this.pd),console.log("当前页: "+t)},pageSizeChange1:function(t){this.getList1(this.CurrentPage1,t,this.pd1),console.log("每页 "+t+" 条")},handleCurrentChange1:function(t){this.getList1(t,this.pageSize1,this.pd1),console.log("当前页: "+t)},getCompany:function(){var t=this,e=new FormData;e.append("org",this.Global.org),e.append("token",this.$store.state.token);var a=e,s=this.Global.aport1+"/org/getSelfAndChilds";this.$api.post(s,a,function(e){t.company=e.data})},getList:function(t,e,a){var s=this,l=new FormData;l.append("currentPage",t),l.append("showCount",e),l.append("org",void 0==this.pd.org?this.Global.org:this.pd.org),l.append("mc",void 0==this.pd.mc?"":this.pd.mc),l.append("token",this.$store.state.token);var n=l,i=this.Global.aport1+"/user/getAll";this.$api.post(i,n,function(t){s.tableData=t.data.resultList,s.TotalResult=t.data.totalCount})},getList1:function(t,e,a){var s=this,l=new FormData;l.append("currentPage",t),l.append("showCount",e),l.append("org",void 0==this.pd1.org?this.Global.org:this.pd1.org),l.append("mc",void 0==this.pd1.mc?"":this.pd1.mc),l.append("token",this.$store.state.token);var n=l,i=this.Global.aport1+"/role/getAll";this.$api.post(i,n,function(t){s.tableData1=t.data.resultList,s.TotalResult1=t.data.totalCount})},getMenu:function(){var t=this,e=new FormData;e.append("token",this.$store.state.token);var a=e,s=new Array,l=this.Global.aport1+"/fun/getBatchNavigation";this.$api.post(l,a,function(e){t.menudata=e.data,t.defaultChecked=s})},save:function(t){var e=this,a=this.$refs.tree.getCheckedNodes(),s=new Array;if(console.log("checkList",a),0==a.length)return this.$message.error("请选择功能项！"),!1;s=this.$refs.tree.getHalfCheckedKeys().concat(this.$refs.tree.getCheckedKeys());var l="",n=new FormData;if(0==t){if(l=this.Global.aport1+"/fun/batchUpdateFunsToUsers",0==this.multipleSelection1.length)return void this.$message.error("请选择用户列表内容！");for(var i=[],o=[],r=0;r<this.multipleSelection1.length;r++){var p=this.multipleSelection1[r].dwdm;i.push(p);for(var c=this.multipleSelection1[r].id,u=p.split(","),d=0;d<u.length;d++)o.push(c)}n.append("orgs",i),n.append("users",o)}else if(1==t){if(l=this.Global.aport1+"/fun/batchUpdateFunsToRoles",0==this.multipleSelection2.length)return void this.$message.error("请选择角色列表内容！");var g=[];for(r=0;r<this.multipleSelection2.length;r++){c=this.multipleSelection2[r].id;g.push(c)}n.append("roleids",g)}n.append("token",this.$store.state.token),n.append("funids",s);var h=n;this.$api.post(l,h,function(t){t.success?e.$message({type:"success",message:"保存成功"}):e.$message.error("保存失败")})},getDM:function(t){for(var e="",a=0;a<t.length;a++)e=e+","+t[a].mc;return e.substring(1,e.length)}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yymain"},[a("div",{staticClass:"yycontent"},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:8}},[a("el-tree",{ref:"tree",attrs:{data:t.menudata,"show-checkbox":"","default-expand-all":"","node-key":"dm","default-checked-keys":t.defaultChecked,"highlight-current":"",props:t.defaultProps}})],1),t._v(" "),a("el-col",{staticStyle:{margin:"10px"},attrs:{span:16}},[a("div",{staticClass:"ak-tabs"},[a("div",{staticClass:"ak-tab-item abehgt hand",class:{"ak-checked":0==t.page},on:{click:t.base}},[t._v("\n               授权到用户\n            ")]),t._v(" "),a("div",{staticClass:"ak-tab-item abehgt hand",class:{"ak-checked":1==t.page},on:{click:t.base1}},[t._v("\n               授权到角色\n            ")])]),t._v(" "),a("div",{staticClass:"ak-tab-pane"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.page,expression:"page==0"}]},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:" pr-20",attrs:{span:21}},[a("el-row",{attrs:{align:"center",gutter:2}},[a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:12}},[a("span",{staticClass:"input-text"},[t._v("所属单位：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.org,callback:function(e){t.$set(t.pd,"org",e)},expression:"pd.org"}},t._l(t.company,function(t){return a("el-option",{key:t.dm,attrs:{label:t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:12}},[a("span",{staticClass:"input-text"},[t._v("用户名称：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.mc,callback:function(e){t.$set(t.pd,"mc",e)},expression:"pd.mc"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){t.getList(t.CurrentPage,t.pageSize,t.pd)}}},[t._v("查询")])],1)],1),t._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange1}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"mc",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ssdw",label:"所属单位"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("  "+t._s(t.getDM(e.row.ssdw)))])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"middle-foot",staticStyle:{"margin-top":"10px"}},[a("div",{staticClass:"page-msg"},[a("div",{},[t._v("\n                  共"+t._s(t.TotalResult)+"条记录\n                    ")]),t._v(" "),a("div",{},[t._v("\n                      每页显示\n                      "),a("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n                      条\n                    ")],1),t._v(" "),a("div",{},[t._v("\n                    共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n                    ")])]),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.CurrentPage=e}}})],1),t._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticStyle:{"text-align":"right","margin-top":"20px"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.save(0)}}},[t._v("保存功能授权")])],1)],1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.page,expression:"page==1"}]},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:" pr-20",attrs:{span:21}},[a("el-row",{attrs:{align:"center",gutter:2}},[a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:12}},[a("span",{staticClass:"input-text"},[t._v("所属单位：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd1.org,callback:function(e){t.$set(t.pd1,"org",e)},expression:"pd1.org"}},t._l(t.company,function(t){return a("el-option",{key:t.dm,attrs:{label:t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:12}},[a("span",{staticClass:"input-text"},[t._v("角色名称：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd1.mc,callback:function(e){t.$set(t.pd1,"mc",e)},expression:"pd1.mc"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){t.getList1(t.CurrentPage,t.pageSize,t.pd)}}},[t._v("查询")])],1)],1),t._v(" "),a("el-row",{staticStyle:{margin:"10px"},attrs:{type:"flex"}},[a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:t.tableData1,border:""},on:{"selection-change":t.handleSelectionChange2}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"mc",label:"角色名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ssdw.mc",label:"所属单位"}})],1)],1),t._v(" "),a("div",{staticClass:"middle-foot",staticStyle:{"margin-top":"10px"}},[a("div",{staticClass:"page-msg"},[a("div",{},[t._v("\n                 共"+t._s(t.TotalResult1)+"条记录\n                   ")]),t._v(" "),a("div",{},[t._v("\n                     每页显示\n                     "),a("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange1(t.pageSize1)}},model:{value:t.pageSize1,callback:function(e){t.pageSize1=e},expression:"pageSize1"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n                     条\n                   ")],1),t._v(" "),a("div",{},[t._v("\n                   共"+t._s(Math.ceil(t.TotalResult1/t.pageSize1))+"页\n                   ")])]),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.CurrentPage1,"page-size":t.pageSize1,layout:"prev, pager, next",total:t.TotalResult1},on:{"current-change":t.handleCurrentChange1,"update:currentPage":function(e){t.CurrentPage1=e}}})],1),t._v(" "),a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticStyle:{"text-align":"right","margin-top":"20px"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.save(1)}}},[t._v("保存功能授权")])],1)],1)],1)])])],1)],1)])},staticRenderFns:[]};var n=a("VU/8")(s,l,!1,function(t){a("bRqn"),a("otR3")},"data-v-1c7b4048",null);e.default=n.exports},bRqn:function(t,e){},otR3:function(t,e){}});
//# sourceMappingURL=61.06a936a446bdd61e4520.js.map