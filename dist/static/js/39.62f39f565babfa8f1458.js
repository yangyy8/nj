webpackJsonp([39],{FNpL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{CurrentPage:1,pageSize:10,TotalResult:0,CurrentPage1:1,pageSize1:10,TotalResult1:0,pd:{},pd1:{},from:{ssdwdm:"",ssdwmc:""},mapf:{},company:{},tp:0,dialogText:"新增",ssdwmc:!1,addsDialogVisible:!1,detailsDialogVisible:!1,menuDialogVisible:!1,yhDialogVisible:!1,options:[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}],tableData:[],tableData1:[],roleid:"",menudata:[],defaultProps:{children:"children",label:"mc"},defaultChecked:[],multipleSelection:[],selectionAll:[],yuid:[],selectionReal:[]}},mounted:function(){this.getCompany(),this.getList(this.CurrentPage,this.pageSize,this.pd)},methods:{selectfn:function(t,e){this.multipleSelection=t,this.dataSelection()},dataSelection:function(){this.selectionReal.splice(this.CurrentPage1-1,1,this.multipleSelection),this.selectionAll=[];for(var t=0;t<this.selectionReal.length;t++)if(this.selectionReal[t])for(var e=0;e<this.selectionReal[t].length;e++)this.selectionAll.push(this.selectionReal[t][e])},handleSelectionChange:function(t){this.multipleSelection=t},handleSelectionChange1:function(t){},pageSizeChange:function(t){this.getList(this.CurrentPage,t,this.pd),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.getList(t,this.pageSize,this.pd),console.log("当前页: "+t)},pageSizeChange1:function(t){this.pageSize1=t,this.getList1(this.CurrentPage1,t,this.pd1),console.log("每页 "+t+" 条")},handleCurrentChange1:function(t){this.CurrentPage1=t,this.getList1(t,this.pageSize1,this.pd1),console.log("当前页: "+t)},getCompany:function(){var t=this,e=new FormData;e.append("org",this.Global.org),e.append("token",this.$store.state.token);var a=e,s=this.Global.aport1+"/org/getSelfAndChilds";this.$api.post(s,a,function(e){t.company=e.data})},getList:function(t,e,a){var s=this,i=new FormData;i.append("currentPage",t),i.append("showCount",e),i.append("org",void 0==this.pd.org?this.Global.org:this.pd.org),i.append("mc",void 0==this.pd.mc?"":this.pd.mc),i.append("token",this.$store.state.token);var l=i,n=this.Global.aport1+"/role/getAll";this.$api.post(n,l,function(t){s.tableData=t.data.resultList,s.TotalResult=t.data.totalCount})},getList1:function(t,e,a){var s=this,i=new FormData;i.append("currentPage",t),i.append("showCount",e),i.append("roleid",this.roleid),i.append("mc",void 0==this.pd1.mc?"":this.pd1.mc),i.append("token",this.$store.state.token);var l=i,n=this.Global.aport1+"/user/getAllByRelationalRole";this.$api.post(n,l,function(t){s.tableData1=t.data.resultList,s.TotalResult1=t.data.totalCount,0==s.selectionReal.length&&(s.selectionReal=new Array(Math.ceil(s.TotalResult/e))),s.$nextTick(function(){s.multipleSelection=[];for(var t=0;t<s.tableData1.length;t++)for(var e=0;e<s.selectionAll.length;e++)s.tableData1[t].id==s.selectionAll[e].id&&s.$refs.multipleTable1.toggleRowSelection(s.tableData1[t],!0)})})},adds:function(t,e){this.addsDialogVisible=!0,0!=t?(this.from=e,this.from.ssdwdm=e.ssdw.dm,this.from.ssdwmc=e.ssdw.mc,this.dialogText="编辑",this.tp=1):(this.dialogText="新增",this.tp=0),this.V.$reset("demo")},addItem:function(t){var e=this;this.V.$submit("demo",function(t,a){if(t){var s=new FormData;s.append("token",e.$store.state.token),s.append("mc",e.from.mc),s.append("ssdw.dm",e.from.ssdwdm),s.append("ssdw.mc",e.from.ssdwmc);var i=e.Global.aport1+"/role/insertRole";1==e.tp&&(s.append("id",e.from.id),i=e.Global.aport1+"/role/UpdateRole");var l=s;e.$api.post(i,l,function(t){t.success?(e.$message({message:"保存成功！",type:"success"}),e.addsDialogVisible=!1,e.getList(e.CurrentPage,e.pageSize,e.pd)):e.$message.error(t.message)},function(t){e.$message.error("失败了")})}})},details:function(t){this.mapf=t,this.mapf.ssdwmc=t.ssdw.mc,this.mapf.cjdwmc=t.cjdw.mc,this.mapf.cjrmc=t.cjr.mc,this.detailsDialogVisible=!0},deletes:function(t){var e=this,a=new FormData;a.append("token",this.$store.state.token),a.append("id",t.id);var s=a,i=this.Global.aport1+"/role/deleteRole";this.$confirm("您是否确认删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$api.post(i,s,function(t){t.success?(e.$message({message:"删除成功！",type:"success"}),e.getList(e.CurrentPage,e.pageSize,e.pd)):e.$message.error(t.Message)},function(t){e.$message.error("失败了")})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},stop:function(t,e){var a=this,s=new FormData;s.append("token",this.$store.state.token),s.append("id",t.id),s.append("use",e);var i=s,l="停用成功！";e&&(l="启用成功！");var n=this.Global.aport1+"/role/changeRole";this.$api.post(n,i,function(t){t.success?(a.$message({message:l,type:"success"}),a.getList(a.CurrentPage,a.pageSize,a.pd)):a.$message.error(t.Message)},function(t){a.$message.error("失败了")})},menus:function(t){var e=this;this.menuDialogVisible=!0,this.roleid=t.id;var a=new FormData;a.append("token",this.$store.state.token),a.append("roleid",this.roleid);var s=a,i=new Array,l=this.Global.aport1+"/fun/getByRoleID";this.$api.post(l,s,function(t){for(var e=t.data,a=0;a<e.length;a++)i.push(e[a].id)});var n=this.Global.aport1+"/fun/getFunTreeByRoleID";this.$api.post(n,s,function(t){t.success&&(e.menudata=t.data,e.defaultChecked=i)})},menuItem:function(){for(var t=this,e=this.$refs.tree.getCheckedNodes(),a=new Array,s=0;s<e.length;s++)a.push(e[s].dm);var i=new FormData;i.append("token",this.$store.state.token),i.append("roleid",this.roleid),i.append("funids",a);var l=i,n=this.Global.aport1+"/fun/updateFunsToRole";this.$api.post(n,l,function(e){e.success?t.$message({type:"success",message:"保存成功"}):t.$message.error("保存失败")}),this.menuDialogVisible=!1},relationyh:function(t){this.roleid=t.id,this.getList1(this.CurrentPage1,this.pageSize1,this.pd1),this.yhDialogVisible=!0},yhItem:function(){var t=this;console.log(this.multipleSelection);var e=new FormData;if(0!=this.multipleSelection.length){for(var a=[],s=[],i=0;i<this.selectionAll.length;i++){var l=this.selectionAll[i].id;s.push(l);a.push(!0)}e.append("roleid",this.roleid),e.append("userids",s),e.append("checkeds",a),e.append("token",this.$store.state.token);var n=e,o=this.Global.aport1+"/role/updateAllByRelationalRole";this.$api.post(o,n,function(e){e.success?(t.$message({type:"success",message:"保存成功"}),t.yhDialogVisible=!1):t.$message.error("保存失败")})}else this.$message.error("请选择用户列表内容！")}},filters:{fifterstatus:function(t){return"0"==t?"无效":"1"==t?"有效":void 0}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yymain"},[a("div",{staticClass:"yytitle"},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:"br pr-20",attrs:{span:22}},[a("el-row",{attrs:{align:"center",gutter:2}},[a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("所属单位：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.org,callback:function(e){t.$set(t.pd,"org",e)},expression:"pd.org"}},t._l(t.company,function(t){return a("el-option",{key:t.dm,attrs:{label:t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("角色名：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.mc,callback:function(e){t.$set(t.pd,"mc",e)},expression:"pd.mc"}})],1)],1)],1),t._v(" "),a("el-col",{staticClass:"down-btn-area",attrs:{span:2}},[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){t.CurrentPage=1,t.getList(t.CurrentPage,t.pageSize,t.pd)}}},[t._v("查询")])],1)],1)],1),t._v(" "),a("div",{staticClass:"yycontent"},[a("el-row",{staticClass:"mb-15"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.adds(0,""),t.from={}}}},[t._v("新增")])],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"mc",label:"角色名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ssdw.mc",label:"所属单位"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sfyx",label:"状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:{yyred:"0"==e.row.sfyx,yyblue:"1"==e.row.sfyx}},[t._v("  "+t._s(t._f("fifterstatus")(e.row.sfyx)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"cjr.mc",label:"创建人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cjdw.mc",label:"创建单位"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cjsj",label:"创建时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-document"},on:{click:function(a){t.details(e.row)}}}),t._v(" "),a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"编辑",icon:"el-icon-edit-outline"},on:{click:function(a){t.adds(1,e.row)}}}),t._v(" "),a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"删除",icon:"el-icon-delete"},on:{click:function(a){t.deletes(e.row)}}}),t._v(" "),"1"==e.row.sfyx?a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"停用",icon:"iconfont el-icon-yy-tingyong3"},on:{click:function(a){t.stop(e.row,!1)}}}):t._e(),t._v(" "),"0"==e.row.sfyx?a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"启用",icon:"iconfont el-icon-yy-kaiqi"},on:{click:function(a){t.stop(e.row,!0)}}}):t._e(),t._v(" "),a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"关联到用户",icon:"iconfont el-icon-yy-jiaoseyonghu"},on:{click:function(a){t.relationyh(e.row)}}})]}}])})],1),t._v(" "),a("div",{staticClass:"middle-foot"},[a("div",{staticClass:"page-msg"},[a("div",{},[t._v("\n        共"+t._s(t.TotalResult)+"条记录\n          ")]),t._v(" "),a("div",{},[t._v("\n            每页显示\n            "),a("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n            条\n          ")],1),t._v(" "),a("div",{},[t._v("\n          共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n          ")])]),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.CurrentPage=e}}})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.dialogText,visible:t.addsDialogVisible,width:"600px"},on:{"update:visible":function(e){t.addsDialogVisible=e}}},[a("el-form",{ref:"addForm",attrs:{model:t.from}},[a("el-row",{attrs:{gutter:1}},[a("el-col",{directives:[{name:"validate-easy",rawName:"v-validate-easy",value:[["required"]],expression:"[['required']]"}],staticClass:"yzform",attrs:{span:24,"data-scope":"demo","data-name":"mc","data-type":"input"}},[a("span",{staticClass:"yy-input-text"},[t._v("角色名：")]),t._v(" "),a("el-input",{staticClass:"yy-input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.from.mc,callback:function(e){t.$set(t.from,"mc",e)},expression:"from.mc"}})],1),t._v(" "),a("el-col",{directives:[{name:"validate-easy",rawName:"v-validate-easy",value:[["required"]],expression:"[['required']]"}],staticClass:"yzform",attrs:{span:24,"data-scope":"demo","data-name":"ssdwdm","data-type":"input"}},[a("span",{staticClass:"yy-input-text"},[t._v("所属单位：")]),t._v(" "),a("el-select",{staticClass:"yy-input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.from.ssdwdm,callback:function(e){t.$set(t.from,"ssdwdm",e)},expression:"from.ssdwdm"}},t._l(t.company,function(t){return a("el-option",{key:t.dm,attrs:{label:t.mc,value:t.dm}})}),1),t._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:t.ssdwmc,expression:"ssdwmc"}],staticClass:"yy-input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.from.ssdwmc,callback:function(e){t.$set(t.from,"ssdwmc",e)},expression:"from.ssdwmc"}})],1),t._v(" "),a("el-col",{directives:[{name:"validate-easy",rawName:"v-validate-easy",value:[["required"]],expression:"[['required']]"}],staticClass:"yzform",attrs:{span:24,"data-scope":"demo","data-name":"sfyx","data-type":"input"}},[a("span",{staticClass:"yy-input-text"},[t._v("状态：")]),t._v(" "),a("el-select",{staticClass:"yy-input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.from.sfyx,callback:function(e){t.$set(t.from,"sfyx",e)},expression:"from.sfyx"}},[a("el-option",{attrs:{value:"1",label:"有效"}}),t._v(" "),a("el-option",{attrs:{value:"0",label:"无效"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.addItem("addForm")}}},[t._v("确 定")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(e){t.addsDialogVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"详情",visible:t.detailsDialogVisible,width:"600px"},on:{"update:visible":function(e){t.detailsDialogVisible=e}}},[a("el-form",{ref:"mapf"},[a("el-row",{staticClass:"mb-6",attrs:{gutter:1}},[a("el-col",{staticClass:"input-item",attrs:{span:24}},[a("span",{staticClass:"input-text"},[t._v("角色名：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.mapf.mc))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:24}},[a("span",{staticClass:"input-text"},[t._v("所属单位：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.mapf.ssdwmc))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:24}},[a("span",{staticClass:"input-text"},[t._v("状态：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t._f("fifterstatus")(t.mapf.sfyx)))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:24}},[a("span",{staticClass:"input-text"},[t._v("创建人：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.mapf.cjrmc))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:24}},[a("span",{staticClass:"input-text"},[t._v("创建单位：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.mapf.cjdwmc))])]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{span:24}},[a("span",{staticClass:"input-text"},[t._v("创建时间：")]),t._v(" "),a("span",{staticClass:"input-input detailinput"},[t._v("  "+t._s(t.mapf.cjsj))])])],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.detailsDialogVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("div",{staticClass:"mnus"},[a("el-dialog",{attrs:{title:"临时赋权",visible:t.menuDialogVisible,width:"500px"},on:{"update:visible":function(e){t.menuDialogVisible=e}}},[a("el-tree",{ref:"tree",attrs:{data:t.menudata,"check-strictly":!0,"show-checkbox":"","default-expand-all":"","node-key":"dm","default-checked-keys":t.defaultChecked,"highlight-current":"",props:t.defaultProps}}),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.menuItem}},[t._v("保 存")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(e){t.menuDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"关联到用户",visible:t.yhDialogVisible},on:{"update:visible":function(e){t.yhDialogVisible=e}}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:24}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:"pr-20",attrs:{span:21}},[a("el-row",{attrs:{align:"center",gutter:2}},[a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:12}},[a("span",{staticClass:"input-text"},[t._v("姓名：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd1.mc,callback:function(e){t.$set(t.pd1,"mc",e)},expression:"pd1.mc"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){t.CurrentPage1=1,t.getList1(t.CurrentPage1,t.pageSize1,t.pd1)}}},[t._v("查询")])],1)],1),t._v(" "),a("el-table",{ref:"multipleTable1",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:t.tableData1,border:""},on:{select:t.selectfn,"selection-change":t.handleSelectionChange1}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"mc",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ssdw.mc",label:"所属单位"}})],1),t._v(" "),a("div",{staticClass:"middle-foot mt-10"},[a("div",{staticClass:"page-msg"},[a("div",{},[t._v("\n              共"+t._s(t.TotalResult1)+"条记录\n                ")]),t._v(" "),a("div",{},[t._v("\n                  每页显示\n                  "),a("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange1(t.pageSize1)}},model:{value:t.pageSize1,callback:function(e){t.pageSize1=e},expression:"pageSize1"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n                  条\n                ")],1),t._v(" "),a("div",{},[t._v("\n                共"+t._s(Math.ceil(t.TotalResult1/t.pageSize1))+"页\n                ")])]),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.CurrentPage1,"page-size":t.pageSize1,layout:"prev, pager, next",total:t.TotalResult1},on:{"current-change":t.handleCurrentChange1,"update:currentPage":function(e){t.CurrentPage1=e}}})],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.yhItem}},[t._v("保 存")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(e){t.yhDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(s,i,!1,function(t){a("VuI3"),a("HlgB")},"data-v-79097b39",null);e.default=l.exports},HlgB:function(t,e){},VuI3:function(t,e){}});
//# sourceMappingURL=39.62f39f565babfa8f1458.js.map