<template lang="html">
  <!-- 持短期签证-->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.zwxm" class="input-input"></el-input>
                </el-col>
                <!-- <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">性别：</span>
                  <el-select v-model="pd.sex" placeholder="请选择"  filterable clearable size="small" class="input-input">
                    <el-option value="U" label="U - 未知">
                    </el-option>
                    <el-option value="M" label="M - 男">
                    </el-option>
                    <el-option value="F" label="F - 女">
                    </el-option>
                  </el-select>
                </el-col> -->
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">预警时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.yjrqStart" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.yjrqEnd" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.gjdq" filterable clearable placeholder="请选择"  size="small" class="input-input">
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
                   <el-input placeholder="请输入内容" size="small" v-model="pd.CARDNO" class="input-input"></el-input>
                </el-col>

                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">当前状态：</span>
                  <el-select v-model="pd.clzt" placeholder="请选择"  filterable clearable size="small" class="input-input">
                    <el-option value="0" label="0 - 未审核">
                    </el-option>
                    <el-option value="1" label="1 - 已审核">
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
       <div class="yylbt mb-15">甄别信息列表</div>

      <el-table
           :data="tableData"
           border
           style="width: 100%">
           <!-- <el-table-column
             type="selection"
             width="55">
           </el-table-column> -->
           <el-table-column
             prop="zwxm"
             label="姓名">
           </el-table-column>
           <el-table-column
             prop="xb"
             label="性别">
           </el-table-column>
           <!-- <el-table-column
             prop="address"
             label="出生日期">
           </el-table-column> -->
           <el-table-column
             prop="gjdq"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="zjzl"
             label="证件种类">
           </el-table-column>
           <el-table-column
             prop="zjhm"
             label="证件号码">
           </el-table-column>
           <el-table-column
             prop="zjyxq"
             label="证件有效期">
           </el-table-column>
           <el-table-column
             prop="qzzl"
             label="签证种类">
           </el-table-column>
           <el-table-column
             prop="qzhm"
             label="签证号码">
           </el-table-column>
           <!-- <el-table-column
             prop="address"
             label="预警类型">
           </el-table-column> -->
           <el-table-column
             prop="yjsj"
             label="预警时间">
           </el-table-column>
           <el-table-column
             prop="cljg"
             label="当前状态">
           </el-table-column>
           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit-outline" @click="$router.push({name:'WGRFFJLYJ_XQ',query:{yjType:2,rybh:scope.row.rybh}})"></el-button>
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
      pd: {},
      options: this.pl.ps,
      tableData: [],
    }
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
      this.pd.mxLx='ASJ_DQQZFFJY';
      console.log('this.pd',this.pd);
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      this.$api.post(this.Global.aport4+'/warningInfoController/getInfoListByMxLx', p,
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
