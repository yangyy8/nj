<template lang="html">
    <!-- 出入境记录核查 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="1">

                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">出生日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.csrqBegin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.csrqEnd" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
         </el-row>
         </el-col>

            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
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
             prop="ywx"
             label="英文姓">
           </el-table-column>
           <el-table-column
             prop="ywm"
             label="分局">
           </el-table-column>
           <el-table-column
             prop="zwxm"
             label="接收条数">
           </el-table-column>
           <el-table-column
             prop="zjhm"
             label="成功上报条数">
           </el-table-column>
           <el-table-column
             prop="gjdq"
             label="失败条数">
           </el-table-column>
           <el-table-column
             prop="lsdwhz"
             label="人工上报条数">
           </el-table-column>
           <el-table-column
             prop="lsdwhzdz"
             label="上报条数">
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
import {ToArray} from '@/assets/js/ToArray.js'
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {type:'1',hcq_gnw:'0',hcq_gnl:'0'},
      form:{},
      nation:[],
      tableData:[],
      eidtsDialogVisible:false,
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

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize, this.pd);
      console.log(`当前页: ${val}`);
    },

    getList(currentPage, showCount, pd) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      var url=this.Global.aport2+'/data_report/findAll';
      this.$api.post(url, p,
        r => {
          this.tableData = r.data.pdList;
          this.TotalResult = r.data.totalResult;
        })
    },



  }
}
</script>

<style scoped>


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
