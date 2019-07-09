<template lang="html">
  <!-- 留学生预警 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">中文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">预警时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginBJSJ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endBJSJ" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJ" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.gjdq"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM" class="input-input"></el-input>
                </el-col>

                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">处理状态：</span>
                  <el-select v-model="pd.CLZT" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.clzt"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  @click="getList(CurrentPage,pageSize,pd)">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
       <div class="yylbt mb-15">预警信息列表</div>

      <el-table
           :data="tableData"
           border
           :highlight-current-row="true"
           style="width: 100%">
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
             prop="ZJHM"
             label="证件号码">
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
             prop="BJSJ"
             label="预警时间">
           </el-table-column>
           <el-table-column
             prop="CLZT_DESC"
             label="处理状态">
           </el-table-column>
           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit-outline" @click="getEdit(scope.row)"></el-button>
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
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="TotalResult">
        </el-pagination>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {BJSJ_DateRange:{begin:'',end:''}},
      pd0:{},
      options: this.pl.ps,
      tableData: [],
      type:'',
      tabList:[],
    }
  },
  activated(){
    this.type=this.$route.query.type;
    this.pd={BJSJ_DateRange:{begin:'',end:''}};
    this.pd0={};

     if(this.type!=undefined){
       this.$store.commit('getType',this.type)
       this.getMXLX(this.type);
     }else {
       this.getMX(this.$store.state.type);
     }
     this.Global.indexstate=1;
  },
  mounted() {

    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getClzt');
  },
  methods: {
    getMXLX(type){

      switch (parseInt(type)) {
      case 0:
          this.pd.MXLX="LXS_SWLZYJ";//留学生市外临住预警
          break;
      case 1:
        this.pd.MXLX="LXS_SKYJ";//留学生涉恐预警
        break;
      case 2:
       this.pd.MXLX="LXS_CRJTX";//留学生出入境提醒
        break;
      case 3:
        this.pd.MXLX="LZ_HC";//临住核查预警
        break;
      case 4:
          this.pd.MXLX="CZ_NMYJ";//难民
          break;
      case 5:
          this.pd.MXLX="BKYJ";//布控预警
          break;
      case 6:
          this.pd.MXLX="LXS_WBDYJ";//留学生录取未报到预警
          break;
      case 7:
          this.pd.MXLX="QZ_HCYJ";//受理、签发信息核查预警
          break;
      case 8:
          this.pd.MXLX="ASJ_SKGJRY";//涉恐国家人员预警
          break;
      default:
         break;
       }

       console.log('this.pd.MXLX',this.pd.MXLX);
      if(this.pd.MXLX!=undefined){
       this.getList(this.CurrentPage, this.pageSize, this.pd);
       }
    },
    getMX(mm){
      console.log('this.Global.tabLists',this.Global.tabLists);
      this.tabList=this.Global.tabLists;
      if(this.Global.tabLists==undefined){
        this.close1(0);
      }else {
        this.close1(this.Global.tabLists.length-1);
      }
      switch (mm) {
      case '0':
          //留学生市外临住预警
          this.$router.push({name:'LXSSWLZ'});
          break;
       case '1':
       //留学生涉恐预警
       this.$router.push({name:'LXSSKYJ'});
        break;
      case '2':
       //留学生出入境提醒
       this.$router.push({name:'LXSCRJYJ'});
        break;
      case '3':
          //临住核查预警
          this.$router.push({name:'LZHCYJ'});
        break;
      case '4':
         //难民
          this.$router.push({name:'NMXQPHZYJ'});
          break;
      case '5':
         //布控预警
           this.$router.push({name:'ZBKYJ'});
          break;
      case '6':
          //留学生录取未报到预警
          this.$router.push({name:'LXSWBDYJ'});
          break;
      case '7':
           //受理、签发信息核查预警
           this.$router.push({name:'SLQFXXYJ'});
          break;
      case '8':
          //涉恐国家人员预警
          this.$router.push({name:'SKGJRYXXYJ'});
          break;
      default:
         break;
       }

    },
    tabClick(i){
      console.log(i)
      this.$router.push({name:i.name})
    },
    close1(index) {
      console.log('index',index);
      this.tabList.splice(index, 1);
      if (index > 0) {
        this.tabClick(this.tabList[index - 1])
      }
      if (index == 0) {
        if (this.tabList.length != 0) {
          this.tabClick(this.tabList[index])
        } else {
          this.$router.push({name:'Home'})
          this.routeList=[]
        }

      }
    },
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
    getList(currentPage, showCount, pd) {

      this.pd.BJSJ_DateRange.begin=this.pd0.beginBJSJ;
      this.pd.BJSJ_DateRange.end=this.pd0.endBJSJ;

      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      this.$api.post(this.Global.aport4+'/warningInfoController/getInfoListByMxLx1', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
    getEdit(n){

      if(this.type==4){
      this.$router.push({name:'NMXQPHZYJ_XQ',query:{row:n}});
      }else {
      this.$router.push({name:'LXSXXGLYJ_XQ',query:{row:n}});
      }
    },
    getXM(zw,yw){

      if(zw!=undefined && yw!=undefined){
        return yw+"("+zw+")";
      }else {
        if(zw!=undefined){
          return zw;
        }
        if(yw!=undefined){
          return yw;
        }
      }
    },
  }
}
</script>
<style scoped>

</style>
