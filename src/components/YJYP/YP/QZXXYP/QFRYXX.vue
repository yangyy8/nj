<template lang="html">
  <!-- 境外人员信息列表 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
              <span class="input-text">英文姓名：</span>
              <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM"   class="input-input"></el-input>
            </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国家地区：</span>
                  <el-select v-model="pd.GJDQ" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.gjdq"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XCZJHM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">签证号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XCQZHM" class="input-input"></el-input>
                </el-col>
          </el-row>
         </el-col>
            <el-col :span="4" >
              <el-button type="success" size="small" @click="getList(CurrentPage,pageSize,pd)" class="mb-15">查询</el-button>
              <!-- <el-button type="info" size="small" @click="$router.go(-1)" class="mb-15">返回</el-button> -->
            </el-col>
          </el-row>
    </div>
    <div class="yycontent">
      <div class="yylbt mb-15">人员列表</div>
      <el-table
         ref="multipleTable"
         :data="tableData"
         border
         style="width: 100%">
         <el-table-column
           prop="ZWXM"
           label="中文姓名">
         </el-table-column>
         <el-table-column
           prop="YWXM"
           label="英文姓名">
         </el-table-column>
         <el-table-column
           prop="GJDQ_DESC"
           label="国家地区">
         </el-table-column>
         <el-table-column
           prop="XB_DESC"
           label="性别">
         </el-table-column>
         <el-table-column
           prop="CSRQ"
           label="出生日期">
         </el-table-column>
         <el-table-column
           prop="ZJZL_DESC"
           label="证件种类">
         </el-table-column>
         <el-table-column
           prop="XCZJHM"
           label="证件号码">
         </el-table-column>
         <el-table-column
           prop="QZZL_DESC"
           label="签证种类">
         </el-table-column>
         <el-table-column
           prop="XCQZHM"
           label="签证号码">
         </el-table-column>
         <el-table-column
           label="操作" width="70">
           <template slot-scope="scope">
           <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
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
      <div class="bj">
        <el-dialog title="签证申请信息详情" :visible.sync="qzsqDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
            <QZSQ :type="type" :xid="xid" :random="random"></QZSQ>
            <div slot="footer" class="dialog-footer">
              <el-button @click="qzsqDialogVisible = false" size="small">取 消</el-button>
            </div>
       </el-dialog>
     </div>
    </div>
</template>
<script>
import QZSQ from '../../../common/qzsq_xq'
export default {
  components:{QZSQ},
  data() {
    return {
      type:1,
      xid:'',
      random:'',
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      form:{},
      pd: {
        QZQFJG_Like:'3201'
      },
      imagess:[],
      radio1:'0',
      radio2:'0',
      typet:'1',
      imgshow1:false,
      imgshow2:true,
      shm:false,
      lg:false,
      tableData:[],
      qzsqDialogVisible:false,
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
    this.queryPd = this.$route.query.queryPd;
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
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      this.$api.post(this.Global.aport5+'/esFnsqxxController/getResultListByParams', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
    details(i) {
      this.random=new Date().getTime();
      this.xid=i.RGUID;
      this.qzsqDialogVisible = true;
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
