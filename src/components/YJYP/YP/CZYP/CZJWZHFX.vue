<template lang="html">
      <!-- 临住信息综合分析 -->
      <div class="yymain tshu">
        <div class="yytitle">
          <el-row type="flex">
            <el-col :span="22" class="br pr-20">
              <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">中文姓名：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.ZWXM"   class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">英文姓：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.YWX"   class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">英文名：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.YWM"   class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">性别：</span>
                  <el-select v-model="pd.XB" filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.xb"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">出生日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.CSRQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.CSRQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">证件号码：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM"   class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">停留有效期：</span>
                  <el-date-picker
                     v-model="pd.TLYXQ_Nokeyword" format="yyyy-MM-dd"
                     type="date" size="small" value-format="yyyy/MM/dd"
                     placeholder="开始时间" class="input-input">
                  </el-date-picker>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国家地区：</span>
                  <el-select v-model="pd.GJDQ" filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.gjdq"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">签证种类：</span>
                  <el-select v-model="pd.QZZL" filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.qzzl"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">证件种类：</span>
                  <el-select v-model="pd.ZJZL" filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.zjzl"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">居留事由：</span>
                  <el-select v-model="pd.TLSY"  filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.rjsy"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">入住方式：</span>
                  <el-select v-model="pd.RZFS"  filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.rzfs"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">住房类型：</span>
                  <el-select v-model="pd.FWXZ"  filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.zsxz"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">居住状态：</span>
                  <el-select v-model="pd.JZZT"  filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.jzzt"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">所属单位：</span>
                  <el-select v-model="pd.SSPCS"  filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.ssdw"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">身份：</span>
                  <el-select v-model="pd.SFDM"  filterable clearable default-first-option  placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.sf"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">服务处所：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.FWCS"   class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">市局下发时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.SJXFSJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.SJXFSJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">分局接收时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.FJJSSJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.FJJSSJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">派出所接收时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.PCSJSSJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.PCSJSSJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
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
              <el-checkbox label="国家地区" v-model="pm.GJDQ" :disabled="disa"></el-checkbox>
              <el-checkbox label="居住类型状态" v-model="pm.JZZT" :disabled="disa"></el-checkbox>
              <el-checkbox label="居住地责任区" v-model="pm.JZD_ZRQ" :disabled="disa"></el-checkbox>
              <el-checkbox label="居住地所属派出所" v-model="pm.JZD_PCS" :disabled="disa"></el-checkbox>
              <el-checkbox label="身份" v-model="pm.SFDM" :disabled="disa"></el-checkbox>
              <el-checkbox label="签证种类" v-model="pm.QZZL" :disabled="disa"></el-checkbox>
              <el-checkbox label="服务处所" v-model="pm.FWCS" :disabled="disa"></el-checkbox>
              <el-checkbox label="证件种类" v-model="pm.ZJZL" :disabled="disa"></el-checkbox>
              <el-checkbox label="性别" v-model="pm.XB" :disabled="disa"></el-checkbox>
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
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'CZJWZHFXRYXX',query:{row:scope.row}})"></el-button>
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
               prop="YWX"
               label="英文姓">
             </el-table-column>
             <el-table-column
               prop="YWM"
               label="英文名">
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
               prop="GJDQ_DESC"
               label="国家地区">
             </el-table-column>
             <el-table-column
               prop="ZJHM"
               label="证件号码">
             </el-table-column>
             <el-table-column
               prop="SFDM_DESC"
               label="身份">
             </el-table-column>
             <el-table-column
               prop="ZJZL_DESC"
               label="证件种类">
             </el-table-column>
             <el-table-column
               prop="QZZL_DESC"
               label="签证种类">
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
       <!-- 常住信息详情 -->
       <el-dialog title="常住信息详情" :visible.sync="czDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
           <CZXX :type="type" :xid="xid" :random="random" :rybh="rybh"></CZXX>
           <div slot="footer" class="dialog-footer">
             <el-button @click="czDialogVisible = false" size="small">取 消</el-button>
           </div>
      </el-dialog>
    </div>

      </div>

    </template>
    <script>
    import CZXX from '../../../common/czxx_xq'
    export default {
      components:{CZXX},
      data() {
        return {
          rybh:'',
          radio1:'0',
          radio2:'0',
          typet:'1',
          CurrentPage: 1,
          pageSize: 10,
          TotalResult: 0,
          pd: {
            CSRQ_DateRange:{begin:'',end:'',dataType:'date'},
            FJJSSJ_DateRange:{begin:'',end:'',dataType:'date'},
            SJXFSJ_DateRange:{begin:'',end:'',dataType:'date'},
            PCSJSSJ_DateRange:{begin:'',end:'',dataType:'date'},
          },
          pm:{},
          imagess:[],
          imgshow1:false,
          imgshow2:true,
          shm:false,
          lg:false,
          type:3,
          xid:'',
          random:'',
          czDialogVisible:false,
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
              code:'JZZT_DESC',
              label:'居住类型状态'
            },
            {
              code:'JZD_ZRQ',
              label:'居住地责任区'
            },
            {
              code:'JZD_PCS',
              label:'居住地所属派出所'
            },
            {
              code:'SFDM_DESC',
              label:'身份'
            },
            {
              code:'QZZL_DESC',
              label:'签证种类'
            },
            {
              code:'FWCS',
              label:'服务处所'
            },
            {
              code:'ZJZL_DESC',
              label:'证件种类'
            },
            {
              code:'XB_DESC',
              label:'性别'
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
         this.$store.dispatch("getQzzl");
         this.$store.dispatch("getRjsy");
         this.$store.dispatch("getZsxz");
         this.$store.dispatch("getRzfs");
         this.$store.dispatch("getJzzt");
         this.$store.dispatch("getSf");
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
             // if(this.pd.ZWXM!=undefined || this.pd.YWXM!=undefined || this.pd.ZJHM!=undefined){
             //   this.falg=false;
             //   this.disa=true;
             // }else {
             //   this.disa=false;
             // }
            this.tableHeadHc=[];
            this.tableHeadHs=[];
            if(this.pm.GJDQ==true){
              this.tableHeadHc.push("GJDQ");
              this.tableHeadHs.push('GJDQ_DESC')
            }
            if(this.pm.JZZT==true){
              this.tableHeadHc.push("JZZT");
              this.tableHeadHs.push('JZZT_DESC')
            }
            if(this.pm.JZD_ZRQ==true){
              this.tableHeadHc.push("JZD_ZRQ");
              this.tableHeadHs.push('JZD_ZRQ')
            }
            if(this.pm.JZD_PCS==true){
              this.tableHeadHc.push("JZD_PCS");
              this.tableHeadHs.push('JZD_PCS')
            }
            if(this.pm.SFDM==true){
              this.tableHeadHc.push("SFDM");
              this.tableHeadHs.push('SFDM_DESC')
            }
            if(this.pm.QZZL==true){
              this.tableHeadHc.push("QZZL");
              this.tableHeadHs.push('QZZL_DESC')
            }
            if(this.pm.FWCS==true){
              this.tableHeadHc.push("FWCS");
              this.tableHeadHs.push('FWCS')
            }
            if(this.pm.ZJZL==true){
              this.tableHeadHc.push("ZJZL");
              this.tableHeadHs.push('ZJZL_DESC')
            }
            if(this.pm.XB==true){
              this.tableHeadHc.push("XB");
              this.tableHeadHs.push('XB_DESC')
            }
          let p = {
            "currentPage": currentPage,
            "showCount": showCount,
            "pd": pd,
            "groupList":this.tableHeadHc,
          };

          this.$api.post(this.Global.aport5+'/changZhuController/getCount', p,
            r => {
              this.tableData = r.data.resultList;
              this.TotalResult = r.data.totalResult;
              if(r.data.isFenLei==true){//统计列表
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
                var url = this.Global.aport5 + "/changZhuController/getResultListByParams";
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
          this.rybh=i.RYBH;
          this.type=3;
          this.czDialogVisible = true;
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
