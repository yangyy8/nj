<template lang="html">
    <!-- 重点区域监控分析  -->
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
                  <el-col :span="24">
                      <span class="yy-input-text"><font color=red>*</font>时间范围：</span>
                        <el-date-picker class="yy-input-input"
                           v-model="pd.beginTime" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyyMMdd"
                           placeholder="开始时间" >
                        </el-date-picker>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text"></span>
                        <el-date-picker class="yy-input-input"
                            v-model="pd.endTime" format="yyyy-MM-dd"
                            type="date" size="small" value-format="yyyyMMdd"
                            placeholder="结束时间" >
                        </el-date-picker>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">国家地区：</span>
                      <el-select v-model="pd.gjdq" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind1) in $store.state.gjdq"
                          :key="ind1"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>

                  <el-col :span="24">
                      <span class="yy-input-text">签证种类：</span>
                      <el-select v-model="pd.qzzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in $store.state.qzzl"
                          :key="ind"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">类别：</span>
                      <el-radio value="1" label="1" v-model="radioe">常住</el-radio>
                      <el-radio value="2" label="2" v-model="radioe">临住</el-radio>
                  </el-col>
                </el-row>
                <el-row type="flex">
                  <el-col :span="24" style="text-align:center;">
                    <el-button type="primary" size="mini" @click="getSearch('leaflet-draw-draw-polygon')">多边形</el-button>
                    <el-button type="primary" size="mini" @click="getSearch('leaflet-draw-draw-rectangle')">矩形</el-button>
                    <el-button type="primary" size="mini" @click="doset()">重置</el-button>
                  </el-col>
                </el-row>
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
import {createMapL,doSearch} from '@/assets/js/SuperMap/zdjkmap.js'
let zdvm;
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
       pcs:[],
       xzqh:[],
       radioe:'2',
       tableData:[],
       bzhDialogVisible:false,
       diatext:'标准化地址',
       bzhid:'',
       mc:'',
       lrdw:'',
    }
  },

  mounted() {
    window.zdvm=this;
   this.$store.dispatch("getGjdq");
   this.$store.dispatch("getQzzl");
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
      this.$set(this.pd,"beginTime",'');
      this.$set(this.pd,"endTime",'');
      this.$set(this.pd,"gjdq",'');
      this.$set(this.pd,"qzzl",'');
    },
    getSearch(className) {
      console.log(this.radioe);
       doSearch(className);
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
.yy-input-text{text-align: left!important; width: 30%!important;}
.yy-input-input{width: 65%!important;}

</style>
<style>
.lzxx  .my-div-icon {
        background-color: rgba(0, 167, 91, 0.8);
        border-radius: 50%;

        line-height:20px;
        text-align: center;
        vertical-align: middle;
    }
.lzxx    .lz {
			background:url(../../../../assets/img/tb/location_blue.png) no-repeat;font-size:12px; font-weight: bold;color: #ffffff;
		}

.lzxx		.cz {
			background-color: rgba(155, 0, 0, 0.8);
		}
</style>
