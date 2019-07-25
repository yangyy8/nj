<template lang="html">
   <div class="qwjs">
          <el-card shadow="always">
     <div class="top">
       <i class="el-icon-search"></i>
       <el-input placeholder=" +包含 -为不包含 +(a b)为in -(a b)为notIn" v-model="content" class="inputs">
          <el-select v-model="type" slot="prepend" placeholder="请选择" max="500" style="width:100px;">
            <el-option label="综合" value="all"></el-option>
            <el-option label="组织" value="org"></el-option>
            <el-option label="人员" value="user"></el-option>
            <el-option label="案件" value="aj"></el-option>
            <el-option label="地址" value="addr"></el-option>
          </el-select>
       </el-input>
      <el-button type="primary"  @click="CurrentPage=1;getList(CurrentPage,pageSize)" style="margin-left:-10px;">查询</el-button>
     </div>

  </el-card>
    <div class="main">
       <el-row v-for="(item,index) in items" :key="index">
         <el-col :span="2" style="padding:10px;width:120px;">
           <img :src="item.photo" width="100" height="120">
         </el-col>
         <el-col :span="18">
           <div class="list">姓名：{{item.ywxm}} 性别：{{item.xb}} 出生日期：{{item.csrq}} 国家地区：{{item.gjdq}} 证件号码：{{item.zjhm}}</div>
           <div class="list">命中信息：{{item.highlight}}</div>
         </el-col>
       </el-row>
       <div class="middle-foot">
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
<script scoped>
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      items:[],
      type:'',
      content:''

    }
  },
    activated(){
      this.type=this.$route.query.stype;
      this.content=this.$route.query.zjhm;
      console.log(this.type,this.content);
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
  mounted() {

  },
  methods: {
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize);
      console.log(`当前页: ${val}`);
    },
    getList(currentPage,showCount){
     let p={
       "keywords":this.content,
       "type":this.type,
       "pageSize":showCount,
       "page":currentPage
     };
     this.$api.post(this.Global.aport6+"/api/es/search/generalSearch",p,r=>{
       if(r.success){
         this.items=r.respondResult.respondData;
         this.TotalResult=r.respondResult.totalSize;
       }
     })
    },
  },
}
</script>
<style scoped>
.qwjs{background: #ffffff; min-height: 700px; margin: 10px;}
.qwjs .top {
  width: 100%;
  height: 40px;

}
.qwjs .inputs{
  width: 480px;
}
.qwjs .main{
  width: 80%;  padding-left: 30px;
}
.qwjs .main .list{
  width: 80%;padding-top: 6px;
}
</style>
<style>
.qwjs  .el-input-group__prepend {
    background-color: #fff;
  }
</style>
