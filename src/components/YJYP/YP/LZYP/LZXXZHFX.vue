<template lang="html">
      <!-- 临住信息综合分析 -->
      <div class="yymain tshu">
        <div class="yytitle">
          <el-row type="flex">
            <el-col :span="22" class="br pr-20">
              <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="yy-input-text">中文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZWXM" class="yy-input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="yy-input-text">英文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM" class="yy-input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="yy-input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM" class="yy-input-input"></el-input>
                </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                      <span class="yy-input-text">国家地区：</span>
                      <el-select v-model="pd.GJDQ"  multiple collapse-tags filterable clearable default-first-option  placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="item in $store.state.gjdq"
                          :key="item.dm"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                      <span class="yy-input-text">出生日期：</span>
                      <div class="yy-input-input t-flex t-date">
                        <el-date-picker
                           v-model="pd0.beginCSRQ" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyyMMdd"
                           placeholder="开始时间" >
                        </el-date-picker>
                        <span class="septum">-</span>
                        <el-date-picker
                            v-model="pd0.endCSRQ" format="yyyy-MM-dd"
                            type="date" size="small" value-format="yyyyMMdd"
                            placeholder="结束时间" >
                        </el-date-picker>
                     </div>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                       <span class="yy-input-text">年龄：</span>
                       <el-input placeholder="请输入内容" size="small" v-model="pd.nianLing" class="yy-input-input"></el-input>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="yy-input-text">性别：</span>
                      <el-select v-model="pd.XB" placeholder="请选择"  filterable clearable default-first-option size="small" class="yy-input-input">
                        <el-option v-for="item in $store.state.xb"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                       <span class="yy-input-text">所属单位：</span>
                       <el-select v-model="pd.SSDW" placeholder="请选择"  multiple collapse-tags filterable clearable default-first-option   size="small" class="yy-input-input">
                         <el-option v-for="item in $store.state.ssdw"
                          :key="item.dm"
                          :label="item.mc"
                          :value="item.dm"
                         >
                         </el-option>
                       </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="yy-input-text">证件种类：</span>
                      <el-select v-model="pd.ZJZL" placeholder="请选择"   multiple collapse-tags filterable clearable default-first-option   size="small" class="yy-input-input">
                        <el-option v-for="item in $store.state.zjzl"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="yy-input-text">签证种类：</span>
                      <el-select v-model="pd.QZZL" placeholder="请选择"   multiple collapse-tags filterable clearable default-first-option   size="small" class="yy-input-input">
                        <el-option v-for="item in $store.state.rjqzzl"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="yy-input-text">停留事由：</span>
                      <el-select v-model="pd.JLSY" placeholder="请选择"   multiple collapse-tags filterable clearable default-first-option   size="small" class="yy-input-input">
                        <el-option v-for="item in $store.state.rjsy"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                      <span class="yy-input-text">停留有效期：</span>
                      <div class="yy-input-input t-flex t-date">
                        <el-date-picker
                           v-model="pd0.beginTLYXQZ" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyyMMdd"
                           placeholder="开始时间" >
                        </el-date-picker>
                        <span class="septum">-</span>
                        <el-date-picker
                            v-model="pd0.endTLYXQZ" format="yyyy-MM-dd"
                            type="date" size="small" value-format="yyyyMMdd"
                            placeholder="结束时间" >
                        </el-date-picker>
                     </div>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="yy-input-text">住房类型：</span>
                      <el-select v-model="pd.ZFZL" placeholder="请选择"  multiple collapse-tags filterable clearable default-first-option  size="small" class="yy-input-input">
                        <el-option v-for="item in $store.state.zsxz"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="yy-input-text">数据来源：</span>
                      <el-select v-model="pd.SJLY" placeholder="请选择"  filterable clearable default-first-option size="small" class="yy-input-input">
                        <el-option v-for="item in $store.state.sjly"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                      <span class="yy-input-text">入住日期：</span>
                      <div class="yy-input-input t-flex t-date">
                        <el-date-picker
                           v-model="pd0.beginZSRQ" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyyMMdd"
                           placeholder="开始时间" >
                        </el-date-picker>
                        <span class="septum">-</span>
                        <el-date-picker
                            v-model="pd0.endZSRQ" format="yyyy-MM-dd"
                            type="date" size="small" value-format="yyyyMMdd"
                            placeholder="结束时间" >
                        </el-date-picker>
                     </div>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                       <span class="yy-input-text">住宿地址：</span>
                       <el-input placeholder="请输入内容" size="small" v-model="pd.LSDWDZ_Like" class="yy-input-input"></el-input>
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
            <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div> -->
                <el-checkbox label="国家地区" v-model="pm.GJDQ" :disabled="disa"></el-checkbox>
                <el-checkbox label="证件种类" v-model="pm.ZJZL" :disabled="disa"></el-checkbox>
                <el-checkbox label="所属单位" v-model="pm.LRDW" :disabled="disa"></el-checkbox>
                <el-checkbox label="性别" v-model="pm.XB" :disabled="disa"></el-checkbox>
                <el-checkbox label="签证(注)种类" v-model="pm.QZZL" :disabled="disa"></el-checkbox>
                <el-checkbox label="停留事由" v-model="pm.JLSY" :disabled="disa"></el-checkbox>
                <el-checkbox label="十国人员" v-model="pm.SHIGUO" :disabled="disa"></el-checkbox>
                <el-checkbox label="三十一国人员" v-model="pm.SANSHIYIGUO" :disabled="disa"></el-checkbox>
                <el-checkbox label="外国人和四种人分布" v-model="pm.WAIGSIG" :disabled="disa"></el-checkbox>
                <el-checkbox label="住房类型" v-model="pm.ZFZL" :disabled="disa"></el-checkbox>
                <!-- <el-checkbox label="所属责任区" v-model="pm.SSZRQ" :disabled="disa"></el-checkbox> -->
                <el-checkbox label="数据来源" v-model="pm.SJLY" :disabled="disa"></el-checkbox>
                <!-- <el-checkbox label="住宿单位" v-model="pm.DJDWMC" :disabled="disa"></el-checkbox> -->
                <el-checkbox label="住宿地址" v-model="pm.LSDWDZ" :disabled="disa"></el-checkbox>
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
                   :prop="val.props"
                   :label="val.label">
               </el-table-column>
               <el-table-column
                 label="操作" width="100">
                 <template slot-scope="scope">
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'JWRYXX',query:{row:scope.row}})"></el-button>
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
                 prop="YWXM"
                 label="英文姓名">
               </el-table-column>
               <el-table-column
                 prop="ZWXM"
                 label="中文姓名">
               </el-table-column>
               <el-table-column
                 prop="XB_DESC"
                 label="性别">
               </el-table-column>
               <el-table-column
                 prop="GJDQ_DESC"
                 label="国家地区">
               </el-table-column>
               <el-table-column
                 prop="ZJZL_DESC"
                 label="证件种类">
               </el-table-column>
               <el-table-column
                 prop="ZJHM"
                 label="证件号码">
               </el-table-column>
               <!-- <el-table-column
                 prop="YXQZ"
                 label="证件有效期">
               </el-table-column> -->
               <el-table-column
                 prop="QZZL_DESC"
                 label="签证种类">
               </el-table-column>
               <el-table-column
                 prop="QZHM"
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
              :current-page:sync="CurrentPage"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="TotalResult">
            </el-pagination>
          </div>
        </div>
        </div>
     <div class="bj">
        <el-dialog title="临住详情" :visible.sync="detailsDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
            <LZXX :type="type" :xid="xid"></LZXX>
          <div slot="footer" class="dialog-footer">
            <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
          </div>
        </el-dialog>
    </div>

      </div>

    </template>
    <script>
import LZXX from '../../../common/lzxx_xq'
    export default {
        components:{LZXX},
      data() {
        return {
          radio1:'0',
          radio2:'0',
          typet:'1',
          CurrentPage: 1,
          pageSize: 10,
          TotalResult: 0,
          pd: {CSRQ_DateRange:{},
              TLYXQZ_DateRange:{},
              ZSRQ_DateRange:{},},
          pm:{},
          imagess:[],
          imgshow1:false,
          imgshow2:true,
          shm:false,
          lg:false,
          type:1,
          xid:'',
          detailsDialogVisible:false,
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

        if(this.pd0.beginCSRQ!=undefined && this.pd0.endCSRQ!=undefined){

          this.pd.CSRQ_DateRange.begin=this.pd0.beginCSRQ;
          this.pd.CSRQ_DateRange.end=this.pd0.endCSRQ;

        }else if(this.pd0.beginCSRQ==undefined && this.pd0.endCSRQ==undefined){

        }else{
            this.open("出生日期开始时间和结束时间都不能为空！");return ;
        }
        if(this.pd0.beginTLYXQZ!=undefined && this.pd0.endTLYXQZ!=undefined){
          this.pd.TLYXQZ_DateRange.begin=this.pd0.beginTLYXQZ;
          this.pd.TLYXQZ_DateRange.end=this.pd0.endTLYXQZ;
        }else if(this.pd0.beginTLYXQZ==undefined && this.pd0.endTLYXQZ==undefined){}
        else {
            this.open("停留有效期开始时间和结束时间都不能为空！");return ;
        }
        if(this.pd0.beginZSRQ!=undefined && this.pd0.endZSRQ!=undefined){
          this.pd.ZSRQ_DateRange.begin=this.pd0.beginZSRQ;
          this.pd.ZSRQ_DateRange.end=this.pd0.endZSRQ;
        }else if(this.pd0.beginZSRQ==undefined && this.pd0.endZSRQ==undefined){}else {
            this.open("入住日期开始时间和结束时间都不能为空！");return ;
        }
            var list=[];
            if(this.pm.GJDQ==true){
              list.push("GJDQ");
            }
            if(this.pm.WAIGSIG==true){
              list.push("WAIGSIG");
            }
            if(this.pm.QZZL==true){
              list.push("QZZL");
            }
            if(this.pm.JLSY==true){
              list.push("JLSY");
            }
            if(this.pm.SHIGUO==true){
              list.push("SHIGUO");
            }
            if(this.pm.ZFZL==true){
              list.push("ZFZL");
            }
            if(this.pm.LRDW==true){
              list.push("LRDW");
            }
            if(this.pm.XB==true){
              list.push("XB");
            }
            if(this.pm.ZJZL==true){
              list.push("ZJZL");
            }
            if(this.pm.SANSHIYIGUO==true){
              list.push("SANSHIYIGUO");
            }
            if(this.pm.SJLY==true){
              list.push("SJLY");
            }
            if(this.pm.DJDWMC==true){
              list.push("DJDWMC");
            }
            if(this.pm.LSDWDZ==true){
              list.push("LSDWDZ");
            }

          let p = {
            "currentPage": currentPage,
            "showCount": showCount,
            "pd": pd,
            "orderBy":'',
            "orderType":'DESC',
            "groupList":list
          };

          this.$api.post(this.Global.aport5+'/linZhuInfoComprehensiveAnalysisController/getComprehensiveAnalysis', p,
            r => {
              this.tableData = r.data.resultList;
              this.TotalResult = r.data.totalResult;

              if(r.data.isFenLei=="true"){

                this.falg=true;
                console.log('this.tableData[0]',this.tableData[0]);
                let arr=this.tableData[0];

                let itemKey = Object.keys(arr);
                let res = itemKey.filter(function(item,index,array){
                 //元素值，元素的索引，原数组。
                if(item=="WAIGSIG" || item=="SHIGUO" ||item=="SANSHIYIGUO" || item=="LSDWDZ")
                 {
                   return item;

                 }else{
                 return item.indexOf('_DESC')>=0;}
             });
                  console.log('this.tableData[1]',itemKey);
                this.configHeader=[];

                 res.forEach( key => {
                         let headItem = {
                             props : key,
                             label : this.getInfo(key),
                         }

                         this.configHeader.push(headItem)

                 })


                this.allnum=r.data.totalAllResult;

              }else {
                this.falg=false;

                var url = this.Global.aport5 + "/linZhuInfoComprehensiveAnalysisController/getComprehensivePersonList";
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
        getInfo(key){
          switch (key) {
            case 'count_DESC':
              return  "统计数量";
              break;
            case 'GJDQ_DESC':
              return  "国家地区";
              break;
            case 'WAIGSIG':
              return  "外国人和四种人分布";
              break;
            case 'ZJZL_DESC':
              return  "证件种类";
              break;
            case 'QZZL_DESC':
              return  "签证(注)种类";
              break;
            case 'JLSY_DESC':
              return  "停留事由";
              break;
            case 'SHIGUO':
              return  "十国人员";
              break;
            case 'ZFZL_DESC':
              return  "住房类型";
              break;
            case 'LRDW_DESC':
              return  "所属单位";
              break;
            case 'XB_DESC':
              return  "性别";
              break;
            case 'SANSHIYIGUO':
              return  "三十一国人员";
              break;
            case 'SJLY_DESC':
              return  "数据来源";
              break;
            // case 'DJDWMC':
            //   return  "住宿单位";
            //   break;
            case 'LSDWDZ':
              return  "住宿地址";
              break;
            default:
            break;

          }

        },
        details(i) {

          // if(i.LB_LYD==undefined){
          //   this.radio1='0';
          // }
          // if(i.LB_QWD==undefined){
          //   this.radio2='0';
          // }
          // if(i.LB_DJDW==undefined){
          //   this.typet='1';
          //   this.shm=true;
          //   this.lg=false;
          // }else if(i.LB_DJDW=='1'){
          //    this.typet='2';
          //    this.shm=false;
          //    this.lg=true;
          // }else {
          //   this.typet='1';
          //   this.shm=true;
          //   this.lg=false;
          // }
          this.xid=i.DTID;
          this.detailsDialogVisible = true;
          // this.form=i;
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
