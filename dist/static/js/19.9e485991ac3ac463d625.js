webpackJsonp([19],{Iz78:function(t,e,s){t.exports=s.p+"static/img/js.9fe28f6.png"},WHGc:function(t,e){},Z505:function(t,e){},sJLq:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{queryTerm:"1",zjhm:"",gjshow:!1,pd1:{},pd2:{},pd:{CSRQ_DateRange:{},TLYXQ_DateRange:{},DDRQ_DateRange:{}},pd0:{},listDialogVisible:!1,tableData:[],selecttype:"all"}},mounted:function(){this.$store.dispatch("getGjdq"),this.$store.dispatch("getXB"),this.$store.dispatch("getZjzl")},methods:{moreFn:function(t){this.$router.push({name:"RYHX_XQ",query:{zjhm:t.zjhm,row:t}}),this.listDialogVisible=!1},getList:function(){void 0!=this.selecttype&&""!=this.selecttype?void 0!=this.zjhm&&""!=this.zjhm?this.$router.push({name:"QWJS",query:{zjhmes:this.zjhm,stype:this.selecttype}}):this.$message.error("请输入内容再进行查询！"):this.$message.error("请选择类型！")},conditionChange:function(){this.V.$reset("demo1")},getListBet:function(){var t=this,e={};if("1"==this.queryTerm)e=this.pd1,this.V.$submit("demo1",function(s,a){s&&t.$api.post(t.Global.aport2+"/ryhxhx/getjbxx",e,function(e){e.success&&(t.listDialogVisible=!0,t.tableData=e.data)})});else if("2"==this.queryTerm){if(e=this.pd2,!(""!=this.pd2.zwxm&&void 0!=this.pd2.zwxm||""!=this.pd2.ywxm&&void 0!=this.pd2.ywxm))return this.$alert("中文姓名和英文姓名二者必选其一！","提示",{confirmButtonText:"确定"}),!1;this.$api.post(this.Global.aport2+"/ryhxhx/getjbxx",e,function(e){t.listDialogVisible=!0,t.tableData=e.data})}}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"yymain"},[s("div",{staticClass:"yytitle t-tsh",staticStyle:{"min-height":"700px"}},[s("div",{staticClass:"yycontent ryhm"},[t._m(0),t._v(" "),s("div",{staticClass:"zhcx"},[s("el-input",{staticClass:"inputs",attrs:{placeholder:" ",max:"500"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getList()}},model:{value:t.zjhm,callback:function(e){t.zjhm=e},expression:"zjhm"}},[s("el-select",{staticStyle:{width:"100px"},attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.selecttype,callback:function(e){t.selecttype=e},expression:"selecttype"}},[s("el-option",{attrs:{label:"综合",value:"all"}}),t._v(" "),s("el-option",{attrs:{label:"组织",value:"org"}}),t._v(" "),s("el-option",{attrs:{label:"人员",value:"user"}}),t._v(" "),s("el-option",{attrs:{label:"案件",value:"aj"}}),t._v(" "),s("el-option",{attrs:{label:"地址",value:"addr"}})],1)],1),t._v(" "),s("el-button",{staticStyle:{"margin-left":"-10px"},attrs:{type:"primary"},on:{click:function(e){t.getList()}}},[t._v("查询")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.$router.push({name:"GJCX"})}}},[t._v("高级查询")]),t._v(" "),s("el-button",{attrs:{type:"warning"},on:{click:function(e){t.$router.push({name:"RYPLCX",query:{}})}}},[t._v("模板导入")]),t._v(" "),s("el-button",{attrs:{type:"success"},on:{click:function(e){t.$router.push({name:"ZDYCX"})}}},[t._v("自定义查询")])],1),t._v(" "),t.gjshow?s("div",{staticClass:"tjsy"},[s("el-row",{staticClass:"t-choose"},[s("el-col",{staticClass:"input-item t-tjsr",attrs:{sm:24,md:12,lg:8}},[s("span",{staticClass:"input-text t-tj"},[t._v("选择组合查询条件：")]),t._v(" "),s("el-select",{staticClass:"input-input t-sr",attrs:{placeholder:"请选择",filterable:"",clearable:"","default-first-option":"",size:"small"},on:{change:t.conditionChange},model:{value:t.queryTerm,callback:function(e){t.queryTerm=e},expression:"queryTerm"}},[s("el-option",{attrs:{value:"1",label:"证件号码+证件种类+国籍"}}),t._v(" "),s("el-option",{attrs:{value:"2",label:"姓名+性别+出生日期+国籍"}})],1)],1)],1),t._v(" "),s("div",{staticClass:"t-ak-tab-pane"},["1"==t.queryTerm?s("el-row",{attrs:{align:"center",gutter:2}},[s("el-col",{directives:[{name:"validate-easy",rawName:"v-validate-easy",value:[["required"]],expression:"[['required']]"}],staticClass:"input-item my-form-group",attrs:{sm:24,md:12,lg:8,"data-scope":"demo1","data-name":"zjzl","data-type":"select"}},[s("span",{staticClass:"input-text"},[s("i",{staticClass:"t-must"},[t._v("*")]),t._v("证件种类：")]),t._v(" "),s("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"mini"},model:{value:t.pd1.zjzl,callback:function(e){t.$set(t.pd1,"zjzl",e)},expression:"pd1.zjzl"}},t._l(t.$store.state.zjzl,function(t,e){return s("el-option",{key:e,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),s("el-col",{directives:[{name:"validate-easy",rawName:"v-validate-easy",value:[["required"]],expression:"[['required']]"}],staticClass:"input-item my-form-group",attrs:{sm:24,md:12,lg:8,"data-scope":"demo1","data-name":"zjhm","data-type":"input"}},[s("span",{staticClass:"input-text"},[s("i",{staticClass:"t-must"},[t._v("*")]),t._v("证件号码：")]),t._v(" "),s("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"mini"},model:{value:t.pd1.zjhm,callback:function(e){t.$set(t.pd1,"zjhm",e)},expression:"pd1.zjhm"}})],1),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[s("span",{staticClass:"input-text"},[t._v("国家地区：")]),t._v(" "),s("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"mini"},model:{value:t.pd1.gjdq,callback:function(e){t.$set(t.pd1,"gjdq",e)},expression:"pd1.gjdq"}},t._l(t.$store.state.gjdq,function(t,e){return s("el-option",{key:e,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1)],1):t._e(),t._v(" "),"2"==t.queryTerm?s("el-row",{attrs:{align:"center",gutter:2}},[s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[s("span",{staticClass:"input-text"},[t._v("中文姓名：")]),t._v(" "),s("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"mini"},model:{value:t.pd2.zwxm,callback:function(e){t.$set(t.pd2,"zwxm",e)},expression:"pd2.zwxm"}})],1),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[s("span",{staticClass:"input-text"},[t._v("英文姓名：")]),t._v(" "),s("el-input",{staticClass:"input-input",attrs:{placeholder:"请输入内容",size:"mini"},model:{value:t.pd2.ywxm,callback:function(e){t.$set(t.pd2,"ywxm",e)},expression:"pd2.ywxm"}})],1),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[s("span",{staticClass:"input-text"},[t._v("性别：")]),t._v(" "),s("el-select",{staticClass:"input-input",attrs:{placeholder:"请选择",filterable:"",clearable:"","default-first-option":"",size:"mini"},model:{value:t.pd2.xb,callback:function(e){t.$set(t.pd2,"xb",e)},expression:"pd2.xb"}},t._l(t.$store.state.xb,function(t,e){return s("el-option",{key:e,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[s("span",{staticClass:"input-text"},[t._v("出生日期：")]),t._v(" "),s("div",{staticClass:"input-input t-flex t-date"},[s("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"mini","value-format":"yyyyMMdd",placeholder:"开始时间"},model:{value:t.pd2.beginCSRQ,callback:function(e){t.$set(t.pd2,"beginCSRQ",e)},expression:"pd2.beginCSRQ"}}),t._v(" "),s("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),s("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"mini","value-format":"yyyyMMdd",placeholder:"结束时间"},model:{value:t.pd2.endCSRQ,callback:function(e){t.$set(t.pd2,"endCSRQ",e)},expression:"pd2.endCSRQ"}})],1)]),t._v(" "),s("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[s("span",{staticClass:"input-text"},[t._v("国家地区：")]),t._v(" "),s("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"mini"},model:{value:t.pd2.gjdq,callback:function(e){t.$set(t.pd2,"gjdq",e)},expression:"pd2.gjdq"}},t._l(t.$store.state.gjdq,function(t,e){return s("el-option",{key:e,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1)],1):t._e()],1),t._v(" "),s("el-row",{staticClass:"t-mt20",attrs:{type:"flex"}},[s("el-col",{attrs:{span:24}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.getListBet()}}},[t._v("  高级查询  ")])],1)],1)],1):t._e()])]),t._v(" "),s("el-dialog",{attrs:{title:"列表",visible:t.listDialogVisible,width:"900px"},on:{"update:visible":function(e){t.listDialogVisible=e}}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[s("el-table-column",{attrs:{prop:"zwxm",label:"中文姓名"}}),t._v(" "),s("el-table-column",{attrs:{prop:"ywxm",label:"英文姓名"}}),t._v(" "),s("el-table-column",{attrs:{prop:"xb_desc",label:"性别"}}),t._v(" "),s("el-table-column",{attrs:{prop:"csrq",label:"出生日期"}}),t._v(" "),s("el-table-column",{attrs:{prop:"gjdq_desc",label:"国家地区"}}),t._v(" "),s("el-table-column",{attrs:{prop:"zjzl_desc",label:"证件种类"}}),t._v(" "),s("el-table-column",{attrs:{prop:"zjhm",label:"证件号码"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticClass:"tc-b hand",on:{click:function(s){t.moreFn(e.row)}}},[t._v(t._s(e.row.zjhm))])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"zjyxq",label:"证件有效期"}})],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("img",{attrs:{src:s("Iz78"),border:"0"}})])}]};var i=s("VU/8")(a,l,!1,function(t){s("WHGc"),s("Z505")},"data-v-01787e94",null);e.default=i.exports}});
//# sourceMappingURL=19.9e485991ac3ac463d625.js.map