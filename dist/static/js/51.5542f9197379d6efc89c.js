webpackJsonp([51],{ATVr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{CurrentPage:1,pageSize:10,TotalResult:0,pd:{SSPCS:this.$store.state.orgid},options:this.pl.ps,tableData:[],userCode:"",userName:"",orgCode:"",orgName:"",multipleSelection:[],selectionAll:[],yuid:[],selectionReal:[],dwList:[],form:{},dform:{},addDialogVisible:!1,detailDialogVisible:!1,reviewFile:{},inFiles:[],tableDataDW:[]}},activated:function(){var t=this;setTimeout(function(){t.getList(t.CurrentPage,t.pageSize,t.pd)},1e3)},mounted:function(){this.$store.dispatch("getGjdq"),this.$store.dispatch("getClzt"),this.$store.dispatch("getZjzl"),this.$store.dispatch("getXB"),this.$store.dispatch("getRjqzzl"),this.$store.dispatch("getLgyj"),this.$store.dispatch("getGljb"),this.userCode=this.$store.state.uname,this.userName=this.$store.state.uid,this.orgName=this.$store.state.orgname,this.orgCode=this.$store.state.orgid},methods:{getDw:function(){var t=this;this.$api.post(this.Global.aport4+"/SWDW_TZTBController/getAllDW",{},function(e){e.success&&(t.dwList=e.data.resultList,t.userFilter())})},userFilter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this.dwList.filter(function(e){if(void 0!=e.mc)return e.DWZWMC.includes(t)});e.length>50?this.JSDWBH=e.slice(0,50):this.JSDWBH=e},addNew:function(){this.form={},this.reviewFile={},this.addDialogVisible=!0},reviewUpload:function(t){this.reviewFile=t.target.files,console.log(this.reviewFile)},upload:function(t){for(var e=this,s=new FormData,a=this.reviewFile,l=0;l<a.length;l++)s.append("files",a[l]);s.append("YWDTID",t),s.append("orgCode",this.orgCode),s.append("orgName",this.orgName);var i=s;console.log("formData",s),this.$api.post(this.Global.aport4+"/SWDW_TZTBController/upload",i,function(t){t.success?(e.$message({message:"恭喜你，操作成功！",type:"success"}),e.reviewFile=null):e.reviewFile=null},function(t){},{"Content-Type":"multipart/form-data"})},sendOrMoment:function(t){var e=this;this.form.SFYX=t,this.$api.post(this.Global.aport4+"/SWDW_TZTBController/saveOrSend",{pd:this.form},function(t){t.success&&(e.reviewFile?e.upload(t.data.DTID):e.$message({message:"恭喜你，操作成功",type:"success"}),e.addDialogVisible=!1,e.getList(e.CurrentPage,e.pageSize,e.pd))})},details:function(t){var e=this;this.detailDialogVisible=!0,this.dform=t,this.$api.post(this.Global.aport4+"/SWDW_TZTBController/getPAPERByYWDTID",{pd:{YWDTID:t.DTID}},function(t){t.success&&(e.inFiles=t.data)}),this.$api.post(this.Global.aport4+"/SWDW_TZTBController/getTZTBJSDW_EntityByYWDTID",{pd:{YWDTID:t.DTID}},function(t){t.success&&(e.tableDataDW=t.data)})},cutOff:function(t){var e=this;this.$api.post(this.Global.aport4+"/SWDW_TZTBController/deleteByDTID",{pd:{DTID:t.DTID}},function(t){t.success&&(e.$message({message:"恭喜你，删除成功",type:"success"}),e.getList(e.CurrentPage,e.pageSize,e.pd))})},selectfn:function(t,e){this.multipleSelection=t,this.dataSelection()},dataSelection:function(){this.selectionReal.splice(this.CurrentPage-1,1,this.multipleSelection),this.selectionAll=[];for(var t=0;t<this.selectionReal.length;t++)if(this.selectionReal[t])for(var e=0;e<this.selectionReal[t].length;e++)this.selectionAll.push(this.selectionReal[t][e])},download:function(){var t=this,e={};if(0==this.selectionAll.length)e={pd:this.pd,orderBy:"SBSJ",orderType:"DESC"};else{for(var s in this.yuid=[],this.selectionAll)this.yuid.push(this.selectionAll[s].YJID);this.pd.YJID=this.yuid,e={pd:this.pd,orderBy:"SBSJ",orderType:"DESC"}}this.$api.post(this.Global.aport4+"/warningInfoController/exportByMxLx",e,function(e){t.downloadM(e)},function(t){},{},"blob")},downloadM:function(t){if(t){var e=window.URL.createObjectURL(new Blob([t],{type:"application/xls"})),s=document.createElement("a");s.style.display="none",s.href=e,s.setAttribute("download","违临预判报表"+this.format(new Date,"yyyyMMddhhmmss")+".xls"),document.body.appendChild(s),s.click()}},pageSizeChange:function(t){this.pageSize=t,this.getList(this.CurrentPage,this.pageSize,this.pd),console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.CurrentPage=t,this.getList(this.CurrentPage,this.pageSize,this.pd),console.log("当前页: "+t)},getList:function(t,e,s){var a=this;s.hasOwnProperty("YJID")&&delete s.YJID;var l={currentPage:t,showCount:e,pd:s};this.$api.post(this.Global.aport4+"/SWDW_TZTBController/getInfoList",l,function(t){t.success&&(a.tableData=t.data.resultList,a.TotalResult=t.data.totalResult,0==a.selectionReal.length&&(a.selectionReal=new Array(Math.ceil(a.TotalResult/e))),a.$nextTick(function(){a.multipleSelection=[];for(var t=0;t<a.tableData.length;t++)for(var e=0;e<a.selectionAll.length;e++)a.tableData[t].YJID==a.selectionAll[e].YJID&&a.$refs.multipleTable.toggleRowSelection(a.tableData[t],!0)}))})}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"yymain"},[s("div",{staticClass:"yytitle"},[s("el-row",{attrs:{type:"flex"}},[s("el-col",{staticClass:"br pr-20",attrs:{span:21}},[s("el-row",{attrs:{align:"center",gutter:2}},[s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[s("span",{staticClass:"input-text"},[t._v("标题：")]),t._v(" "),s("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.pd.BT,callback:function(e){t.$set(t.pd,"BT",e)},expression:"pd.BT"}})],1),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[s("span",{staticClass:"input-text"},[t._v("接收单位：")]),t._v(" "),s("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"",multiple:"","collapse-tags":"","default-first-option":"",placeholder:"请选择",size:"small"},on:{"visible-change":t.getDw},model:{value:t.pd.JSDWBH,callback:function(e){t.$set(t.pd,"JSDWBH",e)},expression:"pd.JSDWBH"}},t._l(t.dwList,function(t,e){return s("el-option",{key:e,attrs:{label:t.ZZJGDM+" - "+t.DWZWMC,value:t.ZZJGDM}})}),1)],1),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[s("span",{staticClass:"input-text"},[t._v("发送状态：")]),t._v(" "),s("el-select",{staticClass:"input-input",attrs:{placeholder:"请选择",filterable:"",clearable:"","default-first-option":"",size:"small"},model:{value:t.pd.SFYX,callback:function(e){t.$set(t.pd,"SFYX",e)},expression:"pd.SFYX"}},[s("el-option",{attrs:{label:"1 - 已发送",value:"1"}}),t._v(" "),s("el-option",{attrs:{label:"2 - 未发送",value:"2"}})],1)],1)],1)],1),t._v(" "),s("el-col",{attrs:{span:3}},[s("el-button",{staticClass:"t-mb",attrs:{type:"success",size:"small"},on:{click:function(e){t.CurrentPage=1,t.getList(t.CurrentPage,t.pageSize,t.pd)}}},[t._v("查询")]),t._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.addNew()}}},[t._v("新增")])],1)],1)],1),t._v(" "),s("div",{staticClass:"yycontent"},[s("div",{staticClass:"yylbt mb-15"},[t._v("甄别信息列表")]),t._v(" "),s("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","highlight-current-row":!0},on:{select:t.selectfn}},[s("el-table-column",{attrs:{prop:"BT",label:"标题"}}),t._v(" "),s("el-table-column",{attrs:{prop:"NR",label:"内容"}}),t._v(" "),s("el-table-column",{attrs:{prop:"JSDWMC",label:"接收单位"}}),t._v(" "),s("el-table-column",{attrs:{prop:"CREATETIME",label:"创建时间"}}),t._v(" "),s("el-table-column",{attrs:{prop:"SFYX",label:"发送状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s("1"==e.row.SFYX?"已发送":"未发送"))])]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[s("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",icon:"el-icon-tickets"},on:{click:function(s){t.details(e.row)}}}),t._v(" "),s("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"删除",icon:"el-icon-delete",disabled:"1"==e.row.SFYX},on:{click:function(s){t.cutOff(e.row)}}})],1)]}}])})],1),t._v(" "),s("div",{staticClass:"middle-foot"},[s("div",{staticClass:"page-msg"},[s("div",{},[t._v("\n      共"+t._s(t.TotalResult)+"条记录\n        ")]),t._v(" "),s("div",{},[t._v("\n          每页显示\n          "),s("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}},t._l(t.options,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n          条\n        ")],1),t._v(" "),s("div",{},[t._v("\n          共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n        ")])]),t._v(" "),s("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.CurrentPage=e}}})],1)],1),t._v(" "),s("el-dialog",{attrs:{title:"新增",visible:t.addDialogVisible,width:"800px"},on:{"update:visible":function(e){t.addDialogVisible=e}}},[s("el-form",{ref:"addForm",attrs:{model:t.form}},[s("el-row",{staticClass:"mb-6",attrs:{type:"flex"}},[s("el-col",{staticClass:"input-item",attrs:{span:24}},[s("span",{staticClass:"input-text w-ts"},[t._v("接收单位：")]),t._v(" "),s("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"",multiple:"","collapse-tags":"","default-first-option":"",placeholder:"请选择",size:"small"},on:{"visible-change":t.getDw},model:{value:t.form.JSDWBH,callback:function(e){t.$set(t.form,"JSDWBH",e)},expression:"form.JSDWBH"}},t._l(t.dwList,function(t,e){return s("el-option",{key:e,attrs:{label:t.ZZJGDM+" - "+t.DWZWMC,value:t.ZZJGDM}})}),1)],1)],1),t._v(" "),s("el-row",{staticClass:"mb-6",attrs:{type:"flex"}},[s("el-col",{staticClass:"input-item",attrs:{span:24}},[s("span",{staticClass:"input-text w-ts"},[t._v("标题：")]),t._v(" "),s("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.form.BT,callback:function(e){t.$set(t.form,"BT",e)},expression:"form.BT"}})],1)],1),t._v(" "),s("el-row",{staticClass:"mb-6",attrs:{type:"flex"}},[s("el-col",{staticClass:"input-item",attrs:{span:24}},[s("span",{staticClass:"input-text",staticStyle:{width:"14.9%!important"}},[t._v("附件：")]),t._v(" "),s("label",{staticClass:"file"},[t._v("\n            上传附件\n            "),s("input",{attrs:{type:"file",name:"",multiple:""},on:{change:t.reviewUpload}})]),t._v(" "),t.reviewFile?s("div",{staticClass:"fileColl"},t._l(t.reviewFile,function(e,a){return s("div",{key:a},[s("span",{staticClass:"mr-30"},[t._v(t._s(e.name))])])}),0):t._e()])],1),t._v(" "),s("el-row",{staticClass:"mb-6",attrs:{type:"flex"}},[s("el-col",{staticClass:"input-item",attrs:{span:24}},[s("span",{staticClass:"input-text",staticStyle:{width:"17.3%!important"}},[t._v("回复内容：")]),t._v(" "),s("el-input",{attrs:{type:"textarea",maxlength:"300",autosize:{minRows:3,maxRows:6},placeholder:"请输入描述(不能超过300字)"},model:{value:t.form.NR,callback:function(e){t.$set(t.form,"NR",e)},expression:"form.NR"}})],1)],1)],1),t._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:[function(t){},function(e){t.sendOrMoment("2")}]}},[t._v("暂存")]),t._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:[function(t){},function(e){t.sendOrMoment("1")}]}},[t._v("发送")]),t._v(" "),s("el-button",{attrs:{size:"small",type:"warning"},on:{click:[function(t){},function(e){t.addDialogVisible=!1}]}},[t._v("返回")])],1)],1),t._v(" "),s("el-dialog",{staticClass:"tt",attrs:{title:"详情",visible:t.detailDialogVisible,width:"800px"},on:{"update:visible":function(e){t.detailDialogVisible=e}}},[s("el-form",{ref:"addForm",attrs:{model:t.dform}},[s("el-row",{staticClass:"mb-6",attrs:{type:"flex"}},[s("el-col",{staticClass:"input-item",attrs:{span:24}},[s("span",{staticClass:"input-text",staticStyle:{width:"50px!important","text-align":"left"}},[t._v("标题：")]),t._v(" "),s("span",{staticClass:"review-span",staticStyle:{"padding-left":"13px"}},[t._v(t._s(t.dform.BT))])])],1),t._v(" "),s("el-row",{staticClass:"mb-6",attrs:{type:"flex"}},[s("el-col",{staticClass:"input-item",attrs:{span:24}},[s("span",{staticClass:"input-text",staticStyle:{width:"50px!important","text-align":"left"}},[t._v("内容：")]),t._v(" "),s("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:6},disabled:!0},model:{value:t.dform.NR,callback:function(e){t.$set(t.dform,"NR",e)},expression:"dform.NR"}})],1)],1),t._v(" "),s("el-row",{staticClass:"mb-6"},[s("el-col",{attrs:{span:24}},t._l(t.inFiles,function(e,a){return s("div",{key:a,staticClass:"infiledd"},[s("span",{staticClass:"mr-30 avgerName"},[t._v(t._s(e.FILENAME))]),t._v(" "),s("span",{staticClass:"mr-30 tc-999 avgeraTime"},[t._v("上传时间："+t._s(e.CREATETIME))]),t._v(" "),s("el-button",{staticClass:"avgera",attrs:{type:"text"}},[s("a",{staticClass:"green",attrs:{href:e.NR_DESC,download:""}},[t._v("下载")])])],1)}),0)],1),t._v(" "),s("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableDataDW,border:"","highlight-current-row":!0}},[s("el-table-column",{attrs:{prop:"JSDWMC",label:"接收单位"}}),t._v(" "),s("el-table-column",{attrs:{prop:"QSZT",label:"签收状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s("0"==e.row.QSZT?"无签收":"已签收"))])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"QSSJ",label:"签收时间"}}),t._v(" "),s("el-table-column",{attrs:{prop:"QSR",label:"签收人"}})],1)],1),t._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"small",type:"warning"},on:{click:[function(t){},function(e){t.detailDialogVisible=!1}]}},[t._v("返回")])],1)],1)],1)},staticRenderFns:[]};var i=s("VU/8")(a,l,!1,function(t){s("AcuS"),s("OiJJ")},"data-v-484aa2fc",null);e.default=i.exports},AcuS:function(t,e){},OiJJ:function(t,e){}});
//# sourceMappingURL=51.5542f9197379d6efc89c.js.map