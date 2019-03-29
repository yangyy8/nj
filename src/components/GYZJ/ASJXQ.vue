<template lang="html">
  <!-- 留學生信息管理預警详情 -->
  <div class="yymain">
    <div class="yycontent">
      <div class="mb-15">
        <div class="yylbt mb-15">基本信息</div>
        <el-row type="flex" class="yyf">
          <el-col :span="24" class="stu-left">
            <el-row class="stu-row2">
              <el-col :span="6" class="stu-col-row2">
                <span>姓名：</span>
                   {{baseData.YWXM}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span>性别：</span>
                   {{baseData.XB}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span>国家/地区：</span>
                   {{baseData.GJDQ}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span>证件种类：</span>
                   {{baseData.ZJZL}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span >证件有效期：</span>
                   {{baseData.ZJYXQ}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span>签证种类：</span>
                   {{baseData.QZZL}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span>签证号码：</span>
                   {{baseData.QZHM}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span>证件号码：</span>
                   {{baseData.ZJHM}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span>预警时间：</span>
                  {{}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span></span>
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span></span>
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span></span>
              </el-col>
            </el-row>
          </el-col>
          <!-- <el-col :span="4" class="stu-right">
            <el-button type="primary" size="small" @click="$router.push({name:'StuBaseInfo',query:{id:'11',AlarmType:'11'}})">详情</el-button>
          </el-col> -->
        </el-row>
      </div>
      <!--yjType 1.外国人visa  2.持短期签证  4.违临预判  5.临住布控-->
      <!-- <div class="yylbt yt-16">预警原因 <span class="yyf ycolor">出入境过多，签证过期</span></div> -->
      <div class="mb-15" v-if="yjType==1||yjType==2||yjType==5">
        <div class="yylbt mb-15">签证信息</div>
        <el-table
           :data="tableData1"
           border
           style="width: 100%" class="stu-table"
           >
           <el-table-column
             prop="ZJZL"
             label="证件种类">
           </el-table-column>
           <el-table-column
             prop="ZJHM"
             label="证件号码">
           </el-table-column>
           <el-table-column
             prop="QZZL"
             label="签证种类">
           </el-table-column>
           <el-table-column
             prop="QZHM"
             label="签证号码">
           </el-table-column>
           <el-table-column
             prop="QZYXQ"
             label="签证有效期至">
           </el-table-column>
           <el-table-column
             prop="QFD"
             label="签发地">
           </el-table-column>
           <el-table-column
             label="操作" width="80">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
             </template>
           </el-table-column>
         </el-table>
      </div>

      <div class="mb-15" v-if="yjType==2||yjType==4||yjType==5">
        <div class="yylbt mb-15">出入境信息</div>
        <el-table
             :data="tableData2"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="IOSTRING"
               label="出入境日期">
             </el-table-column>
             <el-table-column
               prop="CRJBS"
               label="出入境状态">
             </el-table-column>
             <el-table-column
               prop="IOPORT"
               label="出入境口岸">
             </el-table-column>
             <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
               </template>
             </el-table-column>
         </el-table>
      </div>
      <div class="mb-15" v-if="yjType==1||yjType==4||yjType==5">
        <div class="yylbt mb-15">境外人员住宿登记信息</div>
        <el-table
             :data="tableData3"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="date"
               label="住宿时间">
             </el-table-column>
             <el-table-column
               prop="name"
               label="住宿地址">
             </el-table-column>
             <el-table-column
               prop="address"
               label="拟离开时间">
             </el-table-column>
             <el-table-column
               prop="address"
               label="住宿类型">
             </el-table-column>
             <el-table-column
               prop="address"
               label="登记单位">
             </el-table-column>
         </el-table>
      </div>
      <div class="mb-15" v-if="yjType==1">
        <div class="yylbt mb-15">境外人员常住信息</div>
        <el-table
             :data="tableData4"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="date"
               label="入住时间">
             </el-table-column>
             <el-table-column
               prop="name"
               label="登记地址">
             </el-table-column>
             <el-table-column
               prop="address"
               label="身份">
             </el-table-column>
             <el-table-column
               prop="address"
               label="居留事由">
             </el-table-column>
         </el-table>
      </div>
      <div class="mb-15" v-if="yjType==1">
        <div class="yylbt mb-15">非法就业信息</div>
        <el-table
             :data="tableData5"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="date"
               label="人员编号">
             </el-table-column>
             <el-table-column
               prop="name"
               label="案事件编号">
             </el-table-column>
             <el-table-column
               prop="address"
               label="案件类别">
             </el-table-column>
             <el-table-column
               prop="address"
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
      <div class="mb-15" v-if="yjType==2||yjType==4||yjType==5">
        <div class="yylbt mb-15">交通信息</div>
        <div class="stru-lal">
          高速公路出口信息
        </div>
        <el-table
             :data="tableData6"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="EXITSTATION"
               label="出口站编号">
             </el-table-column>
             <el-table-column
               prop="EXITTIME"
               label="出口日期及时间">
             </el-table-column>
             <el-table-column
               prop="VEHICLECLASS"
               label="车型">
             </el-table-column>
             <el-table-column
               prop="VEHICLEKIND"
               label="车种">
             </el-table-column>
             <el-table-column
               prop="AUTOLICENSE"
               label="牌照">
             </el-table-column>
             <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
               </template>
             </el-table-column>
         </el-table>
        <div class="stru-lal">
         高速公路入口信息
        </div>
        <el-table
           :data="tableData6"
           border
           style="width: 100%" class="stu-table">
           <el-table-column
             prop="ENTRYSTATION"
             label="入口站编号">
           </el-table-column>
           <el-table-column
             prop="ENTRYTIME"
             label="入口日期及时间">
           </el-table-column>
           <el-table-column
             prop="VEHICLECLASS"
             label="车型">
           </el-table-column>
           <el-table-column
             prop="VEHICLEKIND"
             label="车种">
           </el-table-column>
           <el-table-column
             prop="AUTOLICENSE"
             label="牌照">
           </el-table-column>
           <el-table-column
             label="操作" width="80">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
             </template>
           </el-table-column>
        </el-table>
        <div class="stru-lal">
         民航进出港订票信息
        </div>
        <el-table
            :data="tableData6"
            border
            style="width: 100%" class="stu-table">
            <el-table-column
              prop="AIR_SEG_FLT_NBR"
              label="航班号">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_DPT_DT_LCL"
              label="当地出发日期">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_DPT_TM_LCL"
              label="当地出发时间">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_ARRV_DT_LCL"
              label="当地到达日期">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_ARRV_TM_LCL"
              label="当地到达时间">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_DPT_AIRPT_CD"
              label="登机机场代码">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_ARRV_AIRPT_CD"
              label="到达机场代码">
            </el-table-column>
            <el-table-column
              prop="PAS_CHN_NM"
              label="旅客中文名">
            </el-table-column>
            <el-table-column
              label="操作" width="80">
              <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
              </template>
            </el-table-column>
        </el-table>
        <div class="stru-lal">
         民航进出港信息
        </div>
        <el-table
            :data="tableData6"
            border
            style="width: 100%" class="stu-table">
            <el-table-column
              prop="FLT_NUMBER"
              label="航班号">
            </el-table-column>
            <el-table-column
              prop="FLT_DATE"
              label="航班日期">
            </el-table-column>
            <el-table-column
              prop="SEG_DEPT_CODE"
              label="起飞航站">
            </el-table-column>
            <el-table-column
              prop="SEG_DEST_CODE"
              label="到达航站">
            </el-table-column>
            <el-table-column
              prop="PDT_FIRSTNAME"
              label="旅客名">
            </el-table-column>
            </el-table-column>
            <el-table-column
              label="操作" width="80">
              <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
              </template>
            </el-table-column>
        </el-table>
        <div class="stru-lal">
         铁路订票信息
        </div>
        <el-table
            :data="tableData6"
            border
            style="width: 100%" class="stu-table">
            <el-table-column
              prop="XM"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="ZJHM"
              label="证件号码">
            </el-table-column>
            <el-table-column
              prop="TRAIN_NO"
              label="列车车次">
            </el-table-column>
            <el-table-column
              prop="STARTTIME"
              label="发车时间">
            </el-table-column>
            <el-table-column
              prop="FROM_STATION"
              label="发车车站">
            </el-table-column>
            <el-table-column
              label="操作" width="80">
              <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
              </template>
            </el-table-column>
        </el-table>
      </div>
    </div>

   <div class="stu-footer">
     <div class="stu-title">甄别结果</div>
     <el-row type="flex" class="mb-15">
      <el-col :span="20">
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 3}"
          placeholder="甄别说明必须填写原因(不超过100个字符)"
          v-model="pd.CHANGE_RESON">
        </el-input>
      </el-col>
      <el-col :span="4"  class="down-btn-area">
        <el-button type="primary" class="mb-5" size="small" @click="">确定</el-button>
        <el-button type="warning" class="m0" size="small" @click="">返回</el-button>
      </el-col>
    </el-row>
    <div class="">
      处理人: {{$store.state.uname}}
    </div>
   </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      yjType:0,
      baseData:{},
      tableData1:this.pl.tableData,
      tableData2:this.pl.tableData,
      tableData3:this.pl.tableData,
      tableData4:this.pl.tableData,
      tableData5:this.pl.tableData,
      tableData6:this.pl.tableData,
      pd:{},

    }
  },
  activated(){
    this.yjType=this.$route.query.yjType;
    this.rybh=this.$route.query.rybh;
    // this.yjid=this.$route.query.yjid;

    this.getList('/illegalEmploymentWarningController/getPersonInfoByRybh',0);
    this.getList('/illegalEmploymentWarningController/getQianZhengInfoByRybh',1);
    this.getList('/illegalEmploymentWarningController/getChuRuJingListByRybh',2);
    // this.getList('/educationParController/getJZJJXXInfo',3);
    // this.getList('/educationParController/getJZCJXXInfo',4);
    this.getList('/illegalEmploymentWarningController/getJiaoTongListByRybh',6);

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
        "yjid": this.yjid,
        "cljg": this.form.cljg,
        "cldw": '',
        "clr":'',
        "shjg":'',
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
