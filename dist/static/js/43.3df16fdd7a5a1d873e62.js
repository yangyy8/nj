webpackJsonp([43],{ECZQ:function(t,e){},"RLF+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{CurrentPage:1,pageSize:10,TotalResult:0,pd:{},tableData:[],company:[],menudata:[],defaultProps:{children:"children",label:"mc"},defaultChecked:[],roleid:"",menurr:[]}},mounted:function(){this.getList(this.CurrentPage,this.pageSize,this.pd),this.getCompany()},methods:{pageSizeChange:function(t){this.getList(this.CurrentPage,t,this.pd),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.getList(t,this.pageSize,this.pd),console.log("当前页: "+t)},handleSelectionChange:function(t){this.multipleSelection=t},getCompany:function(){var t=this,e=new FormData;e.append("org",this.Global.org),e.append("token",this.$store.state.token);var a=e,s=this.Global.aport1+"/org/getSelfAndChilds";this.$api.post(s,a,function(e){t.company=e.data})},getList:function(t,e,a){var s=this,n=new FormData;n.append("currentPage",t),n.append("showCount",e),n.append("org",void 0==this.pd.org?this.Global.org:this.pd.org),n.append("mc",void 0==this.pd.mc?"":this.pd.mc),n.append("token",this.$store.state.token);var l=n,r=this.Global.aport1+"/role/getAll";this.$api.post(r,l,function(t){s.tableData=t.data.resultList,s.TotalResult=t.data.totalCount})},getMenu:function(t,e,a){var s=this;this.roleid=t.id;var n=new FormData;n.append("token",this.$store.state.token),n.append("roleid",this.roleid);var l=n,r=new Array,i=this.Global.aport1+"/fun/getByRoleID";this.$api.post(i,l,function(t){for(var e=t.data,a=0;a<e.length;a++)r.push(e[a].id)});var o=this.Global.aport1+"/fun/getFunTreeByRoleID";this.$api.post(o,l,function(t){s.menudata=t.data;var e=t.data;console.log(e),s.menurr=[],s.uniteChildSame(e),console.log("menurr",s.menurr.length),s.defaultChecked=s.menurr})},uniteChildSame:function(t){for(var e=0;e<t.length;e++)1!=t[e].checked&&null==t[e].children||this.selectChildSame(t[e].children)},selectChildSame:function(t){for(var e=0;e<t.length;e++)null!=t[e].children?this.selectChildSame(t[e].children):1==t[e].checked&&this.menurr.push(t[e].dm)},save:function(){var t=this,e=this.$refs.tree.getCheckedNodes(),a=new Array;if(console.log("checkList",e),0==e.length)return this.$message.error("请选择功能项！"),!1;a=this.$refs.tree.getHalfCheckedKeys().concat(this.$refs.tree.getCheckedKeys());var s=new FormData;s.append("token",this.$store.state.token),s.append("roleid",this.roleid),s.append("funids",a);var n=s,l=this.Global.aport1+"/fun/updateFunsToRole";this.$api.post(l,n,function(e){e.success?t.$message({type:"success",message:"保存成功"}):t.$message.error("保存失败")})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yymain"},[a("div",{staticClass:"yycontent"},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:8}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:" pr-20",attrs:{span:21}},[a("el-row",{attrs:{align:"center",gutter:2}},[a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:12}},[a("span",{staticClass:"input-text"},[t._v("所属单位：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.org,callback:function(e){t.$set(t.pd,"org",e)},expression:"pd.org"}},t._l(t.company,function(t){return a("el-option",{key:t.dm,attrs:{label:t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:12}},[a("span",{staticClass:"input-text"},[t._v("角色名称：")]),t._v(" "),a("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.mc,callback:function(e){t.$set(t.pd,"mc",e)},expression:"pd.mc"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){t.getList(t.CurrentPage,t.pageSize,t.pd)}}},[t._v("查询")])],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"10px"},attrs:{type:"flex"}},[a("el-table",{ref:"multipleTable",staticClass:"stu-table",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","highlight-current-row":""},on:{"row-click":t.getMenu,"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"mc",label:"角色名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ssdw.mc",label:"所属单位"}})],1)],1),t._v(" "),a("div",{staticClass:"middle-foot",staticStyle:{"margin-top":"10px"}},[a("div",{staticClass:"page-msg"},[a("div",{},[t._v("\n                共"+t._s(t.TotalResult)+"条记录\n                  ")])]),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.CurrentPage=e}}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-tree",{ref:"tree",attrs:{data:t.menudata,"show-checkbox":"","default-expand-all":"","node-key":"dm","default-checked-keys":t.defaultChecked,"highlight-current":"",props:t.defaultProps}})],1),t._v(" "),a("el-col",{staticClass:"down-btn-area",attrs:{span:4}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.save}},[t._v("保存功能授权")])],1)],1)],1)])},staticRenderFns:[]};var l=a("VU/8")(s,n,!1,function(t){a("eOJX"),a("ECZQ")},"data-v-5dd02d33",null);e.default=l.exports},eOJX:function(t,e){}});
//# sourceMappingURL=43.3df16fdd7a5a1d873e62.js.map