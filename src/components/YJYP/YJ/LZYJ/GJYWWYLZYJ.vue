<template lang="html">
  <!-- 重点国家境外人员临住预警 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">预警时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginBJSJ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endBJSJ" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJ" filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input">
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
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
       <div class="yylbt mb-15">甄别信息列表</div>

      <el-table
           :data="tableData"
           border
           style="width: 100%">
           <el-table-column
             prop="ZWXM"
             label="姓名">
           </el-table-column>
           <el-table-column
             prop="XB"
             label="性别">
           </el-table-column>

           <el-table-column
             prop="GJ"
             label="国家地区">
           </el-table-column>
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
             prop="BJSJ"
             label="预警时间">
           </el-table-column>
           <el-table-column
             prop="SHZT"
             label="当前状态">
            <template slot-scope="scope">
             <span>{{scope.row.SHZT=="0"?"已通过":scope.row.SHZT=="1"?"未通过":""}}</span>
             </template>
           </el-table-column>
           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'GJYWWYLZYJ_LB',query:{type:1,row:scope.row}})"></el-button>
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
      options: this.pl.ps,
      tableData: [],
      pd0:{},
    }
  },
  activated(){

  },
  mounted() {
    this.$store.dispatch('getGjdq');

    this.getList(this.CurrentPage, this.pageSize, this.pd);
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
      this.pd.MXLX='LZ_ZDGJRYYJ';
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
  }
}
</script>
<style scoped>

</style>
