<template>
  <el-form :model="form">
    <el-row type="flex" class="crcolor">
      <el-col :span="22">
        <el-row :gutter="2">
          <el-col :span="8">
            <span  class="yy-input-text">英文姓：</span>
              <el-input placeholder="" size="small" v-model="form.YWX"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text">英文名：</span>
            <el-input placeholder="" size="small" v-model="form.YWM"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text">通报编号：</span>
            <el-input placeholder="" size="small" v-model="form.TBBH"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text">性别：</span>
            <el-input placeholder="" size="small" v-model="form.XB_DESC"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text">出生日期：</span>
            <el-input placeholder="" size="small" v-model="form.CSRQ"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text">入库时间：</span>
            <el-input placeholder="" size="small" v-model="form.RKSJ"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text">发布时间：</span>
            <el-input placeholder="" size="small" v-model="form.FBSJ"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text">通报类型：</span>
            <el-input placeholder="" size="small" v-model="form.TBRYZL"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="24">
            <span class="yy-input-text" style="width:11.7%!important">备注：</span>
            <el-input placeholder="" size="small" v-model="form.BZ"  class="input-input" style="width:87.8%!important"></el-input>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2" style="min-width:138px;">
        <el-carousel height="160px" style="width:128px" class="photoCar">
          <el-carousel-item v-for="(item,ind) in imagess" :key="ind" v-if="imgshow1">
            <img  :src="item.ZPNR" style="height:160px;width:128px;">
          </el-carousel-item>
          <el-carousel-item v-if="!imgshow1">
            <img src="../../assets/img/mrzp.png">
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <div class="stu-footerd">
      <div class="yylbt">证件列表</div>
      <el-table
         :data="tableData1"
         border
         style="width: 100%" class="stu-table"
         >
         <el-table-column
           prop="ZJZL_DESC"
           label="证件种类">
         </el-table-column>
         <el-table-column
           prop="ZJHM"
           label="证件号码">
         </el-table-column>
       </el-table>
    </div>
    <div class="stu-footerd">
      <el-row type="flex">
        <el-col :span="11">
          <div class="yylbt">国家地区</div>
          <el-table
             :data="tableData2"
             border
             style="width: 100%" class="stu-table"
             >
             <el-table-column
               prop="GJDQ_DESC"
               label="国家地区">
             </el-table-column>
           </el-table>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="11">
          <div class="yylbt">请求国</div>
          <el-table
             :data="tableData3"
             border
             style="width: 100%" class="stu-table"
             >
             <el-table-column
               prop="GJDQ_DESC"
               label="请求国">
             </el-table-column>
           </el-table>
         </el-col>
      </el-row>

    </div>
    <div class="stu-footerd">
      <div class="yylbt">案由信息</div>
      <el-table
         :data="tableData4"
         border
         style="width: 100%" class="stu-table"
         >
         <el-table-column
           prop="SJNAME"
           label="附件名称">
         </el-table-column>
         <el-table-column
          prop="SJPAPERTYPE"
          label="附件类型">
         </el-table-column>
         <el-table-column
           prop="CREATETIME"
           label="上传时间">
         </el-table-column>
         <el-table-column
           label="操作" width="80">
           <template slot-scope='scope'>
            <a @click="downLoad"><el-button type="text"  class="a-btn"  title="下载"  icon="el-icon-download"></el-button></a>
          </template>
         </el-table-column>
       </el-table>
    </div>
  </el-form>
</template>
<script>
export default {
  name:'TBRY',
  props:['type','xid','rybh'],
  data(){
    return{
      form:{},
      page:this.type,
      id:this.xid,
      tableData1:[],
      tableData2:[],
      tableData3:[],
      tableData4:[],
      imagess: [],
      imgshow1:false,
      imgshow2:true,
      typet:'1',
      shm:true,
      lg:false,
      pp:{},
    }
  },
  mounted(){
   this.$nextTick(()=>{
    this.getData0(this.id);
    this.getPhoto()
  });

  },
  watch:{
      type: function(val){
        this.page=val;
      },
      xid:{
        handler(val){
        this.id=val;
        this.getData0(val);
        this.getPhoto()
      },
      immediate: true
      },
    },

  methods:{
    getData0(xid){
      this.pp.RGUID=xid;
      let p = {
        "pd": this.pp
      };
      this.$api.post(this.Global.aport4+'/eS_Tbry_GroupController/getTongBaoGroupInfoByRGUID', p,
        r => {
          this.form=r.data.eS_TBRY_JBXXEntity;
          this.tableData1=r.data.eS_TBRY_ZJXXList;
          this.tableData2=r.data.eS_TBRY_GJDQ_GJList;;
          this.tableData3=r.data.eS_TBRY_GJDQ_QQGList;
          this.tableData4=r.data.eS_TBRY_PAPER_QTList;
      })
    },
    getPhoto(){
      let p={
        RYBH:this.rybh,
        YWLB:"0005"
      }
      this.$api.post(this.Global.aport4+'/eS_RY_TPXXController/getResultListByParams',p,
        r =>{
          if(r.success){
            this.imagess=r.data.resultList;
            this.imagess.length!=0?this.imgshow1=true:this.imgshow1=false;
          }
        })
    },
    downLoad(){
      let p={
        "pd":{RGUID:this.id}
      }
      this.$api.post(this.Global.aport4+'/eS_Tbry_GroupController/getTongBaoPAPERInfoByRGUID',p,
       r =>{
          this.downloadM(r)
       },e=>{},{},'blob')
    },
    downloadM (data) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/pdf"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        console.log(url)
        link.setAttribute('download', '通报人员.pdf')
        document.body.appendChild(link)
        link.click()
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
