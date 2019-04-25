<template lang="html">
  <!-- 境外人员信息列表 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
              <span class="input-text">姓名：</span>
              <el-input placeholder="请输入内容" size="small" v-model="pd.flightNo"   class="input-input"></el-input>
            </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国家地区：</span>
                  <el-select v-model="pd.NATIONALITY" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
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
          </el-row>
         </el-col>
            <el-col :span="4" >
              <el-button type="success" size="small" @click="getList(CurrentPage,pageSize,pd)" class="mb-15">查询</el-button>
              <el-button type="info" size="small" @click="$router.push('LZXXZHFX')" class="mb-15">返回</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
      <div class="yylbt mb-15">人员列表</div>
      <el-table
           ref="multipleTable"
           :data="tableData"
           border
           style="width: 100%"
           @selection-change="handleSelectionChange">
           <el-table-column
             prop="address"
             label="姓名">
           </el-table-column>
           <el-table-column
             prop="address"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="address"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="address"
             label="证件种类">
           </el-table-column>
           <el-table-column
             prop="address"
             label="证件号码">
           </el-table-column>
           <el-table-column
             prop="address"
             label="证件有效期">
           </el-table-column>
           <el-table-column
             prop="address"
             label="签证种类">
           </el-table-column>
           <el-table-column
             prop="address"
             label="签证号码">
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
<div class="ryxx">
    <el-dialog title="境外人员住宿登记信息-临住信息详情" :visible.sync="detailsDialogVisible">
      <el-form  v-model="mapForm"  ref="mapForm">
        <el-row :gutter="2"  class="mb-6">
            <el-col :span="12" class="input-item">
             <span class="input-text">人员编号：</span>
             <span class="input-input detailinput">  {{mapForm.XM}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">英文姓名：</span>
              <span class="input-input detailinput">  {{mapForm.XBMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
             <span class="input-text">中文姓名：</span>
             <span class="input-input detailinput">  {{mapForm.ZJHM}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
             <span class="input-text">性别：</span>
             <span class="input-input detailinput">  {{mapForm.SFZH}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">出生日期：</span>
              <span class="input-input detailinput">  {{mapForm.CSRQ}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">身份证号：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">国家地区：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">证件种类：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">所持证件号码：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>

            <el-col :span="12" class="input-item">
             <span class="input-text">证件有效期至：</span>
             <span class="input-input detailinput">  {{mapForm.XM}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">签注种类：</span>
              <span class="input-input detailinput">  {{mapForm.XBMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
             <span class="input-text">签证(注)号码：</span>
             <span class="input-input detailinput">  {{mapForm.ZJHM}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
             <span class="input-text">停留有效期：</span>
             <span class="input-input detailinput">  {{mapForm.SFZH}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">签发地：</span>
              <span class="input-input detailinput">  {{mapForm.CSRQ}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text" title="签证(注)签发日期">签证(注)签发日期：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">住房性质：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">出入境结果：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">入境日期：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>

            <el-col :span="12" class="input-item">
             <span class="input-text">入境口岸：</span>
             <span class="input-input detailinput">  {{mapForm.XM}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">何处来：</span>
              <span class="input-input detailinput">  {{mapForm.XBMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
             <span class="input-text">前往地：</span>
             <span class="input-input detailinput">  {{mapForm.ZJHM}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
             <span class="input-text">职业：</span>
             <span class="input-input detailinput">  {{mapForm.SFZH}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text" title="在华工作机构名称">在华工作机构名称：</span>
              <span class="input-input detailinput">  {{mapForm.CSRQ}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">何处去：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">本人联系电话：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">紧急情况联系人：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">紧急情况联系电话：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>

            <el-col :span="12" class="input-item">
             <span class="input-text">停留事由：</span>
             <span class="input-input detailinput">  {{mapForm.XM}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">登记单位类型：</span>
              <span class="input-input detailinput">  {{mapForm.XBMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
             <span class="input-text">是否住宿宾馆：</span>
             <span class="input-input detailinput">  {{mapForm.ZJHM}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
             <span class="input-text">行政区划：</span>
             <span class="input-input detailinput">  {{mapForm.SFZH}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text" title="临时住宿登记单位名称">临时住宿登记单位名称：</span>
              <span class="input-input detailinput">  {{mapForm.CSRQ}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">登记人：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">登记单位：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">登记日期：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">房号：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>

            <el-col :span="12" class="input-item">
             <span class="input-text">抵达日期：</span>
             <span class="input-input detailinput">  {{mapForm.XM}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">离开日期：</span>
              <span class="input-input detailinput">  {{mapForm.XBMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
             <span class="input-text">接待单位：</span>
             <span class="input-input detailinput">  {{mapForm.ZJHM}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
             <span class="input-text" title="留宿单位(户主)姓名">留宿单位(户主)姓名：</span>
             <span class="input-input detailinput">  {{mapForm.SFZH}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text" title="留宿单位(户主)电话">留宿单位(户主)电话：</span>
              <span class="input-input detailinput">  {{mapForm.CSRQ}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text" title="留宿单位(户主)地址">留宿单位(户主)地址：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">房主身份证号：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">住房种类：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">与境外人员关系：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>

            <el-col :span="12" class="input-item">
             <span class="input-text">传送时间：</span>
             <span class="input-input detailinput">  {{mapForm.XM}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">宾馆管辖单位：</span>
              <span class="input-input detailinput">  {{mapForm.XBMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
             <span class="input-text">宾馆所属派出所：</span>
             <span class="input-input detailinput">  {{mapForm.ZJHM}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
             <span class="input-text" >实际离开日期：</span>
             <span class="input-input detailinput">  {{mapForm.SFZH}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text" title="前所属单位">当前所属单位：</span>
              <span class="input-input detailinput">  {{mapForm.CSRQ}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text" >核查状态：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">警务责任区：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">警务社区：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>


        </el-row>
        <el-row :gutter="2">
          <el-col :span="12" class="input-item">
            <span class="input-text">录入人：</span>
            <span class="input-input detailinput">  {{mapForm.CZR}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">录入单位：</span>
            <span class="input-input detailinput">  {{mapForm.CZSJ}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">录入日期：</span>
            <span class="input-input detailinput">  {{mapForm.CZSJ}}</span>
          </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">更新人：</span>
              <span class="input-input detailinput">  {{mapForm.CZR}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">更新单位：</span>
              <span class="input-input detailinput">  {{mapForm.CZSJ}}</span>
            </el-col>
            <el-col :span="12" class="input-item">
              <span class="input-text">更新日期：</span>
              <span class="input-input detailinput">  {{mapForm.CZSJ}}</span>
            </el-col>
        </el-row>
      </el-form>
    <div slot="footer" class="yyc">
      <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
    </div>
  </el-dialog>
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
      mapForm:{},
      pd: {},
      tableData1:[],
      detailsDialogVisible:false,
      options:this.pl.options,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: 'XXXXX'
      }],

    }
  },
  mounted() {
      this.$store.dispatch('getGjdq');
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
      this.mapForm=i;
    },
  }
}
</script>

<style scoped>
.input-text{width: 30%!important}
</style>
<style>
.ryxx .el-dialog {
  width: 60% !important;
  /* max-height: 400px!important;
  overflow-y: scroll; */
}
</style>
