<template lang="html">
   <div class="yycontent">
  <div class="tshu" id="target">
       <el-row>
          <el-col :span="3" style="">
           <img src="../../../../assets/img/mrzp.png" v-if="imgshow">
           <img :src="imgdm" v-else>
           <el-button type="primary"  size="mini" style="width:80%" @click="getZP()">历史照片</el-button>
          </el-col>
          <el-col :span="21" class="bainfo">
              <el-row :gutter="3">
                <el-col :span="8">
                  英文姓名：{{baseinfo.YWXM}}
                </el-col>
                <el-col :span="8">
                  中文姓名：{{baseinfo.ZWXM}}
                </el-col>
                <el-col :span="8">
                  性别：{{baseinfo.XB_DESC}}
                </el-col>
                <el-col :span="8">
                  国家地区：{{baseinfo.GJDQ_DESC}}
                </el-col>
                <el-col :span="8">
                  宗教信仰：{{baseinfo.ZJXY_DESC}}
                </el-col>
                <el-col :span="8">
                  出生日期：{{baseinfo.CSRQ}}
                </el-col>
                <el-col :span="8">
                  证件号码：{{baseinfo.ZJHM}}
                </el-col>
              </el-row>
              <el-row class="mb-10">
                <el-col :span="22">
                  <span v-for="(item,i) in labs">
                  <el-button :type="suc[i]" size="small" @click="delid(item.BQBH)">{{item.MC}}</el-button>  &nbsp;
                  </span>
                  <span>&nbsp;
                    <el-button type="primary" plain  size="small" icon="el-icon-plus" @click="addLable">添加标签</el-button>
                    <el-button type="warning" plain  size="small" icon="el-icon-delete" @click="delLable">删除标签</el-button>
                  </span>

                </el-col>
                <el-col :span="2">
                  <el-button type="primary" size="small" @click="$router.go(-1)" style="margin-left:15px;">返 回</el-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">

  <el-table
      :data="tableData10"
      border
      style="width: 100%" class="stu-table">
      <el-table-column
        prop="ZJZL_DESC"
        label="证件种类">
      </el-table-column>
      <el-table-column
        prop="ZJHM"
        label="证件号码">
      </el-table-column>
      <el-table-column
        prop="ZJYXQ"
        label="证件有效期">
      </el-table-column>

    </el-table>
</el-col>
                  </el-row>

          </el-col>
       </el-row>

          <div class="stru-lal">签证信息</div>
       <el-table
           :data="tableData11"
           border
           style="width: 100%;margin-left:5px;" class="stu-table">
           <el-table-column
             prop="QZZL_DESC"
             label="签证种类">
           </el-table-column>
           <el-table-column
             prop="QZHM"
             label="签证号码">
           </el-table-column>
           <el-table-column
             prop="QZYXQ"
             label="签证有效期">
           </el-table-column>
           <el-table-column
             prop="QFJG_DESC"
             label="签证机关">
             </el-table-column>
             <el-table-column
               prop="QFRQ"
               label="签发日期">
             </el-table-column>
             <el-table-column
               prop="QZCS"
               label="签证次数">
             </el-table-column>
             <el-table-column
               prop="TLSY"
               label="停留事由">
             </el-table-column>
       </el-table-column>
         </el-table>
       <div class="stru-lal">出入境记录</div>
       <el-table
           :data="tableData1"
           border
           style="width: 100%;" class="stu-table">
           <el-table-column
             prop="IOTIME"
             label="出入境时间">
           </el-table-column>
           <el-table-column
             prop="CRKAMC"
             label="出入境状态">
           </el-table-column>
           <el-table-column
             prop="CRJBSMC"
             label="出入境口岸">
           </el-table-column>
           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailscrj(scope.row)"></el-button>
             </template>
           </el-table-column>
         </el-table>
      <div class="middle-foot">
        <div class="page-msg">
          <div class="">
        共{{TotalResult1}}条记录
          </div>
          <div class="">
            每页显示
            <el-select v-model="pageSize1" @change="pageSizeChange1(pageSize1)" placeholder="10" size="mini" class="page-select">
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
            共{{Math.ceil(TotalResult1/pageSize1)}}页
          </div>
        </div>
        <el-pagination
          background
          @current-change="handleCurrentChange1"
          :current-page:sync="CurrentPage1"
          :page-size="pageSize1"
          layout="prev, pager, next"
          :total="TotalResult1">
        </el-pagination>
      </div>

       <div class="stru-lal">临住信息</div>
       <el-table
           :data="tableData2"
           border
           style="width: 100%" class="stu-table">
           <el-table-column
             prop="LRRQ"
             label="录入日期">
           </el-table-column>
           <el-table-column
             prop="QZZL_DESC"
             label="签证种类">
           </el-table-column>
           <el-table-column
             prop="DJDWMC"
             label="登记单位">
           </el-table-column>
           <el-table-column
             prop="BZHDZMC"
             label="登记地址">
           </el-table-column>
           <el-table-column
             prop="ZFZL_DESC"
             label="住房种类">
           </el-table-column>
           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailslzxx(scope.row)"></el-button>
             </template>
           </el-table-column>
         </el-table>
      <div class="middle-foot">
        <div class="page-msg">
          <div class="">
        共{{TotalResult2}}条记录
          </div>
          <div class="">
            每页显示
            <el-select v-model="pageSize2" @change="pageSizeChange2(pageSize2)" placeholder="10" size="mini" class="page-select">
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
            共{{Math.ceil(TotalResult2/pageSize2)}}页
          </div>
        </div>
        <el-pagination
          background
          @current-change="handleCurrentChange2"
          :current-page:sync="CurrentPage2"
          :page-size="pageSize2"
          layout="prev, pager, next"
          :total="TotalResult2">
        </el-pagination>
      </div>


      <div class="stru-lal">常住信息</div>
      <el-table
          :data="tableData3"
          border
          style="width: 100%" class="stu-table">
          <el-table-column
            prop="DJRQ"
            label="登记日期">
          </el-table-column>
          <el-table-column
            prop="DJDW"
            label="登记单位">
          </el-table-column>
          <el-table-column
            prop="SFDM_DESC"
            label="身份">
          </el-table-column>
          <el-table-column
            prop="RJSY"
            label="入境事由">
          </el-table-column>
          <el-table-column
            label="操作" width="120">
            <template slot-scope="scope">
            <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailscz(scope.row)"></el-button>
            </template>
          </el-table-column>
        </el-table>
     <div class="middle-foot">
       <div class="page-msg">
         <div class="">
       共{{TotalResult3}}条记录
         </div>
         <div class="">
           每页显示
           <el-select v-model="pageSize3" @change="pageSizeChange3(pageSize3)" placeholder="10" size="mini" class="page-select">
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
           共{{Math.ceil(TotalResult3/pageSize3)}}页
         </div>
       </div>
       <el-pagination
         background
         @current-change="handleCurrentChange3"
         :current-page:sync="CurrentPage3"
         :page-size="pageSize3"
         layout="prev, pager, next"
         :total="TotalResult3">
       </el-pagination>
     </div>
     <div class="stru-lal">案事件记录</div>
     <el-table
         :data="tableData4"
         border
         style="width: 100%" class="stu-table">
         <el-table-column
           prop="ASJLX"
           label="案事件类型">
         </el-table-column>
         <el-table-column
           prop="AJLB_DESC"
           label="案件类别">
         </el-table-column>
         <el-table-column
           prop="AJMC"
           label="案件名称">
         </el-table-column>
         <el-table-column
           prop="DJSJ"
           label="登记时间">
         </el-table-column>
         <el-table-column
           prop="DJDWMC"
           label="登记单位">
         </el-table-column>
         <el-table-column
           label="操作" width="120">
           <template slot-scope="scope">
           <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsasj(scope.row)"></el-button>
           </template>
         </el-table-column>
       </el-table>
    <div class="middle-foot">
      <div class="page-msg">
        <div class="">
      共{{TotalResult4}}条记录
        </div>
        <div class="">
          每页显示
          <el-select v-model="pageSize4" @change="pageSizeChange4(pageSize4)" placeholder="10" size="mini" class="page-select">
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
          共{{Math.ceil(TotalResult4/pageSize4)}}页
        </div>
      </div>
      <el-pagination
        background
        @current-change="handleCurrentChange4"
        :current-page:sync="CurrentPage4"
        :page-size="pageSize4"
        layout="prev, pager, next"
        :total="TotalResult4">
      </el-pagination>
    </div>
    <div class="stru-lal">民航进出港信息</div>
    <el-table
        :data="tableData5"
        border
        style="width: 100%" class="stu-table">
        <el-table-column
          prop="STA_ARVETM"
          label="进港时间">
        </el-table-column>
        <el-table-column
          prop="STA_DEPTTM"
          label="出港时间">
        </el-table-column>
        <el-table-column
          prop="FLT_AIRLCODE"
          label="航空公司代码">
        </el-table-column>
        <el-table-column
          prop="FLT_NUMBER"
          label="航班号">
        </el-table-column>
        <el-table-column
          label="操作" width="120">
          <template slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsMH(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
   <div class="middle-foot">
     <div class="page-msg">
       <div class="">
     共{{TotalResult5}}条记录
       </div>
       <div class="">
         每页显示
         <el-select v-model="pageSize5" @change="pageSizeChange5(pageSize5)" placeholder="10" size="mini" class="page-select">
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
         共{{Math.ceil(TotalResult5/pageSize5)}}页
       </div>
     </div>
     <el-pagination
       background
       @current-change="handleCurrentChange5"
       :current-page:sync="CurrentPage5"
       :page-size="pageSize5"
       layout="prev, pager, next"
       :total="TotalResult5">
     </el-pagination>
   </div>
   <div class="stru-lal">单位信息</div>
   <el-table
       :data="tableData6"
       border
       style="width: 100%" class="stu-table">
       <el-table-column
         prop="GZD_MC"
         label="单位名称">
       </el-table-column>
       <el-table-column
         prop="GZD_ZZJG"
         label="组织机构代码">
       </el-table-column>
       <el-table-column
         prop="XXDZ"
         label="单位地址">
       </el-table-column>
       <el-table-column
         label="操作" width="120">
         <template slot-scope="scope">
         <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsdw(scope.row)"></el-button>
         </template>
       </el-table-column>
     </el-table>
  <div class="middle-foot">
    <div class="page-msg">
      <div class="">
    共{{TotalResult6}}条记录
      </div>
      <div class="">
        每页显示
        <el-select v-model="pageSize6" @change="pageSizeChange6(pageSize6)" placeholder="10" size="mini" class="page-select">
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
        共{{Math.ceil(TotalResult6/pageSize6)}}页
      </div>
    </div>
    <el-pagination
      background
      @current-change="handleCurrentChange6"
      :current-page:sync="CurrentPage6"
      :page-size="pageSize6"
      layout="prev, pager, next"
      :total="TotalResult6">
    </el-pagination>
  </div>
  <div class="stru-lal">留学生信息</div>
  <el-table
      :data="tableData7"
      border
      style="width: 100%" class="stu-table">
      <el-table-column
        prop="STAREPORTS"
        label="报到时间">
      </el-table-column>
      <el-table-column
        prop="CFACULTY"
        label="院系中文名称">
      </el-table-column>
      <el-table-column
        prop="ACCACADEMY"
        label="学校名称">
      </el-table-column>
      <el-table-column
        label="操作" width="120">
        <template slot-scope="scope">
        <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailslxs(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
 <div class="middle-foot">
   <div class="page-msg">
     <div class="">
   共{{TotalResult7}}条记录
     </div>
     <div class="">
       每页显示
       <el-select v-model="pageSize7" @change="pageSizeChange7(pageSize7)" placeholder="10" size="mini" class="page-select">
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
       共{{Math.ceil(TotalResult7/pageSize7)}}页
     </div>
   </div>
       <el-pagination
         background
         @current-change="handleCurrentChange7"
         :current-page:sync="CurrentPage7"
         :page-size="pageSize7"
         layout="prev, pager, next"
         :total="TotalResult7">
       </el-pagination>
     </div>

     <el-dialog title="案事件详情" :visible.sync="asjDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
       <ANSJ :type="type" :xid="xid"></ANSJ>
       <div slot="footer" class="dialog-footer">
         <el-button @click="asjDialogVisible = false" size="small">取 消</el-button>
       </div>
     </el-dialog>
     <el-dialog title="临住信息详情" :visible.sync="lzxxDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
       <LZXX :type="type" :xid="xid" :rid="rid"></LZXX>
       <div slot="footer" class="dialog-footer">
         <el-button @click="lzxxDialogVisible = false" size="small">取 消</el-button>
       </div>
     </el-dialog>
     <el-dialog title="常住信息详情" :visible.sync="czDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
       <CZXX :type="type" :xid="xid"></CZXX>
       <div slot="footer" class="dialog-footer">
         <el-button @click="czDialogVisible = false" size="small">取 消</el-button>
       </div>
     </el-dialog>
     <el-dialog title="民航进出港信息详情" :visible.sync="mhDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
       <MHXX :type="type" :xid="xid"></MHXX>
       <div slot="footer" class="dialog-footer">
         <el-button @click="mhDialogVisible = false" size="small">取 消</el-button>
       </div>
     </el-dialog>
     <!-- 出入境信息 -->
    <el-dialog title="出入境信息详情" :visible.sync="crjDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
              <CRJXX :type="type" :xid="xid"></CRJXX>
                 <div slot="footer" class="dialog-footer">
                   <el-button @click="crjDialogVisible = false" size="small">取 消</el-button>
                 </div>
    </el-dialog>
    <!-- 单位信息详情 -->
   <el-dialog title="单位信息详情" :visible.sync="dwDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
             <DWXX :type="type" :xid="xid"></DWXX>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dwDialogVisible = false" size="small">取 消</el-button>
                </div>
   </el-dialog>

    <!-- 留学生信息详情 -->
    <el-dialog title="留学生信息详情" :visible.sync="lxsDialogVisible"  custom-class="big_dialog" :append-to-body="false" :modal="false">
                <LXSXX :type="type" :xid="xid"></LXSXX>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="lxsDialogVisible = false" size="small">取 消</el-button>
                </div>
   </el-dialog>
</div>
<!-- 弹出小的窗口 -->
       <el-dialog title="添加标签" :visible.sync="bqDialogVisible">
         <el-row :gutter="1">
           <el-col  :span="24"  class="input-item">
              <span class="input-text">标签名称：</span>
              <el-select v-model="labmc" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                <el-option
                  v-for="(item,ind) in labels"
                  :key="ind"
                  :label="item.MC"
                  :value="item.BM+','+item.MC">
                </el-option>
              </el-select>
           </el-col>
         </el-row>
         <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="saveLabls()" size="small">确 定</el-button>
           <el-button @click="bqDialogVisible = false" size="small">取 消</el-button>
         </div>
       </el-dialog>
       <el-dialog title="历史照片" :visible.sync="zpDialogVisible">
         <div v-for="img in images">
              <img  :src="img.ZPNR" style="width:90px; height:120px;">
         </div>
         <div slot="footer" class="dialog-footer">
           <el-button @click="zpDialogVisible = false" size="small">取 消</el-button>
         </div>
       </el-dialog>
   </div>
</template>
<script scoped>
import LZXX from '../../../common/lzxx_xq'
import ANSJ from '../../../common/ansj_xq'
import CRJXX from '../../../common/crjxx_xq'
import LXSXX from '../../../common/lxsxx_xq'
import CZXX from '../../../common/czxx_xq'
import DWXX from '../../../common/dwxx_xq'
import MHXX from '../../../common/mhjcg_xq'
export default{
    components:{LZXX,ANSJ,CRJXX,LXSXX,CZXX,DWXX,MHXX},
  data(){
    return{
      suc:['success','info','warning','danger','primary'],
       baseinfo:{},
       row:{},
       labmc:'',
       zjhm:'',
       labs:[],
       labels:[],
       images:[],
       type:2,
       xid:'',
       rid:'',
       pd:{},
       imgdm:'',
       moveid:'',
       imgshow:true,
       bqDialogVisible:false,
       zpDialogVisible:false,
       lzxxDialogVisible:false,
       crjDialogVisible:false,
       asjDialogVisible:false,
       lxsDialogVisible:false,
       czDialogVisible:false,
       dwDialogVisible:false,
       mhDialogVisible:false,
       tableData1:[],
       tableData2:[],
       tableData3:[],
       tableData4:[],
       tableData5:[],
       tableData6:[],
       tableData7:[],
       tableData10:[],
       tableData11:[],
       CurrentPage1: 1,
       pageSize1: 3,
       TotalResult1: 0,
       CurrentPage2: 1,
       pageSize2: 3,
       TotalResult2: 0,
       CurrentPage3: 1,
       pageSize3: 3,
       TotalResult3: 0,
       CurrentPage4: 1,
       pageSize4: 3,
       TotalResult4: 0,
       CurrentPage5: 1,
       pageSize5: 3,
       TotalResult5: 0,
       CurrentPage6: 1,
       pageSize6: 3,
       TotalResult6: 0,
       CurrentPage7: 1,
       pageSize7: 3,
       TotalResult7: 0,
       options:[{
         value: 3,
         label: "3"
       },
       {
         value:5,
         label: "5"
       },
       {
         value: 7,
         label: "7"
       }
     ],

    }
  },
  activated(){
    this.row=this.$route.query.row;
    this.zjhm=this.$route.query.ZJHM;

    if(this.zjhm!="" && this.zjhm!=undefined){
      this.pd.ZJHM=this.zjhm;
    }else {
      this.pd.RYBH=this.row.RYBH;
    }

    this.getRYXX();
    this.getLable();
    this.getZXZP();
    this.getCrj(this.CurrentPage1,this.pageSize1,this.pd);
    this.getLzxx(this.CurrentPage2, this.pageSize2,this.pd);
    this.getCZXX(this.CurrentPage3,this.pageSize3,this.pd);
    this.getASJXX(this.CurrentPage4,this.pageSize4,this.pd);
    this.getMHJCGXX(this.CurrentPage5,this.pageSize5,this.pd);
    this.getDWJBXX(this.CurrentPage6,this.pageSize6,this.pd);
    this.getLXSXX(this.CurrentPage7,this.pageSize7,this.pd);
    this.getQZXX(this.pd);
    this.getZJXX(this.pd);
  },
  mounted(){

  },
  methods:{
    pageSizeChange1(val) {
        this.getCrj(this.CurrentPage1,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange1(val) {
        this.getCrj(val,this.pageSize1,this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange2(val) {
      this.getLzxx(this.CurrentPage2, val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange2(val) {
      this.getLzxx(val, this.pageSize2,this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange3(val) {
      this.getCZXX(this.CurrentPage3,val,this.pd)
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange3(val) {
      this.getCZXX(val,this.pageSize3,this.pd)
      console.log(`当前页: ${val}`);
    },
    pageSizeChange4(val) {
    this.getASJXX(this.CurrentPage4,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange4(val) {
      this.getASJXX(val,this.pageSize4,this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange5(val) {
        this.getMHJCGXX(this.CurrentPage5,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange5(val) {
        this.getMHJCGXX(val,this.pageSize5,this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange6(val) {
      this.getDWJBXX(this.CurrentPage6,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange6(val) {
      this.getDWJBXX(val,this.pageSize6,this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange7(val) {
        this.getLXSXX(this.CurrentPage7,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange7(val) {
      this.getLXSXX(val,this.pageSize7,this.pd);
      console.log(`当前页: ${val}`);
    },
    //最新照片
    getZXZP(){
      let p = {
        "pd": this.pd,
        "currentPage":1,
      	"showCount":1,
      	"orderBy":"GXSJ",
      	"orderType":"DESC"
      };
      this.$api.post(this.Global.aport3+'/ryhx/getrytpxx', p,
        r => {
          console.log('r.data.resultList.ZPNR',r.data.resultList.ZPNR);
          if(r.data.resultList.ZPNR){
          this.imgshow=false;
          this.imgdm = r.data.resultList.ZPNR;
          }
        })

    },
    //人员基本信息
    getRYXX(){

      let p = {
        "pd": this.pd,
      };
      this.$api.post(this.Global.aport3+'/ryhx/getryryxx', p,
        r => {
          this.baseinfo = r.data.resultList[0];
        })
    },
    //获取标签
    getLable(){

      let p = {
        "pd": this.pd,
      };
      this.$api.post(this.Global.aport3+'/ryhx/getrybqxx', p,
        r => {
          this.labs = r.data.resultList;
        })
    },
     //添加标签
    addLable(){
     this.bqDialogVisible=true;
      this.$api.post(this.Global.aport3+'/ryhx/getreslab', null,
        r => {
          this.labels = r.data.resultList;
          this.getLable();
        })
    },
    //保存标签
    saveLabls(){
         var srr=this.labmc.split(',');
      let p={
        "RYBH":this.row.RYBH,
        "BM":srr[0],
        "MC":srr[1],
      };
      this.$api.post(this.Global.aport3+'/ryhx/addrybqbyrybh', p,
        r => {
          if(r.success){
            this.$message({
              message: '保存成功',
              type: 'success'
            });
           this.bqDialogVisible=false;
          }else {
            this.$message.error(r.message);return;
          }
        })
    },
    delid(dm){

      this.moveid=dm;
    },
    // 删除标签
    delLable(){

      if(this.moveid=="" || this.moveid==undefined){
          this.$message.error("请选择标签!");return;
      }

      let p={
        "RYBH":this.pd.RYBH,
        "BQBH":this.moveid,

      };
      this.$api.post(this.Global.aport3+'/ryhx/deleterybqbyrybh', p,
        r => {
          if(r.success){
            this.$message({
              message: '删除成功',
              type: 'success'
            });
           this.getLable();
          }else {
            this.$message.error(r.message);
          }
        })

    },
    //历史照片
    getZP(){
      this.pd={};
      this.pd.RYBH=this.row.RYBH;
      let p={
        "pd":this.pd,

      };
      this.$api.post(this.Global.aport3+'/ryhx/getrytpxx', null,
        r => {
          this.images = r.data.resultList;
        })
      this.zpDialogVisible=true;
    },
    //出入境
    getCrj(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
      	"showCount":showCount,
        "pd":pd

      };
      this.$api.post(this.Global.aport3+'/ryhx/getcrjjl', p,
        r => {
          this.tableData1 = r.data.resultList;
          this.TotalResult1=r.data.totalResult;
        })
    },
    //临住信息
    getLzxx(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd

      };
      this.$api.post(this.Global.aport3+'/ryhx/getlzlzxx', p,
        r => {
          this.tableData2 = r.data.resultList;
          this.TotalResult2=r.data.totalResult;
        })
    },
    // 常住信息
    getCZXX(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd

      };
      this.$api.post(this.Global.aport3+'/ryhx/getczryjbxx', p,
        r => {
          this.tableData3 = r.data.resultList;
          this.TotalResult3=r.data.totalResult;
        })
    },
    // 案事件
    getASJXX(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd

      };
      this.$api.post(this.Global.aport3+'/ryhx/getajjbxx', p,
        r => {
          this.tableData4 = r.data.resultList;
          this.TotalResult4=r.data.totalResult;
        })
    },
    // 民航进出港
    getMHJCGXX(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd

      };
      this.$api.post(this.Global.aport3+'/ryhx/getstmhjgxxn', p,
        r => {
          this.tableData5 = r.data.resultList;
          this.TotalResult5=r.data.totalResult;
        })
    },
    // 单位基本信息
    getDWJBXX(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd

      };
      this.$api.post(this.Global.aport3+'/ryhx/getczgzdxx', p,
        r => {
          this.tableData6 = r.data.resultList;
          this.TotalResult6=r.data.totalResult;
        })
    },
    // 留学生基本信息
    getLXSXX(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd
      };
      this.$api.post(this.Global.aport3+'/ryhx/getlxjsbaseinfo', p,
        r => {
          this.tableData7 = r.data.resultList;
          this.TotalResult7=r.data.totalResult;
        })
    },
    //证件信息
    getZJXX(pd){
      let p={
        "currentPage":"1",
        "showCount":"1",
        "pd":pd,
        "orderBy":"RJRQ",
        "orderType":"DESC"
      };
      this.$api.post(this.Global.aport3+'/ryhx/getryjwryzj', p,
        r => {
          this.tableData10 = r.data.resultList;
        })
    },
    //签证信息
    getQZXX(pd){
      let p={
        "currentPage":"1",
        "showCount":"1",
        "pd":pd,
        "orderBy":"RJRQ",
        "orderType":"DESC"

      };
      this.$api.post(this.Global.aport3+'/ryhx/getryjwryqz', p,
        r => {
          this.tableData11 = r.data.resultList;
        })
    },
    detailscrj(n){
          this.xid=n.RGUID;
          target.scrollIntoView();
          console.log('RGUID',n.RGUID);
          this.crjDialogVisible=true;
    },
    detailslzxx(n){
      this.xid=n.GUID;
      target.scrollIntoView();
      this.lzxxDialogVisible=true;
    },
    detailsasj(n){
      this.xid=n.GUID;
      target.scrollIntoView();
      this.asjDialogVisible=true;
    },
    detailslxs(n){
      this.xid=n.RGUID;
      target.scrollIntoView();
      console.log(n.DTID);
      this.lxsDialogVisible=true;
    },
    detailscz(n){
    this.xid=n.RGUID;
    this.rid=n.RYBH;
    console.log('this.rid',this.rid);
    target.scrollIntoView();
    this.czDialogVisible=true;
    },
detailsdw(n){
  this.xid=n.RGUID;
  target.scrollIntoView();
  this.dwDialogVisible=true;
},
detailsMH(n)
{
  this.xid=n.RGUID;
  this.mhDialogVisible==true;
},
  },
}
</script>
<style scoped>
.bainfo{font-size: 12px;line-height: 30px; padding-left:15px;}
.middle-foot{ margin-top: 10px;}
</style>
