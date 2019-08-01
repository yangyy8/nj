<template lang="html">
      <!-- 临住信息综合分析 -->
      <div class="yymain tshu">
        <div class="yytitle">
          <el-row type="flex">
            <el-col :span="22" class="br pr-20">
              <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">受理时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.SLRQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.SLRQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">签发时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.SPRQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.SPRQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国家地区：</span>
                  <el-select v-model="pd.GJDQ"  multiple collapse-tags filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.gjdq"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">受理单位：</span>
                  <el-select v-model="pd.SLDW"  multiple collapse-tags filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.sldw"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text" title="申请证件种类">申请证件种类：</span>
                    <el-select v-model="pd.BZLX" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.zjzl"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
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
              <el-checkbox label="国家地区" v-model="pm.GJDQ" :disabled="disa"></el-checkbox>
              <el-checkbox label="审批结果" v-model="pm.SPJG" :disabled="disa"></el-checkbox>
              <el-checkbox label="申请类别" v-model="pm.SQLB" :disabled="disa"></el-checkbox>
              <el-checkbox label="申请事由" v-model="pm.SQSY" :disabled="disa"></el-checkbox>
              <el-checkbox label="所持签证种类" v-model="pm.XCQZZL" :disabled="disa"></el-checkbox>
              <el-checkbox label="所持证件种类" v-model="pm.XCZJZL" :disabled="disa"></el-checkbox>
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
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'QFRYXX',query:{row:scope.row}})"></el-button>
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
                :current-page.sync ="CurrentPage"
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
               prop="ZWXM"
               label="中文姓名">
             </el-table-column>
             <el-table-column
               prop="YWXM"
               label="英文姓名">
             </el-table-column>
             <el-table-column
               prop="GJDQ_DESC"
               label="国家地区">
             </el-table-column>
             <el-table-column
               prop="XB_DESC"
               label="性别">
             </el-table-column>
             <el-table-column
               prop="CSRQ"
               label="出生日期">
             </el-table-column>
             <el-table-column
               prop="ZJZL_DESC"
               label="证件种类">
             </el-table-column>
             <el-table-column
               prop="XCZJHM"
               label="证件号码">
             </el-table-column>
             <el-table-column
               prop="QZZL_DESC"
               label="签证种类">
             </el-table-column>
             <el-table-column
               prop="XCQZHM"
               label="签证号码">
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
              :current-page.sync ="CurrentPage"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="TotalResult">
            </el-pagination>
          </div>
        </div>
        </div>
     <div class="bj">
       <!-- 留学生信息详情 -->
       <el-dialog title="签证申请信息详情" :visible.sync="qzsqDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
           <QZSQ :type="type" :xid="xid" :random="random"></QZSQ>
           <div slot="footer" class="dialog-footer">
             <el-button @click="qzsqDialogVisible = false" size="small">取 消</el-button>
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
            SLRQ_DateRange:{begin:'',end:'',dataType:'date'},
            SPRQ_DateRange:{begin:'',dataType:'date'},
            QZQFJG_Like:'3201'
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
          qzsqDialogVisible:false,
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
              code:'GJDQ_DESC',
              label:'国家地区'
            },
            {
              code:'SPJG_DESC',
              label:'审批结果'
            },
            {
              code:'SQLB_DESC',
              label:'申请类别'
            },
            {
              code:'SQSY_DESC',
              label:'申请事由'
            },
            {
              code:'XCQZZL_DESC',
              label:'所持签证种类'
            },
            {
              code:'XCZJZL_DESC',
              label:'所持证件种类'
            },
          ],
          tableHeadHc:[],
          tableHeadHs:[],
          configHeader:[],
          pd0:{},
          form:{},
          falg:false,
          disa:false,
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

        this.$store.dispatch("getSldw");
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
            if(this.pm.GJDQ==true){
              this.tableHeadHc.push("GJDQ");
              this.tableHeadHs.push('GJDQ_DESC')
            }
            if(this.pm.SPJG==true){
              this.tableHeadHc.push("SPJG");
              this.tableHeadHs.push('SPJG_DESC')
            }
            if(this.pm.SQLB==true){
              this.tableHeadHc.push("SQLB");
              this.tableHeadHs.push('SQLB_DESC')
            }
            if(this.pm.SQSY==true){
              this.tableHeadHc.push("SQSY");
              this.tableHeadHs.push('SQSY_DESC')
            }
            if(this.pm.XCQZZL==true){
              this.tableHeadHc.push("XCQZZL");
              this.tableHeadHs.push('XCQZZL_DESC')
            }
            if(this.pm.XCZJZL==true){
              this.tableHeadHc.push("XCZJZL");
              this.tableHeadHs.push('XCZJZL_DESC')
            }
          let p = {
            "currentPage": currentPage,
            "showCount": showCount,
            "pd": pd,
            "orderBy":'',
            "orderType":'DESC',
            "groupList":this.tableHeadHc,
          };

          this.$api.post(this.Global.aport5+'/esFnsqxxController/getCount', p,
            r => {
              this.tableData = r.data.resultList;
              this.TotalResult = r.data.totalResult;
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
                var url = this.Global.aport5 + "/esFnsqxxController/getResultListByParams";
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
          this.random=new Date().getTime();
          this.xid=i.RGUID;
          this.qzsqDialogVisible = true;
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
