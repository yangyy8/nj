    <template lang="html">
      <!-- 教育厅招生预警、审核 -->
    <div class="yymain">
      <div class="yytitle">
        <el-row type="flex">
          <el-col :span="22" class="br pr-20">
            <el-row align="center"   :gutter="2">
                  <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                     <span class="input-text">英文姓名：</span>
                     <el-input placeholder="请输入内容" size="small" v-model="pd.ywxm" class="input-input"></el-input>
                  </el-col>
                  <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                     <span class="input-text">中文姓名：</span>
                     <el-input placeholder="请输入内容" size="small" v-model="pd.zwxm" class="input-input"></el-input>
                  </el-col>
                  <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                      <span class="input-text">国家地区：</span>
                      <el-select v-model="pd.gjdq" filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input">
                        <el-option
                          v-for="item in nation"
                          :key="item.dm"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                     <span class="input-text">证件号码：</span>
                     <el-input placeholder="请输入内容" size="small" v-model="pd.zjhm" class="input-input"></el-input>
                  </el-col>
                  <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                     <span class="input-text">申请学校：</span>
                     <el-input placeholder="请输入内容" size="small" v-model="pd.zjhm" class="input-input"></el-input>
                  </el-col>
                  <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                    <span class="input-text">性别：</span>
                    <el-select v-model="pd.STATUS" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                      <el-option value="0" label="0 - 未知">
                      </el-option>
                      <el-option value="1" label="1 - 男">
                      </el-option>
                      <el-option value="2" label="2 - 女">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">申请日期：</span>
                    <div class="input-input t-flex t-date">
                      <el-date-picker
                         v-model="pd.sqrqStart" format="yyyy-MM-dd"
                         type="date" size="small" value-format="yyyy-MM-dd"
                         placeholder="开始时间" >
                      </el-date-picker>
                      <span class="septum">-</span>
                      <el-date-picker
                          v-model="pd.sqrqEnd" format="yyyy-MM-dd"
                          type="date" size="small" value-format="yyyy-MM-dd"
                          placeholder="结束时间" >
                      </el-date-picker>
                   </div>
                  </el-col>

                  <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                    <span class="input-text">审核结果：</span>
                    <el-select v-model="pd.cljg" placeholder="请选择"  filterable clearable  default-first-option size="small" class="input-input">
                      <el-option value="0" label="0 - 通过">
                      </el-option>
                      <el-option value="1" label="1 - 未通过">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                    <span class="input-text">审核状态：</span>
                    <el-select v-model="pd.clzt" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                      <el-option value="0" label="0 - 未审核">
                      </el-option>
                      <el-option value="1" label="1 - 已审核">
                      </el-option>
                    </el-select>
                  </el-col>

            </el-row>
           </el-col>
              <el-col :span="2" class="down-btn-area">
                <el-button type="success" size="small"  @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
              </el-col>
            </el-row>
      </div>
      <div class="yycontent">
        <el-table
             ref="multipleTable"
             :data="tableData"
             border
             style="width: 100%"
             @selection-change="handleSelectionChange">
             <!-- <el-table-column
               type="selection"
               width="55">
             </el-table-column> -->

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
               label="性别">
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
             <el-table-column
               prop="zjyxq"
               label="证件有效期">
             </el-table-column>
             <el-table-column
               prop="qzhm"
               label="签证号码">
             </el-table-column>
             <el-table-column
               prop="bjsj"
               label="预警时间">
             </el-table-column>
             <el-table-column
               prop="yjxq"
               label="预警详细内容">
             </el-table-column>
             <el-table-column
               prop="cljg"
               label="处理结果">
             </el-table-column>
             <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'JYTZSYJ-XQ',meta:'----',query:{id:'11',AlarmType:'11'}})"></el-button>
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
            :current-page.sync ="CurrentPage"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="TotalResult">
          </el-pagination>
        </div>
      </div>

    </div>

  </template>
  <script>
  import {ToArray} from '@/assets/js/ToArray.js'
  export default {
    data() {
      return {
        CurrentPage: 1,
        pageSize: 10,
        TotalResult: 0,
        pd: {},
        nation: [],
        fileList: [],
        actions: "",
        editForm:{},
        mapForm:{},
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
          }
        ],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: 'XXXXX'
        }],

      }
    },
    mounted() {
      this.getNation();

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
      getNation()
      {
        this.$api.get(this.Global.aport1+this.Global.gjdq, null,
          r => {
            this.nation = ToArray(r.data);
          })
      },
      getList(currentPage, showCount, pd) {
        let p = {
          "currentPage": currentPage,
          "showCount": showCount,
          "pd": pd
        };
        this.$api.post('/educationController/getEducationEventInfo', p,
          r => {
            this.tableData = r.data.resultList;
            this.TotalResult = r.data.totalResult;
          })
      },

    }
  }
  </script>

  <style scoped>
  .el-dialog{
    width: 60%!important;
    /* max-height: 400px!important;
    overflow-y: scroll; */
  }
  </style>
  <style>

  </style>
