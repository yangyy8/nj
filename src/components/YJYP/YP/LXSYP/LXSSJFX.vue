<template lang="html">
    <!-- 留学生散居社会面分析 -->
      <div class="yymain ">
        <!-- 地图 -->
        <div id="mainMap" class="mapbj"></div>
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
                  <el-col :span="24">
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
                  <el-col :span="24">
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
                  <el-col :span="24">
                      <span class="yy-input-text">居留事由：</span>
                      <el-select v-model="pd.rjsy" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind1) in $store.state.rjsy"
                          :key="ind1"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
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
                  <el-col :span="24">
                      <span class="yy-input-text">所属分局：</span>
                      <el-select v-model="pd.ssfj" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind1) in ssfj"
                          :key="ind1"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
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
      </div>
</template>

<script scoped>
import {createMapL} from '@/assets/js/SuperMap/lxssmmap.js'
export default {
  data(){
    return{
       pd:{},
       swdw:[],
       show: true,
       detailsDialogVisible:false,
       form:{},
       xxmc:[],
       ssfj:[],
    }
  },
  mounted() {
    this.$store.dispatch('getQzzl');
    this.$store.dispatch('getZjzl');
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getRjsy');
    this.getGX();
    this.getSsfj();
    this.$nextTick(()=>{
        createMapL();
    })
  },
  methods:{
    changtab(){
      this.show=!this.show;
    },
    doset(){
       this.$set(this.pd,"gjdq",'');
       this.$set(this.pd,"rzfs",'');
        this.$set(this.pd,"xxmc",'');
        this.$set(this.pd,"zjzl",'');
        this.$set(this.pd,"qzzl",'');
        this.$set(this.pd,"zflx",'');
        this.$set(this.pd,"rjsy",'');
        this.$set(this.pd,"jzztlx",'');
        this.$set(this.pd,"ssfj",'');
    },
    getGX(){
      this.$api.get(this.Global.aport1+'/servicemap/getUniversity',null,
         r=>{
           console.log(r.data);
          this.xxmc=r.data;
         });
    },
    getSsfj(){
       let p={
         "operatorId":this.$store.state.uid,
         "operatorNm":this.$store.state.uname
       };
      var url=this.Global.aport2+"/data_report/selectSsfjDm";
      this.$api.post(url,p,
      r=>{
        this.ssfj=r.data.SSFJ;
      })
    },
    doSearch() {

  	},
}

}
</script>

<style scoped>
.yy-input-text{text-align: left!important;}
.my-div-icon {
         background: red;
        border-radius: 50%;
        /*width: 50 !important;
        height: 50px !important;*/
        line-height:50px;
        text-align: center;
        vertical-align: middle;
  font-weight:border;
    }


.leftpanel {
  position:absolute; top:0; left:0; background-color:#fff; width:300px; height:100%; z-index:555;
}
.leftpanel .expanded {
  width: 35px;
  height: 70px;
  line-height:60px;
  border: 1px solid #bbb;
  border-left-width: 0px;
  margin-left:100%;
  margin-top:150px;
  background-color:#fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor:pointer;
  font-size:12px;
  text-align:center;
  vertical-align:middle;
  font-weight: bolder;
  position:absolute;
}
.leftpanel table {
  width: 100%;
}
.leftpanel table .button {
  background-color: #3992d0;
  color:#fff;
  padding: 6px 12px;
  border:0;
}

#filttable td, #cztable td {
  padding: 5px 0 5px 5px;
}
#cztable {
  font-size:14px;
}

.bottompanel {
  width: 100%;
  height: 530px;
  position:absolute; bottom:0; left:0; z-index:9999;
  background:#fff;
  border: 1px solid #3992d0;
  text-align:middle;
  display:none;
}
.bottompanel .closed{
  position:absolute; right:10px; top:0;
}
.bottompanel .pagepanel {
  padding-top:5px;
  width: 300px;
  text-align:center;
  font-size:12px;
  margin: 0 auto;
}
.bottompanel .pagepanel span {
  padding: 2px 7px;
  border: 1px solid #ccc;
  text-align:center;
  cursor:pointer;
}
</style>
<style>
.mapbj .leaflet-div-icon{border-radius: 50%; border: 0!important;font-weight:border; color: #ffffff;background-color: rgba(0, 167, 91, 0.8);}
</style>
