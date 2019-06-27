<template lang="html">
<div class="czxx">
  <div class="ak-tabs">
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==0}" @click="base">
      人员基本信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==1}" @click="base1" v-if="false">
      居住地信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==2}" @click="base2" v-if="false">
      工作地信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==3}" @click="base3" v-if="false">
      走访信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==4}" @click="base4" v-if="false">
      安保信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==5}" @click="base5" v-if="false">
      重点列管信息
    </div>
    <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==6}" @click="base6" v-if="false">
      同户人信息
    </div>
  </div>

  <div class="ak-tab-pane">
    <div v-show="page==0" style="padding:0 15px;">
      <el-row type="flex">
        <el-col :span="3" style="min-width:150px;">
          <img src="../../../../assets/img/mrzp.png" v-if="imgshow" >
          <img :src="imgdm" v-else>
        </el-col>
        <el-col :span="21">
          <el-row :gutter="3">

            <el-col :span="8" class="input-item">
              <span class="input-text">英文姓：</span>
              <span class="input-input">  {{czinfo.surnameEN}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">英文名：</span>
              <span class="input-input">  {{czinfo.firstnameEN}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">英文姓名：</span>
             <span class="input-input lh-ts">  {{czinfo.nameEN}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">中文姓：</span>
              <span class="input-input">  {{czinfo.surnameCH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">中文名：</span>
              <span class="input-input">  {{czinfo.firstnameCH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">GKB姓名：</span>
              <span class="input-input">  {{czinfo.nameGBK}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">核查用姓名：</span>
             <span class="input-input">  {{czinfo.checkName}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="input-text">性别：</span>
             <span class="input-input">  {{czinfo.gender_desc}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">出生日期：</span>
              <span class="input-input">  {{czinfo.birthday}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">国家地区：</span>
              <span class="input-input">  {{czinfo.nationality_desc}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">核查证件号码：</span>
              <span class="input-input">  {{czinfo.checkPaperNO}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">证件号码：</span>
              <span class="input-input">  {{czinfo.paperNO}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">证件种类：</span>
              <span class="input-input">  {{czinfo.paperType_desc}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">证件有效期：</span>
              <span class="input-input">  {{czinfo.expiredDay}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">身份：</span>
              <span class="input-input">  {{czinfo.degreeCode_desc}}</span>
            </el-col>

          </el-row>
        </el-col>
      </el-row>
        <hr/>
      <el-row :gutter="3"  class="mb-6">
        <el-col :span="8" class="input-item">
          <span class="input-text">常住境外人员业务编号：</span>
          <span class="input-input detailinput">  {{czinfo.businessNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">居住地业务编号：</span>
          <span class="input-input detailinput">  {{czinfo.inhabiBusinessNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">工作地业务编号：</span>
         <span class="input-input detailinput">  {{czinfo.workplaceBusinessNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
         <span class="input-text">人员编号：</span>
         <span class="input-input detailinput">  {{czinfo.personNO}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">证件内人数：</span>
          <span class="input-input detailinput">  {{czinfo.qtyOfParty}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">签证种类：</span>
          <span class="input-input detailinput">  {{czinfo.visaType_desc}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">人员类别：</span>
          <span class="input-input detailinput">  {{czinfo.personType_desc}}</span>
        </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">境外人员身份证号：</span>
            <span class="input-input detailinput">  {{czinfo.foreignerId}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">居留事由：</span>
            <span class="input-input detailinput">  {{czinfo.resideReason_desc}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">居留证许可号码：</span>
            <span class="input-input detailinput">  {{czinfo.residePermitNO}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">居留许可发证日期：</span>
            <span class="input-input detailinput">  {{czinfo.residePermitAssignDay}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">居留许可有效期：</span>
            <span class="input-input detailinput"> {{czinfo.residePermitExpiredDay}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">停留期：</span>
            <span class="input-input detailinput">  {{czinfo.localizePeriod}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">签发机关：</span>
            <span class="input-input detailinput">  {{czinfo.assignmentOrg_desc}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">常住人员联系电话：</span>
            <span class="input-input detailinput">  {{czinfo.resideContactTel}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">当前居住地所在区县：</span>
            <span class="input-input detailinput">  {{czinfo.inhabiResidence}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">所属派出所：</span>
            <span class="input-input detailinput">  {{czinfo.inhabiPoliceStationName}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">当前居住地详细地址：</span>
            <span class="input-input detailinput">  {{czinfo.inhabiDetailAddr}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">居住状态类型：</span>
            <span class="input-input detailinput">  {{czinfo.inhabiState_desc}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">当前居住初始状态产生时间：</span>
            <span class="input-input detailinput">  {{czinfo.inhabiOriStateTime}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">当前工作单位所在区县：</span>
            <span class="input-input detailinput">  {{czinfo.workplaceResidence}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">当前工作单位所在地派出所：</span>
            <span class="input-input detailinput">  {{czinfo.workplacePoliceStationName}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">入境事由：</span>
            <span class="input-input detailinput">  {{czinfo.inReason_desc}}</span>
          </el-col>


          <el-col :span="8" class="input-item">
            <span class="input-text">当前工作单位组织机构代码：</span>
            <span class="input-input detailinput">  {{czinfo.workplaceOrgCode}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">当前工作单位：</span>
            <span class="input-input detailinput">  {{czinfo.workplaceName}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">当前工作身份：</span>
            <span class="input-input detailinput">  {{czinfo.workDegree}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">当前工作任职起始时间：</span>
            <span class="input-input detailinput">  {{czinfo.workingBeginTime}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">当前工作任职终止时间：</span>
            <span class="input-input detailinput">  {{czinfo.workingEndTime}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">当前状态类型：</span>
            <span class="input-input detailinput">  {{czinfo.workingState_desc}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">当前工作初始状态产生时间：</span>
            <span class="input-input detailinput">  {{czinfo.workingOriStateTime}}</span>
          </el-col>

      </el-row>
      <hr/>
      <el-row :gutter="3" style="">
        <el-col :span="8" class="input-item">
          <span class="input-text">最后更新数据来源：</span>
          <span class="input-input detailinput">  {{czinfo.lastUpStringDataSource}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">更新级别：</span>
          <span class="input-input detailinput">  {{czinfo.upStringLevel}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">备注：</span>
          <span class="input-input detailinput">  {{czinfo.remarks}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">省服务器上报此记录的时间：</span>
          <span class="input-input detailinput">  {{czinfo.reportTime}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">照片：</span>
          <span class="input-input detailinput">  {{czinfo.photo}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">省代码：</span>
          <span class="input-input detailinput">  {{czinfo.province}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">居住地城市：</span>
          <span class="input-input detailinput">  {{czinfo.inhabiCity}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">工作地城市：</span>
          <span class="input-input detailinput">  {{czinfo.workplaceCity}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">新建标识：</span>
          <span class="input-input detailinput">  {{czinfo.create}}</span>
        </el-col>
      </el-row>
    </div>
    <div v-show="page==1" style="padding:0 15px;">
      <el-table
          :data="tableDatajz"
          @row-click="getJZ"
          border
          style="width: 100%">
          <el-table-column
            prop="JZD_PCS"
            label="居住地所属派出所">
          </el-table-column>
          <el-table-column
            prop="ZT_JZZT"
            label="居住状态类型">
          </el-table-column>
          <el-table-column
            prop="JZD_DZTXT"
            label="标准化地址">
          </el-table-column>
          <el-table-column
            prop="RQ_RZRQ"
            label="入住日期">
          </el-table-column>
        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult1}}条
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
      <div v-if="jzshow" class="mt-10">
      <el-row :gutter="3"  class="mb-6">
        <el-col :span="8" class="input-item">
          <span class="input-text" title="居住地行政区划">居住地行政区划：</span>
          <span class="input-input detailinput">  {{jzinfo.JZD_XZQH}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="居住地所属派出所">居住地所属派出所：</span>
          <span class="input-input detailinput">  {{jzinfo.JZD_PCS}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">派出所中文名称：</span>
          <span class="input-input detailinput"> {{jzinfo.JZD_PCSMC}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">详细地址：</span>
          <span class="input-input detailinput">  {{jzinfo.XXDZ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">房主姓名：</span>
          <span class="input-input detailinput">  {{jzinfo.FZXM}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">房主性别：</span>
          <span class="input-input detailinput">  {{jzinfo.FZXB}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text">房主证件号码：</span>
          <span class="input-input detailinput">  {{jzinfo.FZZJHM}}</span>
        </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">房主工作单位：</span>
            <span class="input-input detailinput">  {{jzinfo.FZGZDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">房主联系电话：</span>
            <span class="input-input detailinput">  {{jzinfo.FZLXDH}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">房屋性质：</span>
            <span class="input-input detailinput">  {{jzinfo.FWXZ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
            <span class="input-text">入住方式：</span>
            <span class="input-input detailinput"> {{jzinfo.RZFS}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="居住初始状态产生时间">居住初始状态产生时间：</span>
            <span class="input-input detailinput">  {{jzinfo.JZZTCSSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">居住状态确认时间：</span>
            <span class="input-input detailinput">  {{jzinfo.JZZTQRSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">登记单位：</span>
            <span class="input-input detailinput">  {{jzinfo.DJDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">登记人：</span>
            <span class="input-input detailinput">  {{jzinfo.DJR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">登记日期：</span>
            <span class="input-input detailinput">  {{jzinfo.DJRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="居住状态类型">居住状态类型：</span>
            <span class="input-input detailinput">  {{jzinfo.ZT_JZZT}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">是否核对：</span>
            <span class="input-input detailinput">  {{jzinfo.ZT_SFHD=="0"?"否":jzinfo.ZT_SFHD=="1"?"是":""}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">处理单位：</span>
            <span class="input-input detailinput">  {{jzinfo.CLDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">处理时间：</span>
            <span class="input-input detailinput">  {{jzinfo.CLSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">处理责任区：</span>
            <span class="input-input detailinput">  {{jzinfo.CLZRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">更新时间：</span>
            <span class="input-input detailinput">  {{jzinfo.GXSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">更新人：</span>
            <span class="input-input detailinput">  {{jzinfo.GXR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">更新单位：</span>
            <span class="input-input detailinput">  {{jzinfo.GXDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">数据来源：</span>
            <span class="input-input detailinput">  {{jzinfo.SJLY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">数据状态：</span>
            <span class="input-input detailinput">  {{jzinfo.ZT}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">是否注销：</span>
            <span class="input-input detailinput">  {{jzinfo.ZT_SFZX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">标准化地址：</span>
            <span class="input-input detailinput">  {{jzinfo.JZD_DZTXT}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">采集类型：</span>
            <span class="input-input detailinput">  {{jzinfo.ZT_CJLX=="1"?"宾馆":jzinfo.ZT_CJLX=="0"?"社会面":"其他"}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="是否当前居住地信息">是否当前居住地信息：</span>
            <span class="input-input detailinput">  {{jzinfo.ZT_SFYX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">居住地责任区：</span>
            <span class="input-input detailinput">  {{jzinfo.JZD_ZRQ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
            <span class="input-text">入住日期：</span>
            <span class="input-input detailinput">  {{jzinfo.RQ_RZRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">入住确认日期：</span>
            <span class="input-input detailinput">  {{jzinfo.RQ_RZQRRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">离开日期：</span>
            <span class="input-input detailinput">  {{jzinfo.RQ_LKRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">注销日期：</span>
            <span class="input-input detailinput">  {{jzinfo.RQ_ZXRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">与业主关系：</span>
            <span class="input-input detailinput">  {{jzinfo.YYZGX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">地址X坐标：</span>
            <span class="input-input detailinput">  {{jzinfo.DZXZB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">地址Y坐标：</span>
            <span class="input-input detailinput">  {{jzinfo.DZYZB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">备注：</span>
            <span class="input-input detailinput">  {{jzinfo.BZ}}</span>
          </el-col>
      </el-row>
    </div>
    </div>
    <div v-show="page==2" style="padding:0 15px;">
      <el-table
          :data="tableDatagz"
          border
          @row-click="getGZ"
          style="width: 100%;">
          <el-table-column
            prop="GZD_MC"
            label="工作单位名称">
          </el-table-column>
          <el-table-column
            prop="GZD_SFDM"
            label="工作单位人员身份">
          </el-table-column>
          <el-table-column
            prop="GZD_PCSMC"
            label="工作单位所属派出所名称">
          </el-table-column>
          <el-table-column
            prop="DJRQ"
            label="登记日期">
          </el-table-column>
          <el-table-column
            prop="GZD_GZDH"
            label="工作电话">
          </el-table-column>
          <el-table-column
            prop="XXDZ"
            label="工作单位详细地址">
          </el-table-column>
        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult2}}条
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
        <div v-if="gzshow" class="mt-10">
          <hr/>
          <el-row :gutter="3"  class="mb-6">
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作单位行政区划">工作单位行政区划：</span>
              <span class="input-input detailinput">  {{gzinfo.GZD_XZQH}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作单位所属派出所">工作单位所属派出所：</span>
              <span class="input-input detailinput">  {{gzinfo.GZD_PCS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作单位机构代码">工作单位机构代码：</span>
              <span class="input-input detailinput">  {{gzinfo.GZD_ZZJG}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作单位名称">工作单位名称：</span>
              <span class="input-input detailinput">  {{gzinfo.GZD_MC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作单位人员身份">工作单位人员身份：</span>
              <span class="input-input detailinput">  {{gzinfo.GZD_SFDM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="任职日期">任职日期：</span>
              <span class="input-input detailinput">  {{gzinfo.RZQSSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="离职日期">离职日期：</span>
              <span class="input-input detailinput">  {{gzinfo.RZZZSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作初始状态产生时间">工作初始状态产生时间：</span>
              <span class="input-input detailinput">  {{gzinfo.GZZTCSSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作状态确认时间">工作状态确认时间：</span>
              <span class="input-input detailinput">  {{gzinfo.GZZTQRSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记单位">登记单位：</span>
              <span class="input-input detailinput">  {{gzinfo.DJDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记人">登记人：</span>
              <span class="input-input detailinput">  {{gzinfo.DJR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记日期">登记日期：</span>
              <span class="input-input detailinput">  {{gzinfo.DJRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
            <span class="input-text" title="录入单位">录入单位：</span>
            <span class="input-input detailinput">  {{gzinfo.LRDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="录入日期">录入日期：</span>
            <span class="input-input detailinput">  {{gzinfo.LRRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="工作状态类型">工作状态类型：</span>
            <span class="input-input detailinput">  {{gzinfo.ZT_GZZT}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="处理单位">处理单位：</span>
            <span class="input-input detailinput">  {{gzinfo.CLDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="处理时间">处理时间：</span>
            <span class="input-input detailinput">  {{gzinfo.CLSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="处理责任区">处理责任区：</span>
            <span class="input-input detailinput">  {{gzinfo.CLZRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="更新时间">更新时间：</span>
            <span class="input-input detailinput">  {{gzinfo.GXSJ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="更新人">更新人：</span>
            <span class="input-input detailinput">  {{gzinfo.GXR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="更新单位">更新单位：</span>
            <span class="input-input detailinput">  {{gzinfo.GXDW}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="数据来源">数据来源：</span>
            <span class="input-input detailinput">  {{gzinfo.SJLY}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="数据状态">数据状态：</span>
            <span class="input-input detailinput">  {{gzinfo.ZT}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text" title="是否注销">是否注销：</span>
            <span class="input-input detailinput">  {{gzinfo.ZT_SFZX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
          <span class="input-text" title="标准化地址名">标准化地址名：</span>
          <span class="input-input detailinput">  {{gzinfo.GZD_DZTXT}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="当前工作地信息">当前工作地信息：</span>
          <span class="input-input detailinput">  {{gzinfo.ZT_SFYX}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="工作地责任区">工作地责任区：</span>
          <span class="input-input detailinput">  {{gzinfo.GZD_ZRQ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="工作地社区">工作地社区：</span>
          <span class="input-input detailinput">  {{gzinfo.GZD_SQ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="工作电话">工作电话：</span>
          <span class="input-input detailinput">  {{gzinfo.GZD_GZDH}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="工作单位详细地址">工作单位详细地址：</span>
          <span class="input-input detailinput">  {{gzinfo.XXDZ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="入驻日志">入驻日志：</span>
          <span class="input-input detailinput">  {{gzinfo.RQ_RZRQ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="入驻确认日期">入驻确认日期：</span>
          <span class="input-input detailinput">  {{gzinfo.RQ_RZQRRQ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="注销日期">注销日期：</span>
          <span class="input-input detailinput">  {{gzinfo.RQ_ZXRQ}}</span>
        </el-col>
        <el-col :span="8" class="input-item">
          <span class="input-text" title="备注">备注：</span>
          <span class="input-input detailinput">  {{gzinfo.BZ}}</span>
        </el-col>
     </el-row>
    </div>
    </div>
    <div v-show="page==3">
      <el-table
          :data="tableDatazf"
          border
          @row-click="getZF"
          style="width: 100%">
          <el-table-column
            prop="GZXXBT"
            label="走访信息">
          </el-table-column>
          <el-table-column
            prop="GZQKMS"
            label="工作情况描述">
          </el-table-column>
          <el-table-column
            prop="ZFRQ"
            label="走访日期">
          </el-table-column>
          <el-table-column
            prop="JJCS"
            label="解决措施">
          </el-table-column>
          <el-table-column
            prop="ZT"
            label="状态">
          </el-table-column>
        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult3}}条
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

        <div v-if="zfshow" class="mt-10">
          <hr/>
          <el-row :gutter="3"  class="mb-6">
            <el-col :span="8" class="input-item">
              <span class="input-text" title="走访信息类别">走访信息类别：</span>
              <span class="input-input detailinput">  {{zfinfo.GZXXLB}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="走访信息标题">走访信息标题：</span>
              <span class="input-input detailinput">  {{zfinfo.GZXXBT}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="工作情况描述">工作情况描述：</span>
              <span class="input-input detailinput">  {{zfinfo.GZQKMS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记单位">登记单位：</span>
              <span class="input-input detailinput">  {{zfinfo.DJDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记人">登记人：</span>
              <span class="input-input detailinput">  {{zfinfo.DJR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="登记日期">登记日期：</span>
              <span class="input-input detailinput">  {{zfinfo.DJRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="走访人">走访人：</span>
              <span class="input-input detailinput">  {{zfinfo.ZFR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="走访日期">走访日期：</span>
              <span class="input-input detailinput">  {{zfinfo.ZFRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="更新时间">更新时间：</span>
              <span class="input-input detailinput">  {{zfinfo.GXSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="更新人">更新人：</span>
              <span class="input-input detailinput">  {{zfinfo.GXR}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="更新单位">更新单位：</span>
              <span class="input-input detailinput">  {{zfinfo.GXDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="数据来源">数据来源：</span>
              <span class="input-input detailinput">  {{zfinfo.SJLY}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="状态">状态：</span>
              <span class="input-input detailinput">  {{zfinfo.ZT}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="解决措施">解决措施：</span>
              <span class="input-input detailinput">  {{zfinfo.JJCS}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="是否注销">是否注销：</span>
              <span class="input-input detailinput">  {{zfinfo.ZT_SFZX}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="安全要求">安全要求：</span>
              <span class="input-input detailinput">  {{zfinfo.AQYQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="是否有效">是否有效：</span>
              <span class="input-input detailinput">  {{zfinfo.ZT_SFYX}}</span>
            </el-col>
          </el-row>
          </div>
    </div>
    <div v-show="page==4">
      <el-table
          :data="tableDataab"
          border
          @row-click="getAB"
          style="width: 100%">
          <el-table-column
            prop="FFBM"
            label="防范部门">
          </el-table-column>
          <el-table-column
            prop="ZHAQYS"
            label="住户安全意识">
          </el-table-column>
          <el-table-column
            prop="JCXM"
            label="检查项目">
          </el-table-column>
          <el-table-column
            prop="JCQK"
            label="检查情况">
          </el-table-column>
          <el-table-column
            prop="BCSM"
            label="补充说明">
          </el-table-column>

        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult4}}条
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
 <div v-if="abshow" class="mt-10">
<hr/>
<el-row :gutter="3">
  <el-col :span="8" class="input-item">
    <span class="input-text" title="防范部门">防范部门：</span>
    <span class="input-input detailinput">  {{abinfo.FFBM}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text" title="人防手段">人防手段：</span>
    <span class="input-input detailinput">  {{abinfo.RFSD}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text" title="技防手段">技防手段：</span>
    <span class="input-input detailinput">  {{abinfo.JFSD}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text" title="设施防范">设施防范：</span>
    <span class="input-input detailinput">  {{abinfo.SSFF}}</span>
  </el-col>

  <el-col :span="8" class="input-item">
    <span class="input-text" title="住户安全意识">住户安全意识：</span>
    <span class="input-input detailinput">  {{abinfo.ZHAQYS}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text" title="检查项目">检查项目：</span>
    <span class="input-input detailinput">  {{abinfo.JCXM}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text" title="检查情况">检查情况：</span>
    <span class="input-input detailinput">  {{abinfo.JCQK}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text" title="补充说明">补充说明：</span>
    <span class="input-input detailinput">  {{abinfo.BCSM}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text" title="登记人">登记人：</span>
    <span class="input-input detailinput">  {{abinfo.DJR}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text" title="登记单位">登记单位：</span>
    <span class="input-input detailinput">  {{abinfo.DJDW}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text" title="登记时间">登记时间：</span>
    <span class="input-input detailinput">  {{abinfo.DJSJ}}</span>
  </el-col>
</el-row>
 </div>

    </div>
    <div v-show="page==5">
      <el-table
          :data="tableDatalg"
          border
          @row-click="getLG"
          style="width: 100%">
          <el-table-column
            prop="YWX"
            label="英文姓">
          </el-table-column>
          <el-table-column
            prop="YWM"
            label="英文名">
          </el-table-column>
          <el-table-column
            prop="XB"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="GJDQ"
            label="国家地区">
          </el-table-column>
          <el-table-column
            prop="ZJZL"
            label="证件种类">
          </el-table-column>
          <el-table-column
            prop="ZJHM"
            label="证件号码">
          </el-table-column>

        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult5}}条
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
<div v-if="lgshow" class="mt-10">
<hr/>
<el-row :gutter="3">
  <el-col :span="8" class="input-item">
    <span class="input-text">列管状态：</span>
    <span class="input-input detailinput">  {{lginfo.LGZT}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text">英文姓：</span>
    <span class="input-input detailinput">  {{lginfo.YWX}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text">英文名：</span>
    <span class="input-input detailinput">  {{lginfo.YWM}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text">性别：</span>
    <span class="input-input detailinput">  {{lginfo.XB}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text">国家地区：</span>
    <span class="input-input detailinput">  {{lginfo.GJDQ}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text">出生日期：</span>
    <span class="input-input detailinput">  {{lginfo.CSRQ}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text">服务处所：</span>
    <span class="input-input detailinput">  {{lginfo.FWCS}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text">证件种类：</span>
    <span class="input-input detailinput">  {{lginfo.ZJZL}}</span>
  </el-col>

  <el-col :span="8" class="input-item">
    <span class="input-text">证件号码：</span>
    <span class="input-input detailinput">  {{lginfo.ZJHM}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text">管理类型：</span>
    <span class="input-input detailinput">  {{lginfo.GLLX}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text">所属派出所：</span>
    <span class="input-input detailinput">  {{lginfo.SSPCS}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text">所属责任区：</span>
    <span class="input-input detailinput">  {{lginfo.SSZRQ}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text">登记单位：</span>
    <span class="input-input detailinput">  {{lginfo.DJDW}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text">登记人：</span>
    <span class="input-input detailinput">  {{lginfo.DJR}}</span>
  </el-col>
  <el-col :span="8" class="input-item">
    <span class="input-text">登记时间：</span>
    <span class="input-input detailinput">  {{lginfo.DJSJ}}</span>
  </el-col>
</el-row>
</div>
    </div>
    <div v-show="page==6">
      <el-table
          :data="tableDatath"
          border
          @row-click="getTH"
          style="width: 100%">
          <el-table-column
            prop="YWX"
            label="英文姓">
          </el-table-column>
          <el-table-column
            prop="YWM"
            label="英文名">
          </el-table-column>
          <el-table-column
            prop="ZWXM"
            label="中文姓名">
          </el-table-column>
          <el-table-column
            prop="XB"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="GJDQ"
            label="国家地区">
          </el-table-column>
          <el-table-column
            prop="ZJZL"
            label="证件种类">
          </el-table-column>
          <el-table-column
            prop="ZJHM"
            label="证件号码">
          </el-table-column>

        </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">
          共{{TotalResult6}}条
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

        <div v-if="thshow" class="mt-10">
        <hr/>
        <el-row :gutter="3">

          <el-col :span="8" class="input-item">
            <span class="input-text">英文姓：</span>
            <span class="input-input detailinput">  {{thinfo.YWX}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">英文名：</span>
            <span class="input-input detailinput">  {{thinfo.YWM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">中文姓名：</span>
            <span class="input-input detailinput">  {{thinfo.ZWXM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">性别：</span>
            <span class="input-input detailinput">  {{thinfo.XB}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">国家地区：</span>
            <span class="input-input detailinput">  {{thinfo.GJDQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">出生日期：</span>
            <span class="input-input detailinput">  {{thinfo.CSRQ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
            <span class="input-text">证件种类：</span>
            <span class="input-input detailinput">  {{thinfo.ZJZL}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
            <span class="input-text">证件号码：</span>
            <span class="input-input detailinput">  {{thinfo.ZJHM}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">停留有效期：</span>
            <span class="input-input detailinput">  {{thinfo.TLYXQ}}</span>
          </el-col>

          <el-col :span="8" class="input-item">
            <span class="input-text">所属责任区：</span>
            <span class="input-input detailinput">  {{thinfo.SSZRQ}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">登记人：</span>
            <span class="input-input detailinput">  {{thinfo.DJR}}</span>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">登记单位：</span>
            <span class="input-input detailinput">  {{thinfo.DJDW}}</span>
          </el-col>
        </el-row>
        </div>
    </div>
</div>


</div>
</template>
<script>
export default {
  name:'CZXXRY',
  props:['type','xid','rid','random'],
  data(){
    return{
      czinfo:{},
      jzinfo:{},
      gzinfo:{},
      zfinfo:{},
      abinfo:{},
      lginfo:{},
      thinfo:{},
      gzshow:false,
      jzshow:false,
      zfshow:false,
      abshow:false,
      lgshow:false,
      thshow:false,
      types:this.type,
      id:this.xid,
      pp:{},
      pd:{},
      pc:{},
      page:0,
      imgshow:true,
      imgdm:'',
      tableDatath:[],
      tableDatalg:[],
      tableDataab:[],
      tableDatazf:[],
      tableDatagz:[],
      tableDatajz:[],
      rid:this.rid,
      CurrentPage1: 1,
      pageSize1: 10,
      TotalResult1: 0,
      CurrentPage2: 1,
      pageSize2: 10,
      TotalResult2: 0,
      CurrentPage3: 1,
      pageSize3: 10,
      TotalResult3: 0,
      CurrentPage4: 1,
      pageSize4: 10,
      TotalResult4: 0,
      CurrentPage5: 1,
      pageSize5: 10,
      TotalResult5: 0,
      CurrentPage6: 1,
      pageSize6: 10,
      TotalResult6: 0,
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
  mounted(){
    console.log('this.rid-------',this.rid);
    console.log('this.types-------',this.types);
      this.initData();
   },
  watch:{
      random:function(newVal,oldVal){
        this.random = newVal;
        this.initData();
      },
      type: function(val){
        this.types=val;
      },
      xid:{
        handler(val){
        this.id=val;
        this.initData()
      },
      immediate: true
      },
    },

  methods:{
    pageSizeChange1(val) {
          this.gettableDatajz(this.CurrentPage1,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange1(val) {
      this.gettableDatajz(val,this.pageSize1,this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange2(val) {
      this.gettableDatagz(this.CurrentPage2,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange2(val) {
     this.gettableDatagz(val,this.pageSize2,this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange3(val) {
        this.gettableDatazf(this.CurrentPage3,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange3(val) {
        this.gettableDatazf(val,this.pageSize3,this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange4(val) {
    this.gettableDataab(this.CurrentPage4,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange4(val) {
      this.gettableDataab(val,this.pageSize4,this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange5(val) {
          this.gettableDatalg(this.CurrentPage5,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange5(val) {
          this.gettableDatalg(val,this.pageSize5,this.pd);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange6(val) {
        this.gettableDatath(this.CurrentPage6,val,this.pd);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange6(val) {
        this.gettableDatath(val,this.pageSize6,this.pd);
      console.log(`当前页: ${val}`);
    },
    base() {
      this.page = 0;
    },
    base1() {
      this.page = 1;
    },
    base2() {
      this.page = 2;
    },
    base3() {
      this.page = 3;
    },
    base4() {
      this.page = 4;
    },
    base5() {
      this.page = 5;
    },
    base6() {
      this.page = 6;
    },
    initData(){
      switch (this.types) {
        case 1://预警
        case 2://人员画像
            this.getData2();
            break;
        default:
      }
    },
    getData2(){
      this.pp.RGUID=this.id;
      this.pd.RYBH=this.rid;
      // let p = {
      //   "pd": this.pp
      // };
      // //人员基本信息
      //  this.$api.post(this.Global.aport3+'/ryhx/getczryjbxx', p,
      //   r => {
      //     if(r.data.resultList.length!=0)
      //      {
      //         this.czinfo=r.data.resultList[0];
      //      }
      // })
      this.czinfo=this.id;
      // this.gettableDatajz(this.CurrentPage1,this.pageSize1,this.pd);
      // this.gettableDatagz(this.CurrentPage2,this.pageSize2,this.pd);
      // this.gettableDatazf(this.CurrentPage3,this.pageSize3,this.pd);
      // this.gettableDataab(this.CurrentPage4,this.pageSize4,this.pd);
      // this.gettableDatalg(this.CurrentPage5,this.pageSize5,this.pd);
      // this.gettableDatath(this.CurrentPage6,this.pageSize6,this.pd);
    },
    // 居住地信息
   gettableDatajz(currentPage,showCount,pd)
   {
     let pp = {
       "pd": pd
     };
     this.$api.post(this.Global.aport3+'/ryhx/getczjzdxx', pp,
      r => {
            if(r.success){
              this.tableDatajz=r.data.resultList;
              this.TotalResult1=r.data.totalResult;
            }

    })

   },
   //工作地信息
   gettableDatagz(currentPage,showCount,pd){
     let pp = {
       "pd": pd
     };
      this.$api.post(this.Global.aport3+'/ryhx/getczgzdxx', pp,
       r => {
           if(r.success){
             this.tableDatagz=r.data.resultList;
             this.TotalResult2=r.data.totalResult;
            }
     })
   },
   //走访信息
   gettableDatazf(currentPage,showCount,pd){
     let pp = {
       "pd": pd
     };

      this.$api.post(this.Global.aport3+'/ryhx/getczzfxx', pp,
       r => {
           if(r.success){
             this.tableDatazf=r.data.resultList;
             this.TotalResult3=r.data.totalResult;
            }
      })
   },

     //安保信息
     gettableDataab(currentPage,showCount,pd){
       let pp = {
         "pd": pd
       };
        this.$api.post(this.Global.aport3+'/ryhx/getczabxx', pp,
         r => {
             if(r.success){
               this.tableDataab=r.data.resultList;
               this.TotalResult4=r.data.totalResult;
              }
       })
       },

      //重点列管信息
       gettableDatalg(currentPage,showCount,pd){
         let pp = {
           "pd": pd
         };

          this.$api.post(this.Global.aport3+'/ryhx/getczzdlgxx', pp,
           r => {
               if(r.success){
                 this.tableDatalg=r.data.resultList;
                 this.TotalResult5=r.data.totalResult;
                }
          })
         },
        //同户信息
          gettableDatath(currentPage,showCount,pd){
            let pp = {
              "pd": pd
            };
             this.$api.post(this.Global.aport3+'/ryhx/getczthrxx',pp,
              r => {
                  if(r.success){
                    this.tableDatath=r.data.resultList;
                    this.TotalResult6=r.data.totalResult;
                   }
             })
            },
          getJZ(row,event,column)
            {
              console.log(row,event,column);
              this.jzinfo=row;
              this.jzshow=true;
          },
          getGZ(row,event,column)
          {
            console.log(row,event,column);
            this.gzinfo=row;
            this.gzshow=true;
          },
          getZF(row,event,column)
          {
            console.log(row,event,column);
            this.zfinfo=row;
            this.zfshow=true;
          },
          getAB(row,event,column)
          {
            console.log(row,event,column);
            this.abinfo=row;
            this.abshow=true;
          },
          getLG(row,event,column)
          {
            console.log(row,event,column);
            this.lginfo=row;
            this.lgshow=true;
          },
          getTH(row,event,column)
          {
            console.log(row,event,column);
            this.thinfo=row;
            this.thshow=true;
          },


  },
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
  background: #EFF3F6;padding:0 10px;
}
.input-text {
  text-align: left !important; width: 32%!important;
}
.input-input{
  width:60%!important;
}

</style>
<style>
  .el-button+.el-button{margin-left: 0!important;}
  .yycontent .el-checkbox{margin-left: 20px!important; line-height: 30px;}
  .yycontent .el-checkbox+.el-checkbox{margin-left: 20px!important;}
  .bj .el-dialog__wrapper {
    background: #000;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
