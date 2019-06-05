<template lang="html">
  <!-- 人员批量查询 -->
  <div class="yymain">

    <div class="yycontent">
      <el-row class="mb-15">
        <el-button type="primary"  size="small" @click="showUpload">批量导入查询</el-button>
        </el-row>
      <el-table
           ref="multipleTable"
           :data="tableData"
           border
           style="width: 100%"
           @selection-change="handleSelectionChange">
           <el-table-column
             prop="ZWXM"
             label="中文姓名" v-if="zwshow" key="1">
           </el-table-column>
           <el-table-column
             prop="YWXM"
             label="英文姓名" v-if="ywshow"  key="2">
           </el-table-column>
           <el-table-column
             prop="XB_DESC"
             label="性别" v-if="xbshow"  key="3">
           </el-table-column>

           <el-table-column
             prop="GJDQ_DESC"
             label="国家地区" v-if="gjshow"  key="4">
           </el-table-column>
           <el-table-column
             prop="ZJHM"
             label="证件号码" v-if="zjshow"  key="5">
           </el-table-column>
           <el-table-column
             prop="TOTAL"
             label="匹配人数">
           </el-table-column>
           <el-table-column
             label="操作" width="80">
             <template slot-scope="scope">
                 <el-button type="text" v-if="scope.row.TOTAL!=0"  class="a-btn"  title="显示详情"  icon="el-icon-document" @click="$router.push({name:'RYHXGJCX_D',query:{row:scope.row}})"></el-button>
                 <span v-else>无</span>
             </template>
           </el-table-column>
         </el-table>
     <!-- <div class="middle-foot">
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
      </div> -->
    </div>
    <el-dialog title="上传模板" :visible.sync="uploadDialogVisible"  width="640px">
    <el-form>
    <el-row  :gutter="1" class="mb-6">
      <el-col :span="24" class="input-item">
        <el-checkbox-group v-model="checkList">
         <el-checkbox label="ZWXM" value="ZWXM">中文姓名</el-checkbox>
         <el-checkbox label="YWXM" value="YWXM">英文姓名</el-checkbox>
         <el-checkbox label="XB" value="XB">性别</el-checkbox>
         <el-checkbox label="GJDQ" value="GJDQ">国家地区</el-checkbox>
         <el-checkbox label="ZJHM" value="ZJHM">证件号码</el-checkbox>
       </el-checkbox-group>
      </el-col>
     <el-col :span="24" class="input-item">
          <el-upload
            class="input-input"
            ref="upload"
            :action='actions+"/ryhx/gettjxx"'
            :file-list="fileList"
            multiple
            :on-success="upSuccess"
            :data="uploadIconData"
            :before-upload="beforeAvatarUpload"
            :limit="1"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">查询</el-button>
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
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {},
      nation: [],
      checkList:[],
      fileList: [],
      actions: "",
      zwshow:true,
      ywshow:true,
      gjshow:true,
      zjshow:true,
      xbshow:true,
      uploadDialogVisible: false,
      editform:{},
      uploadIconData:{},
      mapForm:{},
      options:this.pl.options,
      tableData: [],
    }
  },
  mounted() {
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getXB');
    // this.getList(this.CurrentPage, this.pageSize, this.pd);
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
        "pd": pd,
      };
      this.$api.post(this.Global.aport3+'/ryhx/gettjxx', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
    upSuccess(r) {
      if (r.success) {
       this.zwshow=false;
       this.ywshow=false;
       this.xbshow=false;
       this.gjshow=false;
       this.zjshow=false;
        console.log(this.checkList);
        var  arr=this.checkList;
          for (var i = 0; i < arr.length; i++) {
          switch (arr[i]) {
            case "ZWXM":
               this.zwshow=true;
              break;
            case "YWXM":
              this.ywshow=true;
              break;
            case "XB":
               this.xbshow=true;
               break;
            case "GJDQ":
                this.gjshow=true;
                break;
            case "ZJHM":
                this.zjshow=true;
                break;
            default:

           }
          }

        this.tableData = r.data;

      } else {
        this.$message.error(r.message);
      }
      this.uploadDialogVisible = false;
      // this.getList(this.CurrentPage, this.pageSize, this.pd);
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

        console.log('this.uploadIconData',this.uploadIconData);
        if(this.checkList.length==0){
          this.$message({
            message: '请先选择类型！',
            type: 'warning'
          });
          return
        }
      if (this.$refs.upload.uploadFiles.length == 0) {
        this.$message({
          message: '请先选择文件！',
          type: 'warning'
        });
        return
      }
      this.uploadIconData.type=this.checkList;

      this.$refs.upload.submit();
    },
    download() {
       window.location.href = window.IPConfig.IP +"/"+this.Global.aport3 + '/webapp/templateFile/临住布控导入模板.xlsx'
    },
  }
}
</script>

<style scoped>

</style>
<style>

</style>
