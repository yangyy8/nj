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
                        <el-select v-model="pd.gjdq" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                          <el-option
                            v-for="(item,ind1) in $store.state.gjdq"
                            :key="ind1"
                            :label="item.mc"
                            :value="item.dm">
                          </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="12">
                        <span class="yy-input-text">停留有效期：</span>
                        <el-select v-model="pd.tlyxq" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                          <el-option
                            v-for="(item,ind1) in $store.state.tlyxq"
                            :key="ind1"
                            :label="item.mc"
                            :value="item.dm">
                          </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="12">
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
                    </el-col>
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
                        <span class="yy-input-text">学校名称：</span>
                        <el-select v-model="pd.xxmc" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                          <el-option
                            v-for="(item,ind1) in xxmc"
                            :key="ind1"
                            :label="item.mc"
                            :value="item.xdid">
                          </el-option>
                        </el-select>
                    </el-col>
                  <el-col :span="12">
                      <span class="yy-input-text">身份：</span>
                      <el-select v-model="pd.sf" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in $store.state.sf"
                          :key="ind"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
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
                  <el-col :span="12">
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
                  <el-col :span="12">
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
                  </el-col>
                  <el-col :span="12">
                      <span class="yy-input-text">居留事由：</span>
                      <el-select v-model="pd.rjsy" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
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
                   <el-col :span="24" class="input-item">
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
                  </el-col>
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
      </div>
</template>

<script scoped>
import {ToArray} from '@/assets/js/ToArray.js'
import {createMapL} from '@/assets/js/SuperMap/jwrymap.js'
export default {
  data(){
    return{
       pd:{},
       swdw:[],
       show:true,
       bzhshow:false,
       lgshow:false,
       pcs:[],
       xzqh:[],
       xxmc:[],
       radio:1,
    }
  },

  mounted() {
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

    },
  },

}
</script>

<style scoped>
.yy-input-text{text-align:left!important; width: 35%!important; padding-left: 10px;}
.yy-input-input{width: 55%!important;}
.fxleft{width: 600px!important;}
</style>
<style>
.lzxx  .my-div-icon {
        background-color: rgba(0, 167, 91, 0.8);
        border-radius: 50%;
        border:1px solid #ccc;
        line-height:20px;
        text-align: center;
        vertical-align: middle;
    }
.lzxx    .lz {
			background-color: rgba(0, 167, 91, 0.8);
		}

.lzxx		.cz {
			background-color: rgba(155, 0, 0, 0.8);
		}
</style>
