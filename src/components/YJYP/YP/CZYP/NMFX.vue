<template lang="html">
  <!-- 难民和寻求庇护者分析 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国家地区：</span>
                  <el-select v-model="pd.GJDQDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.gjdq"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">案卷编号：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.AJBH"   class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">户室人数：</span>
                    <el-input-number v-model="rs" @change="handleChange" :min="0" :max="100" size="small" label="描述文字" class="input-input"></el-input-number>
              </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">性别：</span>
                  <el-select v-model="pd.XBDM" placeholder="请选择"  filterable clearable  default-first-option size="small" class="input-input">
                    <el-option v-for="item in $store.state.xb"
                     :key="item.dm"
                     :label="item.dm+' - '+item.mc"
                     :value="item.dm"
                    >
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">出生日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginCS" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endCS" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">身份类型：</span>
                  <el-select v-model="pd.SFDM" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.sflx"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">护照号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.HZHM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">注册日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginZC" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endZC" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">电话：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.DHHM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">邮箱：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YXDZ" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">详细地址：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XXDZ_Like" class="input-input"></el-input>
                </el-col>
          </el-row>
         </el-col>
            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small" @click="getList(CurrentPage,pageSize,pd)" class="mb-15">查询</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
      <div class="yylbt mb-15">统计类别</div>
      <div class="mb-15">
        <el-checkbox label="国家地区" v-model="pm.GJDQDM" :disabled="disa"></el-checkbox>
        <el-checkbox label="性别" v-model="pm.XBDM" :disabled="disa"></el-checkbox>
        <el-checkbox label="户室人数" v-model="pm.RS_Nokeyword" :disabled="disa"></el-checkbox>
        <el-checkbox label="身份类型" v-model="pm.SFDM" :disabled="disa"></el-checkbox>
      </div>
        <div v-if="falg">
          <el-table
               ref="multipleTable"
               :data="tableData"
               border
               style="width: 100%">
               <el-table-column
                   v-for="(val,i) in configHeader"
                   :key="i"
                   :prop="val.props"
                   :label="val.label">
               </el-table-column>
               <el-table-column
                 label="操作" width="100">
                 <template slot-scope="scope">
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'NMFX_LIST',query:{row:scope.row}})"></el-button>
                 </template>
               </el-table-column>
          </el-table>
          </div>
          <div v-else>
              <el-table
                :data="tableData"
                border
                style="width: 100%;"
                >
                <el-table-column
                  prop="GJDQ_DESC"
                  label="国家地区">
                </el-table-column>
                <el-table-column
                  prop="AJBH"
                  label="案卷编号">
                </el-table-column>
                <el-table-column
                  prop="ZCRQ"
                  label="注册时间">
                </el-table-column>
                <el-table-column
                  prop="XM"
                  label="姓名">
                </el-table-column>
                <el-table-column
                  prop="XB_DESC"
                  label="性别">
                </el-table-column>
                <el-table-column
                  prop="HZHM"
                  label="护照号码">
                </el-table-column>
                <el-table-column
                  prop="SFDM_DESC"
                  label="身份类型">
                </el-table-column>
                <el-table-column
                  prop="DHHM"
                  label="电话号码">
                </el-table-column>
                <el-table-column
                  prop="RS"
                  label="户室人数">
                </el-table-column>
                <el-table-column
                  label="操作" width="100">
                  <template slot-scope="scope">
                  <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'NMFX_XQ',query:{row:scope.row}})"></el-button>
                  </template>
                </el-table-column>
              </el-table>
              </div>
           <div class="middle-foot">
              <div class="page-msg">
                <div class="">
              共{{TotalResult}}条记录
                </div>
                <div class="">
                  每页显示
                  <el-select v-model="pageSize" @change="pageSizeChange(pageSize)" placeholder="10" size="mini" class="page-select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  条
                </div>
                <div class="">
                共{{Math.ceil(TotalResult/pageSize)}}页
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
  </div>

  </div>
</template>
<script>

export default {

  data() {
    return {
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {CSRQ_DateRange:{},ZCRQ_DateRange:{}},
      pd0: {},
      pm:{},
      configHeader:[],
      tableData:[],
      tableData1:[],
      falg:false,
      disa:true,
      rs:0,
      detailsDialogVisible:false,
      options: [{
        value: 10,
        label: "10"
      },
      {
        value: 20,
        label: "20"
      },
      {
        value: 30,
        label: "30"
      },
    ],
  num:0,
    }
  },
  mounted() {
       this.$store.dispatch("getGjdq");
       this.$store.dispatch("getXB");
       this.$store.dispatch("getSflx");
  },
  methods: {
    handleChange(val){
      console.log(val);
    },

    pageSizeChange(val) {
      this.getList(this.CurrentPage, val, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize, this.pd);
      console.log(`当前页: ${val}`);
    },
    open(content) {
      this.$alert(content, '提示', {
        confirmButtonText: '确定',
      });
    },
    getList(currentPage, showCount, pd) {

   if(this.pd.XM!=undefined || this.pd.XBDM!=undefined || this.pd.HZHM!=undefined){

     this.falg=false;
     this.disa=true;
   }else {
      this.disa=false;
   }

    if(this.pd0.beginCS!=undefined && this.pd0.endCS!=undefined){

      this.pd.CSRQ_DateRange.begin=this.pd0.beginCS;
      this.pd.CSRQ_DateRange.end=this.pd0.endCS;

    }else if(this.pd0.beginCS==undefined && this.pd0.endCS==undefined){
     }else{
        this.open("出生日期开始时间和结束时间都不能为空！");return ;
    }
    if(this.pd0.beginZC!=undefined && this.pd0.endZC!=undefined){

      this.pd.ZCRQ_DateRange.begin=this.pd0.beginZC;
      this.pd.ZCRQ_DateRange.end=this.pd0.endZC;

    }else if(this.pd0.beginZC==undefined && this.pd0.endZC==undefined){
   }else{
        this.open("注册日期的开始时间和结束时间都不能为空！");return ;
    }

    if(this.rs!=0)
    {
      this.pd.RS=this.rs;
    }else{
      if(this.pd.hasOwnProperty('RS')){
        delete this.pd.RS
      }
    }
        var list=[];
        if(this.pm.GJDQDM==true){
          list.push("GJDQDM");
        }
        if(this.pm.XBDM==true){
          list.push("XBDM");
        }
        if(this.pm.RS_Nokeyword==true){
          list.push("RS_Nokeyword");
        }
        if(this.pm.SFDM==true){
          list.push("SFDM");
        }

      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "orderBy":'ZCRQ',
        "orderType":'DESC',
        "groupList":list
      };

      this.$api.post(this.Global.aport5+'/nanMinController/getCount', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;

          if(r.data.isFenLei=="true"){

            this.falg=true;
            console.log('this.tableData[0]',this.tableData[0]);
            let arr=this.tableData[0];

            let itemKey = Object.keys(arr);
            let res = itemKey.filter(function(item,index,array){
             //元素值，元素的索引，原数组。
            // if(item=="WAIGSIG" || item=="SHIGUO" ||item=="SANSHIYIGUO" || item=="LSDWDZ")
            //  {
            //    return item;
            //
            //  }else{
             return item.indexOf('_DESC')>=0;
           // }
            });
              console.log('this.tableData[1]',itemKey);
            this.configHeader=[];

             res.forEach( key => {
                     let headItem = {
                         props : key,
                         label : this.getInfo(key),
                     }

                     this.configHeader.push(headItem)

             })


            this.allnum=r.data.totalAllResult;

          }else {
            this.falg=false;

            var url = this.Global.aport5 + "/nanMinController/getCount";
            this.$api.post(url, p,
              r => {

                if (r.success) {
               this.tableData = r.data.resultList;
               this.TotalResult = r.data.totalAllResult;
                }

              });
          }



        })
    },
    getInfo(key){
      switch (key) {
        case 'count_DESC':
          return  "分析结果";
          break;
        case 'GJDQ_DESC':
          return  "国家地区";
          break;
        case 'RS':
          return  "户室人数";
          break;
        case 'SFDM_DESC':
          return  "身份类型";
          break;
        case 'XB_DESC':
          return  "性别";
          break;
        default:
        break;

      }

    },

  }
}
</script>

<style scoped>

</style>
<style>
.bj .el-dialog__wrapper {
  background: #000;
  background: rgba(0, 0, 0, 0.3);
}
</style>
