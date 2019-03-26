<template lang="html">
  <div class="yymain">
    <div class="yycontent" style="margin-top: 0px!important;">
      <div class="mb-15">
        <div class="yylbt mb-15">人员基本信息</div>
        <el-row type="flex" class="yyf">
         <el-col :span="20" class="stu-left">
           <el-row  class="stu-row2">
             <el-col :span="8" class="stu-col-row2">
               <span>案卷编号：</span>
               XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>登记日期：</span>
                  XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>人数：</span>
                  XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>姓名：</span>
                  XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span >性别：</span>
                  XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>出生日期：</span>
                  XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>护照号：</span>
                  XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>入签证件类型：</span>
                  XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>身份：</span>
                 XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>邮箱地址：</span>
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>省：</span>
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>城市：</span>
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>电话号码：</span>
                 XXXX
             </el-col>
             <el-col :span="8" class="stu-col-row2">
               <span>详细地址：</span>
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
        <div class="yylbt mb-15">常住居住地信息</div>
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
          label="详细地址">
          </el-table-column>
          <el-table-column
          prop="address"
          label="入住方式">
          </el-table-column>
          <el-table-column
          prop="address"
          label="录入日期">
          </el-table-column>
          <el-table-column
          prop="address"
          label="详细地址">
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
      <div class="mb-15">
        <div class="yylbt mb-15">出入境记录表</div>
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
          label="人员姓名">
          </el-table-column>
          <el-table-column
          prop="address"
          label="前往地">
          </el-table-column>
          <el-table-column
          prop="address"
          label="交通工具">
          </el-table-column>
          <el-table-column
          prop="address"
          label="出入境日期">
          </el-table-column>
          <el-table-column
          prop="address"
          label="出入境时间">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">警综接警信息</div>
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
          label="接警报警电话">
          </el-table-column>
          <el-table-column
          prop="address"
          label="接警报警时间">
          </el-table-column>
          <el-table-column
          prop="address"
          label="接警报警类型">
          </el-table-column>
          <el-table-column
          prop="address"
          label="接警报警人">
          </el-table-column>
          <el-table-column
          prop="address"
          label="接警报警人性别">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">警综处警信息</div>
        <el-table
          :data="tableData1"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
          prop="date"
          label="处警案件受理单位">
          </el-table-column>
          <el-table-column
          prop="name"
          label="处警案件受理人">
          </el-table-column>
          <el-table-column
          prop="address"
          label="处警标注单位">
          </el-table-column>
          <el-table-column
          prop="address"
          label="处境标注人">
          </el-table-column>
          <el-table-column
          prop="address"
          label="处境标注人姓名">
          </el-table-column>
          <el-table-column
          prop="address"
          label="处境标注时间">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">警综涉警信息</div>
        <el-table
          :data="tableData1"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
          prop="date"
          label="涉警人员登记单位">
          </el-table-column>
          <el-table-column
          prop="name"
          label="涉警人员登记单位名称">
          </el-table-column>
          <el-table-column
          prop="address"
          label="涉警人员登记人姓名">
          </el-table-column>
          <el-table-column
          prop="address"
          label="涉警人员登记时间">
          </el-table-column>
          <el-table-column
          prop="address"
          label="涉警人员修改单位">
          </el-table-column>
          <el-table-column
          label="操作" width="80">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
          </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="mb-15">
        <div class="yylbt mb-15">车辆信息</div>
        <el-table
          :data="tableData1"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
          prop="date"
          label="涉警人员登记单位">
          </el-table-column>
          <el-table-column
          prop="name"
          label="涉警人员登记单位名称">
          </el-table-column>
          <el-table-column
          prop="address"
          label="涉警人员登记人姓名">
          </el-table-column>
          <el-table-column
          prop="address"
          label="涉警人员登记时间">
          </el-table-column>
          <el-table-column
          prop="address"
          label="涉警人员修改单位">
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
      tableData2:[],
      tableData3:[],
      tableData4:[],
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
