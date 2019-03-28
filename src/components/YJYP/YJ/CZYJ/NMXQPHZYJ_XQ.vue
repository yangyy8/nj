<template lang="html">
  <div class="yymain">
    <div class="yycontent" style="margin-top: 0px!important;">
      <div class="mb-15">
        <div class="yylbt mb-15">人员基本信息</div>
        <el-row type="flex" class="yyf">
         <el-col :span="20" class="stu-left">
           <el-row  class="stu-row2">
             <el-col :span="8" class="stu-col-row2">
               <span>案卷编号：</span>
                  {{baseData.AJBH}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>登记日期：</span>
                  {{baseData.ZCRQ}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>人数：</span>
                  {{baseData.RS}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>姓名：</span>
                  {{baseData.XM}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span >性别：</span>
                  {{baseData.XB}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>出生日期：</span>
                  {{baseData.CSRQ}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>护照号：</span>
                  {{baseData.HZHM}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>入签证件类型：</span>
                  {{baseData.RJQZLX}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>身份：</span>
                 {{baseData.SF}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>邮箱地址：</span>
               {{baseData.YXDZ}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>省：</span>
               {{baseData.SHENG}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>城市：</span>
               {{baseData.CS}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>电话号码：</span>
                 {{baseData.DHHM}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>详细地址：</span>
               {{baseData.XXDZ}}
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span></span>
             </el-col>
           </el-row>
         </el-col>
         <el-col :span="4" class="stu-right2">
           <el-button type="primary" class="mb-5" size="small" @click="chuli">处理</el-button>
           <el-button type="warning" class="m0" size="small" @click="$router.go(-1)">返回</el-button>
         </el-col>
        </el-row>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">常住居住地信息</div>
        <el-table
          :data="tableData1"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
          prop="RYBH"
          label="人员编号">
          </el-table-column>
          <el-table-column
          prop="XXDZ"
          label="详细地址">
          </el-table-column>
          <el-table-column
          prop="RZFS"
          label="入住方式">
          </el-table-column>
          <el-table-column
          prop="LRRQ"
          label="录入日期">
          </el-table-column>
          <!-- <el-table-column
          prop="address"
          label="详细地址">
          </el-table-column> -->
          <el-table-column
          prop="ZT_JZZT"
          label="居住状态类型">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="openTc('常住居住地信息',0,scope.row.DTID)"></el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">出入境记录表</div>
        <el-table
          :data="tableData2"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
          prop="RYBH"
          label="人员编号">
          </el-table-column>
          <el-table-column
          prop="NAME"
          label="人员姓名">
          </el-table-column>
          <el-table-column
          prop="DESTINATION"
          label="前往地">
          </el-table-column>
          <el-table-column
          prop="TRAFFICTOOL"
          label="交通工具">
          </el-table-column>
          <el-table-column
          prop="IOSTRING"
          label="出入境日期">
          </el-table-column>
          <el-table-column
          prop="IOTIME"
          label="出入境时间">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="openTc('出入境记录表',1,scope.row.RYBH)"></el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">警综接警信息</div>
        <el-table
          :data="tableData3"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
          prop="rybh"
          label="人员编号">
          </el-table-column>
          <el-table-column
          prop="bjdh"
          label="接警报警电话">
          </el-table-column>
          <el-table-column
          prop="bjdhsj"
          label="接警报警时间">
          </el-table-column>
          <el-table-column
          prop="bjlx"
          label="接警报警类型">
          </el-table-column>
          <el-table-column
          prop="bjr"
          label="接警报警人">
          </el-table-column>
          <el-table-column
          prop="bjrxb"
          label="接警报警人性别">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="openTc('警综接警信息',2,scope.row.dtid)"></el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">警综处警信息</div>
        <el-table
          :data="tableData4"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
          prop="ajsldw"
          label="处警案件受理单位">
          </el-table-column>
          <el-table-column
          prop="ajslr"
          label="处警案件受理人">
          </el-table-column>
          <el-table-column
          prop="bzdw"
          label="处警标注单位">
          </el-table-column>
          <el-table-column
          prop="bzr"
          label="处境标注人">
          </el-table-column>
          <el-table-column
          prop="bzrxm"
          label="处境标注人姓名">
          </el-table-column>
          <el-table-column
          prop="bzsj"
          label="处境标注时间">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="openTc('警综处警信息',3,scope.row.cjbh)"></el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">警综涉警信息</div>
        <el-table
          :data="tableData5"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
          prop="djdw"
          label="涉警人员登记单位">
          </el-table-column>
          <el-table-column
          prop="djdwmc"
          label="涉警人员登记单位名称">
          </el-table-column>
          <el-table-column
          prop="djrxm"
          label="涉警人员登记人姓名">
          </el-table-column>
          <el-table-column
          prop="djsj"
          label="涉警人员登记时间">
          </el-table-column>
          <el-table-column
          prop="xgdw"
          label="涉警人员修改单位">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="openTc('警综涉警信息',4,scope.row.jlbh)"></el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">车辆信息</div>
        <el-table
          :data="tableData1"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
          prop="date"
          label="涉警人员登记单位">
          </el-table-column>
          <el-table-column
          prop="name"
          label="涉警人员登记单位名称">
          </el-table-column>
          <el-table-column
          prop="address"
          label="涉警人员登记人姓名">
          </el-table-column>
          <el-table-column
          prop="address"
          label="涉警人员登记时间">
          </el-table-column>
          <el-table-column
          prop="address"
          label="涉警人员修改单位">
          </el-table-column>
          <!-- <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="openTc('车辆信息')"></el-button>
          </template>
          </el-table-column> -->
        </el-table>
      </div>
    </div>
    <el-dialog :title="xtitle" :visible.sync="detailsDialogVisible" width="1100px">
      <XQTC :type="xtype" :xid="xid"></XQTC>
    </el-dialog>
  </div>
</template>
<script>
import XQTC from '../../../GYZJ/XQ_TC'
export default {
  components:{XQTC},
  data() {
    return {
      rybh:'',
      baseData:{},
      tableData1:this.pl.tableData,
      tableData2:this.pl.tableData,
      tableData3:this.pl.tableData,
      tableData4:this.pl.tableData,
      tableData5:this.pl.tableData,
      pd:{},
      xtitle:"",
      detailsDialogVisible:false,
      xtype:0,
      xid:'',
    }
  },
  activated(){
    this.rybh=this.$route.query.rybh;
    this.getList('/refugeesWarningController/getRefugeesPersBasicInfo',0);
    this.getList('/refugeesWarningController/getPermanentResidenceInfo',1);
    this.getList('/refugeesWarningController/getMovementRecord',2);
    this.getList('/educationParController/getJZJJXXInfo',3);
    this.getList('/educationParController/getJZCJXXInfo',4);
    this.getList('/educationParController/getSJXXInfo',5);

  },
  mounted() {

  },
  methods: {
    openTc(title,type,id){
      this.xtitle=title;
      this.xtype=type;
      this.xid=id;
      this.detailsDialogVisible=true;
      console.log(title,type)
    },
    getList(url,type){
      let p = {
        "rybh": this.rybh
      };
      this.$api.post(url, p,
        r => {
          if(type==0){
            this.baseData=r.data
          }else if(type==1){
            this.tableData1=r.data
          }else if(type==2){
            this.tableData2=r.data
          }else if(type==3){
            this.tableData3=r.data
          }else if(type==4){
            this.tableData4=r.data
          }
        })
    },
    chuli(){
      let p = {
        "yjid": currentPage,
        "cljg": showCount,
        "cldw": pd,
        "clr":clr,
        "shjg":shjg,
      };
      this.$api.post('/educationParController/saveWarningInfo', p,
        r => {

        })
    }
  }

}
</script>
<style scoped>

</style>
