<template lang="html">
   <div class="qwjs">
  <el-card shadow="always">
    <el-row :gutter="2">
      <el-col :sm="24" :md="12" :lg="11" style="min-width:600px;">
          <el-row type="flex" v-for="(rr,indes) in rows"  :key="indes" style="line-height:40px;">
              <el-col :span="5" style="padding-left:30px;">
                <el-select v-model="rr.type" filterable clearable default-first-option placeholder="请选择属性"  size="small">
                  <el-option label="英文姓名" value="ywxm">
                  </el-option>
                  <el-option label="中文姓名" value="zwxm">
                  </el-option>
                  <el-option label="证件种类" value="zjhm">
                  </el-option>
                  <el-option label="证件号码" value="zjzl">
                  </el-option>
                  <el-option label="性别" value="xb">
                  </el-option>
                  <el-option label="出生日期" value="csrq">
                  </el-option>
                  <el-option label="国家地区" value="gjdq">
                  </el-option>
                  <el-option label="住宿地址" value="lsdwdz">
                  </el-option>
                  <el-option label="住宿单位名称" value="bzhdzmc">
                  </el-option>
                  <el-option label="所属分局" value="sszrq">
                  </el-option>
                  <el-option label="所属派出所" value="lrdw">
                  </el-option>
                  <el-option label="停留事由" value="jssy">
                  </el-option>

                </el-select>
              </el-col>
              <el-col :span="4" style="padding-left:10px;">
                <el-select v-model="rr.symbol" filterable clearable default-first-option placeholder="请选择操作"  size="small">
                  <el-option label="=" value="="></el-option>
                  <el-option label="!=" value="!="></el-option>
                  <el-option label=">" value=">"></el-option>
                  <el-option label="<" value="<"></el-option>
                  <el-option label=">=" value=">="></el-option>
                  <el-option label="<=" value="<="></el-option>
                  <el-option label="In" value="In"></el-option>
                  <el-option label="notIn" value="notIn"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6" style="padding-left:10px;">
                 <!-- @blur="getChange(rr.type,rr.symbol,rr.value)" -->
              <el-input placeholder="请输入内容" size="small"   v-model="rr.value" @focus="getPD(rr.type,rr.symbol,rr.relation)"></el-input>
              </el-col>
                <el-col :span="3" style="padding-left:10px;">
              <el-select placeholder="请选择" v-model="rr.relation"  size="small">
                      <el-option label="and" value="and"></el-option>
                      <el-option label="or" value="or"></el-option>
              </el-select>
                </el-col>
              <el-col :span="4" style="padding-left:10px;">
                  <el-button type="success" size="small" icon="el-icon-plus" circle @click="addrows()"></el-button>
                  <el-button type="danger" size="small" icon="el-icon-minus" circle @click="deleterows(indes)"></el-button>
              </el-col>
          </el-row>
      </el-col>
      <el-col :sm="24" :md="12" :lg="8">
        <span style="line-height:30px;font-size:14px;">表达内容：</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 5, maxRows: 20}"
          placeholder="请输入内容"
          v-model="aaa" :readonly="true">
        </el-input>

      </el-col>
      <el-col :sm="24" :md="12" :lg="3"  class="down-btn-area" style="min-height:150px;">
          <el-button type="primary" size="small"  @click="getList(CurrentPage,pageSize)">查询</el-button>
      </el-col>
    </el-row>
  </el-card>
  <div class="main">
     <el-row   :gutter="4">
    <el-col :sm="24" :md="12" :lg="6" :key="index" v-for="(item,index) in items">
       <el-card class="box-card" style="margin:5px 5px;">
         <el-row type="flex">
         <el-col :span="2" style="padding:10px;width:140px;">
           <div class="shover"  @click="$router.push({name:'RYHX_XQ',query:{zjhm:item.zjhm,zjhmes:content,stype:type,gjdq:item.gjdq}})">
           <img :src="item.photo" v-if="item.photo!=''" width="120" height="140">
           <img src="../../../../assets/img/mrzp.png" width="120" height="140" v-else >
          </div>
         </el-col>
         <el-col :span="22">
           <div class="shover" @click="$router.push({name:'RYHX_XQ',query:{zjhm:item.zjhm,zjhmes:content,stype:type,gjdq:item.gjdq}})">
             <div class="list">
               <p style="margin-bottom:15px!important"><b>{{item.ywxm}}</b></p>
               <el-row :gutter="1" style="line-height:22px;">
                     <el-col :span="24" class="t-el-content"><div class="t-el-text">性别：</div><div class="t-el-sub">{{item.xb}}</div></el-col>
                     <el-col :span="24" class="t-el-content"><div class="t-el-text">出生日期：</div><div class="t-el-sub">{{item.csrq}}</div></el-col>
                     <el-col :span="24" class="t-el-content"><div class="t-el-text">国家地区：</div><div class="t-el-sub">{{item.gjdqmc}}</div></el-col>
                     <el-col :span="24" class="t-el-content"><div class="t-el-text">证件号码：</div><div class="t-el-sub">{{item.zjhm}}</div></el-col>
               </el-row>
             </div>
           </div>
         </el-col>
         </el-row>
         </el-card>

    </el-col>

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
      pageSize: 8,
      TotalResult: 0,
      items:[],
      type:'',
      content:'',
      keywords:'',
      rows: [{
        id: 1,
        type: '',
        symbol: '',
        value: '',
        relation:'and'
        }],
      modelrow: [{
      id: 1,
      type: '',
      symbol: '',
      value: '',
      relation:'and'
         }],
      pd:{},
      count: 1,
      show:false,

    }
  },
  mounted() {
  },
  computed:{
      aaa:{
          get:function(){
              let arr = this.rows;
              if(arr.length>1){
                this.keywords='';
                  for(var i=0;i<arr.length;i++){
                    if(arr[i].type!="" && arr[i].symbol!="" && arr[i].value!=""){
                     this.keywords+=" "+arr[i].type+" "+arr[i].symbol+" "+arr[i].value+" "+arr[i].relation;
                     }
                  }
              }
              return this.keywords.substr(0,this.keywords.length-4);
          },
          set:function(newVal){

            console.log('====',newVal);
            this.keywords = newVal;
          },
      },
  },
  methods: {
    getChange(n1,n2,n3){
      var ss=n1+" "+n2+" "+n3+" AND ";
      if(n1!="" && n1!=undefined && n2!="" && n2!=undefined){
       this.keywords=this.keywords+ss;
     }

     if(n3=="" || n3==undefined){
       console.log(n3,ss);
       this.keywords=this.keywords.replace(ss,"");
     }
    },
    getPD(n1,n2,n3){
       if(n1=="" || n1==undefined){
        this.$message.error("请选择类型！");return ;
       }
       if(n2=="" || n2==undefined){
         this.$message.error("请选择符号！");return ;
       }

       if(n3=="" || n3==undefined){
         this.$message.error("请选择and 或者 or ！");return ;
       }
    },
    addrows() {
      this.count++;
      this.modelrow = {
        id: 1,
        type: '',
        symbol: '',
        value: '',
        relation:'and'
      };

      this.modelrow.id = this.count;
      this.rows.push(this.modelrow);

    },
    deleterows(index) {
        this.rows.splice(index, 1);
        console.log(this.rows.length,index);
        if(index==0){
          this.keywords="";
        }

    },
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize);
      console.log(`当前页: ${val}`);
    },
    getList(currentPage,showCount){

      if(this.keywords==""){
        this.$message.error("请选择您要查询的条件!");return ;
      }
      this.items=[];
      this.TotalResult=0;

     let p={
       "keywords":this.keywords,
       "pageSize":showCount,
       "page":currentPage
     };

     this.$api.post(window.IPConfig.QWJS+"/api/es/search/currencySearch",p,r=>{
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
.qwjs {
  background: #ffffff;
  min-height: 700px;
  margin: 10px;
}

.qwjs .top {
  width: 100%;
  height: 40px;

}

.qwjs .inputs {
  width: 480px;
}

.qwjs .main {
  width: 95%;
  padding-left: 30px;
  font-size: 13px;
  margin-top: 20px;
  padding-bottom: 20px;
}

.qwjs .main .list {
  width: 99%;
  margin-top: 10px;
}

.qwjs .main .list span {
  margin-left: 10px;
}

.shover {
  cursor: pointer;
}

.shover:hover {
  font-size: 14px;
  font-weight: bold;
}

.input-text {
  color: #99999 !important;
}
</style>
<style>
.qwjs .el-input-group__prepend {
  background-color: #fff;
}

.box-card .el-card__body {
  padding: 5px 20px !important;
}

.qwjs .el-divider__text {
  color: red !important
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
