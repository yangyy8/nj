<template lang="html">
    <el-form :model="form"  class="crcolor" style="padding:10px;line-height:35px;">
              <el-row type="flex">
                <el-col :span="16">
                  <el-row :gutter="2">
                    <el-col :span="12">
                      <span  class="yy-input-text">英文姓：</span>
                        <el-input placeholder="" size="small" v-model="form.YWX"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">英文名：</span>
                      <el-input placeholder="" size="small" v-model="form.YWM"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">英文姓名：</span>
                      <el-input placeholder="" size="small" v-model="form.YWXM"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">中文姓名：</span>
                      <el-input placeholder="" size="small" v-model="form.ZWXM"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">证件种类：</span>
                      <el-input placeholder="" size="small" v-model="form.ZJZL_DESC"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">证件号码：</span>
                      <el-input placeholder="" size="small" v-model="form.ZJHM"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">国家地区：</span>
                      <el-input placeholder="" size="small" v-model="form.GJDQ_DESC"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">出生日期：</span>
                      <el-input placeholder="" size="small" v-model="form.CSRQ"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">性别：</span>
                      <el-input placeholder="" size="small" v-model="form.XB_DESC"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text">身份证号：</span>
                      <el-input placeholder="" size="small" v-model="form.SFZH"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12" >
                      <span class="yy-input-text">签证种类：</span>
                      <el-input placeholder="" size="small" v-model="form.QZZL_DESC"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12" >
                      <span class="yy-input-text" title="签证(注)号码">签证(注)号码：</span>
                        <el-input placeholder="" size="small" v-model="form.QZHM"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12" >
                      <span class="yy-input-text">签发机关：</span>
                      <el-input placeholder="" size="small" v-model="form.QFD_DESC"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12" >
                      <span class="yy-input-text" title="签证(注)有效期至">停留有效期至：</span>
                        <el-input placeholder="" size="small" v-model="form.TLYXQ"  class="yy-input-input"></el-input>
                    </el-col>

                    <el-col :span="12">
                      <span class="yy-input-text" title="签证签发日期">签证签发日期：</span>
                          <el-input placeholder="" size="small" v-model="form.QFRQ"  class="yy-input-input"></el-input>
                    </el-col>
                    <el-col :span="12">
                      <span class="yy-input-text" title="与境外联系人员">与境外联系人员：</span>
                      <el-input placeholder="" size="small" v-model="form.QSGX_DESC"  class="yy-input-input"></el-input>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="8">
                  <el-carousel height="280px">
                    <el-carousel-item v-for="(item,ind) in imagess" :key="ind" v-if="imgshow1">
                      <img  :src="item.tp" >
                    </el-carousel-item>
                    <el-carousel-item v-if="imgshow2">
                      <img src="../../assets/img/t1.png">
                    </el-carousel-item>
                  </el-carousel>
                </el-col>
              </el-row>

              <el-row :gutter="3" >
                <el-col :span="8">
                  <span class="yy-input-text">入境日期：</span>
                  <el-input placeholder="" size="small" v-model="form.RJRQ"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="8">
                  <span class="yy-input-text">入境口岸：</span>
                  <el-input placeholder="" size="small" v-model="form.RJKA_DESC"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="8">
                  <span class="yy-input-text">入境事由：</span>
                  <el-input placeholder="" size="small" v-model="form.JLSY_DESC"  class="yy-input-input"></el-input>
                </el-col>
              </el-row>

              <el-row :gutter="3" >

                <el-col :span="8">
                  <span class="yy-input-text">入住日期：</span>
                  <el-input placeholder="" size="small" v-model="form.ZSRQ"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="8">
                  <span class="yy-input-text" title="拟离开日期">拟离开日期：</span>
                    <el-input placeholder="" size="small" v-model="form.NLKRQ"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="8">
                  <span class="yy-input-text">接待单位：</span>
                    <el-input placeholder="" size="small" v-model="form.JDDW"  class="yy-input-input"></el-input>
                </el-col>

              </el-row>
              <el-row :gutter="3" >
                <el-col :span="8" class="crcolor">
                  <span class="yy-input-text">投宿于：</span>
                  <el-radio v-model="typet" label="1" disabled >社会面</el-radio>
                  <el-radio v-model="typet" label="2" disabled >旅馆</el-radio>
                </el-col>
                <el-col :span="16" v-if="shm1"  class="crcolor">
                  <span class="yy-input-text" title="标准化地址" style="width:17.4%">标准化地址：</span>
                   <el-input placeholder="" size="small" v-model="form.BZHDZMC"  class="input-input" style="width:80%!important"></el-input>
                </el-col>
                <el-col :span="16" v-if="shm2"  class="crcolor">
                  <span class="yy-input-text" style="width:17.4%">旅馆名称：</span>
                   <el-input placeholder="" size="small" v-model="form.DJDWMC"   class="input-input" style="width:80%!important"></el-input>
                </el-col>
                <el-col :span="8"  class="crcolor">
                  <span class="yy-input-text">房号：</span>
                  <el-input placeholder="" size="small" v-model="form.FH"  class="yy-input-input"></el-input>
                </el-col>

                <el-col :span="8">
                  <span class="yy-input-text" title="本人联系电话">本人联系电话：</span>
                  <el-input placeholder="" size="small" v-model="form.BRLXDH"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="8">
                  <span class="yy-input-text" title="紧急情况联系人">紧急情况联系人：</span>
                      <el-input placeholder="" size="small" v-model="form.JJLXR"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="8">
                  <span class="yy-input-text" title="紧急情况联系电话">紧急情况联系电话：</span>
                  <el-input placeholder="" size="small" v-model="form.JJLXDH"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="8"   class="crcolor">
                  <span class="yy-input-text">派出所名称：</span>
                    <el-input placeholder="" size="small" v-model="form.LRDW_DESC"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="8">
                  <span class="yy-input-text" title="留宿单位(户主)电话" >留宿单位(户主)电话：</span>
                  <el-input placeholder="" size="small" v-model="form.LSDWDH"  class="yy-input-input"></el-input>
                </el-col>
                 <el-col :span="8">
                    <span class="yy-input-text">房屋性质：</span>
                    <el-input placeholder="" size="small" v-model="form.ZFZL_DES"  class="yy-input-input"></el-input>
                  </el-col>
                <el-col :span="16">
                  <span class="yy-input-text" title="留宿单位(户主)" style="width:17.4%">留宿单位(户主)：</span>
                  <el-input placeholder="" size="small" v-model="form.LSDW"  class="input-input" style="width:80%!important"></el-input>
                </el-col>
                <el-col :span="8">
                  <span class="yy-input-text" title="房主身份证号">房主身份证号：</span>
                    <el-input placeholder="" size="small" v-model="form.FZSFZH"  class="yy-input-input"></el-input>
                </el-col>
              </el-row>
              <el-row :gutter="3" >
                <el-col :span="8">
                  <span class="yy-input-text">录入人：</span>
                    <el-input placeholder="" size="small" v-model="form.DJ"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="8">
                  <span class="yy-input-text">录入单位：</span>
                  <el-input placeholder="" size="small" v-model="form.LRDW_DESC"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="8">
                  <span class="yy-input-text">录入日期：</span>
                  <el-input placeholder="" size="small" v-model="form.LRRQ"  class="yy-input-input"></el-input>
                </el-col>
              </el-row>
              <el-row :gutter="3">
                <el-col :span="8">
                  <span class="yy-input-text">修改人：</span>
                      <el-input placeholder="" size="small" v-model="form.GXR"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="8" >
                  <span class="yy-input-text">修改单位：</span>
                      <el-input placeholder="" size="small" v-model="form.GXDW"  class="yy-input-input"></el-input>
                </el-col>
                <el-col :span="8" >
                  <span class="yy-input-text">修改日期：</span>
                      <el-input placeholder="" size="small" v-model="form.GXSJ"  class="yy-input-input"></el-input>
                </el-col>
              </el-row>

</el-form>

</template>
<script>
export default {
  name:'LZXX',
  props:['type','xid'],
  data(){
    return{
      form:{},
      page:this.type,
      id:this.xid,
      imagess: [],
      imgshow1:false,
      imgshow2:true,
      typet:'1',
      shm1:true,
      shm2:true,
      pp:{},
    }
  },

  mounted(){
    console.log('======--------'+this.id);
    this.initData();
  },
  watch:{
    type:{
      handler(val){
      this.page=val;
      this.initData()
    },
    immediate: true
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
        case 0://出租屋和重点出租屋/重点国家
          this.getData0();
          break;
        case 1://留学生
            this.getData1();
            break;
        case 2://人员画像
            this.getData2();
            break;
        default:

      }

    },
    getData0(){
      this.form={};
      var arr=this.id.split(',');
      if(arr.length>1){
         this.pp.ZJHM=arr[0];
         this.pp.GJDQ=arr[1];
      }else {
         this.pp.DTID=this.id;
      }

      let p = {
        "pd": this.pp
      };

      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getEntityByDTID', p,
        r => {
          this.form=r.data;


          if(r.data.LB_SFBG=="2"){
            console.log('-----',r.data.LB_SFBG);

            this.shm1=false;
            this.shm2=true;
          }else if(r.data.LB_SFBG=="1"){
            this.shm1=true;
            this.shm2=false;
          }else {
            this.shm1=true;
            this.shm2=true;
          }
      this.typet=r.data.LB_SFBG;
      })
    },
    getData1(){
      this.form={};
      this.pp.DTID=this.id;
      console.log('---',this.id);
      let p = {
        "pd": this.pp
      };
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getResultListByParams', p,
        r => {
          this.form=r.data.resultList[0];
          this.typet=r.data.resultList[0].LB_SFBG;
          if(this.typet=="2"){
            this.shm1=true;
            this.shm2=false;
          }else if(this.typet=="1"){
            this.shm1=false;
            this.shm2=true;
          }else {
            this.shm1=true;
            this.shm2=true;
          }
      })
    },
    getData2(){
      this.form={};
      this.pp.RGUID=this.id;
      console.log('---',this.id);
      let p = {
        "pd": this.pp
      };
      this.$api.post(this.Global.aport3+'/ryhx/getlzlzxx', p,
        r => {
          if(r.data.resultList.length){
            this.form=r.data.resultList[0]
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
  background: #EFF3F6;
}
.yy-input-text {
  text-align: left !important;
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
