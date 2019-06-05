<template lang="html">
  <div class="mt-10">
  <div class="stru-lal">案事件信息</div>
  <el-table
       ref="multipleTable"
       :data="asjData"
       border
       style="width: 100%" class="stu-table"
       >
       <el-table-column
         prop="ASJBH"
         label="案事件编号">
       </el-table-column>
       <el-table-column
         prop="AJMC"
         label="案件名称">
       </el-table-column>
       <el-table-column
         prop="AJLB"
         label="案件类别">
       </el-table-column>
       <el-table-column
         prop="AJZT"
         label="案件状态">
       </el-table-column>
       <el-table-column
         prop="ASJLX"
         label="案事件类型">
       </el-table-column>
       <el-table-column
         prop="FXSJ"
         label="发现时间">
       </el-table-column>
       <el-table-column
         label="操作" width="80">
         <template slot-scope="scope">
         <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'GJYWWYLZYJ_LB',query:{dtid:scope.row.DTID}})"></el-button>
         </template>
       </el-table-column>
   </el-table>
   <div class="middle-foot mt-10">
      <div class="page-msg">
        <div class="">
      共{{asjTotalResult}}条记录
        </div>
        <div class="">
          每页显示
          <el-select v-model="asjpageSize" @change="pageSizeChange(asjpageSize)" placeholder="10" size="mini" class="page-select">
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
          共{{Math.ceil(asjTotalResult/asjpageSize)}}页
        </div>
      </div>
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :page-size="asjpageSize"
        layout="prev, pager, next"
        :total="asjTotalResult">
      </el-pagination>
    </div>
  </div>
</template>
<script scoped>
export default {
  name:'ANSJ',
  props:['type','xid'],
  data(){
    return{
      asjCurrentPage: 1,
      asjpageSize: 3,
      asjTotalResult: 0,
      pages:this.type,
      id:this.xid,
      pp:{},

      asjData:[],
      detailsDialogVisible:false,
      options: [{
          value: 3,
          label: "3"
        },
        {
          value: 5,
          label: "5"
        },
        {
          value: 7,
          label: "7"
        }
      ],
    }
  },

  mounted(){
    console.log('-----',this.xid);
    this.getData0(this.asjCurrentPage,this.asjpageSize,this.xid);
  },
  watch:{
    type: function(val){
      this.pages=val;
    },
    xid:{
      handler(val){
      this.id=val;
      this.getData0(this.asjCurrentPage,this.asjpageSize,val)
    },
    immediate: true
    },
  },
  methods:{
    pageSizeChange(val) {
    this.getData0(this.asjCurrentPage,val,this.xid);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getData0(val,this.asjpageSize,this.xid);
      console.log(`当前页: ${val}`);
    },
    getData0(currentPage,showCount,xid){
      this.pp.RYBH=xid;
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.pp,
        "orderBy":"DJSJ",
        "orderType":"DESC"
      };
      this.$api.post(this.Global.aport4+'/eS_AJ_JBXXController/getResultListByParams', p,
        r => {
          this.asjData=r.data.resultList;
          this.asjTotalResult=r.data.totalResult;
      })
    },


  },
}
</script>
