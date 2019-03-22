<template lang="html">
    <!-- 出入境记录核查 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ywx" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ywm" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">中文姓名：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="pd.zwxm" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">国家地区：</span>
                  <el-select v-model="pd.gjdq" filterable clearable placeholder="请选择"  size="small" class="input-input">
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
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">出生日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.csrqBegin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.csrqEnd" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">身份证号：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.sfzh" class="input-input"></el-input>
                </el-col>
              </el-row>
         </el-col>

            <el-col :span="2" class="down-btn-area">
              <el-button type="success" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
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
             prop="ywx"
             label="英文姓">
           </el-table-column>
           <el-table-column
             prop="ywm"
             label="英文名">
           </el-table-column>
           <el-table-column
             prop="zwxm"
             label="中文姓名">
           </el-table-column>
           <el-table-column
             prop="zjhm"
             label="证件号码">
           </el-table-column>
           <el-table-column
             prop="gjdq"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="lsdwhz"
             label="留宿单位(户主)">
           </el-table-column>
           <el-table-column
             prop="lsdwhzdz"
             label="留宿单位(户主)地址">
           </el-table-column>
           <el-table-column
             prop="pcsmc"
             label="派出所名称">
           </el-table-column>
           <el-table-column
             label="操作" width="70">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(scope.row)"></el-button>
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
    <el-dialog title="编辑" :visible.sync="eidtsDialogVisible" custom-class="big_dialog" :append-to-body="false">
      <el-form :model="form" ref="addForm" class="crcolor" style="padding:10px">
        <el-row type="flex">
          <el-col :span="16">
            <el-row :gutter="2">
            <el-col :span="12">
            <span  :class="{'yy-input-text yyred':form.ywx_t == true,'yy-input-text':form.ywx_t== false}">英文姓：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.ywx"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="12">
            <span :class="{'yy-input-text yyred':form.ywm_t == true,'yy-input-text':form.ywm_t== false}">英文名：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.ywm"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="12">
            <span class="yy-input-text" >英文姓名：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.ywxm"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="12">
            <span :class="{'yy-input-text yyred':form.zwxm_t == true,'yy-input-text':form.zwxm_t== false}">中文姓名：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.zwxm"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="12">
              <span :class="{'yy-input-text yyred':form.zjzl_t == true,'yy-input-text':form.zjzl_t== false}">证件种类：</span>
              <el-select v-model="form.zjzl" filterable clearable placeholder="请选择"  size="small" class="yy-input-input">
                <el-option
                  v-for="item in zjzl"
                  :key="item.dm"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="12">
              <span :class="{'yy-input-text yyred':form.zjhm_t == true,'yy-input-text':form.zjhm_t== false}">证件号码：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.zjhm"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="12">
              <span :class="{'yy-input-text yyred':form.gjdq_t == true,'yy-input-text':form.gjdq_t== false}">国家地区：</span>
              <el-select v-model="form.gjdq" filterable clearable placeholder="请选择"  size="small" class="yy-input-input">
                <el-option
                  v-for="item in nation"
                  :key="item.dm"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="12">
              <span :class="{'yy-input-text yyred':form.csrq_t == true,'yy-input-text':form.csrq_t== false}">出生日期：</span>
                <el-date-picker class="yy-input-input"
                   v-model="form.csrq" format="yyyy-MM-dd"
                   type="date" size="small" value-format="yyyy-MM-dd"
                   placeholder="选择日期">
                </el-date-picker>
            </el-col>
            <el-col :span="12">
              <span :class="{'yy-input-text yyred':form.xb_t == true,'yy-input-text':form.xb_t== false}">性别：</span>
              <el-select v-model="form.xb" placeholder="请选择"  filterable clearable size="small" class="yy-input-input">
                <el-option value="0" label="0 - 未知">
                </el-option>
                <el-option value="1" label="1 - 男">
                </el-option>
                <el-option value="2" label="2 - 女">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="12">
              <span class="yy-input-text">身份证号：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.sfzh"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="12">
              <span class="yy-input-text">签证种类：</span>
              <el-select v-model="form.qzzl" filterable clearable placeholder="请选择"  size="small" class="yy-input-input">
                <el-option
                  v-for="item in qzzl"
                  :key="item.dm"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="12">
              <span class="yy-input-text" title="签证(注)号码">签证(注)号码：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.qzhm"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="12">
              <span class="yy-input-text">签发机关：</span>
              <el-select v-model="form.qfjg" filterable clearable placeholder="请选择"  size="small" class="yy-input-input">
                <el-option
                  v-for="item in qfjg"
                  :key="item.dm"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="12">
              <span class="yy-input-text" title="签证(注)有效期">签证(注)有效期：</span>
                <el-date-picker class="yy-input-input"
                   v-model="form.tlyxqz" format="yyyy-MM-dd"
                   type="date" size="small" value-format="yyyy-MM-dd"
                   placeholder="选择日期" >
                </el-date-picker>
            </el-col>
          </el-row>

          </el-col>
          <el-col :span="8">
            <div class="block">
               <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
               <el-carousel height="210px">
                 <el-carousel-item v-for="item in 4" :key="item">
                   <!-- <h3>{{ item }}</h3> -->
                 </el-carousel-item>
               </el-carousel>
              </div>
          </el-col>
        </el-row>

        <el-row :gutter="3" style="">
          <el-col :span="8">
            <span class="yy-input-text">行政区划：</span>

            <el-select v-model="form.lzdwxzqh" filterable clearable placeholder="请选择"  size="small" class="yy-input-input">
              <el-option
                v-for="item in xzqh"
                :key="item.dm"
                :label="item.dm+' - '+item.mc"
                :value="item.dm">
              </el-option>
            </el-select>

          </el-col>
          <el-col :span="8">
            <span class="yy-input-text" title="签证签发日期：">签证签发日期：</span>
            <el-date-picker class="yy-input-input"
               v-model="form.gfrq" format="yyyy-MM-dd"
               type="date" size="small" value-format="yyyy-MM-dd"
               placeholder="选择日期" >
            </el-date-picker>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text">何处来：</span>
            <el-radio v-model="form.hcl_gnw" label="0">国内</el-radio>
            <el-radio v-model="form.hcl_gnw" label="1">国外</el-radio>
          </el-col>
          <el-col :span="8">

            <span class="yy-input-text">入境日期：</span>
              <el-date-picker class="yy-input-input"
                 v-model="form.rjrq" format="yyyy-MM-dd"
                 type="date" size="small" value-format="yyyy-MM-dd"
                 placeholder="选择日期" >
              </el-date-picker>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text">入境口岸：</span>
            <el-select v-model="form.rjka" filterable clearable placeholder="请选择"  size="small" class="yy-input-input">
              <el-option
                v-for="item in rjkn"
                :key="item.dm"
                :label="item.dm+' - '+item.mc"
                :value="item.dm">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text">&nbsp;</span>
            <el-select v-model="form.hcl"  filterable clearable class="yy-input-input"  placeholder="请选择何处来"  size="small">
            <el-option value="I" label="全部">
            </el-option>
            <el-option value="O" label="市局">
            </el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text">入境事由：</span>
            <el-select v-model="form.rjsy" filterable clearable placeholder="请选择"  size="small" class="yy-input-input">
              <el-option
                v-for="item in rjsy"
                :key="item.dm"
                :label="item.dm+' - '+item.mc"
                :value="item.dm">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text">入住日期：</span>
            <el-date-picker class="yy-input-input"
               v-model="form.rjrq" format="yyyy-MM-dd"
               type="date" size="small" value-format="yyyy-MM-dd"
               placeholder="选择日期" >
            </el-date-picker>
          </el-col>

          <el-col :span="8">
            <span class="yy-input-text">何处去：</span>
            <el-radio v-model="form.hcq_gnw" label="0">国内</el-radio>
            <el-radio v-model="form.hcq_gnw" label="1">国外</el-radio>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text">接待单位：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.jddw"  class="yy-input-input"></el-input>
          </el-col>

          <el-col :span="8">
            <span class="yy-input-text" title="拟离开日期">拟离开日期：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.nlkrq"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8">
              <span class="yy-input-text">&nbsp;</span>
            <el-select v-model="form.hcq"  filterable clearable  class="yy-input-input" placeholder="请选择何处去"  size="small">
            <el-option value="I" label="全部">
            </el-option>
            <el-option value="O" label="市局">
            </el-option>
            </el-select>
          </el-col>
          <el-col :span="8" class="crcolor">
            <span class="yy-input-text">投宿于：</span>
            <el-radio v-model="form.type" label="1" @change="getTS('1')">社会面</el-radio>
            <el-radio v-model="form.type" label="2" @change="getTS('2')">旅馆</el-radio>
          </el-col>
          <el-col :span="16" v-show="shm"  class="crcolor">
            <span class="yy-input-text" title="标准化地址" style="width:17.4%">标准化地址：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.bzhdzid"  class="input-input" style="width:80%!important"></el-input>
          </el-col>

          <!-- <el-col :span="8" v-show="shm"  class="crcolor">
            <span class="yy-input-text">社区：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.name"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8" v-show="shm"  class="crcolor">
            <span class="yy-input-text">责任区：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.name"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8" v-show="shm"  class="crcolor">
            <span class="yy-input-text">&nbsp;</span>

          </el-col> -->
          <el-col :span="8" v-show="lg"  class="crcolor">
            <span class="yy-input-text">旅馆名称：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.name"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8" v-show="lg"  class="crcolor">
            <span class="yy-input-text">房号：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.fh"  class="yy-input-input"></el-input>
          </el-col>
          </el-row>
          <el-row :gutter="3">
          <el-col :span="8">
            <span class="yy-input-text" title="本人联系电话">本人联系电话：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.brlxdh"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text" title="紧急情况联系人">紧急情况联系人：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.gnyqr"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8" v-show="shm"  class="crcolor">
            <span class="yy-input-text">派出所名称：</span>
            <el-select v-model="form.pcsbh" filterable clearable placeholder="请选择"  size="small" class="yy-input-input">
              <el-option
                v-for="item in pcs"
                :key="item.dm"
                :label="item.mc"
                :value="item.dm">
              </el-option>
            </el-select>
          </el-col>

          <el-col :span="8">
            <span class="yy-input-text" title="留宿单位(户主)">留宿单位(户主)：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.lsdwhz"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text" title="留宿单位(户主)电话">留宿单位(户主)电话：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.lsdwhzdh"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text" title="紧急情况联系电话">紧急情况联系电话：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.gnyqrdh"  class="yy-input-input"></el-input>
          </el-col>

          <el-col :span="8">
            <span class="yy-input-text" title="与境外联系人员">与境外联系人员：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.jwrygx"  class="yy-input-input"></el-input>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text">房屋性质：</span>
            <el-select v-model="form.fwxz" filterable clearable placeholder="请选择"  size="small" class="yy-input-input">
              <el-option
                v-for="item in zsxz"
                :key="item.dm"
                :label="item.dm+' - '+item.mc"
                :value="item.dm">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <span class="yy-input-text" title="房主身份证号">房主身份证号：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.lsrzjhm"  class="yy-input-input"></el-input>
          </el-col>
          <!-- <el-col :span="8">
            <span class="yy-input-text">住房种类：</span>
            <el-input placeholder="请输入内容" size="small" v-model="form.name"  class="yy-input-input"></el-input>
          </el-col> -->

          </el-row>
          <el-row :gutter="1">
            <el-col :span="24">
              <span class="yy-input-text" style="width:11.5%;">备注：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.bz"   class="input-input" style="width:87%!important;"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="3">
            <el-col :span="8">
              <span class="yy-input-text">录入人：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.name"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">录入单位：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.name"  class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8">
              <span class="yy-input-text">录入日期：</span>
              <el-input placeholder="请输入内容" size="small" v-model="form.lrsj"  class="yy-input-input"></el-input>
            </el-col>
          </el-row>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addItem('addForm')" size="small">确 定</el-button>
          <el-button @click="eidtsDialogVisible = false" size="small">取 消</el-button>
        </div>
      </el-dialog>
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
      pd: {type:'1',hcq_gnw:'0',hcq_gnl:'0'},
      form:{},
      nation:[],
      zjzl:[],
      qzzl:[],
      rjkn:[],
      rjsy:[],
      qfjg:[],
      pcs:[],
      jzlx:[],
      zsxz:[],
      jzzt:[],
      xzqh:[],
      tableData:[],
      eidtsDialogVisible:false,
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
      tableData: [],
      shm:true,
      lg:false,

    }
  },
  mounted() {
    this.getGJDQ();
    this.getDMXX();

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
    getGJDQ()
    {
      var url=this.Global.aport1+this.Global.gjdq;
      this.$api.get(url, null,
        r => {
          this.nation = ToArray(r.data);
        })
    },
    getDMXX()
    {
      //证件种类
      this.$api.get(this.Global.aport1+this.Global.zjzl, null,
        r => {
          this.zjzl = ToArray(r.data);
        })
        //签证种类
      this.$api.get(this.Global.aport1+this.Global.qzzl, null,
        r => {
          this.qzzl = ToArray(r.data);
        })
        //入境口岸
      this.$api.get(this.Global.aport1+this.Global.rjkn, null,
        r => {
          this.rjkn = ToArray(r.data);
        })
        //入境事由
      this.$api.get(this.Global.aport1+this.Global.rjsy, null,
        r => {
          this.rjsy = ToArray(r.data);
        })
        //签发机关
      this.$api.get(this.Global.aport1+this.Global.qfjg, null,
        r => {
          this.qfjg = ToArray(r.data);
        })
        //派出所
      this.$api.get(this.Global.aport1+this.Global.pcs, null,
        r => {
          this.pcs = ToArray(r.data);
        })
        //居住类型
      this.$api.get(this.Global.aport1+this.Global.jzlx, null,
        r => {
          this.jzlx = ToArray(r.data);
        })
        //住所性质
      this.$api.get(this.Global.aport1+this.Global.zsxz, null,
        r => {
          this.zsxz = ToArray(r.data);
        })
        //居住状态
      this.$api.get(this.Global.aport1+this.Global.jzzt, null,
        r => {
          this.jzzt = ToArray(r.data);
        })
        //行政区划
      this.$api.get(this.Global.aport1+this.Global.xzqh, null,
        r => {
          this.xzqh = ToArray(r.data);
        })
        //国内

        //国外
    },
    getList(currentPage, showCount, pd) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      var url=this.Global.aport2+'/data_report/findAll';
      this.$api.post(url, p,
        r => {
          this.tableData = r.data.pdList;
          this.TotalResult = r.data.totalResult;
        })
    },
    getTS(n)
    {

      if(n=="1"){
        this.shm=true;
        this.lg=false;
      }else{
        this.shm=false;
        this.lg=true;
      }
    },
    edits(n){
       this.eidtsDialogVisible=true;
       let p={
        "id":n.uuid
       };
       var url=this.Global.aport2+'/data_report/selectDjxx';
       this.$api.post(url,p,
       r=>{

              this.form=r.data;
              this.form.hcl_gnw=r.data.hcl_gnw;
              this.form.hcq_gnw=r.data.hcq_gnw;
       });
    },
    addItem(afrom)
    {
      var url = this.Global.aport2+"/data_report/update";
          this.$api.post(url, this.form,
          r => {
            console.log(r);
            if (r.success) {
              this.$message({
                message: '保存成功！',
                type: 'success'
              });
            } else {
              this.$message.error(r.Message);
            }
            this.$refs[afrom].resetFields();
            this.eidtsDialogVisible = false;
            this.getList(this.CurrentPage,this.pageSize,this.pd);

          }, e => {
            this.$message.error('失败了');
          });
    },

  }
}
</script>

<style scoped>


.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
  background: url(../../../assets/img/t1.png);
  background-size: 100% 100%;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .block{padding-top: 5px;}
  .crcolor{background: #EFF3F6;}
  .yy-input-text{text-align:left!important;}
</style>
