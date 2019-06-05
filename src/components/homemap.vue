<template lang="html">
  <div class="bghome">
      <div id="mainMap" class="mapbj"></div>
         <el-dialog :title="diatext" :visible.sync="bzhDialogVisible">
           <el-table
                :data="tableData"
                style="width: 100%"
                >
                <el-table-column
                  prop="ywxm"
                  label="英文姓名">
                </el-table-column>
                <el-table-column
                  prop="zwxm"
                  label="中文姓名">
                </el-table-column>
                <el-table-column
                  prop="xb"
                  label="性别">
                </el-table-column>
                <el-table-column
                  prop="ZJYXQ"
                  label="出生日期">
                </el-table-column>
                <el-table-column
                  prop="csrq"
                  label="国家地区">
                </el-table-column>
                <el-table-column
                  prop="zjzl"
                  label="证件种类">
                </el-table-column>
                <el-table-column
                  prop="gjdq"
                  label="证件号码">
                </el-table-column>
            </el-table>
            <div class="middle-foot mt-10">
               <div class="page-msg">
                 <div class="crrcolor">
                 共{{TotalResult}}条记录
                 </div>
                 <div class="crrcolor">
                   <!-- 每页显示
                   <el-select v-model="pageSize" @change="pageSizeChange(pageSize)" placeholder="10" size="mini" class="page-select">
                     <el-option
                       v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
                     </el-option>
                   </el-select>
                   条 -->
                 </div>
                 <div class="crrcolor">
                   <!-- 共{{Math.ceil(TotalResult/pageSize)}}页 -->
                 </div>
               </div>
               <el-pagination
               background
                 @current-change="handleCurrentChange"
                 :page-size="pageSize"
                 layout="prev, pager, next"
                 :total="TotalResult">
               </el-pagination>
             </div>
           <div slot="footer">
             <img src="../assets/img/qx.png" border="0" @click="bzhDialogVisible = false" style="cursor:pointer" >
           </div>
          <div class="arrow_line" style="left:0px;top:0px; border-bottom-width:0;border-right-width:0"></div>
          <div class="arrow_line" style="right:0px;top:0px; border-bottom-width:0;border-left-width:0"></div>
          <div class="arrow_line" style="left:0px;bottom:0px; border-top-width:0;border-right-width:0"></div>
          <div class="arrow_line" style="right:0px;bottom:0px; border-top-width:0;border-left-width:0"></div>
         </el-dialog>
  </div>
</template>
<script>
import {createMapL} from '@/assets/js/SuperMap/indexmap.js'
let vm;
export default {
    data(){
      return{
        CurrentPage: 1,
        pageSize: 10,
        TotalResult: 0,
        xzqh:'',
        pd:{},
        diatext:'标准化地址',
        tableData:[],
        // tableData:[{QZQFD_DESC:'XXXXXX'}],
        options:this.pl.options,
        bzhDialogVisible:true,
        value:'',
      }
    },
    mounted(){
      window.vm=this;
      this.xzqh=this.$route.query.dqdm;
      createMapL("320116");
      // this.getpcs("320116");
      // this.getbzhdz("320116620000");
      // this.getRyxx(this.CurrentPage,this.pageSize,"320116620000");
    },
    methods:{
      pageSizeChange(val) {
          this.getRyxx(this.CurrentPage,val,this.pd);
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          this.getRyxx(val,this.pageSize,this.pd);
        console.log(`当前页: ${val}`);
      },
      //得到派出所
       getpcs(n)
        {

          var searchResult = [];
            let p={
              "yf":"Y",
              "lrdw":n,
            };
            var url=this.Global.aport+"/zxdt/getLSZSDJXXPCSList";
          this.$api.post(url, p,
              r => {

                if (r.success) {

                  this.value=r.data;
                  console.log(this.value);
                }
              });
              console.log('=====--==',this.value);
    return  searchResult;
      },

      //获取标准化地址
      getbzhdz(n){
        var searchResult = [
          { dm: '320116620000', mc: '六合分局横梁派出所', num: 111},
          { dm: '320116640000', mc: '六合分局新篁派出所', num: 111},
          { dm: '320116720000', mc: '六合分局程桥派出所', num: 111},
          ];
          let p={
            "yf":"Y",
            "lrdw":n,
          };
          var url=this.Global.aport+"/zxdt/getLSZSDJXXBZHDZList";
          this.$api.post(url, p,
            r => {
              if (r.success) {
                console.log(r.data);
                searchResult=r.data;
              }
            });
         return  searchResult;
      },
      //人员信息
      getRyxx(currentPage,showCount,bzhid)
      {
         this.diatext="标准化地址";
         let p={
           "currentPage":currentPage,
           "showCount":showCount,
           "dzdtid":bzhid,
           "yf":"Y",
           "lrdw":n,
         };
         var url=this.Global.aport+"/zxdt/getLSZSDJXXRYList";
         this.$api.post(url, p,
           r => {
             if (r.success) {
               console.log(r.data);
               searchResult=r.data;
             }
           });
         this.bzhDialogVisible=true;
      }

    }
}
</script>

<style scoped>
.bg{background: #ffffff; width: 100%; height: 100%; min-height: 700px;}
.crrcolor{color: #a9d6fd!important;}
.arrow_line {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid #06B4FB;
}
</style>

<style>
.my-div-icon {
         background: blue;
        border-radius: 50%;
        /* width: 50 !important;
        height: 50px !important; */
        line-height:50px;
        text-align: center;
        color: #ffffff;
        vertical-align: middle;
        font-weight:border;
}
</style>
