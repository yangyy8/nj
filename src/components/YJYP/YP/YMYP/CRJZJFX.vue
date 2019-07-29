<template lang="html">
      <!-- 临住信息综合分析 -->
      <div class="yymain tshu">
        <div class="yytitle">
          <el-row type="flex">
            <el-col :span="22" class="br pr-20">
              <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">状态：</span>
                  <el-select v-model="pd.YXZT"  multiple collapse-tags filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.gjdq"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">前往国：</span>
                  <el-select v-model="pd.QWGDM"  multiple collapse-tags filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.gjdq"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">签约日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.QYSJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.QYSJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">移民种类：</span>
                  <el-select v-model="pd.YMZLDM"  multiple collapse-tags filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.gjdq"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">单位名称：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.DWMC"   class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">批复日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.PFRQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.PFRQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
              </el-row>
             </el-col>
                <el-col :span="2" class="down-btn-area">
                  <el-button type="success" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)" class="mb-15">查询</el-button>
                  <!-- <el-button type="" size="small" @click="" class="mb-15"> 重置</el-button> -->
                </el-col>
              </el-row>
        </div>
        <div class="yycontent">
          <div class="yylbt mb-15">统计类别</div>
          <div class="mb-15">
              <el-checkbox label="移民申请种类" v-model="pm.YMSQZTDM" :disabled="disa"></el-checkbox>
              <el-checkbox label="前往国" v-model="pm.QWGDM" :disabled="disa"></el-checkbox>
              <el-checkbox label="移民种类" v-model="pm.YMZLDM" :disabled="disa"></el-checkbox>
          </div>
          <div v-if="falg">
            <el-table
               ref="multipleTable"
               :data="tableData"
               border
               style="width: 100%">
               <el-table-column
                   v-for="(val,i) in configHeader"
                   :key="i"
                   :prop="val.code"
                   :label="val.label">
               </el-table-column>
               <el-table-column
                 prop="count_DESC"
                 label="统计数量">
               </el-table-column>
               <el-table-column
                 label="操作" width="100">
                 <template slot-scope="scope">
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'CRJRYXX',query:{row:scope.row}})"></el-button>
                 </template>
               </el-table-column>
            </el-table>
            <div class="middle-foot">
              <div class="page-msg">
                <div class="">
              共{{TotalResult}}条记录
                </div>
                <div class="">
                  每页显示
                  <el-select v-model="pageSize" @change="pageSizeChange(pageSize)" placeholder="10" size="mini" class="page-select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  条
                </div>
                <div class="">
                共{{Math.ceil(TotalResult/pageSize)}}页
                </div>
              </div>
              <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page:sync="CurrentPage"
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="TotalResult">
              </el-pagination>
            </div>
        </div>
        <div v-else>
          <el-table
             ref="multipleTable"
             :data="tableData"
             border
             style="width: 100%">
             <el-table-column
               prop="XM"
               label="姓名">
             </el-table-column>
             <el-table-column
               prop="YMZLMC"
               label="移民种类">
             </el-table-column>
             <el-table-column
               prop="QYSJ"
               label="签约时间">
             </el-table-column>
             <el-table-column
               prop="SFZH"
               label="身份证号">
             </el-table-column>
             <el-table-column
               prop="YMSQZLMC"
               label="移民申请种类">
             </el-table-column>
             <el-table-column
               prop="QWGMC"
               label="前往国">
             </el-table-column>
             <el-table-column
               prop="DWMC"
               label="单位名称">
             </el-table-column>
             <el-table-column
               prop="PFRQ"
               label="批复时间">
             </el-table-column>
             <el-table-column
               label="操作" width="70">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
               </template>
             </el-table-column>
         </el-table>
         <div class="middle-foot">
            <div class="page-msg">
              <div class="">
            共{{TotalResult}}条记录
              </div>
              <div class="">
                每页显示
                <el-select v-model="pageSize" @change="pageSizeChange(pageSize)" placeholder="10" size="mini" class="page-select">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                条
              </div>
              <div class="">
              共{{Math.ceil(TotalResult/pageSize)}}页
              </div>
            </div>
            <el-pagination
              background
              @current-change="handleCurrentChange"
              :current-page:sync="CurrentPage"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="TotalResult">
            </el-pagination>
          </div>
        </div>
        </div>
     <div class="bj">
       <!-- 留学生信息详情 -->
       <el-dialog title="代办签证信息详情" :visible.sync="crjDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
         <el-row :gutter="3"  class="mb-6">
           <el-col :span="8" class="input-item">
             <span class="input-text">姓名：</span>
             <span class="input-input detailinput">  {{czinfo.XM}}</span>
           </el-col>
           <el-col :span="8" class="input-item">
             <span class="input-text">身份证号：</span>
             <span class="input-input detailinput">  {{czinfo.SFZH}}</span>
           </el-col>
           <el-col :span="8" class="input-item">
             <span class="input-text">移民签证种类名称：</span>
             <span class="input-input detailinput">  {{czinfo.YMQZZLMC}}</span>
           </el-col>
           <el-col :span="8" class="input-item">
             <span class="input-text">前往国名称：</span>
             <span class="input-input detailinput">  {{czinfo.QWGMC}}</span>
           </el-col>
           <el-col :span="8" class="input-item">
             <span class="input-text">移民种类名称：</span>
             <span class="input-input detailinput">  {{czinfo.QWGMC}}</span>
           </el-col>
           <el-col :span="8" class="input-item">
             <span class="input-text">单位名称：</span>
             <span class="input-input detailinput">  {{czinfo.DWMC}}</span>
           </el-col>
           <el-col :span="8" class="input-item">
             <span class="input-text">移民状态：</span>
             <span class="input-input detailinput">  {{czinfo.YXZT}}</span>
           </el-col>
           <el-col :span="8" class="input-item">
             <span class="input-text">同行人姓名：</span>
             <span class="input-input detailinput">  {{czinfo.TXRXM}}</span>
           </el-col>
           <el-col :span="8" class="input-item">
             <span class="input-text">填表时间：</span>
             <span class="input-input detailinput">  {{czinfo.TBSJ}}</span>
           </el-col>
           <el-col :span="8" class="input-item">
             <span class="input-text">签约时间：</span>
             <span class="input-input detailinput"> {{czinfo.QYSJ}}</span>
           </el-col>
           <el-col :span="8" class="input-item">
             <span class="input-text">批复时间：</span>
             <span class="input-input detailinput">  {{czinfo.PFRQ}}</span>
           </el-col>

           <el-col :span="8" class="input-item">
             <span class="input-text">操作人：</span>
             <span class="input-input detailinput">  {{czinfo.CZR}}</span>
           </el-col>
           <el-col :span="8" class="input-item">
             <span class="input-text">操作时间：</span>
             <span class="input-input detailinput">  {{czinfo.CZSJ}}</span>
           </el-col>
           <el-col :span="8" class="input-item">
             <span class="input-text">修改人：</span>
             <span class="input-input detailinput">  {{czinfo.XGR}}</span>
           </el-col>
           <el-col :span="8" class="input-item">
             <span class="input-text">修改时间：</span>
             <span class="input-input detailinput"> {{czinfo.XGSJ}}</span>
           </el-col>
         </el-row>
           <div slot="footer" class="dialog-footer">
             <el-button @click="crjDialogVisible = false" size="small">取 消</el-button>
           </div>
      </el-dialog>
    </div>

      </div>

    </template>
    <script>
    import QZSQ from '../../../common/qzsq_xq'
    export default {
      components:{QZSQ},
      data() {
        return {
          radio1:'0',
          radio2:'0',
          typet:'1',
          CurrentPage: 1,
          pageSize: 10,
          TotalResult: 0,
          pd: {
            QYSJ_DateRange:{begin:'',end:'',dataType:'date'},
            PFRQ_DateRange:{begin:'',dataType:'date'},
          },
          pm:{},
          imagess:[],
          imgshow1:false,
          imgshow2:true,
          shm:false,
          lg:false,
          type:1,
          xid:'',
          random:'',
          crjDialogVisible:false,
          options:[{
            value: 10,
            label: "10"
          },
          {
            value: 20,
            label: "20"
          },
          {
            value: 30,
            label: "30"

          }
        ],
          tableData: [],
          tableHead:[
            {
              code:'YMSQZTDM_DESC',
              label:'移民申请种类'
            },
            {
              code:'QWGDM_DESC',
              label:'前往国'
            },
            {
              code:'YMZLDM_DESC',
              label:'移民种类'
            },
          ],
          tableHeadHc:[],
          tableHeadHs:[],
          configHeader:[],
          pd0:{},
          form:{},
          falg:false,
          disa:false,
          czinfo:{},
        }
      },
      mounted() {
         this.$store.dispatch("getGjdq");
         this.$store.dispatch("getXB");
         this.$store.dispatch("getSsdw");
         this.$store.dispatch("getZjzl");
         this.$store.dispatch("getRjqzzl");
         this.$store.dispatch("getRjsy");
         this.$store.dispatch("getZsxz");
         this.$store.dispatch("getSjly");
      },
      methods: {
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        pageSizeChange(val) {
          this.getList(this.CurrentPage, val, this.pd);
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          this.getList(val, this.pageSize, this.pd);
          console.log(`当前页: ${val}`);
        },
        open(content) {
          this.$alert(content, '提示', {
            confirmButtonText: '确定',
          });
        },
        getList(currentPage, showCount, pd) {
             if(this.pd.ZWXM!=undefined || this.pd.YWXM!=undefined || this.pd.ZJHM!=undefined){
               this.falg=false;
               this.disa=true;
             }else {
               this.disa=false;
             }
            this.tableHeadHc=[];
            this.tableHeadHs=[];
            if(this.pm.YMSQZTDM==true){
              this.tableHeadHc.push("YMSQZTDM");
              this.tableHeadHs.push("YMSQZTDM_DESC");
            }
            if(this.pm.QWGDM==true){
              this.tableHeadHc.push("QWGDM");
              this.tableHeadHs.push("QWGDM_DESC");
            }
            if(this.pm.YMZLDM==true){
              this.tableHeadHc.push("YMZLDM");
              this.tableHeadHs.push("YMZLDM_DESC");
            }
          let p = {
            "currentPage": currentPage,
            "showCount": showCount,
            "pd": pd,
            "groupList":this.tableHeadHc,
          };

          this.$api.post(this.Global.aport5+'/esYmController/getCount', p,
            r => {
              this.tableData = r.data.resultList;
              this.TotalResult = r.data.totalAllResult;
              if(r.data.isFenLei=="true"){//统计列表
                this.falg=true;
                this.configHeader=[];
                let _this = this;
                for(var i=0;i<_this.tableHeadHs.length;i++){
                  var a='';
                  var obj={};
                  for(var j=0;j<_this.tableHead.length;j++){
                    if(_this.tableHead[j].code==_this.tableHeadHs[i]){
                      a=j;
                      obj.code=_this.tableHead[j].code;
                      obj.label=_this.tableHead[j].label;
                    }
                  }
                  _this.configHeader.splice(a,0,obj);
                }
              }else {
                this.falg=false;
                var url = this.Global.aport5 + "/esYmController/getResultListByParams";
                this.$api.post(url, p,
                  r => {
                    if (r.success) {
                     this.tableData = r.data.resultList;
                     this.TotalResult = r.data.totalResult;
                    }
                  });
              }
            })
        },
        details(i) {
          let p={
            pd:{
              RGUID:i.RGUID
            }
          }
          this.$api.post(this.Global.aport5+'/esYmController/getResultListByParams',p,
           r =>{
             if(r.success){
               if(r.data.resultList[0]){
                 this.czinfo=r.data.resultList[0]
               }else{
                 this.czinfo={}
               }
               this.crjDialogVisible = true;
             }
           })
        },
      }
    }
    </script>

    <style scoped>
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }

    .el-carousel__item img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    .el-carousel__item:nth-child(2n) {
      /* background: url(../../../assets/img/t1.png); */
      background-size: 100% 100%;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }

    .crcolor {
      background: #EFF3F6;
    }
    .yy-input-text {
      text-align: left !important;
    }
    </style>
    <style>
      .el-button+.el-button{margin-left: 0!important;}
      .yycontent .el-checkbox{margin-left: 20px!important; line-height: 30px;}
      .yycontent .el-checkbox+.el-checkbox{margin-left: 20px!important;}
      .bj .el-dialog__wrapper {
        background: #000;
        background: rgba(0, 0, 0, 0.3);
      }
    </style>
