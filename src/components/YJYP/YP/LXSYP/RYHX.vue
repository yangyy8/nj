<template lang="html">
  <!-- 人员画像 -->
  <div class="yymain">
  <div class="yycontent ryhm">
    <div class="title"><img src="../../../../assets/img/js.png" border='0'></div>
    <div>
    <el-input placeholder="请输入证件号码" v-model="zjhm" class="inputs"  ></el-input>
    <el-button type="success"  @click="getList()" style="margin-left:-10px;">查询</el-button>
    &nbsp;<el-button type="warning"  @click="$router.push({name:'RYPLCX',query:{}})">模板导入</el-button>

    <span class="gjcx" v-if="gjshow" @click="getCX(0)">高级查询 <img src="../../../../assets/img/tb/gj1.png" style="margin-bottom:-13px"></span>
    <span class="gjcx" v-else @click="getCX(1)">高级查询 <img src="../../../../assets/img/tb/gj2.png" style="margin-bottom:-13px"></span>
   </div>
   <div class="tjsy" v-if="!gjshow">

         <el-row align="center" :gutter="2">
               <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">中文姓名：</span>
                  <el-input placeholder="请输入内容" size="mini" v-model="pd.ZWXM" class="input-input"></el-input>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">英文姓名：</span>
                  <el-input placeholder="请输入内容" size="mini" v-model="pd.YWXM" class="input-input"></el-input>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                 <span class="input-text">性别：</span>
                 <el-select v-model="pd.XB" placeholder="请选择"  filterable clearable default-first-option size="mini" class="input-input">
                   <el-option
                     v-for="(item,ind1) in $store.state.xb"
                     :key="ind1"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm">
                   </el-option>
                 </el-select>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                 <span class="input-text">出生日期：</span>
                 <div class="input-input t-flex t-date">
                   <el-date-picker
                      v-model="pd0.beginCSRQ" format="yyyy-MM-dd"
                      type="date" size="mini" value-format="yyyyMMdd"
                      placeholder="开始时间" >
                   </el-date-picker>
                   <span class="septum">-</span>
                   <el-date-picker
                       v-model="pd0.endCSRQ" format="yyyy-MM-dd"
                       type="date" size="mini" value-format="yyyyMMdd"
                       placeholder="结束时间" >
                   </el-date-picker>
                </div>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                   <span class="input-text">国家地区：</span>
                   <el-select v-model="pd.GJDQ" filterable clearable default-first-option placeholder="请选择"  size="mini" class="input-input">
                     <el-option
                       v-for="(item,ind) in $store.state.gjdq"
                       :key="ind"
                       :label="item.dm+' - '+item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                   <span class="input-text">证件种类：</span>
                   <el-select v-model="pd.ZJZL" filterable clearable default-first-option placeholder="请选择"  size="mini" class="input-input">
                     <el-option
                       v-for="(item,ind1) in $store.state.zjzl"
                       :key="ind1"
                       :label="item.dm+' - '+item.mc"
                       :value="item.dm">
                     </el-option>
                   </el-select>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">证件号码：</span>
                  <el-input placeholder="请输入内容" size="mini" v-model="pd.ZJHM" class="input-input"></el-input>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text" title="停留有效期">停留有效期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginTL" format="yyyy-MM-dd"
                       type="date" size="mini" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endTL" format="yyyy-MM-dd"
                        type="date" size="mini" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">抵达日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginDA"
                       type="datetime" size="mini" value-format="yyyyMMddHHssmm"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endDA"
                        type="datetime" size="mini" value-format="yyyyMMddHHssmm"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
               </el-col>
               <el-col  :sm="24" :md="12" :lg="24"  class="input-item">
                  <span class="input-text" style="width:10%!important">现在住址：</span>
                  <el-input placeholder="请输入内容" size="mini" v-model="pd.XZZ_Like" class="input-input" style="width:90%!important"></el-input>
               </el-col>

         </el-row>

        <el-row type="flex">
           <el-col :span="24">
              <el-button type="primary" size="small"  @click="getSubmit()">&nbsp;&nbsp;高级查询&nbsp;&nbsp;</el-button>
           </el-col>
         </el-row>
   </div>
  </div>
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      zjhm: '',
      gjshow:true,
      pd: {CSRQ_DateRange:{},TLYXQ_DateRange:{},DDRQ_DateRange:{}},
      pd0:{},
    }
  },
  mounted() {
    this.gjshow=true;
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getXB');
    this.$store.dispatch('getZjzl');
  },
  methods: {
   getCX(n){
     if(n==0){
     this.gjshow=false;
}else
{this.gjshow=true;}
   },

    getList() {

      if (this.zjhm == "") {
        this.$alert('证件号码不能为空！', '提示', {
          confirmButtonText: '确定',

        });
      } else {
        this.$router.push({
          name: 'RYHX_XQ',
          query: {
            ZJHM: this.zjhm
          }
        });
      }
    },
    getSubmit(){
      this.pd.CSRQ_DateRange.begin=this.pd0.beginCSRQ;
      this.pd.CSRQ_DateRange.end=this.pd0.endCSRQ;
      this.pd.TLYXQ_DateRange.begin=this.pd0.beginTL;
      this.pd.TLYXQ_DateRange.end=this.pd0.endTL;
      this.pd.DDRQ_DateRange.begin=this.pd0.beginDA;
      this.pd.DDRQ_DateRange.end=this.pd0.endDA;
      this.$router.push({name:'RYHXGJCX',query:{row:this.pd}});
    },
  },

}
</script>
<style scoped>
.title {
  padding: 82px 0px 36px 0px;
  font-size: 35px;
  color: #048DE7;
  font-weight: bold;
}

.ryhm {
  text-align: center;
}


.yycontent {
  background: none;
}
.inputs{
width:352px;
height: 40px;
}
.gjcx{
font-size:14px;
font-weight:400;
text-decoration:underline;
color:rgba(51,51,51,1);
height: 40px;vertical-align:bottom;margin-left: 10px;cursor:pointer; padding-right: 5px;
}
.tjsy{
  margin-top:40px; padding: 30px 60px;color:rgba(51,51,51,1);
background:rgba(255,255,255,0.2);
border:1px solid rgba(255,255,255,1);
}

</style>
<style>
.ryhm .el-input__inner {
  border-color:#BACAD7;

}
.ryhm .el-button+.el-button {
    margin-left: 5px;
}
.input-text{width: 30%!important;}
</style>
