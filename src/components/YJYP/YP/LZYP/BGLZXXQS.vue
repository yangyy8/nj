<template lang="html">
  <!-- 宾馆临住信息趋势 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">时间范围：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                        v-model="pd0.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">证件种类：</span>
                    <el-select v-model="pd.ZJZL" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.zjzl"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">签证种类：</span>
                    <el-select v-model="pd.QZZl" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.qzzl"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
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
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">停留事由：</span>
                    <el-select v-model="pd.JLSY" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.rjsy"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
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
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
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
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">旅馆名称：</span>
                    <el-select v-model="pd.DJDWDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.zsbg"
                        :key="item.dm"
                        :label="item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <!-- <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">投宿于：</span>
                    <el-select v-model="pd.LB_DJDW" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="1" label="1 - 社会面">
                      </el-option>
                      <el-option value="2" label="2 - 旅馆">
                      </el-option>
                    </el-select>
                </el-col> -->
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  @click="getList(CurrentPage,pageSize,pd)">查询</el-button>
        </el-col>
      </el-row>
    </div>

    <div class="yycontent">
      <div class = "chart" style="width:100%">
        <div id = "echarts" style = "width: 100%;height: 400px"></div>
      </div>
    </div>
    <el-dialog title="列表" :visible.sync="listDialogVisible"  width="640px">
      <el-table
         :data="tableData"
         border
         style="width: 100%">
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
         <el-table-column
           label="操作">
           <template slot-scope="scope">
             <el-button type="text"  class="a-btn" title="详情" size="mini" icon="el-icon-tickets" @click="details(scope.row)"></el-button>
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
    </el-dialog>
  </div>
</template>
<script scoped>
import echarts from 'echarts'
 export default {
  data() {
    return {
      listDialogVisible:false,
      fjlist:[],
      pcslist:[],
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd:{LRRQ_DateRange:{},LRDW_BH_Like:'0',LRDW_BH:'0',DJDWXZQH:'3201',LB_DJDW:'1'},
      pd0:{},
      checkedfj:true,
      checkedpcs:true,
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      options: [{
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
    }
  },
  mounted(){
    this.$store.dispatch("getGjdq");
    this.$store.dispatch("getZjzl");
    this.$store.dispatch("getQzzl");
    this.$store.dispatch("getPcs");
    this.$store.dispatch("getRjsy");
    this.$store.dispatch("getZsbg");
    this.getList()
  },
  methods:{
    pageSizeChange(val) {
      this.pageSize=val;
      // this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      // this.getList(this.CurrentPage, this.pageSize, this.pd);
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
    getList(){
      this.pd.LRRQ_DateRange.begin=this.pd0.begin;
      this.pd.LRRQ_DateRange.end=this.pd0.end;
      let p = {
        "pd": this.pd
      };
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getCountByParam', p,
        r => {
            console.log('====',r.data);
            this.drawLine(r.data.legend,r.data.header,r.data.series);
        })
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
    //折线图
    drawLine(dataname,ydata,series){
      this.lineChart = echarts.init(document.getElementById('echarts'));
      window.onresize = echarts.init(document.getElementById('echarts')).resize;
      let that = this;
      var colors = ['#5793f3', '#d14a61', '#675bba'];
              // 折线图初始化
       that.lineChart.setOption({
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

                  data: ydata
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
                  data: ydata
              },
          ],
          yAxis: [
              {
                  type: 'value'
              }
          ],
          series: series
       })
       that.lineChart.on('click',function(params){
         console.log(params);
         let p={};
         p=Object.assign({}, that.pd);
         if(p.hasOwnProperty('LRDW_BH_Like')){delete p.LRDW_BH_Like};
         if(p.hasOwnProperty('LRDW_BH')){delete p.LRDW_BH};
         p.LRRQ_DateRange={'begin':that.pd0.begin,'end':that.pd0.end};
         p.HEADER=ydata;
         p.TIME=params.name;
         p.DW=params.seriesName;
         console.log('ppppp',p,that.pd);
         that.page=1;
         that.detailOperion=true;
         that.$api.post(that.Global.aport4+'/eS_LZ_LZXXController/getLzListByParams',p,
          r =>{
            if(r.success){
              that.tableData=r.data.resultList;
              that.TotalResult=r.data.totalResult;
              that.listDialogVisible=true;
            }
          })
       })
      this.lineChart.resize()
   },
  }
}
</script>
