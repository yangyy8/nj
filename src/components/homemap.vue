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
        options:this.pl.options,
        bzhDialogVisible:false,
        lrdw:'320116',
        lrdwmc:'六合区',
        rs:'34',
        type:'L',
        yf:'Y',
        sevalue:[],
      }
    },
    mounted(){
      window.vm=this;
      this.lrdw=this.$route.query.dqdm;
      this.type=this.$route.query.type;
      this.rs=this.$route.query.rs;
      this.lrdwmc=this.$route.query.mc;
      this.yf=this.$route.query.yf;
      createMapL(this.lrdw,this.lrdwmc,this.rs);
      //this.getpcs("320116");
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
      getpcs(n,callback)
        {

          var searchResult = [];
            let p={
              "lrdw":this.lrdw,
              "yf":this.yf,

            };
            var url=this.Global.aport+"/zxdt/getLSZSDJXXPCSList";
           this.$api.post(url, p,
              r => {
                if (r.success) {
                  var arr=r.data;
                  for (var i = 0; i < arr.length; i++) {
                  searchResult.push(arr[i]);
                  }
                  console.log('-----111',searchResult);
                  callback && callback(searchResult)
                }
              });
      },
      //获取标准化地址
      getbzhdz(n,callback){
          console.log('---',n);
        var searchResult = [];
          let p={
            "yf":this.yf,
            "lrdw":n,
          };
          var url=this.Global.aport+"/zxdt/getLSZSDJXXBZHDZList";
          this.$api.post(url, p,
            r => {
              if (r.success) {
                var arr=r.data;
                for (var i = 0; i < arr.length; i++) {
                searchResult.push(arr[i]);
                }
                console.log('-----222',searchResult);
                callback && callback(searchResult)
              }
            });
      },
      //人员信息
      getRyxx(currentPage,showCount,bzhid,mc)
      {
        console.log('this.lrdw',this.lrdw);
         this.diatext=mc;
         let p={
           "currentPage":currentPage,
           "showCount":showCount,
           "dzdtid":bzhid,
           "yf":this.yf,
           "lrdw":this.lrdw,
         };
         var url=this.Global.aport+"/zxdt/getLSZSDJXXRYList";
         this.$api.post(url, p,
           r => {
             if (r.success) {
               console.log(r.data);
               this.tableData=r.data;
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
        background: url(../assets/img/tb/mapt.png) no-repeat;
        background-position: 100% 100%;
        color: #ffffff;
        vertical-align: middle;
        font-weight:border;
}
.icon1{background: url(../assets/img/tb/map1.png)  no-repeat;}
</style>
