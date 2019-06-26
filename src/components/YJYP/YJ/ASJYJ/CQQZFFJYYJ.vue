<template lang="html">
    <!-- 持长期签证非法就业预警(留学生非法预警) -->
      <div class="yymain ">
        <!-- 地图 -->

        <div id="mainMap" class="mapbj lzxx"></div>

        <!-- 查询导航 -->
        <div class="fxleft">
             <div class="fxbnt">
               <el-button  size="mini" type="primary" @click="changtab()" v-if="show" icon="iconfont el-icon-yy-xiangshangjiantou" style="border-radius:0px!important;border-width: 1px 1px 0px 1px"></el-button>
               <el-button  size="mini" type="primary" @click="changtab()" v-else icon="iconfont el-icon-yy-xiangxiajiantou" style="border-radius:0px!important;"></el-button>
             </div>
             <el-collapse-transition>
             <div class="fxcont" v-if="show">
                <el-row :gutter="1">
                  <el-col  :span="24">
                     <span class="input-text" style="width:25%!important;">距离设置：</span>
                     <el-input-number v-model="jlsz" controls-position="right" size="mini" :min="5" :max="10"></el-input-number>
                     <span style="font-size:12px;">公里</span>
                  </el-col>
                  <el-col :span="24">
                    <span style="font-size:12px; color:red">* 距离设置区间5-10</span>
                  </el-col>
                </el-row>
                <div class="resultpaneltitle" @click="getGX()">点击获取南京高校列表</div>
                <div id="resultpanel" v-for="item in datastr">
                    <div class="fflist" @click="getInfo(item.jgid,item.mc)">
                      {{item.mc}}
                     </div>
                </div>
             </div>
            </el-collapse-transition>
        </div>


        <div class="bghome">
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
                   label="性别" width="60">
                 </el-table-column>
                 <el-table-column
                   prop="csrq"
                   label="出生日期">
                 </el-table-column>
                 <el-table-column
                   prop="gjdq"
                   label="国家地区">
                 </el-table-column>
                 <el-table-column
                   prop="zjzl"
                   label="证件种类">
                 </el-table-column>
                 <el-table-column
                   prop="zjhm"
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
                  :current-page.sync ="CurrentPage"
                  :page-size="pageSize"
                  layout="prev, pager, next"
                  :total="TotalResult">
                </el-pagination>
              </div>
            <div slot="footer">
              <img src="../../../../assets/img/qx.png" border="0" @click="bzhDialogVisible = false" style="cursor:pointer" >
            </div>
           <div class="arrow_line" style="left:0px;top:0px; border-bottom-width:0;border-right-width:0"></div>
           <div class="arrow_line" style="right:0px;top:0px; border-bottom-width:0;border-left-width:0"></div>
           <div class="arrow_line" style="left:0px;bottom:0px; border-top-width:0;border-right-width:0"></div>
           <div class="arrow_line" style="right:0px;bottom:0px; border-top-width:0;border-left-width:0"></div>
          </el-dialog>
        </div>
      </div>
</template>
<script scoped>
import {ToArray} from '@/assets/js/ToArray.js'
import {createMapL,createDWMap} from '@/assets/js/SuperMap/ffjymap.js'
let ffvm;
export default {
  data(){
    return{
      CurrentPage: 1,
      pageSize: 5,
      TotalResult: 0,
       pd:{},
       swdw:[],
       show:true,
       bzhshow:false,
       lgshow:false,
       jlsz:10,
       pcs:[],
       xzqh:[],
       tableData:[],
       datastr:[],
       bzhDialogVisible:false,
       diatext:'标准化地址',
       bzhid:'',
       mc:'',
       lrdw:'',
    }
  },
  mounted() {
    window.ffvm=this;
    createMapL();
  },
  methods:{
    pageSizeChange(val) {
        this.getRyxx(this.CurrentPage,val,this.bzhid,this.mc,this.lrdw);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
        this.getRyxx(val,this.pageSize,this.bzhid,this.mc,this.lrdw);
      console.log(`当前页: ${val}`);
    },
      changtab(){
        this.show=!this.show;
      },
      changeTSY(t){
        if(t=="1"){
          this.lgshow=true;
          this.bzhshow=false;
        }else if(t=="2"){
          this.lgshow=false;
          this.bzhshow=true;
        }else {
          this.lgshow=false;
          this.bzhshow=false;
        }
      },
      getPcs(){
        var url=this.Global.aport1+this.Global.pcs;
        this.$api.get(url,null,
        r=>{
          this.pcs=ToArray(r.data);
        })
      },
      getXzqh(){
        var url=this.Global.aport1+this.Global.xzqh;
        this.$api.get(url,null,
        r=>{
          this.xzqh=ToArray(r.data);
        })
      },
    doset(){
       this.$set(this.pd,"dwlb",'');

    },
    getGX(){
      this.$api.get(this.Global.aport1+'/servicemap/getUniversity',null,
         r=>{
           console.log(r.data);
          this.datastr=r.data;
         });
    },
    getInfo(dm,mc)
    {  this.show=!this.show;
          createDWMap(dm,mc);
    },
    getXXDZ(dm,callback)
    {
      // let p={
      //     "xxbh":dm,
      // };
      // this.$api.post(this.Global.aport+'/zxdt/getXXDZList',p,
      //    r=>{
      //      console.log(r.data[0].DZXQ);
      //      callback(r.data[0].DZXQ);
      //    });

    var searchResult = [
      {dm:'32010100000001915459',count:11},
      {dm:'32010100000001917524',count:21},
      {dm:'32010100000001916677',count:58},
    ];
    callback(searchResult);
    },
    //人员信息
    getRyxx(currentPage,showCount,bzhid,mc,lrdw)
    {
      if(currentPage==1){
        this.CurrentPage=1;
      }
       this.bzhid=bzhid;
       this.mc=mc;
       this.lrdw=lrdw;
       this.diatext=this.mc;

       let p={
         "currentPage":currentPage,
         "showCount":showCount,
         "dzdtid":this.bzhid,
         "yf":'Y',
         "lrdw":this.lrdw,
       };
       var url=this.Global.aport+"/zxdt/getLSZSDJXXRYList";
       this.$api.post(url, p,
         r => {
           if (r.success) {
             console.log(r.data);
             this.tableData=r.data.resultList;
             this.TotalResult=r.data.totalResult;
           }
         });
       this.bzhDialogVisible=true;
    }
  },
}
</script>

<style scoped>
.yy-input-text{text-align: left!important; width: 25%!important;}
.yy-input-input{width: 70%!important;}
.resultpaneltitle {
    color: #fff;
    background-color: #3992d0;
    text-align:center;
    font-size:15px;
    margin-right: 10px;cursor: pointer;
  }
#resultpanel{line-height: 25px; font-size: 12px;}
.fflist{color: #333333; cursor: pointer;}
.fflist:hover{color: #0E93DA}
.arrow_line {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid #06B4FB;
}

</style>
<style>
.lzxx  .my-div-icon {
        background-color: rgba(0, 167, 91, 0.8);
        border-radius: 50%;

        line-height:20px;
        text-align: center;
        vertical-align: middle;
    }
.lzxx  .lz {
		background:url(../../../../assets/img/tb/location_blue.png) no-repeat;font-size:12px; font-weight: bold;color: #ffffff;
		}

.lzxx	.cz {
			background-color: rgba(155, 0, 0, 0.8);
		}
  .bghome .el-dialog{ width: 70%!important;}
</style>
