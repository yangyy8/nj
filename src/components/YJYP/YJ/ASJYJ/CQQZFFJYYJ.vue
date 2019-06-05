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
                     <el-input-number v-model="jlsz" controls-position="right" size="mini" :min="5" :max="50"></el-input-number>
                     <span style="font-size:12px;">公里</span>
                  </el-col>
                  <el-col :span="24">
                    <span style="font-size:12px; color:red">* 距离设置区间5-50</span>
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
      </div>
</template>
<script scoped>
import {ToArray} from '@/assets/js/ToArray.js'
import {createMapL,createDWMap} from '@/assets/js/SuperMap/ffjymap.js'
export default {
  data(){
    return{
       pd:{},
       swdw:[],
       show:true,
       bzhshow:false,
       lgshow:false,
       jlsz:10,
       pcs:[],
       xzqh:[],
       datastr:[],
    }
  },
  mounted() {
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
       this.$set(this.pd,"dwlb",'');

    },
    getGX(){
      this.$api.get(this.Global.aport1+'/servicemap/getUniversity',null,
         r=>{
          this.datastr=r.data;
         });
    },
    getInfo(dm,mc)
    {
          createDWMap(dm,mc);
    },
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
.lzxx  .lz {
			background-color: rgba(0, 167, 91, 0.8);
		}

.lzxx	.cz {
			background-color: rgba(155, 0, 0, 0.8);
		}
</style>
