<template lang="html">
  <!-- 境外人员信息列表 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
              <span class="input-text">姓名：</span>
              <el-input placeholder="请输入内容" size="small" v-model="pd.XM"   class="input-input"></el-input>
            </el-col>
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
                   <span class="input-text">护照号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.HZHM" class="input-input"></el-input>
                </el-col>
          </el-row>
         </el-col>
            <el-col :span="4" >
              <el-button type="success" size="small" @click="getList(CurrentPage,pageSize,pd)" class="mb-15">查询</el-button>
              <el-button type="info" size="small" @click="$router.push('NMFX')" class="mb-15">返回</el-button>
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
      <div class="yylbt mb-15">人员信息列表</div>

      <el-table
           :data="tableData"
           border
           style="width: 100%"
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
             label="操作" width="70">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'NMFX_XQ',query:{row:scope.row}})"></el-button>
             </template>
           </el-table-column>
     </el-table>

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
      form:{},
      pd: {},
      pc:{},
      tableData:[],

      options:[{
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

      }
    ],
      row:[],
      queryPd:{},
    }
  },
  activated() {
    this.row = this.$route.query.row;
    this.queryPd=this.$route.query.queryPd;
    console.log('row',this.row);
    this.getList(this.CurrentPage,this.pageSize,this.pd);
  },
  mounted() {
      this.$store.dispatch('getGjdq');
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val, this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize, this.pd);
      console.log(`当前页: ${val}`);
    },
    getList(currentPage, showCount, pd) {
      this.objCompare(this.row,this.queryPd)
      pd = Object.assign({},pd,this.row,this.queryPd);
     if(pd.GJDQDM!=undefined  && pd.GJDQDM!="")
     {
       this.pc.GJDQDM=pd.GJDQDM;
     }
     if(pd.XBDM!=undefined  && pd.XBDM!="")
     {
       this.pc.XBDM=pd.XBDM;
     }
     if(pd.RS_Nokeyword!=undefined  && pd.RS_Nokeyword!="")
     {
       this.pc.RS_Nokeyword=pd.RS_Nokeyword;
     }
     if(pd.SFDM!=undefined  && pd.SFDM!="")
     {
       this.pc.SFDM=pd.SFDM;
     }

      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": this.pc,
      };
      this.$api.post(this.Global.aport5+'/nanMinController/getResultListByParams', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },

  }
}
</script>

<style scoped>
.input-text{width: 30%!important}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.el-carousel__item:nth-child(2n) {
  /* background: url(../../../assets/img/t1.png); */
  background-size: 100% 100%;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.crcolor {
  background: #EFF3F6;
}
.yy-input-text {
  text-align: left !important;
}
</style>
<style>

.bj .el-dialog__wrapper {
  background: #000;
  background: rgba(0, 0, 0, 0.3);
}
</style>
