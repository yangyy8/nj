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
       <el-card class="box-card" style="margin:5px 0;">
         <el-col :span="2" style="padding:10px;width:120px;">
           <div class="shover"  @click="$router.push({name:'RYHX_XQ',query:{zjhm:item.zjhm,zjhmes:content,stype:type}})">
           <img :src="item.photo" v-if="item.photo!=''" width="100" height="120">
           <img src="../../../../assets/img/mrzp.png" width="100" height="120" v-else >
          </div>
         </el-col>
         <el-col :span="18">
           <div class="shover"  @click="$router.push({name:'RYHX_XQ',query:{zjhm:item.zjhm,zjhmes:content,stype:type}})">
           <div class="list">姓名：{{item.ywxm}} <span>性别：{{item.xb}}</span> <span>出生日期：{{item.csrq}}</span> <span>国家地区：{{item.gjdq}}</span> <span>证件号码：{{item.zjhm}}</span></div>
           <div class="list">命中信息：{{item.index}}</div>
          <!--  <div class="list" v-html="item.cusHighlight"></div> -->
         </div>
         </el-col>
         </el-card>
       </el-row>

       <div class="middle-foot" style="margin-top:10px;" v-if="TotalResult!=0">
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
      pageSize: 5,
      TotalResult: 0,
      items:[],
      type:'',
      content:''

    }
  },
    activated(){
      this.type=this.$route.query.stype;
      this.content=this.$route.query.zjhmes;
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
      this.items=[];
      this.TotalResult=0;
      if(this.content==undefined || this.content==""){
        this.$message.error("请输入查询内容!");return ;
      }
      if(this.type==undefined || this.type==""){
        this.$message.error("请选择类型!");return ;
      }
     let p={
       "keywords":this.content,
       "type":this.type,
       "pageSize":showCount,
       "page":currentPage
     };
     // var formData = new FormData();
     // formData.append("keywords", this.content);
     // formData.append("type", this.type);
     // formData.append("page", currentPage);
     // formData.append("pageSize", showCount);
     // let p = formData;
     this.$api.post(window.IPConfig.QWJS+"/api/es/search/generalSearch",p,r=>{
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
  width: 95%;  padding-left: 30px; font-size:13px; margin-top: 20px; padding-bottom: 20px;
}
.qwjs .main .list{
  width: 99%;margin-top: 10px;
}
.qwjs .main .list span{margin-left: 10px;}
.shover{cursor:pointer;}
.shover:hover{font-size: 14px;font-weight: bold;}
</style>
<style>
.qwjs  .el-input-group__prepend {
    background-color: #fff;
  }
</style>
