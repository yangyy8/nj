<template lang="html">
    <!-- 临住信息统计 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="16" class="br pr-20">
          <el-row align="center"   :gutter="1">
                <el-col  :sm="24" :md="24" :lg="24"  class="input-item">
                  <span class="input-text">时间范围：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.beginTime" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMddHHmmss"
                       placeholder="开始时间">
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.endTime" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMddHHmmss"
                        placeholder="结束时间">
                    </el-date-picker>
                 </div>
                </el-col>
         </el-row>
         </el-col>
           <el-col :span="8" class="down-btn-area">
               <el-row  style="text-align:right;">

                   <el-button type="success" size="small" @click="getList(pd)">查询</el-button>

                   <el-button type="info" size="small" @click="getList(pd)">返回</el-button>

                   <el-button type="primary" size="small" @click="">导出</el-button>

               </el-row>
           </el-col>

          </el-row>
    </div>
    <div class="yycontent">
          <el-table
           ref="multipleTable"
           :data="tableData"
           border
            show-summary
           style="width: 100%"
           @selection-change="handleSelectionChange">
           <!-- <el-table-column
             type="selection"
             width="55">
           </el-table-column> -->
           <el-table-column
             prop="dw"
             label="单位">
             <template slot-scope="scope">
             <a class="sb" @click="getPCS(scope.row.dw)"> {{scope.row.dw}} </a>
             </template>
           </el-table-column>
           
           <el-table-column
             prop="zs"
             label="总数">
           </el-table-column>
           <el-table-column
             prop="shm"
             label="社会面">
           </el-table-column>
           <el-table-column
             prop="bg"
             label="旅馆">
             <template slot-scope="scope">
             <a class="sb" @click="toLink(scope.row)"> {{scope.row.bg}} </a>
             </template>
           </el-table-column>
           <el-table-column
             label="正确率">
                   <el-table-column
                      prop="cwsj"
                      label="错误数">
                    </el-table-column>
                    <el-table-column
                      prop="zql"
                      label="正确率">
                    </el-table-column>
           </el-table-column>
           <el-table-column
             label="及时率">
                   <el-table-column
                      prop="cbsj"
                      label="迟报数">
                    </el-table-column>
                    <el-table-column
                      prop="jsl"
                      label="及时率">
                    </el-table-column>
           </el-table-column>

         </el-table>

    </div>

  </div>

</template>
<script>

export default {
  data() {
    return {
      pd: {beginTime:'',endTime:''},
      form:{},
      tableData:[],


    }
  },
  mounted() {
    this.getList(this.pd);
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    getList(pd) {
      let p = {
        "level":"1",
        "dw":"",
        "beginTime": this.pd.beginTime,
        "endTime": this.pd.endTime,
      };
      var url=this.Global.aport2+'/data_report/selectTjxx';
      this.$api.post(url, p,
        r => {
          this.tableData = r.data;
        })
    },
    getPCS(dw){
      let p = {
        "level":"2",
        "dw":dw,
        "beginTime": this.pd.beginTime,
        "endTime": this.pd.endTime,
      };
      var url=this.Global.aport2+'/data_report/selectBgxx';
      this.$api.post(url, p,
        r => {
          this.tableData = r.data;
        })
    },
    toLink(i){
        let p={
           "beginTime":this.pd.beginTime,
           "endTime":this.pd.endTime,
           "ssfjmc":i.fj,
           "sblx":type,
        }
        this.$router.push({name: 'LZSJHE',query:{ cdt:p}});
    }

  }
}
</script>

<style scoped>
a{color: blue}
.sb{display:block;width:100%;height:100%;cursor:pointer;}
.sb:hover{color: red}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
  background: url(../../../assets/img/t1.png);
  background-size: 100% 100%;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .block{padding-top: 5px;}
  .crcolor{background: #EFF3F6;}
  .yy-input-text{text-align:left!important;}
</style>
