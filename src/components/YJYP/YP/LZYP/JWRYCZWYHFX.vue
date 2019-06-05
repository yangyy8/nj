<template lang="html">
    <!-- 境外人员出租房屋隐患分析 -->
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
                      <span class="yy-input-text">行政区划：</span>
                      <el-select
                       v-model="pd.xzqh"
                       filterable
                       clearable
                       remote
                       reserve-keyword
                       placeholder="请输入关键词"
                       :remote-method="remoteMethod"
                       :loading="loading"
                        size="small">
                       <el-option
                         v-for="(item,ind) in xzqh"
                         :key="ind"
                         :label="item.mc"
                         :value="item.dm">
                       </el-option>
                     </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">派出所：</span>
                      <el-select
                       v-model="pd.pcs"
                       filterable
                       clearable
                       remote
                       reserve-keyword
                       placeholder="请输入关键词"
                       :remote-method="remoteMethodpcs"
                       :loading="loading"
                        size="small">
                       <el-option
                         v-for="(item,ind1) in pcs"
                         :key="ind1"
                         :label="item.mc"
                         :value="item.dm">
                       </el-option>
                     </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">责任区：</span>
                      <el-select v-model="pd.zrq" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in zrq"
                          :key="ind"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">入住时间：</span>
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
import {ToArray} from '@/assets/js/ToArray.js'
import {createMapL} from '@/assets/js/SuperMap/czwyhmap.js'
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
       pcs:[],
       loading:false,
       listpcs:[],
       list:[],
       zrq:[],
    }
  },

  mounted() {

    this.getXzqh();
    this.getPcs();
    this.getZrq();
    createMapL();

  },
  methods:{
    remoteMethod(query) {

        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.xzqh = this.list.filter(item => {
              return item.mc.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.xzqh = [];
        }
      },
      remoteMethodpcs(query) {
          if (query !== '') {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
              this.pcs = this.listpcs.filter(item => {
                return item.mc.toLowerCase()
                  .indexOf(query.toLowerCase()) > -1;
              });
            }, 200);
          } else {
            this.pcs = [];
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
      getPcs(){

        var url=this.Global.aport1+this.Global.pcs;
        this.$api.get(url,null,
        r=>{
          this.listpcs=ToArray(r.data);
        })
      },
      getXzqh(){

        var url=this.Global.aport1+this.Global.xzqh;
        this.$api.get(url,null,
        r=>{
          this.list=ToArray(r.data);
        })
      },
      getZrq(){
         let p={
           "operatorId":this.$store.state.uid,
	         "operatorNm":this.$store.state.uname
         };
        var url=this.Global.aport2+"/data_report/selectZrqDm";
        this.$api.post(url,p,
        r=>{

          this.zrq=r.data.ZRQ;
        })
      },
    doset(){
       this.$set(this.pd,"xzqh",[]);
       this.$set(this.pd,"pcs",[]);
       this.$set(this.pd,"zrq",[]);
       this.$set(this.pd,"beginTime",'');
       this.$set(this.pd,"endTime",'');
    },
    doSearch() {
      // 以下为查询ES，由于es_lz_lzxx被删除，暂时注释掉。
      // 数据模拟



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
