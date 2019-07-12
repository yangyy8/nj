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
                       v-model="pd0.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间">
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">证件种类：</span>
                    <el-select v-model="pd.ZJZL" multiple  :multiple-limit="5"   collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
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
                    <el-select v-model="pd.QZZl" multiple :multiple-limit="5"   collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
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
                    <el-select v-model="pd.GJDQ" multiple :multiple-limit="5"   collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
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
                    <el-select v-model="pd.JLSY" multiple :multiple-limit="5"  collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.rjsy"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <!-- <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">投宿于：</span>
                    <el-select v-model="pd.LB_DJDW" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="1" label="1 - 旅馆">
                      </el-option>
                      <el-option value="0" label="0 - 派出所">
                      </el-option>
                      <el-option value="2" label="2 - 其他">
                      </el-option>
                    </el-select>
                </el-col> -->
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">所属分局：</span>
                    <div class="input-input t-fuzzy-12 t-flex">
                      <el-select v-model="pd.LRDW_Like" multiple :multiple-limit="5" @change="getPCS(pd.LRDW_Like)"  collapse-tags  filterable clearable default-first-option placeholder="请选择"  size="small">
                        <el-option
                          v-for="item in fjlist"
                          :key="item.dm"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>&nbsp;&nbsp;
                      <el-checkbox v-model="checkedfj"  @change="getRadiofj(checkedfj)">包含</el-checkbox>
                    </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">派出所：</span>
                    <div class="input-input t-fuzzy-12 t-flex">
                      <el-select v-model="pd.LRDW" multiple :multiple-limit="5"  collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small">
                        <el-option
                          v-for="item in pcslist"
                          :key="item.dm"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>&nbsp;&nbsp;
                      <el-checkbox v-model="checkedpcs"  @change="getRadiopcs(checkedpcs)">包含</el-checkbox>
                    </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">旅馆名称：</span>
                    <el-select v-model="pd.DJDWDM" multiple :multiple-limit="5"  collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
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
          <el-button type="success" size="small"  @click="page=0;getList()">查询</el-button>
        </el-col>
      </el-row>
    </div>

    <div class="yycontent">
      <div class="ak-tabs">
        <div class="ak-tab-item hand" :class="{'ak-checked':page==0}" @click="page=0;getList()">
          图表
        </div>
        <div class="ak-tab-item hand" :class="{'ak-checked':page==1}" @click="page=1">
          列表
        </div>
      </div>
      <div class="ak-tab-pane">
        <div class = "chart" style="width:100%" v-show="page==0">
          <div id = "echarts" style = "width: 100%;height: 400px"></div>
        </div>
        <div v-show="page==1">
          <el-table
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
               prop="XB"
               label="性别">
             </el-table-column>
             <el-table-column
               prop="GJDQ_DESC"
               label="国家地区">
             </el-table-column>
             <el-table-column
               prop="CSQR"
               label="出生日期">
             </el-table-column>
             <el-table-column
               prop="ZJJL_DESC"
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
               prop="LRDW_DESC"
               label="派出所名称">
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
          </div>
      </div>
    </div>
    <el-dialog title="列表" :visible.sync="listDialogVisible"  width="1000px">

    </el-dialog>
    <el-dialog title="临住详情" :visible.sync="detailsDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
        <LZXX :type="type" :xid="xid"></LZXX>
      <div slot="footer" class="dialog-footer">
        <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script scoped>
import echarts from 'echarts'
import {formatDate} from '@/assets/js/date.js'
import LZXX from '../../../common/lzxx_xq'
 export default {
   components:{LZXX},
  data() {

    return {
      detailsDialogVisible:false,
      listDialogVisible:false,
      page:0,
      type:1,
      xid:'',
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd:{LRRQ_DateRange:{},LRDW_BH_Like:'1',LRDW_BH:'1',DJDWXZQH:'3201',LB_DJDW:''},
      pdTu:{},
      pd0:{
        begin:'',
        end:'',
      },
      fjlist:[],
      pcslist:[],
      checkedfj:false,
      checkedpcs:false,
      tableData:[],
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      options:this.pl.options,
      dataname:[],
      rr:0,
      lineChart:null,
      seriesT:[],
    }
  },
  mounted(){
    this.$store.dispatch("getGjdq");
    this.$store.dispatch("getZjzl");
    this.$store.dispatch("getQzzl");
    this.$store.dispatch("getPcs");
    this.$store.dispatch("getRjsy");
    this.$store.dispatch("getZsbg");
    // this.pd0.begin=formatDate(new Date(),'yyyyMMdd');
    // this.pd0.end=formatDate(new Date(),'yyyyMMdd');
    this.getFJ();
    this.getList();
  },
  // beforeDestroy(){
  //   this.lineChart.dispose();
  //   this.lineChart=null;
  //   this.seriesT=[];
  // },
  methods:{
    pageSizeChange(val) {
      // this.pageSize=10;
      this.getListTu(this.CurrentPage,val,this.pdTu);
    },
    handleCurrentChange(val) {
      // this.CurrentPage=1;
      this.getListTu(val,this.pageSize,this.pdTu);
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
    details(i){
      this.xid=i.DTID;
      this.detailsDialogVisible = true;
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
      // if((this.pd0.begin==''||this.pd0.begin==undefined||this.pd0.begin==null)&&(this.pd0.end==''||this.pd0.end==undefined||this.pd0.end==null)){
      //   this.$message({
      //     message: '时间范围不能为空',
      //     type: 'warning'
      //   });
      //   return
      // }

      this.pd0.begin==''?this.pd.LRRQ_DateRange.begin='':this.pd0.begin==null?this.pd.LRRQ_DateRange.begin=null:this.pd.LRRQ_DateRange.begin=this.pd0.begin+'000000';
      this.pd0.end==''?this.pd.LRRQ_DateRange.end='':this.pd0.end==null?this.pd.LRRQ_DateRange.end=null:this.pd.LRRQ_DateRange.end=this.pd0.end+'000000';
      let p = {
        "pd": this.pd
      };
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getCountByParam', p,
        r => {
          if(r.success){
            this.seriesT = r.data.series;
            this.drawLine(r.data.legend,r.data.header,this.seriesT);
          }
          // console.log(r.data.series)


        })

    },
    getListTu(currentPage,pageSize,pd){
      let p={
        'currentPage':currentPage,
        'showCount':pageSize,
        'pd':pd
      }
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getLzListByParams',p,
        r =>{
          if(r.success){
            this.tableData=r.data.resultList;
            this.TotalResult=r.data.totalResult;
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
                },
                data:ydata
            },
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                },
                data:ydata
            },
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: series
      },true)
      console.log('series',series)
      that.lineChart.on('click',function(params){
        let p={};
        p=Object.assign({}, that.pd);
        if(p.hasOwnProperty('LRDW_BH_Like')){delete p.LRDW_BH_Like};
        if(p.hasOwnProperty('LRDW_BH')){delete p.LRDW_BH};
        p.LRRQ_DateRange={
          'begin':that.pd0.begin==''?'':that.pd0.begin==null?null:that.pd0.begin+'000000',
          'end':that.pd0.end==''?'':that.pd0.end==null?null:that.pd0.end+'000000',
        };
        p.HEADER=ydata;
        p.TIME=params.name;
        p.DW=params.seriesName;
        that.pdTu=p;
        console.log('ppppp',p,that.pd);
        // that.listDialogVisible=true;
        that.page=1;
        that.CurrentPage=1;
        that.getListTu(that.CurrentPage,that.pageSize,that.pdTu);
      })
      that.lineChart.resize();
    },
  }
}
</script>
