<template lang="html">
  <!-- 202表突发增量预警 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">时间范围：</span>
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
                    <span class="input-text">所在区：</span>
                    <el-select v-model="pd.GJ" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.gjdq"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">院校：</span>
                    <el-select v-model="pd.RJSY" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.rjsy"
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
      <div class = "chart" style="width:100%">
        <div id = "echarts" style = "width: 100%;height: 400px"></div>
      </div></div>
  </div>
</template>
<script scoped>
import echarts from 'echarts'
 export default {
  data() {
    return {
      pd:{},
      pd0:{},
    }
  },
  mounted(){
  this.drawLine();
  },
  methods:{
    drawLine(){
      this.lineChart = echarts.init(document.getElementById('echarts'));
      window.onresize = echarts.init(document.getElementById('echarts')).resize;
      let that = this;

         this.lineChart.setOption({

           legend: {},
          tooltip: {},
          dataset: {
              source: [
                  ['product', '南京市文枢中学', '南京市第一中学', '南京市人民中学'],
                  ['2015', 43.3, 85.8, 93.7],
                  ['2016', 83.1, 73.4, 55.1],
                  ['2017', 86.4, 65.2, 82.5],
                  ['2018', 72.4, 53.9, 39.1]
              ]
          },
          xAxis: {type: 'category'},
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
              {type: 'bar'},
              {type: 'bar'},
              {type: 'bar'}
          ]
         })
    }

  },
}
</script>
