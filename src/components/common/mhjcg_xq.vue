<template lang="html">
<el-form :model="mhinfo">
    <el-row :gutter="2"  class="mb-6">
        <el-col :span="8" class="input-item">
          <span class="input-text">航班号：</span>
          <span class="input-input detailinput">  {{mhinfo.FLT_NUMBER}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">航班日期：</span>
          <span class="input-input detailinput">  {{mhinfo.FLT_DATE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">离港时间：</span>
         <span class="input-input detailinput">  {{mhinfo.STA_DEPTTM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">进港时间：</span>
         <span class="input-input detailinput">  {{mhinfo.STA_ARVETM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客英文姓名：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_NAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客中文姓名：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_CHNNAME}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客状态：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_STATUS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客性别：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_GENDER}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">证件类型：</span>
          <span class="input-input detailinput">  {{mhinfo.CERT_TYPE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">证件号码：</span>
          <span class="input-input detailinput">  {{mhinfo.CERT_NO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">身份类型：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_TYPE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客登机号信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_BRDNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">当前航站的座位号：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_SEATNBR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客舱位信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_CLASS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">旅客座位信息：</span>
          <span class="input-input detailinput">  {{mhinfo.PSR_SEG_SEATNBR}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">数据来源：</span>
          <span class="input-input detailinput">  {{mhinfo.DATASOURCE}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">电话：</span>
          <span class="input-input detailinput">  {{mhinfo.TELNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">舱位：</span>
          <span class="input-input detailinput">  {{mhinfo.PAXCLASS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">居住地址：</span>
          <span class="input-input detailinput">  {{mhinfo.ADRESS}}</span>
        </el-col>
    </el-row>

</el-form>
</template>
<script>
export default {
  name:'MHXX',
  props:['type','xid'],
  data(){
    return{
      mhinfo:{},
      page:this.type,
      id:this.xid,
      pp:{},
    }
  },
  mounted(){
      this.initData();
   },
  watch:{
      type: function(val){
        this.page=val;
      },
      xid:{
        handler(val){
        this.id=val;
        this.initData()
      },
      immediate: true
      },
    },

  methods:{
    initData(){
      switch (this.page) {
        case 2://人员画像
            this.getData2();
            break;
        default:
      }
    },

    getData2(){
      this.pp.RGUID=this.id;
      let p = {
        "pd": this.pp
      };
       this.$api.post(this.Global.aport3+'/ryhx/getstmhjgxxn', p,
        r => {

          if(r.data.resultList.length){
          this.mhinfo=r.data.resultList[0];
         }
      })
    },
  },
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

.el-carousel__item img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.el-carousel__item:nth-child(2n) {
  /* background: url(../../../assets/img/t1.png); */
  background-size: 100% 100%;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.crcolor {
  background: #EFF3F6;padding:0 10px;
}
.input-text {
  text-align: left !important; width: 30%!important;
}
.input-input {
  width: 60%!important;
}
</style>
<style>
  .el-button+.el-button{margin-left: 0!important;}
  .yycontent .el-checkbox{margin-left: 20px!important; line-height: 30px;}
  .yycontent .el-checkbox+.el-checkbox{margin-left: 20px!important;}
  .bj .el-dialog__wrapper {
    background: #000;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
