<template lang="html">
    <!-- 常住境外人员分布分析  -->
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
                <el-row :gutter="2">
                    <el-col :span="12">
                        <span class="yy-input-text">国家地区：</span>
                        <el-select v-model="pd.gjdq" multiple   filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                          <el-option
                            v-for="(item,ind1) in $store.state.gjdq"
                            :key="ind1"
                            :label="item.mc"
                            :value="item.dm">
                          </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="12">
                        <span class="yy-input-text">身份：</span>
                        <el-select v-model="pd.sf" multiple     filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                          <el-option
                            v-for="(item,ind) in $store.state.sf"
                            :key="ind"
                            :label="item.mc"
                            :value="item.dm">
                          </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="12">
                        <span class="yy-input-text">停留有效期：</span>
                        <el-select v-model="pd.tlyxq"  filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                          <el-option
                            v-for="(item,ind1) in $store.state.tlyxq"
                            :key="ind1"
                            :label="item.mc"
                            :value="item.dm">
                          </el-option>
                        </el-select>
                    </el-col>
                    <!-- <el-col :span="12">
                        <span class="yy-input-text">入住方式：</span>
                        <el-select v-model="pd.rzfs" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                          <el-option label="自租房" value="1">
                          </el-option>
                          <el-option label="自购房" value="2">
                          </el-option>
                          <el-option label="自建房" value="3">
                          </el-option>
                          <el-option label="单位租房" value="4">
                          </el-option>
                          <el-option label="单位购房" value="5">
                          </el-option>
                          <el-option label="单位建房" value="6">
                          </el-option>
                          <el-option label="其他" value="7">
                          </el-option>
                        </el-select>
                    </el-col> -->
                    <el-col :span="12">
                        <span class="yy-input-text">性别：</span>
                        <el-select v-model="pd.xb" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                          <el-option
                            v-for="(item,ind1) in $store.state.xb"
                            :key="ind1"
                            :label="item.mc"
                            :value="item.dm">
                          </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="12">
                        <span class="yy-input-text">服务处所：</span>
                        <el-input placeholder="请输入内容" size="small" v-model="pd.fwcs" class="yy-input-input"></el-input>
                    </el-col>

                  <el-col :span="12">
                      <span class="yy-input-text">证件种类：</span>
                      <el-select v-model="pd.zjzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in $store.state.zjzl"
                          :key="ind"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <!-- <el-col :span="12">
                      <span class="yy-input-text">签证种类：</span>
                      <el-select v-model="pd.qzzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in $store.state.qzzl"
                          :key="ind"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col> -->
                  <!-- <el-col :span="12">
                      <span class="yy-input-text">住房类型：</span>
                      <el-select v-model="pd.zflx" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option value="1" label="住宅小区">
                        </el-option>
                        <el-option value="2" label="商住楼">
                        </el-option>
                        <el-option value="3" label="单位内部">
                        </el-option>
                        <el-option value="4" label="星级宾馆">
                        </el-option>
                        <el-option value="5" label="中小旅社">
                        </el-option>
                        <el-option value="6" label="居民小区">
                        </el-option>
                        <el-option value="7" label="其他">
                        </el-option>
                      </el-select>
                  </el-col> -->
                  <el-col :span="12">
                      <span class="yy-input-text">居留事由：</span>
                      <el-select v-model="pd.rjsy" multiple    filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in $store.state.rjsy"
                          :key="ind"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="12">
                      <span class="yy-input-text">居住状态类型：</span>
                      <el-select v-model="pd.jzztlx" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option value="1" label="迁入">
                        </el-option>
                        <el-option value="2" label="所内变动">
                        </el-option>
                        <el-option value="3" label="迁出">
                        </el-option>
                        <el-option value="4" label="死亡销户">
                        </el-option>
                        <el-option value="5" label="人户分离">
                        </el-option>
                        <el-option value="6" label="查无此人">
                        </el-option>
                      </el-select>
                  </el-col>

                  <el-col :span="12">
                      <span class="yy-input-text">所属单位：</span>
                      <el-select v-model="pd.ssdw" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in $store.state.ssdw"
                          :key="ind"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                   </el-col>
                 </el-row>
                 <el-row :gutter="1" style="border:1px solid #cccccc;margin-top:10px;margin-right:10px; padding-top: 10px;  background: #EFF3F6;">
                   <el-col :span="24" class="input-item">
                     <span class="input-text">出生日期：</span>
                     <div class="input-input t-flex">
                       <el-date-picker
                          v-model="pd.begincsrq" format="yyyy-MM-dd"
                          type="date" size="small" value-format="yyyyMMdd"
                          placeholder="开始时间" >
                       </el-date-picker>
                       <span class="septum">-</span>
                       <el-date-picker
                           v-model="pd.endcsrq" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyyMMdd"
                           placeholder="结束时间" >
                       </el-date-picker>
                    </div>
                   </el-col>
                   <el-col :span="24" class="input-item" >
                     <span class="input-text">市局下发时间：</span>
                     <div class="input-input t-flex">
                       <el-date-picker
                          v-model="pd.beginsjxf" format="yyyy-MM-dd"
                          type="date" size="small" value-format="yyyyMMdd"
                          placeholder="开始时间" >
                       </el-date-picker>
                       <span class="septum">-</span>
                       <el-date-picker
                           v-model="pd.endsjxf" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyyMMdd"
                           placeholder="结束时间" >
                       </el-date-picker>
                    </div>
                   </el-col>
                   <!-- <el-col :span="24" class="input-item">
                     <span class="input-text">分局接收时间：</span>
                     <div class="input-input t-flex">
                       <el-date-picker
                          v-model="pd.beginfjjs" format="yyyy-MM-dd"
                          type="date" size="small" value-format="yyyyMMdd"
                          placeholder="开始时间" >
                       </el-date-picker>
                       <span class="septum">-</span>
                       <el-date-picker
                           v-model="pd.endfjjs" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyyMMdd"
                           placeholder="结束时间" >
                       </el-date-picker>
                    </div>
                   </el-col>
                  <el-col :span="24" class="input-item">
                    <span class="input-text">数据下发时间段：</span>
                    <div class="input-input t-flex">
                      <el-date-picker
                         v-model="pd.beginsjd" format="yyyy-MM-dd"
                         type="date" size="small" value-format="yyyyMMdd"
                         placeholder="开始时间" >
                      </el-date-picker>
                      <span class="septum">-</span>
                      <el-date-picker
                          v-model="pd.endsjd" format="yyyy-MM-dd"
                          type="date" size="small" value-format="yyyyMMdd"
                          placeholder="结束时间" >
                      </el-date-picker>
                   </div>
                  </el-col> -->
                </el-row>
                <el-row type="flex">
                  <el-col :span="24" style="text-align:center;">
                    <el-button type="primary" size="mini" @click="getSearch()">确定</el-button>
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
import {createMapL,getSearch} from '@/assets/js/SuperMap/jwrymap.js'
let czvm;
export default {
  data(){
    return{
      CurrentPage: 1,
      pageSize: 8,
      TotalResult: 0,
      tableData:[],
       pd:{},
       swdw:[],
       show:true,
       bzhshow:false,
       lgshow:false,
       bzhDialogVisible:false,
       diatext:'标准化地址',
       pcs:[],
       xzqh:[],
       xxmc:[],
       radio:1,
    }
  },

  mounted() {
    window.vm=this;
   this.$store.dispatch('getQzzl');
   this.$store.dispatch('getZjzl');
   this.$store.dispatch('getGjdq');
   this.$store.dispatch('getRjsy');
   this.$store.dispatch('getXB');
   this.$store.dispatch('getTlyxq');
   this.$store.dispatch('getSf');
   this.$store.dispatch('getSsdw');
   this.getGX();
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
      getGX(){
        this.$api.get(this.Global.aport1+'/servicemap/getUniversity',null,
           r=>{
             console.log(r.data);
            this.xxmc=r.data;
           });
      },

    doset(){
      this.$set(this.pd,"gjdq",'');
      this.$set(this.pd,"tlyxq",'');
      this.$set(this.pd,"rzfs",'');
      this.$set(this.pd,"xb",'');
      this.$set(this.pd,"xxmc",'');
      this.$set(this.pd,"sf",'');
      this.$set(this.pd,"zjzl",'');
      this.$set(this.pd,"qzzl",'');
      this.$set(this.pd,"zflx",'');
      this.$set(this.pd,"rjsy",'');
      this.$set(this.pd,"jzztlx",'');
      this.$set(this.pd,"ssdw",'');
      this.$set(this.pd,"begincsrq",'');
      this.$set(this.pd,"endcsrq",'');
      this.$set(this.pd,"beginsjxf",'');
      this.$set(this.pd,"endsjxf",'');
      this.$set(this.pd,"beginfjjs",'');
      this.$set(this.pd,"endfjjs",'');
      this.$set(this.pd,"beginsjd",'');
      this.$set(this.pd,"endsjd",'');
    },
    getSearch() {
        this.show=!this.show;
      getSearch();
    },
    //得到标准化地址
    getBZHDZ(callback){
      var searchResult = [
        {dm:'32010100000001915459',count:123},
        {dm:'32010100000002760597',count:123},
        {dm:'32010100000022930618',count:123},
        {dm:'32010100000003007102',count:123}
      ];
        // let p={
        //   "yf":this.yf,
        //   "lrdw":"",
        // };
        // var url=this.Global.aport+"/zxdt/getLSZSDJXXBZHDZList";
        // this.$api.post(url, p,
        //   r => {
        //     if (r.success) {
        //       var arr=r.data;
        //       for (var i = 0; i < arr.length; i++) {
        //       searchResult.push(arr[i]);
        //       }
        //       console.log('-----222',searchResult);
        //       callback && callback(searchResult)
        //     }
        //   });

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
.yy-input-text{text-align:left!important; width: 35%!important; padding-left: 10px;}
.yy-input-input{width: 55%!important;}
.fxleft{width: 600px!important;}
</style>
<style>

.lzxx    .lz {
			background-color: rgba(0, 167, 91, 0.8);
		}

.lzxx		.cz {
		background:url(../../../../assets/img/tb/location_blue.png) no-repeat;font-size:12px; font-weight: bold;color: #ffffff;
		}
.bghome .el-dialog{ width: 70%!important;}
</style>
