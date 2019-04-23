<template lang="html">
      <!-- 临住信息综合分析 -->
      <div class="yymain">
        <div class="yytitle">
          <el-row type="flex">
            <el-col :span="22" class="br pr-20">
              <el-row align="center"   :gutter="2">
                    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                      <span class="input-text">国家地区：</span>
                      <el-select v-model="pd.NATIONALITY" filterable clearable placeholder="请选择"  size="small" class="input-input">
                        <el-option
                          v-for="item in $store.state.gjdq"
                          :key="item.dm"
                          :label="item.dm+' - '+item.mc"
                          :value="item.mc">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                      <span class="input-text">出生日期：</span>
                      <div class="input-input t-flex t-date">
                        <el-date-picker
                           v-model="pd.BIRTHDATESTART" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyy-MM-dd"
                           placeholder="开始时间" >
                        </el-date-picker>
                        <span class="septum">-</span>
                        <el-date-picker
                            v-model="pd.BIRTHDATESTARTEND" format="yyyy-MM-dd"
                            type="date" size="small" value-format="yyyy-MM-dd"
                            placeholder="结束时间" >
                        </el-date-picker>
                     </div>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="input-text">性别：</span>
                      <el-select v-model="pd.XBDM" placeholder="请选择"  filterable clearable size="small" class="input-input">
                        <el-option v-for="item in $store.state.xb"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                       <span class="input-text">所属单位：</span>
                       <el-select v-model="pd.DW" placeholder="请选择"  filterable clearable size="small" class="input-input">
                         <el-option v-for="item in $store.state.ssdw"
                          :key="item.dm"
                          :label="item.mc"
                          :value="item.dm"
                         >
                         </el-option>
                       </el-select>
                    </el-col>


                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="input-text">证件种类：</span>
                      <el-select v-model="pd.ZJZL" placeholder="请选择"  filterable clearable size="small" class="input-input">
                        <el-option v-for="item in $store.state.zjzl"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="input-text">签证种类：</span>
                      <el-select v-model="pd.QZZL" placeholder="请选择"  filterable clearable size="small" class="input-input">
                        <el-option v-for="item in $store.state.qzzl"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="input-text">停留事由：</span>
                      <el-select v-model="pd.TLSY" placeholder="请选择"  filterable clearable size="small" class="input-input">
                        <el-option v-for="item in $store.state.rjsy"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                      <span class="input-text">停留有效期：</span>
                      <div class="input-input t-flex t-date">
                        <el-date-picker
                           v-model="pd.BIRTHDA" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyy-MM-dd"
                           placeholder="开始时间" >
                        </el-date-picker>
                        <span class="septum">-</span>
                        <el-date-picker
                            v-model="pd.BIRTHG" format="yyyy-MM-dd"
                            type="date" size="small" value-format="yyyy-MM-dd"
                            placeholder="结束时间" >
                        </el-date-picker>
                     </div>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="input-text">住房类型：</span>
                      <el-select v-model="pd.ZFLX" placeholder="请选择"  filterable clearable size="small" class="input-input">
                        <el-option v-for="item in $store.state.jzlx"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                      <span class="input-text">数据来源：</span>
                      <el-select v-model="pd.XXX" placeholder="请选择"  filterable clearable size="small" class="input-input">
                        <el-option v-for="item in $store.state.xbs"
                         :key="item.dm"
                         :label="item.dm+' - '+item.mc"
                         :value="item.dm"
                        >
                        </el-option>
                      </el-select>
                    </el-col>

              </el-row>
             </el-col>
                <el-col :span="2" class="down-btn-area">
                  <el-button type="success" size="small" @click="getList(CurrentPage,pageSize,pd)" class="mb-15">查询</el-button>
                  <el-button type="" size="small" @click="" class="mb-15"> 重置</el-button>
                </el-col>
              </el-row>
        </div>
        <div class="yycontent">
          <div class="yylbt mb-15">统计类别</div>
          <div class="mb-15">
                <el-checkbox label="国家地区" v-model="pd.rowproperty_flttype" checked></el-checkbox>
                <el-checkbox label="外国人和四种人分布" v-model="pd.rowproperty_country" checked></el-checkbox>
                <el-checkbox label="签证(注)种类" v-model="pd.rowproperty_cityto" checked></el-checkbox>
                <el-checkbox label="停留事由" v-model="pd.rowproperty_cityfrom" checked></el-checkbox>
                <el-checkbox label="十国人员" v-model="pd.rowproperty_cityto" checked></el-checkbox>
                <el-checkbox label="住房类型" v-model="pd.rowproperty_flttype" checked></el-checkbox>
                <el-checkbox label="所属责任区" v-model="pd.ww" ></el-checkbox>
                <el-checkbox label="性别" v-model="pd.ww" ></el-checkbox>
                <el-checkbox label="证件种类" v-model="pd.ww" ></el-checkbox>
                <el-checkbox label="三十一国人员" v-model="pd.ww" ></el-checkbox>
                <el-checkbox label="数据来源" v-model="pd.ww" ></el-checkbox>
                <el-checkbox label="住宿单位" v-model="pd.ww" ></el-checkbox>
                <el-checkbox label="迟报统计" v-model="pd.ww" ></el-checkbox>
          </div>
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
                 prop="date"
                 label="国家地区">
               </el-table-column>
               <el-table-column
                 prop="address"
                 label="外国人和四种人分布">
               </el-table-column>
               <el-table-column
                 prop="address"
                 label="签证(注)种类">
               </el-table-column>
               <el-table-column
                 prop="address"
                 label="停留事由">
               </el-table-column>
               <el-table-column
                 prop="address"
                 label="十国人员">
               </el-table-column>
               <el-table-column
                 prop="address"
                 label="住房类型">
               </el-table-column>
               <el-table-column
                 prop="address"
                 label="统计数量">
               </el-table-column>
               <el-table-column
                 label="操作" width="70">
                 <template slot-scope="scope">
                 <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'JWRYXX',query:{row:scope.row}})"></el-button>
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
          pd: {},
          nation:[],
          tableData:[],
          tableData1:[],

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
          }, ],

        }
      },
      mounted() {
         this.$store.dispatch("getGjdq");
         this.$store.dispatch("getXB");
         this.$store.dispatch("getSsdw");
         this.$store.dispatch("getZjzl");
         this.$store.dispatch("getQzzl");
         this.$store.dispatch("getRjsy");
         this.$store.dispatch("getJzlx");
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
          let p = {
            "currentPage": currentPage,
            "showCount": showCount,
            "pd": pd
          };
          this.$api.post('/manage-platform/riskNameList/getRiskNameListPage', p,
            r => {
              this.tableData = r.data.resultList;
              this.TotalResult = r.data.totalResult;
            })
        },
        details(i) {
          this.detailsDialogVisible = true;

        },
      }
    }
    </script>

    <style scoped>

    </style>
    <style>
.el-button+.el-button{margin-left: 0!important;}
    </style>
