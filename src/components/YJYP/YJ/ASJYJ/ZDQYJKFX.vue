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
                      <span class="yy-input-text">时间范围：</span>
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
                      <el-radio value="1" label="常住" v-model="radio"></el-radio>
                      <el-radio value="2" label="临住" v-model="radio"></el-radio>
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
      </div>
</template>

<script scoped>
import {ToArray} from '@/assets/js/ToArray.js'
import {createMapL,doSearch} from '@/assets/js/SuperMap/zdjkmap.js'
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
       radio:1,
    }
  },

  mounted() {
   this.$store.dispatch("getGjdq");
   this.$store.dispatch("getQzzl");
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
     console.log('ssss',className);
       doSearch(className);
    },




  },

}
</script>

<style scoped>
.yy-input-text{text-align: left!important; width: 25%!important;}
.yy-input-input{width: 70%!important;}

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
