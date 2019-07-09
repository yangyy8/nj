<template lang="html">
    <!-- 临住境外人员分布分析 -->
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
                      <span class="yy-input-text"><font color=red>*</font>住宿时间：</span>
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
                      <span class="yy-input-text"><font color=red>*</font>证件种类：</span>
                      <el-select v-model="pd.zjzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind4) in $store.state.zjzl"
                          :key="ind4"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">签证种类：</span>
                      <el-select v-model="pd.qzzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind3) in $store.state.rjqzzl"
                          :key="ind3"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">国家地区：</span>
                      <el-select v-model="pd.gjdq" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind2) in $store.state.gjdq"
                          :key="ind2"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">停留事由：</span>
                      <el-select v-model="pd.tlsy" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in $store.state.rjsy"
                          :key="ind"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">投宿于：</span>
                      <el-select v-model="pd.tsj" @change="changeTSY(pd.tsj)" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option label="旅馆" value="1">
                        </el-option>
                        <el-option label="社会面" value="2">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24"  v-show="bzhshow">
                      <span class="yy-input-text" title="标准化地址">标准化地址：</span>
                        <el-input placeholder="请输入内容" size="small" v-model="pd.bzhdz"   class="yy-input-input"></el-input>
                  </el-col>
                  <el-col :span="24"  v-show="lgshow">
                    <el-col :span="24">
                        <span class="yy-input-text">住宿宾馆：</span>
                        <el-select
                         v-model="pd.zsbg"
                         filterable
                         clearable
                         remote
                         reserve-keyword
                         placeholder="请输入关键词"
                         :remote-method="remoteMethod"
                         :loading="loading"
                          size="small"  class="yy-input-input">
                         <el-option
                           v-for="(item,ind0) in zsbg"
                           :key="ind0"
                           :label="item.mc"
                           :value="item.dm">
                         </el-option>
                       </el-select>
                    </el-col>
                  </el-col>
                </el-row>
                <el-row type="flex">
                  <el-col :span="24" style="text-align:center;">
                    <el-button type="primary" size="mini" @click="doSearch()">查询</el-button>
                    <el-button type="primary" size="mini" @click="doset()">重置</el-button>
                  </el-col>
                </el-row>
             </div>
            </el-collapse-transition>
        </div>
      <div class="bghome">
        <el-dialog :title="diatext" :visible.sync="lzhDialogVisible">
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
                 <template slot-scope="scope">
                  <span style="color:yellow;cursor:pointer" @click="$router.push({name:'RYHX_NX',query:{zjhm:scope.row.zjhm}})">{{scope.row.zjhm}}</span>
                 </template>
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
            <img src="../../../../assets/img/qx.png" border="0" @click="lzhDialogVisible = false" style="cursor:pointer" >
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
import {createMapL,getSearh} from '@/assets/js/SuperMap/lzmap.js'
let lzvm;
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
       zsbg:[],
       list:[],
       tableData:[],
       loading:false,
       lzhDialogVisible:false,
       diatext:'标准化地址',
       bzhid:'',
       mc:'',
       lrdw:'',
    }
  },
  mounted() {
    window.lzvm=this;
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getRjsy');
    this.$store.dispatch('getZjzl');
    this.$store.dispatch('getRjqzzl');
    createMapL();
    this.getZsbg();
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
    remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.zsbg = this.list.filter(item => {
              return item.mc.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.zsbg = [];
        }
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
      getZsbg(){
        var url=this.Global.aport1+this.Global.zsbg;
        this.$api.get(url,null,
        r=>{
          // console.log(ToArray(r.data));
          this.list=ToArray(r.data);
        })
      },
    doset(){
       this.$set(this.pd,"zjzl",'');
       this.$set(this.pd,"qzzl",'');
       this.$set(this.pd,"gjdq",'');
       this.$set(this.pd,"tlsy",'');
       this.$set(this.pd,"beginTime",'');
       this.$set(this.pd,"endTime",'');
       this.$set(this.pd,"tsj",'');
       this.$set(this.pd,"bzhdz",'');
       this.$set(this.pd,"zsbg",'');
    },
    doSearch() {
      // 以下为查询ES，由于es_lz_lzxx被删除，暂时注释掉。
      // 数据模拟
      this.loading = true;
      getSearh(this.pd);
      // this.loading = false;
    },


    //得到标准化地址
    getBZHDZ(callback){
      var searchResult = [];
        let p={
          "zjzl":this.pd.zjzl,
          "qzzl":this.pd.qzzl,
          "gjdq":this.pd.gjdq,
          "tlsy":this.pd.tlsy,
          "rzsjStart":this.pd.beginTime,
          "rzsjEnd":this.pd.endTime,
          "zsbg":this.pd.zsbg,
          "bzhdzMc":this.pd.bzhdz,
        };
        var url=this.Global.aport+"/zxdt/getLSZSDJXXBZHDZList";
        this.$api.post(url, p,
          r => {
            if (r.success) {
              var arr=r.data;
              for (var i = 0; i < arr.length; i++) {
              searchResult.push(arr[i]);
              }
              callback && callback(searchResult)
            }
          });
          // callback(searchResult);
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
         // "yf":'Y',
         // "lrdw":this.lrdw,
         "zjzl":this.pd.zjzl,
         "qzzl":this.pd.qzzl,
         "gjdq":this.pd.gjdq,
         "tlsy":this.pd.tlsy,
         "rzsjStart":this.pd.beginTime,
         "rzsjEnd":this.pd.endTime,
         "zsbg":this.pd.zsbg,
         "bzhdzMc":this.pd.bzhdz,

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
       this.lzhDialogVisible=true;
    }
  },

}
</script>

<style scoped>
.yy-input-text{text-align: left!important; width: 30%!important;}
.yy-input-input{width: 65%!important;}
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
        color: #ffffff;
        font-size: 16px;
    }
.lzxx    .lz {
		background:url(../../../../assets/img/tb/location_blue.png) no-repeat;font-size:12px; font-weight: bold;
		}

.lzxx		.cz {
			background-color: rgba(155, 0, 0, 0.8);
		}
    .bghome .el-dialog{ width: 70%!important;}
</style>
