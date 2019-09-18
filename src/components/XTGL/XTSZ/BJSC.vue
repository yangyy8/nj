<template lang="html">
  <!-- 背景审查 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">性别：</span>
                    <el-select v-model="pd.XB" filterable clearable   placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.xb"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJDQ" filterable clearable   placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.gjdq"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">证件种类：</span>
                    <el-select v-model="pd.ZJZL" filterable clearable placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.zjzl"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.SJHM" class="input-input"></el-input>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="primary" size="small"  class="t-mb" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
          <el-button type="primary" size="small"  class="t-ml0" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">单条查询</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
      <el-row class="mb-15">
        <el-button type="primary"  size="small" @click="showUpload">批量导入</el-button>
        <el-button type="warning" size="small" @click="downcontent">模板下载</el-button>
        <el-button type="success" size="small" @click="download">列表导出</el-button>

        </el-row>
      <el-table
           :data="tableData"
           border
           ref="multipleTable"
           :highlight-current-row="true"
           style="width: 100%"
           >
           <!-- <el-table-column
             type="selection"
             width="55">
           </el-table-column> -->
           <el-table-column
             prop="XM"
             label="英文姓名">
           </el-table-column>
           <el-table-column
             prop="XM"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="GJDQ_DESC"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="HZHM"
             label="证件号码">
           </el-table-column>
           <el-table-column
             prop="SLSJ"
             label="案件核查结果">
           </el-table-column>
           <el-table-column
             prop="SBDWMC"
             label="通报人员核查结果">
           </el-table-column>
           <el-table-column
             prop="SBDWMC"
             label="涉警信息核查结果">
           </el-table-column>
           <!-- <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
               <div>
                  <el-button type="text"  class="a-btn"  title="处理"  icon="el-icon-tickets" @click="$router.push({name:'SLRY_XQ',query:{hiType:'slry',row:scope.row}})"></el-button>
               </div>
             </template>
           </el-table-column> -->
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
          :current-page.sync ="CurrentPage"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="TotalResult">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="上传模板" :visible.sync="uploadDialogVisible"  width="640px">
    <el-form>
    <el-row type="flex" class="mb-6">
     <el-col :span="24" class="input-item">
          <el-upload
            class="input-input"
            ref="upload"
            :action='actions+"/drnmhxqbhz/readExcel"'
            :file-list="fileList"
            multiple
            :on-success="upSuccess"
            :data="uploadIconData"
            :before-upload="beforeAvatarUpload"
            :limit="1"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <br/>
            <span slot="tip" class="el-upload__tip">只能上传EXCEL文件</span>
          </el-upload>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
  </div>

</template>
<script>
import {format} from '@/assets/js/date.js'
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {SSPCS:this.$store.state.orgid},
      options: this.pl.ps,
      tableData: [],
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      multipleSelection:[],
      selectionAll:[],
      yuid:[],
      selectionReal:[],
      uploadDialogVisible:false,
      uploadIconData:{token:this.$store.state.token},
      fileList: [],
      actions: "",
    }
  },

  activated(){
      let _this = this;
      setTimeout(function(){
        _this.getList(_this.CurrentPage, _this.pageSize, _this.pd);
      },1000)
  },
  mounted() {
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getXB');
    this.$store.dispatch('getZjzl');
    this.userCode=this.$store.state.uname;
    this.userName=this.$store.state.uid;
    this.orgCode=this.$store.state.orgname;
    this.orgName=this.$store.state.orgid
  },
  methods: {
    // selectfn(a,b){
    //   this.multipleSelection = a;
    //   this.dataSelection()
    // },
    // dataSelection(){
    //   // console.log('this.multipleSelection',this.multipleSelection)
    //   this.selectionReal.splice(this.CurrentPage-1,1,this.multipleSelection);
    //   // console.log('this.selectionReal',this.selectionReal);
    //   this.selectionAll=[];
    //   for(var i=0;i<this.selectionReal.length;i++){
    //     if(this.selectionReal[i]){
    //       for(var j=0;j<this.selectionReal[i].length;j++){
    //         this.selectionAll.push(this.selectionReal[i][j])
    //       }
    //     }
    //   }
    //   // console.log('this.selectionAll',this.selectionAll);
    // },
    upSuccess(r) {
      if (r.success) {
        this.$message({
          message: r.data,
          type: 'success'
        });

      } else {
        this.$message.error(r.message);
      }
      this.uploadDialogVisible = false;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    beforeAvatarUpload(file) {
      console.log(file.type)
      const isEXL = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      const isExls=file.type==='application/vnd.ms-excel';

      if (!isEXL && !isExls) {
        this.$message.error('上传文件只能是 xlsx或者xls 格式!');
      }
      return isEXL?isEXL:isExls;
    },
    showUpload() {
      this.uploadDialogVisible = true;
      this.typemd = "";
      this.actions = window.IPConfig.IP+this.Global.aport3;
      console.log(this.$refs.upload)
      if (this.$refs.upload) {
        this.$refs.upload.clearFiles();
      }
    },
    submitUpload() {
      if (this.$refs.upload.uploadFiles.length == 0) {
        this.$message({
          message: '请先选择文件！',
          type: 'warning'
        });
        return
      }
      this.$refs.upload.submit();
    },
    downcontent() {
      var url= window.IPConfig.IP +"/"+ this.Global.aport3 + '/webapp/templateFile/难民和寻求庇护者导入模板.xlsx';
      console.log('dddd,',url);
      window.location.href =url;
    },
    download(){
      let p={};
      // if(this.selectionAll.length==0){//全部导出
      //    p={
      //     "pd":this.pd,
      //     "orderBy":'BJSJ',
      //     "orderType":'DESC'
      //   }
      // }else{//导出选中
      //   this.yuid=[];
      //   for(var i in this.selectionAll){
      //     this.yuid.push(this.selectionAll[i].YJID)
      //   };
      //   this.pd.YJID=this.yuid;
      //    p={
      //     "pd":this.pd,
      //     "orderBy":'BJSJ',
      //     "orderType":'DESC',
      //   }
      // }
      this.$api.post(this.Global.aport4+'/warningInfoController/exportByMxLx',p,
        r =>{
          this.downloadM(r)
        },e=>{},{},'blob')
    },
    downloadM (data) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/xls"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', '背景审查'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
      console.log(`当前页: ${val}`);
    },
    getList(currentPage, showCount, pd) {
      if(pd.hasOwnProperty('YJID')){
        delete pd['YJID']
      }
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "orderBy":'SBSJ',
        "orderType":'DESC',
      };
      this.$api.post(this.Global.aport4+'/SLRYSBWarningInfoController/getInfoList', p,
        r => {
          if(r.success){
            this.tableData = r.data.resultList;
            this.TotalResult = r.data.totalResult;
            if(this.selectionReal.length==0){//声明一个数组对象
              this.selectionReal=new Array(Math.ceil(this.TotalResult/showCount))
            }
            this.$nextTick(()=>{
              this.multipleSelection=[]
              for(var i=0;i<this.tableData.length;i++){
                for(var j=0;j<this.selectionAll.length;j++){
                  if(this.tableData[i].YJID==this.selectionAll[j].YJID){
                    this.$refs.multipleTable.toggleRowSelection(this.tableData[i],true);
                  }
                }
              }
            })
          }
        })
    },
  }
}
</script>
<style scoped>

</style>
