<template lang="html">
  <!-- 临住登记变化量 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">时间范围：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.begin" format="yyyy-MM-dd HH:ss:mm"
                       type="datetime" size="small" value-format="yyyyMMddHHssmm"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.end" format="yyyy-MM-dd HH:ss:mm"
                        type="datetime" size="small" value-format="yyyyMMddHHssmm"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">证件种类：</span>
                    <el-select v-model="pd.ZJZL" multiple  :multiple-limit="3"   collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.zjzl"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">签证种类：</span>
                    <el-select v-model="pd.QZZl" multiple :multiple-limit="3"   collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.qzzl"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJDQ" multiple :multiple-limit="3"   collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.gjdq"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">停留事由：</span>
                    <el-select v-model="pd.JLSY" multiple :multiple-limit="3"  collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.rjsy"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">投宿于：</span>
                    <el-select v-model="pd.LB_DJDW" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="1" label="1 - 旅馆">
                      </el-option>
                      <el-option value="0" label="0 - 派出所">
                      </el-option>
                      <el-option value="2" label="2 - 其他">
                      </el-option>
                    </el-select>
                </el-col>

                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">所属分局：</span>
                    <el-select v-model="pd.LRDW_Like" multiple :multiple-limit="3" @change="getPCS(pd.LRDW_Like)"  collapse-tags  filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input"  style="width:58%!important; margin-right:10px;">
                      <el-option
                        v-for="item in fjlist"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                    <el-checkbox v-model="checkedfj"  @change="getRadiofj(checkedfj)">包含</el-checkbox>
                    <!-- <el-radio v-model="pd.LRDW_BH_Like" label="0" @change="getRadio(0)" style="width:50px;">包含</el-radio> -->
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">派出所：</span>
                    <el-select v-model="pd.LRDW" multiple :multiple-limit="3"  collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input" style="width:58%!important; margin-right:10px;">
                      <el-option
                        v-for="item in pcslist"
                        :key="item.dm"
                        :label="item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                    <el-checkbox v-model="checkedpcs"  @change="getRadiopcs(checkedpcs)">包含</el-checkbox>
                      <!-- <el-radio v-model="pd.LRDW_BH" label="0" @change="getRadio(1)" style="width:50px;">包含</el-radio> -->
                </el-col>
                <el-col  :sm="24" :md="12" :lg="24"  class="input-item">
                    <span class="input-text" style="width:11%!important">旅馆名称：</span>
                    <el-select v-model="pd.DJDWDM" multiple :multiple-limit="3"  collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input" style="width:85%!important">
                      <el-option
                        v-for="item in $store.state.zsbg"
                        :key="item.dm"
                        :label="item.mc"
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
      <div class="ak-tabs">
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==0}" @click="base">
          图表
        </div>
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==1}" @click="base1">
          列表
        </div>
      </div>
          <div class="ak-tab-pane">
            <div v-show="page==0">
          <div class = "chart" style="width:100%">
            <div id = "echarts" style = "width: 100%;height: 400px"></div>
          </div>
          </div>
              <div v-show="page==1">
                <el-table
                     :data="tableData"
                     border
                     style="width: 100%"
                     >
                     <el-table-column
                       prop="AJBH"
                       label="英文姓名">
                     </el-table-column>
                     <el-table-column
                       prop="XM"
                       label="中文姓名">
                     </el-table-column>
                     <el-table-column
                       prop="XBMC"
                       label="性别">
                     </el-table-column>
                     <el-table-column
                       prop="CSRQ"
                       label="国家地区">
                     </el-table-column>
                     <el-table-column
                       prop="HZHM"
                       label="出生日期">
                     </el-table-column>
                     <el-table-column
                       prop="GJDQMC"
                       label="证件种类">
                     </el-table-column>
                     <el-table-column
                       prop="ZCRQ"
                       label="证件号码">
                     </el-table-column>
                     <el-table-column
                       prop="ZCRQ"
                       label="签证种类">
                     </el-table-column>
                     <el-table-column
                       prop="ZCRQ"
                       label="签证号码">
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
    </div>
  </div>
</template>
<script scoped>
import echarts from 'echarts'
 export default {
  data() {
    return {
      page:0,
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd:{LRRQ_DateRange:{},LRDW_BH_Like:'0',LRDW_BH:'0',DJDWXZQH:'3201'},
      pd0:{},
      fjlist:[],
      pcslist:[],
      checkedfj:true,
      checkedpcs:true,
      tableData:[],
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      options:this.pl.options,
      dataname:[],
      rr:0,
    }
  },
  mounted(){
    this.$store.dispatch("getGjdq");
    this.$store.dispatch("getZjzl");
    this.$store.dispatch("getQzzl");
    this.$store.dispatch("getPcs");
    this.$store.dispatch("getRjsy");
    this.$store.dispatch("getZsbg");
    this.getFJ();
    this.getList();
  },
  methods:{
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
    base() {
      this.page = 0;
    },
    base1() {
      this.page = 1;
    },
    getFJ(){
      let p={
        "operatorId":this.$store.state.uid,
        "operatorNm":this.$store.state.uname
      };
      this.$api.post(this.Global.aport2+'/data_report/selectSsfjDm', p,
        r => {
          this.fjlist = r.data.SSFJ;
        })
    },
    getRadiofj(n){
      if(n==true){
        this.pd.LRDW_BH_Like='0'
      }
      else if (n==false) {
        this.pd.LRDW_BH_Like='1'
      }
    },
    getRadiopcs(n){
      if(n==true){
        this.pd.LRDW_BH='0'
      }else if(n==false){
        this.pd.LRDW_BH='1'
      }
    },
    getPCS(arr){
      let p={
        "fjdmList":arr
      }
      this.$api.post(this.Global.aport3+'/data_report/selectPcsDm',p,
       r=>{
         if(r.success){
           this.pcslist = r.data.PCS;
         }
       })
    },

    getList(){
      this.pd.LRRQ_DateRange.begin=this.pd0.begin;
      this.pd.LRRQ_DateRange.end=this.pd0.end;
      let p = {
        "pd": this.pd
      };
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getCountByParam', p,
        r => {
            console.log('====',r.data);
            this.drawLine("",r.data.合计.date,r.data.合计.count);
        })

    },
    //折线图
    drawLine(dataname,ydata,count){
      this.lineChart = echarts.init(document.getElementById('echarts'));
      window.onresize = echarts.init(document.getElementById('echarts')).resize;
      let that = this;
      var colors = ['#5793f3', '#d14a61', '#675bba'];
              // 折线图初始化
           this.lineChart.setOption({
             color: colors,

      tooltip: {
          trigger: 'none',
          axisPointer: {
              type: 'cross'
          }
      },
      legend: {
          data:dataname
      },
      grid: {
          top: 70,
          bottom: 50
      },
      xAxis: [
          {
              type: 'category',
              axisTick: {
                  alignWithLabel: true
              },
              axisLine: {
                  onZero: false,
                  lineStyle: {
                      color: colors[1]
                  }
              },
              data:ydata
              // data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
          },
          {
              type: 'category',
              axisTick: {
                  alignWithLabel: true
              },
              axisLine: {
                  onZero: false,
                  lineStyle: {
                      color: colors[0]
                  }
              },
            //  data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
          },
      ],
      yAxis: [
          {
              type: 'value'
          }
      ],
      series: [
        {
            name:'',
            type:'line',
            xAxisIndex: 1,
            smooth: true,
            data:count
          //  data: [2.9, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
      ]
           })
      },
  }
}
</script>
