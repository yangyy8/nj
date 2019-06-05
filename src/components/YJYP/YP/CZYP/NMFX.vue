<template lang="html">
  <!-- 难民和寻求庇护者分析 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国家地区：</span>
                  <el-select v-model="pd.NATIONALITY" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in nation"
                      :key="item.CODE"
                      :label="item.CODE+' - '+item.CNAME"
                      :value="item.CODE">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">案卷编号：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.flightNo"   class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">户室人数：</span>
                  <el-select v-model="pd.STATUS" placeholder="请选择"  filterable default-first-option clearable size="small" class="input-input">
                    <el-option value="1" label="1">
                    </el-option>
                    <el-option value="2" label="2">
                    </el-option>
                    <el-option value="3" label="3">
                    </el-option>
                    <el-option value="4" label="4">
                    </el-option>
                    <el-option value="5" label="5">
                    </el-option>
                    <el-option value="6" label="6">
                    </el-option>
                    <el-option value="7" label="7">
                    </el-option>
                    <el-option value="8" label="8">
                    </el-option>
                    <el-option value="9" label="9">
                    </el-option>
                    <el-option value="10" label="10">
                    </el-option>
                  </el-select>
                </el-col>

                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.CARDNO" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">性别：</span>
                  <el-select v-model="pd.STATUS" placeholder="请选择"  filterable clearable  default-first-option size="small" class="input-input">
                    <el-option value="U" label="U - 未知">
                    </el-option>
                    <el-option value="M" label="M - 男">
                    </el-option>
                    <el-option value="F" label="F - 女">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">出生日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.BIRTHDATESTART" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.BIRTHDATESTARTEND" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">身份类型：</span>
                  <el-select v-model="pd.STATUS" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option value="0" label="0 - 难民">
                    </el-option>
                    <el-option value="1" label="1 - 寻求庇护者">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">护照号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.CARDNO" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">注册日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.BIRTHDATESTART" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.BIRTHDATESTARTEND" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">电话：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.CARDNO" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">邮箱：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.CARDNO" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">详细地址：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.CARDNO" class="input-input"></el-input>
                </el-col>
          </el-row>
         </el-col>
            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small" @click="getList(CurrentPage,pageSize,pd)" class="mb-15">查询</el-button>
              <el-button type="primary" size="small" @click="" class="mb-15"> 重置</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
      <div class="yylbt mb-15">统计类别</div>
      <div class="mb-15">
            <el-checkbox label="国家地区" v-model="pd.rowproperty_flttype" checked></el-checkbox>
            <el-checkbox label="性别" v-model="pd.rowproperty_country" checked></el-checkbox>
            <el-checkbox label="年龄" v-model="pd.rowproperty_cityto" checked></el-checkbox>
            <el-checkbox label="户室人数" v-model="pd.rowproperty_cityfrom" checked></el-checkbox>
            <el-checkbox label="身份类型" v-model="pd.rowproperty_cityto" checked></el-checkbox>
      </div>
      <el-table
           ref="multipleTable"
           :data="tableData"
           border
           style="width: 100%"
           @selection-change="handleSelectionChange">
           <!-- <el-table-column
             type="selection"
             width="55">
           </el-table-column> -->
           <el-table-column
             prop="date"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="name"
             label="姓名">
           </el-table-column>
           <el-table-column
             prop="address"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="address"
             label="年龄">
           </el-table-column>
           <el-table-column
             prop="address"
             label="户室人数">
           </el-table-column>
           <el-table-column
             prop="address"
             label="身份类型">
           </el-table-column>
           <el-table-column
             label="操作" width="70">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
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
    <el-dialog title="详情" :visible.sync="detailsDialogVisible">
    <el-table
      :data="tableData1"
      border
      style="width: 100%;"
      >
      <el-table-column
        prop="address"
        label="国家地区">
      </el-table-column>
      <el-table-column
        prop="address"
        label="案卷编号">
      </el-table-column>
      <el-table-column
        prop="address"
        label="注册时间">
      </el-table-column>
      <el-table-column
        prop="address"
        label="英文姓名">
      </el-table-column>
      <el-table-column
        prop="address"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="address"
        label="护照号码">
      </el-table-column>
      <el-table-column
        prop="address"
        label="身份类型">
      </el-table-column>
      <el-table-column
        prop="address"
        label="电话号码">
      </el-table-column>
    </el-table>
    <div slot="footer" class="yyc">
      <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>
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
      nation:[],
      tableData:[],
      tableData1:[],
      detailsDialogVisible:false,
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
  mounted() {

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
      this.$api.post('/manage-platform/riskNameList/getRiskNameListPage', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
    details(i) {
      this.detailsDialogVisible = true;

    },
  }
}
</script>

<style scoped>

</style>
<style>

</style>
