<template lang="html">
  <div class="yymain tshu">
    <div class="yycontent" style="margin-top: 0px!important;">
      <div class="mb-15">
        <div class="yylbt mb-15">地址信息</div>
        <el-row type="flex" class="yyf">
         <el-col :span="24" class="stu-left">
           <el-row  class="stu-row2">
             <el-col :span="8" class="stu-col-row2">
               <span>行政区划：</span>
                  {{baseData.XZQHMC}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>派出所：</span>
                  {{baseData.PCS_DESC}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>警务责任区：</span>
                  {{baseData.JWZRQ}}
             </el-col>
             <el-col :span="24" class="stu-col-row2">
               <span>详情地址：</span>
                  {{baseData.XXDZDESC}}
             </el-col>
           </el-row>
         </el-col>
        </el-row>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">临住信息</div>
        <el-row type="flex">
          <el-col :span="22" class="br pr-20">
            <el-row align="center"  :gutter="2">
              <el-col  :sm="24" :md="12" :lg="12"   class="input-item">
                 <span class="input-text">中文姓名：</span>
                 <el-input placeholder="请输入内容" size="small" v-model="pd.ZWXM" class="input-input"></el-input>
              </el-col>
              <el-col  :sm="24" :md="12" :lg="12"   class="input-item">
                 <span class="input-text">英文姓名：</span>
                 <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM" class="input-input"></el-input>
              </el-col>
                  <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                      <span class="input-text">国家地区：</span>
                      <el-select v-model="pd.GJDQ" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                        <el-option
                          v-for="item in $store.state.gjdq"
                          :key="item.dm"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col  :sm="24" :md="12" :lg="12"   class="input-item">
                     <span class="input-text">证件号码：</span>
                     <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM" class="input-input"></el-input>
                  </el-col>

            </el-row>
           </el-col>
          <el-col :span="2" class="down-btn-area">
            <el-button type="success" size="small"  @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
          </el-col>
        </el-row>
        <el-table
          :data="tableData1"
          border
          style="width: 100%" class="stu-table mt-10">
          <el-table-column
          prop="ZWXM"
          label="姓名">
          <template slot-scope="scope">
            <span>{{getXM(scope.row.ZWXM,scope.row.YWXM)}}</span>
          </template>
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
          prop="BZHDZMC"
          label="详细地址">
          </el-table-column>
          <el-table-column
          prop="ZJHM"
          label="证件号码">
          </el-table-column>
          <el-table-column
          prop="YXQZ"
          label="证件有效期">
          </el-table-column>
          <el-table-column
          prop="QZZL_DESC"
          label="签证种类">
          </el-table-column>
          <el-table-column
          prop="QZHM"
          label="签证号码">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
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

      <div class="stu-footerd">
        <div class="stu-titled">甄别结果</div>
        <el-row type="flex">
         <el-col :span="20">
           <el-input
             type="textarea"
             :autosize="{ minRows: 3, maxRows: 4}"
             placeholder="甄别说明必须填写原因(不超过100个字符)"
             v-model="pm.CHANGE_RESON"
             :disabled="$route.query.row.SHZT=='0'">
           </el-input>
         </el-col>
         <el-col :span="4"  class="down-btn-area">
           <el-button type="primary"  class="mb-5" size="small" @click="chuli()" v-if="$route.query.row.SHZT!='0'">确定</el-button>
           <el-button type="warning"  class="m0" size="small" @click="$router.go(-1)">返回</el-button>
         </el-col>
       </el-row>
         <el-row type="flex">
           <el-col :span="24" class="czfont">处理人：{{withname}}</el-col>
         </el-row>
      </div>
    </div>

  <el-dialog title="案件信息详情" :visible.sync="lzxxDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
       <LZXX :type="type" :xid="xid"></LZXX>
       <div v-if='flag'>
       <div class="yylbt mt-10">案件信息</div>
       <el-table
         :data="tableData2"
         border
         style="width: 100%" class="stu-table">
         <el-table-column
         prop="ASJBH"
         label="案事件编号">
         </el-table-column>
         <el-table-column
         prop="AJLB"
         label="案件类别">
         </el-table-column>
         <el-table-column
         prop="AJZT"
         label="案件状态">
         </el-table-column>
         <el-table-column
         label="操作" width="80">
         <template slot-scope="scope">
         <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
         </template>
         </el-table-column>
       </el-table>

      </div>
       <div slot="footer" class="dialog-footer" v-else>
         <el-button @click="lzxxDialogVisible = false" size="small">取 消</el-button>
       </div>
  </el-dialog>
  </div>

</template>
<script>
import LZXX from '../../../common/lzxx_xq'
export default {
  components:{LZXX},
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      tableData1:[],
      tableData2:[],
      lzxxDialogVisible:false,
      row:{},
      type:0,
      xid:'',
      flag:false,
      baseData:{},
      withname:'',
      pd:{},
      pp:{BZHDZID:''},
      pm:{},
      pcl:{},
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
      detailsDialogVisible:false,
      form:{},
    }
  },
  activated(){
    this.row=this.$route.query.row;
    this.baseData=this.row;
    this.getcwzxx(this.row.BZHDZID);
    this.getList(this.CurrentPage, this.pageSize, this.pd);
    this.type=this.$route.query.type;

    if(this.type==1){
      this.flag=true;
    }else {
      this.flag=false;
    }
  },
  mounted() {
     this.withname=this.$store.state.uname;
  },
  methods: {
    pageSizeChange(val) {
      this.pageSize=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
      console.log(`当前页: ${val}`);
    },
    getcwzxx(n){
    this.pp.BZHDZID=n;
      let p = {
        "pd": this.pp
      };
      this.$api.post(this.Global.aport4+'/rentingHouseHiddenDangerWarning/getBZHDZByBZHDZID', p,
        r => {
              this.baseData.XXDZDESC=r.data.resultList.YW_BZHDZ.XXDZDESC;
        });
    },
    getList(currentPage, showCount, pd){
      pd.DZDTID=this.row.BZHDZID;
      console.log('this.row.YJID',this.row.YJID);
      pd.ZSRQ=this.row.ZSRQ;
      let p = {
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd,
      };
      this.$api.post(this.Global.aport4+'/rentingHouseHiddenDangerWarning/getLinZhuListByDZDTIDAndZSRQ', p,
        r => {
            this.tableData1=r.data.resultList;
            this.TotalResult=r.data.totalResult;
        });
    },
    chuli(){

    if(this.pm.CHANGE_RESON=="" || this.pm.CHANGE_RESON==undefined)
    {
      this.$alert('甄别结果不能为空！', '提示', {
        confirmButtonText: '确定',
      });
      return;
    }
    this.pcl.YJID=this.row.YJID;
    this.pcl.CLJG=this.pm.CHANGE_RESON;
    this.pcl.CLDW=this.$store.state.orgname;
    this.pcl.CLR=this.withname;
      let p = {
        "pd": this.pcl
      };
      this.$api.post(this.Global.aport4+'/fangWuWarningInfoController/saveCLJG', p,
        r => {
           if(r.success){
             this.$message({
               message: '保存成功',
               type: 'success'
             });

           }
           this.$router.go(-1)
        })
    },
    details(n)
    {
      this.xid=n.DTID;
      console.log('this.xid',n.DTID);
      this.lzxxDialogVisible=true;

      if(this.type==1){//1是重点出租屋
        let p = {
          "ZJHM": this.row.ZJHM,
          "GJDQ": this.pm.CHANGE_RESON,
          "BZHDZMC": this.baseData.XXDZDESC,
        };
        this.$api.post(this.Global.aport4+'/focusRetingHouseWarningController/getAnJianInfoByDiZhiAndRYXX', p,
          r => {
             if(r.success){
                  this.tableData2=r.data;

             }

          })
      }
    },
    getXM(zw,yw){

      if(zw!=undefined && yw!=undefined){
        return yw+"("+zw+")";
      }else if(zw!=undefined){
          return zw;
      }
      else {
        return yw;
      }

    },
  }

}
</script>
<style scoped>

</style>
