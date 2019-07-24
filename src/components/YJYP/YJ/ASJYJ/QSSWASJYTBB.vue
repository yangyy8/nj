<template lang="html">
  <!-- 全市涉外案事件月通报表-->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="18" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8" :offset="2" class="input-item">
                  <span class="input-text">查询时间：</span>
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
          </el-row>
        </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
        </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  @click="">导出</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
       <div class="yylbt mb-15">信息列表</div>
      <el-table
           :data="tableData"
           border
           :highlight-current-row="true"
           style="width: 100%">
           <el-table-column
             prop="xh"
             label="序号" width="60">
           </el-table-column>
           <el-table-column
             prop="dw"
             label="单位">
           </el-table-column>
           <el-table-column
             prop="xj"
             label="小计">
           </el-table-column>
            <el-table-column label="违临">
              <el-table-column
                prop="jywl"
                label="简易"
                width="120">
              </el-table-column>
              <el-table-column
                prop="ybwl"
                label="一般"
                width="120">
              </el-table-column>
            </el-table-column>
           <el-table-column
             prop="ffjl"
             label="非法居留">
           </el-table-column>
           <el-table-column
             prop="ffrj"
             label="非法入境">
           </el-table-column>
           <el-table-column
             prop="ffjy"
             label="非法就业">
           </el-table-column>
           <el-table-column
             prop="qt"
             label="其他出入境案件（不包括非法聘用）">
           </el-table-column>
           <el-table-column
             prop="fhgbj"
             label="妨害国边境">
           </el-table-column>
           <el-table-column
             prop="swsj"
             label="涉外事件">
           </el-table-column>
           <el-table-column
             prop="fzcsw"
             label="非正常死亡">
           </el-table-column>
           <el-table-column
             prop="xsaj"
             label="刑事案件">
           </el-table-column>
           <el-table-column
             prop="qsry"
             label="遣送人员">
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

</template>
<script>
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {BJSJ_DateRange:{}},
      pd0:{},
      options: this.pl.ps,
      tableData: [],
    }
  },
    activated(){
        this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
  mounted() {
    
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
    getList(currentPage, showCount, pd) {
      /* this.pd.MXLX='ASJ_DQQZFFJY';

      this.pd.BJSJ_DateRange.begin=this.pd0.beginBJSJ;
      this.pd.BJSJ_DateRange.end=this.pd0.endBJSJ; */

      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      this.$api.post(this.Global.aport4+'/api_yewu/ajbbController/swajbb', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
  }
}
</script>
<style scoped>

</style>
