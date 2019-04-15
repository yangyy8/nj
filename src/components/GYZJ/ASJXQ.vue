<template lang="html">
  <!-- 留學生信息管理預警详情 -->
  <div class="yymain">
    <div class="yycontent">
      <div class="mb-15">
        <div class="yylbt mb-15">基本信息</div>
        <el-row type="flex" class="yyf">
          <el-col :span="24" class="stu-left">
            <el-row :gutter="4">
              <el-col :span="6" class="stu-col-row2">
                <span>姓名：</span>
                   {{baseData.ZWXM}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span>性别：</span>
                   {{baseData.XB}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span>国家/地区：</span>
                   {{baseData.GJDQ}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span>证件种类：</span>
                   {{baseDatazj.ZJZL}}
              </el-col>
                </el-row>
            <el-row  :gutter="4">
              <el-col :span="6" class="stu-col-row2">
                <span >证件有效期：</span>
                   {{baseDatazj.ZJYXQ}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span>证件号码：</span>
                   {{baseDatazj.ZJHM}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span>签证种类：</span>
                   {{baseDataqz.QZZL}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span>签证号码：</span>
                   {{baseDataqz.QZHM}}
              </el-col>

            </el-row>
            <el-row  :gutter="4">
              <el-col :span="6" class="stu-col-row2">
                <span>预警时间：</span>
                  {{baseDatayj.BJSJ}}
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span></span>
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span></span>
              </el-col>
              <el-col :span="6" class="stu-col-row2">
                <span></span>
              </el-col>
            </el-row>
          </el-col>
          <!-- <el-col :span="4" class="stu-right">
            <el-button type="primary" size="small" @click="$router.push({name:'StuBaseInfo',query:{id:'11',AlarmType:'11'}})">详情</el-button>
          </el-col> -->
        </el-row>
      </div>
      <!--yjType 1.外国人visa  2.持短期签证  4.违临预判  5.临住布控-->
      <!-- <div class="yylbt yt-16">预警原因 <span class="yyf ycolor">出入境过多，签证过期</span></div> -->
      <!-- 1  签证信息详情  2 出入境信息   3 境外人员住宿登记信息  4 境外人员常住信息-->
      <div class="mb-15" v-if="yjType==1||yjType==2||yjType==5">
        <div class="yylbt mb-15">签证信息</div>
        <el-table
           :data="tableData1"
           border
           style="width: 100%" class="stu-table"
           >
           <!-- <el-table-column
             prop="ZJZL"
             label="证件种类">
           </el-table-column> -->
           <el-table-column
             prop="ZJHM"
             label="证件号码">
           </el-table-column>
           <el-table-column
             prop="QZZL"
             label="签证种类">
           </el-table-column>
           <el-table-column
             prop="QZHM"
             label="签证号码">
           </el-table-column>
           <el-table-column
             prop="QZYXQ"
             label="签证有效期至">
           </el-table-column>
           <el-table-column
             prop="QFD"
             label="签发地">
           </el-table-column>
           <el-table-column
             label="操作" width="80">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,1)"></el-button>
             </template>
           </el-table-column>
         </el-table>
      </div>

      <div class="mb-15" v-if="yjType==2||yjType==4||yjType==5">
        <div class="yylbt mb-15">出入境信息</div>
        <el-table
             :data="tableData2"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="IOSTRING"
               label="出入境日期">
             </el-table-column>
             <el-table-column
               prop="CRJBS"
               label="出入境状态">
             </el-table-column>
             <el-table-column
               prop="IOPORT"
               label="出入境口岸">
             </el-table-column>
             <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,2)"></el-button>
               </template>
             </el-table-column>
         </el-table>
      </div>
      <div class="mb-15" v-if="yjType==1||yjType==4||yjType==5">
        <div class="yylbt mb-15">境外人员住宿登记信息</div>
        <el-table
             :data="tableData3"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="ZSRQ"
               label="住宿时间">
             </el-table-column>
             <el-table-column
               prop="LSDWDZ"
               label="住宿地址">
             </el-table-column>
             <el-table-column
               prop="NLKRQ"
               label="拟离开时间">
             </el-table-column>
             <el-table-column
               prop="ZFZL"
               label="住宿类型">
             </el-table-column>
             <el-table-column
               prop="DDRQ"
               label="登记单位">
             </el-table-column>
             <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,3)"></el-button>
               </template>
             </el-table-column>
         </el-table>
      </div>
      <div class="mb-15" v-if="yjType==1">
        <div class="yylbt mb-15">境外人员常住信息</div>
        <el-table
             :data="tableData4"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="DJRQ"
               label="登记时间">
             </el-table-column>
             <el-table-column
               prop="DJDW"
               label="登记单位">
             </el-table-column>
             <el-table-column
               prop="SFDM"
               label="身份">
             </el-table-column>
             <el-table-column
               prop="TLSY"
               label="停留事由">
             </el-table-column>
             <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row,4)"></el-button>
               </template>
             </el-table-column>
         </el-table>
      </div>
      <div class="mb-15" v-if="yjType==2">
        <div class="yylbt mb-15">非法就业信息</div>
        <el-table
             :data="tableData5"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="date"
               label="人员编号">
             </el-table-column>
             <el-table-column
               prop="name"
               label="案事件编号">
             </el-table-column>
             <el-table-column
               prop="address"
               label="案件类别">
             </el-table-column>
             <el-table-column
               prop="address"
               label="案件状态">
             </el-table-column>
             <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
               </template>
             </el-table-column>
         </el-table>
      </div>
      <div class="mb-15" v-if="yjType==2||yjType==4||yjType==5">
        <div class="yylbt mb-15">交通信息</div>
        <div class="stru-lal">
          高速公路出口信息
        </div>
        <el-table
             :data="tableData64"
             border
             style="width: 100%" class="stu-table">
             <el-table-column
               prop="EXITSTATION"
               label="出口站编号">
             </el-table-column>
             <el-table-column
               prop="EXITTIME"
               label="出口日期及时间">
             </el-table-column>
             <el-table-column
               prop="VEHICLECLASS"
               label="车型">
             </el-table-column>
             <el-table-column
               prop="VEHICLEKIND"
               label="车种">
             </el-table-column>
             <el-table-column
               prop="AUTOLICENSE"
               label="牌照">
             </el-table-column>
             <!-- <el-table-column
               label="操作" width="80">
               <template slot-scope="scope">
               <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
               </template>
             </el-table-column> -->
         </el-table>
        <div class="stru-lal">
         高速公路入口信息
        </div>
        <el-table
           :data="tableData63"
           border
           style="width: 100%" class="stu-table">
           <el-table-column
             prop="ENTRYSTATION"
             label="入口站编号">
           </el-table-column>
           <el-table-column
             prop="ENTRYTIME"
             label="入口日期及时间">
           </el-table-column>
           <el-table-column
             prop="VEHICLECLASS"
             label="车型">
           </el-table-column>
           <el-table-column
             prop="VEHICLEKIND"
             label="车种">
           </el-table-column>
           <el-table-column
             prop="AUTOLICENSE"
             label="牌照">
           </el-table-column>
           <!-- <el-table-column
             label="操作" width="80">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
             </template>
           </el-table-column> -->
        </el-table>
        <div class="stru-lal">
         民航进出港订票信息
        </div>
        <el-table
            :data="tableData60"
            border
            style="width: 100%" class="stu-table">
            <el-table-column
              prop="AIR_SEG_FLT_NBR"
              label="航班号">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_DPT_DT_LCL"
              label="当地出发日期">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_DPT_TM_LCL"
              label="当地出发时间">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_ARRV_DT_LCL"
              label="当地到达日期">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_ARRV_TM_LCL"
              label="当地到达时间">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_DPT_AIRPT_CD"
              label="登机机场代码">
            </el-table-column>
            <el-table-column
              prop="AIR_SEG_ARRV_AIRPT_CD"
              label="到达机场代码">
            </el-table-column>
            <el-table-column
              prop="PAS_CHN_NM"
              label="旅客中文名">
            </el-table-column>
            <!-- <el-table-column
              label="操作" width="80">
              <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
              </template>
            </el-table-column> -->
        </el-table>
        <div class="stru-lal">
         民航进出港信息
        </div>
        <el-table
            :data="tableData61"
            border
            style="width: 100%" class="stu-table">
            <el-table-column
              prop="FLT_NUMBER"
              label="航班号">
            </el-table-column>
            <el-table-column
              prop="FLT_DATE"
              label="航班日期">
            </el-table-column>
            <el-table-column
              prop="SEG_DEPT_CODE"
              label="起飞航站">
            </el-table-column>
            <el-table-column
              prop="SEG_DEST_CODE"
              label="到达航站">
            </el-table-column>
            <el-table-column
              prop="PDT_FIRSTNAME"
              label="旅客名">
            </el-table-column>
            </el-table-column>
            <!-- <el-table-column
              label="操作" width="80">
              <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
              </template>
            </el-table-column> -->
        </el-table>
        <div class="stru-lal">
         铁路订票信息
        </div>
        <el-table
            :data="tableData62"
            border
            style="width: 100%" class="stu-table">
            <el-table-column
              prop="XM"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="ZJHM"
              label="证件号码">
            </el-table-column>
            <el-table-column
              prop="TRAIN_NO"
              label="列车车次">
            </el-table-column>
            <el-table-column
              prop="STARTTIME"
              label="发车时间">
            </el-table-column>
            <el-table-column
              prop="FROM_STATION"
              label="发车车站">
            </el-table-column>
            <!-- <el-table-column
              label="操作" width="80">
              <template slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click=""></el-button>
              </template>
            </el-table-column> -->
        </el-table>
      </div>
    </div>

   <div class="stu-footer">
     <div class="stu-title">甄别结果</div>
     <el-row type="flex" class="mb-15">
      <el-col :span="20">
        <el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 3}"
          placeholder="甄别说明必须填写原因(不超过100个字符)"
          v-model="pd.CHANGE_RESON">
        </el-input>
      </el-col>
      <el-col :span="4"  class="down-btn-area">
        <el-button type="primary" class="mb-5" size="small" @click="">确定</el-button>
        <el-button type="warning" class="m0" size="small" @click="$router.go(-1)">返回</el-button>
      </el-col>
    </el-row>
    <div class="">
      处理人: {{$store.state.uname}}
    </div>
   </div>


   <!-- 签证信息 -->
     <el-dialog
             title="签证信息详情"
             :visible.sync="QZDialogVisible">
             <el-form   ref="qzinfo">
               <el-row :gutter="2"  class="mb-6">
                   <el-col :span="12" class="input-item">
                    <span class="input-text">证件号码：</span>
                    <span class="input-input detailinput">  {{qzinfo.ZJHM}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">签证种类：</span>
                     <span class="input-input detailinput">  {{qzinfo.QZZL}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                    <span class="input-text">签证有效期：</span>
                    <span class="input-input detailinput">  {{qzinfo.QZYXQ}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                    <span class="input-text">签证号码：</span>
                    <span class="input-input detailinput">  {{qzinfo.QZHM}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">签证次数：</span>
                     <span class="input-input detailinput">  {{qzinfo.QZCS}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">多次签注号码：</span>
                     <span class="input-input detailinput">  {{qzinfo.DCQZHM}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">多次有效期：</span>
                     <span class="input-input detailinput">  {{qzinfo.DCYXQ}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">签发日期：</span>
                     <span class="input-input detailinput">  {{qzinfo.QFRQ}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">签发机关：</span>
                     <span class="input-input detailinput">  {{qzinfo.QFJG}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">签发地：</span>
                     <span class="input-input detailinput">  {{qzinfo.QFD}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">居留证件种类：</span>
                     <span class="input-input detailinput">  {{qzinfo.JLZJZL}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">居留证号码：</span>
                     <span class="input-input detailinput">  {{qzinfo.JLZHM}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">停留有效期：</span>
                     <span class="input-input detailinput">  {{qzinfo.TLYXQ}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">居留证签发日期：</span>
                     <span class="input-input detailinput">  {{qzinfo.JLZQFRQ}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">居留证签发机关：</span>
                     <span class="input-input detailinput">  {{qzinfo.JLZQFJG}}</span>
                   </el-col>
                   <el-col :span="12" class="input-item">
                     <span class="input-text">停留事由：</span>
                     <span class="input-input detailinput">  {{qzinfo.TLSY}}</span>
                   </el-col>
               </el-row>
             </el-form>
             <div slot="footer" class="dialog-footer">
               <el-button @click="QZDialogVisible = false" size="small">取 消</el-button>
             </div>
     </el-dialog>


        <!-- 出入境信息 -->
    <el-dialog
                  title="出入境信息详情"
                  :visible.sync="CRJDialogVisible">
                  <el-form   ref="crjinfo">
                    <el-row :gutter="2"  class="mb-6">
                        <!-- <el-col :span="12" class="input-item">
                         <span class="input-text">人员类别：</span>
                         <span class="input-input detailinput">  {{crjinfo.PROTYPE}}</span>
                        </el-col> -->
                        <el-col :span="12" class="input-item">
                          <span class="input-text">人员姓名：</span>
                          <span class="input-input detailinput">  {{crjinfo.NAME}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">英文姓名：</span>
                          <span class="input-input detailinput">  {{crjinfo.YWXM}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                         <span class="input-text">国家地区：</span>
                         <span class="input-input detailinput">  {{crjinfo.GJHDQMC}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                         <span class="input-text">性别：</span>
                         <span class="input-input detailinput">  {{crjinfo.XBMC}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">出生日期：</span>
                          <span class="input-input detailinput">  {{crjinfo.BIRTH}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">身份证号：</span>
                          <span class="input-input detailinput">  {{crjinfo.SFZH}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">证件种类：</span>
                          <span class="input-input detailinput">  {{crjinfo.ZJZLMC}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">证件号码：</span>
                          <span class="input-input detailinput">  {{crjinfo.CERTIFICATENO}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">签证类型：</span>
                          <span class="input-input detailinput">  {{crjinfo.VISATYPE}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">出入境日期：</span>
                          <span class="input-input detailinput">  {{crjinfo.IOSTRING}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">出入境时间：</span>
                          <span class="input-input detailinput">  {{crjinfo.CRJSJ}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">出入口岸：</span>
                          <span class="input-input detailinput">  {{crjinfo.IOPORT}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">检查员号：</span>
                          <span class="input-input detailinput">  {{crjinfo.INSPECTORID}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">交通方式：</span>
                          <span class="input-input detailinput">  {{crjinfo.JTFSMC}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">交通工具：</span>
                          <span class="input-input detailinput">  {{crjinfo.TRAFFICTOOL}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">前往地：</span>
                          <span class="input-input detailinput">  {{crjinfo.QWDMC}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">发证机关：</span>
                          <span class="input-input detailinput">  {{crjinfo.GRANTCERTORG}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">发证日期：</span>
                          <span class="input-input detailinput">  {{crjinfo.GRANTCERTSTRING}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">出境理由：</span>
                          <span class="input-input detailinput">  {{crjinfo.OUTREASON}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">通道号：</span>
                          <span class="input-input detailinput">  {{crjinfo.CHANNELNO}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">旅游团号：</span>
                          <span class="input-input detailinput">  {{crjinfo.TOURGROUPNO}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">入库时间：</span>
                          <span class="input-input detailinput">  {{crjinfo.INTIME}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">境内外标识：</span>
                          <span class="input-input detailinput">  {{crjinfo.JNWBS}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">出入口岸名称：</span>
                          <span class="input-input detailinput">  {{crjinfo.CRKAMC}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">出入境标识：</span>
                          <span class="input-input detailinput">  {{crjinfo.CRJBSMC}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">处理错误：</span>
                          <span class="input-input detailinput">  {{crjinfo.CLCW}}</span>
                        </el-col>
                        <el-col :span="12" class="input-item">
                          <span class="input-text">处理时间：</span>
                          <span class="input-input detailinput">  {{crjinfo.CLSJ}}</span>
                        </el-col>
                    </el-row>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="CRJDialogVisible = false" size="small">取 消</el-button>
                  </div>
    </el-dialog>

    <!-- 境外人员住宿登记信息 -->
      <el-dialog
              title="境外人员住宿登记信息详情"
              :visible.sync="LZDialogVisible">
              <el-form   ref="lzinfo">
                <el-row :gutter="2"  class="mb-6">
                    <el-col :span="12" class="input-item">
                     <span class="input-text">英文名：</span>
                     <span class="input-input detailinput">  {{lzinfo.YWM}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">英文姓：</span>
                      <span class="input-input detailinput">  {{lzinfo.YWX}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                     <span class="input-text">英文姓名：</span>
                     <span class="input-input detailinput">  {{lzinfo.YWXM}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                     <span class="input-text">出生日期：</span>
                     <span class="input-input detailinput">  {{lzinfo.CSRQ}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">中文姓名：</span>
                      <span class="input-input detailinput">  {{lzinfo.ZWXM}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">性别：</span>
                      <span class="input-input detailinput">  {{lzinfo.XB}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">证件种类：</span>
                      <span class="input-input detailinput">  {{lzinfo.ZJZL}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">证件号码：</span>
                      <span class="input-input detailinput">  {{lzinfo.ZJHM}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">证件有效期至：</span>
                      <span class="input-input detailinput">  {{lzinfo.YXQZ}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">停留有效期：</span>
                      <span class="input-input detailinput">  {{lzinfo.TLYXQZ}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">国家地区：</span>
                      <span class="input-input detailinput">  {{lzinfo.GJDQ}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">身份证号：</span>
                      <span class="input-input detailinput">  {{lzinfo.FZSFZH}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">签证种类：</span>
                      <span class="input-input detailinput">  {{lzinfo.QZZL}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">签证(注)号码：</span>
                      <span class="input-input detailinput">  {{lzinfo.QZHM}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">签证(注)签发日期：</span>
                      <span class="input-input detailinput">  {{lzinfo.QFRQ}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">签发地：</span>
                      <span class="input-input detailinput">  {{lzinfo.QFD}}</span>
                    </el-col>

                    <el-col :span="12" class="input-item">
                      <span class="input-text">入境日期：</span>
                      <span class="input-input detailinput">  {{lzinfo.RJRQ}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">入境口岸：</span>
                      <span class="input-input detailinput">  {{lzinfo.RJKA}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">标准化地址名称：</span>
                      <span class="input-input detailinput">  {{lzinfo.BZHDZMC}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">房号：</span>
                      <span class="input-input detailinput">  {{lzinfo.FH}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">留宿单位(户主)姓名：</span>
                      <span class="input-input detailinput">  {{lzinfo.LSDW}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">留宿单位(户主)电话：</span>
                      <span class="input-input detailinput">  {{lzinfo.LSDWDH}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">与境外人员关系：</span>
                      <span class="input-input detailinput">  {{lzinfo.QSGX}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">留宿单位(户主)地址：</span>
                      <span class="input-input detailinput">  {{lzinfo.LSDWDZ}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">何处来：</span>
                      <span class="input-input detailinput">  {{lzinfo.LYD}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">前往地区：</span>
                      <span class="input-input detailinput">  {{lzinfo.QWD}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">拟离开日期：</span>
                      <span class="input-input detailinput">  {{lzinfo.NLKRQ}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">录入人：</span>
                      <span class="input-input detailinput">  {{lzinfo.LRR}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">录入日期：</span>
                      <span class="input-input detailinput">  {{lzinfo.LRRQ}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">录入单位：</span>
                      <span class="input-input detailinput">  {{lzinfo.LRDW}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">修改人：</span>
                      <span class="input-input detailinput">  {{lzinfo.GXR}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">修改时间：</span>
                      <span class="input-input detailinput">  {{lzinfo.GXSJ}}</span>
                    </el-col>
                    <el-col :span="12" class="input-item">
                      <span class="input-text">修改单位：</span>
                      <span class="input-input detailinput">  {{lzinfo.GXDW}}</span>
                    </el-col>
                </el-row>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="LZDialogVisible = false" size="small">取 消</el-button>
              </div>
      </el-dialog>

      <!-- 境外人员常住信息 -->
        <el-dialog
                title="境外人员常住信息详情"
                :visible.sync="CZDialogVisible">
                <el-form   ref="czinfo">
                  <el-row :gutter="2"  class="mb-6">
                      <el-col :span="12" class="input-item">
                       <span class="input-text">英文名：</span>
                       <span class="input-input detailinput">  {{czinfo.YWM}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">英文姓：</span>
                        <span class="input-input detailinput">  {{czinfo.YWX}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                       <span class="input-text">英文姓名：</span>
                       <span class="input-input detailinput">  {{czinfo.YWXM}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                       <span class="input-text">出生日期：</span>
                       <span class="input-input detailinput">  {{czinfo.CSRQ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">中文姓名：</span>
                        <span class="input-input detailinput">  {{czinfo.ZWXM}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">性别：</span>
                        <span class="input-input detailinput">  {{czinfo.XB}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">证件种类：</span>
                        <span class="input-input detailinput">  {{czinfo.ZJZL}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">证件号码：</span>
                        <span class="input-input detailinput">  {{czinfo.ZJHM}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">证件有效期至：</span>
                        <span class="input-input detailinput">  {{czinfo.YXQZ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">停留有效期：</span>
                        <span class="input-input detailinput">  {{czinfo.TLYXQZ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">国家地区：</span>
                        <span class="input-input detailinput">  {{czinfo.GJDQ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">身份证号：</span>
                        <span class="input-input detailinput">  {{czinfo.FZSFZH}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">签证种类：</span>
                        <span class="input-input detailinput">  {{czinfo.QZZL}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">签证(注)号码：</span>
                        <span class="input-input detailinput">  {{czinfo.QZHM}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">签证(注)签发日期：</span>
                        <span class="input-input detailinput">  {{czinfo.QFRQ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">签发地：</span>
                        <span class="input-input detailinput">  {{czinfo.QFD}}</span>
                      </el-col>

                      <el-col :span="12" class="input-item">
                        <span class="input-text">入境日期：</span>
                        <span class="input-input detailinput">  {{czinfo.RJRQ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">入境口岸：</span>
                        <span class="input-input detailinput">  {{czinfo.RJKA}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">标准化地址名称：</span>
                        <span class="input-input detailinput">  {{czinfo.BZHDZMC}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">房号：</span>
                        <span class="input-input detailinput">  {{czinfo.FH}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">留宿单位(户主)姓名：</span>
                        <span class="input-input detailinput">  {{czinfo.LSDW}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">留宿单位(户主)电话：</span>
                        <span class="input-input detailinput">  {{czinfo.LSDWDH}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">与境外人员关系：</span>
                        <span class="input-input detailinput">  {{czinfo.QSGX}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">留宿单位(户主)地址：</span>
                        <span class="input-input detailinput">  {{czinfo.LSDWDZ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">何处来：</span>
                        <span class="input-input detailinput">  {{czinfo.LYD}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">前往地区：</span>
                        <span class="input-input detailinput">  {{czinfo.QWD}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">拟离开日期：</span>
                        <span class="input-input detailinput">  {{czinfo.NLKRQ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">录入人：</span>
                        <span class="input-input detailinput">  {{czinfo.LRR}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">录入日期：</span>
                        <span class="input-input detailinput">  {{czinfo.LRRQ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">录入单位：</span>
                        <span class="input-input detailinput">  {{czinfo.LRDW}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">修改人：</span>
                        <span class="input-input detailinput">  {{czinfo.GXR}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">修改时间：</span>
                        <span class="input-input detailinput">  {{czinfo.GXSJ}}</span>
                      </el-col>
                      <el-col :span="12" class="input-item">
                        <span class="input-text">修改单位：</span>
                        <span class="input-input detailinput">  {{czinfo.GXDW}}</span>
                      </el-col>
                  </el-row>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="CZDialogVisible = false" size="small">取 消</el-button>
                </div>
        </el-dialog>

  </div>

</template>
<script>
export default {
  data() {
    return {
<<<<<<< HEAD
      yjType: 0,
      baseData: {},
      baseDatazj: {},
      baseDataqz: {},
      baseDatayj: {},
      tableData1: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      tableData5: [],
      tableData6: [],
      tableData60:[],
      tableData61:[],
      tableData62:[],
      tableData63:[],
      tableData64:[],
      pd: {},
      cdt: {},
      QZDialogVisible: false,
      qzinfo: {},
      CRJDialogVisible: false,
      crjinfo: {},
      LZDialogVisible: false,
      lzinfo: {},
      CZDialogVisible: false,
      czinfo: {},
=======
      yjType:0,
      baseData:{},
      tableData1:this.pl.tableData,
      tableData2:this.pl.tableData,
      tableData3:this.pl.tableData,
      tableData4:this.pl.tableData,
      tableData5:this.pl.tableData,
      tableData6:this.pl.tableData,
      ryjb1:'/visaWarningController/getPersonInfoByRybh',//visa人员基本信息
      qzxx1:'/visaWarningController/getQianZhengInfoByRybh',//visa签证详情
      zsdj1:'/visaWarningController/getLinZhuListByRybh',//visa住宿登记信息
      czxx1:'/visaWarningController/getChangZhuListByRybh',//visa常驻信息

      ryjb2:'/visaWarningController/getPersonInfoByRybh',//visa人员基本信息
      qzxx2:'/visaWarningController/getQianZhengInfoByRybh',//visa签证详情
      zsdj2:'/visaWarningController/getLinZhuListByRybh',//visa住宿登记信息
      czxx2:'/visaWarningController/getChangZhuListByRybh',//visa常驻信息
>>>>>>> 156eed893df7f7f98d1affb5863c040934952404

      pd:{},
    }
  },
  activated() {
    this.yjType = this.$route.query.yjType;
    this.rybh = this.$route.query.rybh;
    // this.yjid=this.$route.query.yjid;
    if(this.yjType==1){
      this.getList(this.ryjb1,0);
      this.getList(this.qzxx1,1);
      this.getList(this.zsdj1,3);
      this.getList(this.czxx1,4);
    }else if(this.yjType==2){

<<<<<<< HEAD
    this.getList(this.Global.aport4 + '/illegalEmploymentWarningController/getPersonInfoByRybh', 0); //人员基本信息
    this.getList(this.Global.aport4 + '/illegalEmploymentWarningController/getYuJingXinXiByRybh', 10); //预警信息
    this.getList(this.Global.aport4 + '/illegalEmploymentWarningController/getQianZhengInfoByRybh', 1); //签证信息
    this.getList(this.Global.aport4 + '/illegalEmploymentWarningController/getChuRuJingListByRybh', 2); //出入境信息
    this.getList(this.Global.aport4 + '/visaWarningController/getLinZhuListByRybh', 3); //临住信息
    this.getList(this.Global.aport4 + '/visaWarningController/getChangZhuListByRybh', 4); //常住信息
    this.getList(this.Global.aport4 + '/illegalEmploymentWarningController/getInfoByRybh', 5); //非法就业
    this.getList(this.Global.aport4 + '/illegalEmploymentWarningController/getJiaoTongListByRybh', 6); //交通信息
=======
    }
    this.getList('/illegalEmploymentWarningController/getPersonInfoByRybh',0);//人员基本信息
    this.getList('/illegalEmploymentWarningController/getQianZhengInfoByRybh',1);
    this.getList('/illegalEmploymentWarningController/getChuRuJingListByRybh',2);
    // this.getList('/educationParController/getJZJJXXInfo',3);
    // this.getList('/educationParController/getJZCJXXInfo',4);
    this.getList('/illegalEmploymentWarningController/getJiaoTongListByRybh',6);
>>>>>>> 156eed893df7f7f98d1affb5863c040934952404

  },
  mounted() {

  },
  methods: {
    openTc(title, type, id) {
      this.xtitle = title;
      this.xtype = type;
      this.xid = id;
      this.detailsDialogVisible = true;
      console.log(title, type)
    },
    getList(url, type) {
      this.cdt.rybh = this.rybh;
      let p = {
        "pd": this.cdt
      };
      this.$api.post(url, p,
        r => {
          if (type == 0) {
            this.baseData = r.data.eS_RY_RYXXEntity
            this.baseDatazj = r.data.eS_RY_JWRYZJEntity
            this.baseDataqz = r.data.eS_RY_JWRYQZEntity
          } else if (type == 10) {
            this.baseDatayj = r.data.eS_YJ_BJXXBEntity
          } else if (type == 1) {

            this.tableData1 = r.data
          } else if (type == 2) {
            this.tableData2 = r.data
          } else if (type == 3) {
            this.tableData3 = r.data
          } else if (type == 4) {
            this.tableData4 = r.data
          } else if (type == 5) {
            this.tableData5 = r.data
          } else if (type == 6) {
            this.tableData60 = r.data.eS_JT_MH_JGDPXX_NList//民航进出港订票信息
            this.tableData61 = r.data.eS_JT_MH_JGXX_NList//民航进出港信息
            this.tableData62 = r.data.eS_JT_TL_DPXXList//铁路订票信息
          }
        })
    },
    getDetails(n, t) {
      switch (t) {
        case 1:
          this.QZDialogVisible = true;
          this.qzinfo = n;
          break;
        case 2:
          this.CRJDialogVisible = true;
          this.crjinfo = n;
          break;
        case 3:
          this.LZDialogVisible = true;
          this.lzinfo = n;
          break;
        case 4:
          this.CZDialogVisible = true;
          this.czinfo = n;
          break;
        default:

      }
    },
    chuli() {
      let p = {
        "yjid": this.yjid,
        "cljg": this.form.cljg,
        "cldw": '',
        "clr": '',
        "shjg": '',
      };
      this.$api.post('/educationParController/saveWarningInfo', p,
        r => {

        })
    }
  }

}
</script>
<style scoped>
.input-text {
  width: 29% !important
}
.el-dialog {
  width: 60%!important;
}
</style>
<style>

</style>
