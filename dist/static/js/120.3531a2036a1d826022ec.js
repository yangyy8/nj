webpackJsonp([120],{"9b5M":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mvHQ"),l=a.n(s),n={components:{CZXX:a("7WET").a},data:function(){return{type:3,rybh:"",xid:"",allData:{},page:1,CurrentPage:1,pageSize:10,TotalResult:0,pd:{SJXFSJ_DateRange:{begin:"",end:"",dataType:"date"}},pd1:{SJXFSJ_DateRange:{begin:"",end:"",dataType:"date"}},tableData:[],tableData1:[],CZDialogVisible:!1}},mounted:function(){},activated:function(){},created:function(){window.cardDetail=this.cardDetail},methods:{download:function(){var t=this;this.getPd(),0==this.page?this.$api.post(this.Global.aport2+"/czgltb/exportglqktbb",{pd:this.pd},function(e){t.downloadM(e)},function(t){},{},"blob"):this.$api.post(this.Global.aport2+"/czgltb/exportcwxxmd",{pd:this.pd},function(e){t.downloadM(e)},function(t){},{},"blob")},downloadM:function(t){if(t){var e=window.URL.createObjectURL(new Blob([t],{type:"application/octet-stream"})),a=document.createElement("a");a.style.display="none",a.href=e,a.setAttribute("download","报表.xls"),document.body.appendChild(a),a.click()}},sjzh:function(t){var e="";if(0==t.length)return"";for(var a in t)e+='<span class="tc-b hand" onclick="cardDetail('+l()(t[a]).replace(/\"/g,"'")+')">'+t[a].ZJHM+"/</span>";return e},cardDetail:function(t){this.rybh=t.RYBH,this.allData=t,this.CZDialogVisible=!0},getData:function(){0==this.page?this.getList():1==this.page&&this.getList1()},changeTime:function(t,e){""==t.begin?e.begin="":null==t.begin?e.begin=null:e.begin=t.begin+" 00:00:00"},getPd:function(t,e){this.changeTime(this.pd1.SJXFSJ_DateRange,this.pd.SJXFSJ_DateRange)},getList:function(){var t=this;this.getPd(),this.$api.post(this.Global.aport2+"/czgltb/getgltb",{pd:this.pd},function(e){e.success&&(t.tableData=e.data)})},getList1:function(){var t=this;this.getPd(),this.$api.post(this.Global.aport2+"/czgltb/getgltb",{pd:this.pd},function(e){e.success&&(t.tableData1=e.data)})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yymain"},[a("div",{staticClass:"yytitle"},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:"br pr-20",attrs:{span:16}},[a("el-row",{attrs:{align:"center",gutter:2}},[a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:12,offset:6}},[a("span",{staticClass:"input-text"},[t._v("市局下发时间：")]),t._v(" "),a("div",{staticClass:"input-input t-flex t-date"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"开始时间"},model:{value:t.pd1.SJXFSJ_DateRange.begin,callback:function(e){t.$set(t.pd1.SJXFSJ_DateRange,"begin",e)},expression:"pd1.SJXFSJ_DateRange.begin"}}),t._v(" "),a("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"结束时间"},model:{value:t.pd1.SJXFSJ_DateRange.end,callback:function(e){t.$set(t.pd1.SJXFSJ_DateRange,"end",e)},expression:"pd1.SJXFSJ_DateRange.end"}})],1)])],1)],1),t._v(" "),a("el-col",{staticClass:"down-btn-area",attrs:{span:2}},[a("el-button",{attrs:{type:"success",size:"small"},on:{click:t.getData}},[t._v("查询")])],1)],1)],1),t._v(" "),a("div",{staticClass:"yycontent"},[a("div",{staticClass:"ak-tabs"},[a("div",{staticClass:"ak-tab-item hand",class:{"ak-checked":1==t.page},on:{click:function(e){t.page=1,t.getList1()}}},[t._v("\n      各分局错误信息名单\n      ")]),t._v(" "),a("div",{staticClass:"ak-tab-item hand",class:{"ak-checked":0==t.page},on:{click:function(e){t.page=0,t.getList()}}},[t._v("\n       境外人员管理情况通报表\n      ")])]),t._v(" "),a("div",{staticClass:"ak-tab-pane"},[a("el-button",{staticClass:"mb-15",attrs:{size:"small",type:"primary",plain:""},on:{click:t.download}},[t._v("导出")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.page,expression:"page==0"}]},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"fjmc",label:"分局名称"}}),t._v(" "),a("el-table-column",{attrs:{label:"基本数据"}},[a("el-table-column",{attrs:{prop:"totalResult",label:"当前总数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"fwnCount",label:"范围内总数"}})],1),t._v(" "),a("el-table-column",{attrs:{label:"数据登记时效"}},[a("el-table-column",{attrs:{prop:"fjcsjsList",label:"分局超时接收"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(0==e.row.fjcsjsList.length?"0":e.row.fjcsjsList.length))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"pcscsjsList",label:"派出所超时接收"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(0==e.row.pcscsjsList.length?"0":e.row.pcscsjsList.length))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"cssmzfList",label:"超时上门走访"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(0==e.row.cssmzfList.length?"0":e.row.cssmzfList.length))])]}}])})],1),t._v(" "),a("el-table-column",{attrs:{label:"数据登记质量"}},[a("el-table-column",{attrs:{prop:"jzxxqlList",label:"居住信息缺漏"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(0==e.row.jzxxqlList.length?"0":e.row.jzxxqlList.length))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"abxxqlList",label:"安保状况缺漏"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(0==e.row.abxxqlList.length?"0":e.row.abxxqlList.length))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"zfxxqlList",label:"安全走访缺漏"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(0==e.row.zfxxqlList.length?"0":e.row.zfxxqlList.length))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"dqwtxList",label:"到期无提醒登记数"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(0==e.row.dqwtxList.length?"0":e.row.dqwtxList.length))])]}}])})],1),t._v(" "),a("el-table-column",{attrs:{prop:"djsxyssbfList",label:"登记事项与事实严重不符"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(0==e.row.djsxyssbfList.length?"0":e.row.djsxyssbfList.length))])]}}])})],1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.page,expression:"page==1"}]},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData1,border:""}},[a("el-table-column",{attrs:{prop:"fjmc",label:"单位"}}),t._v(" "),a("el-table-column",{attrs:{prop:"fjcsjsList",label:"分局接收超时"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{innerHTML:t._s(t.sjzh(e.row.fjcsjsList))}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"pcscsjsList",label:"派出所接收超时效数"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{innerHTML:t._s(t.sjzh(e.row.pcscsjsList))}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"jzxxqlList",label:"居住信息登记缺项"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{innerHTML:t._s(t.sjzh(e.row.jzxxqlList))}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"abxxqlList",label:"无安保状况登记数"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{innerHTML:t._s(t.sjzh(e.row.abxxqlList))}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"zfxxqlList",label:"无安全走访登记数"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{innerHTML:t._s(t.sjzh(e.row.zfxxqlList))}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"clfwwqzaList",label:"承租房屋未签治安责任书数"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{innerHTML:t._s(t.sjzh(e.row.clfwwqzaList))}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"dqwtxList",label:"到期无提醒登记数"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{innerHTML:t._s(t.sjzh(e.row.dqwtxList))}})]}}])})],1)],1)],1)]),t._v(" "),a("el-dialog",{attrs:{title:"常住信息详情",visible:t.CZDialogVisible,"custom-class":"big_dialog","append-to-body":!1,modal:!1},on:{"update:visible":function(e){t.CZDialogVisible=e}}},[a("CZXX",{attrs:{type:t.type,xid:t.xid,rybh:t.rybh,random:(new Date).getTime(),row:t.allData}}),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.CZDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)},staticRenderFns:[]},i=a("VU/8")(n,o,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=120.3531a2036a1d826022ec.js.map