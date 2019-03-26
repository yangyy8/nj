<template lang="html">
  <div class="yymain">
    <div class="yycontent" style="margin-top: 0px!important;">
      <div class="mb-15">
        <div class="yylbt mb-15">人员基本信息</div>
        <el-row type="flex" class="yyf">
         <el-col :span="20" class="stu-left">
           <el-row  class="stu-row2">
             <el-col :span="8" class="stu-col-row2">
               <span>姓名：</span>
               XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>性别：</span>
                  XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>国籍：</span>
                  XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>证件种类：</span>
                  XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span >证件号码：</span>
                  XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>证件有效期：</span>
                  XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>签证号码：</span>
                  XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span></span>
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span></span>
             </el-col>
           </el-row>
         </el-col>
         <el-col :span="4" class="stu-right2">
           <el-button type="primary" class="mb-5" size="small">处理</el-button>
           <el-button type="warning" class="m0" size="small">返回</el-button>

         </el-col>
        </el-row>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">临时住宿信息</div>
        <el-table
          :data="tableData1"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
          prop="date"
          label="人员编号">
          </el-table-column>
          <el-table-column
          prop="name"
          label="本人联系电话">
          </el-table-column>
          <el-table-column
          prop="address"
          label="住房性质">
          </el-table-column>
          <el-table-column
          prop="address"
          label="登记单位">
          </el-table-column>
          <el-table-column
          prop="address"
          label="登记日期">
          </el-table-column>
          <el-table-column
          prop="address"
          label="居住状态类型">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData1:this.pl.tableData,
      pd:{},
    }
  },
  mounted() {

  },
  methods: {


  }

}
</script>
<style scoped>

</style>
