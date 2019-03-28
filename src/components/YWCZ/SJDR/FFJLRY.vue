<template lang="html">
    <!-- 非法居留人员导入 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="yy-input-text">姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.CARDNO" class="yy-input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="yy-input-text">性别：</span>
                  <el-select v-model="pd.STATUS" placeholder="请选择"  filterable clearable size="small" class="yy-input-input">
                    <el-option value="U" label="U - 未知">
                    </el-option>
                    <el-option value="M" label="M - 男">
                    </el-option>
                    <el-option value="F" label="F - 女">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="yy-input-text">出生日期：</span>
                  <div class="yy-input-input t-flex t-date">
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
                   <span class="yy-input-text">签证号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.CARDNO" class="yy-input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="yy-input-text">国家地区：</span>
                    <el-select v-model="pd.NATIONALITY" filterable clearable placeholder="请选择"  size="small" class="yy-input-input">
                      <el-option
                        v-for="item in nation"
                        :key="item.CODE"
                        :label="item.CODE+' - '+item.CNAME"
                        :value="item.CODE">
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
    <div class="yycontent ffjs">

      <div class="ak-tabs">
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==0}" @click="base">
          有内地签发签证居留许可
        </div>
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==1}" @click="base1">
          有入境口岸但无住宿无内地签发签证居留许可
        </div>
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==2}" @click="base2">
          有住宿但无内地签发签证居留许可
        </div>
        <div class="ak-tab-item abehgt hand" :class="{'ak-checked':page==3}" @click="base3">
          逾期越南入出境通行证
        </div>

      </div>
      <div class="ak-tab-pane" >
          <div v-show="page==0">
     <el-row class="mb-15">
        <el-button type="primary"  size="small" @click="showUpload(0)">批量导入</el-button>
        <el-button type="success" size="small" @click="download">模板下载</el-button>
      </el-row>
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
             prop="address"
             label="姓名">
           </el-table-column>
           <el-table-column
             prop="address"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="address"
             label="出生日期">
           </el-table-column>
           <el-table-column
             prop="address"
             label="签证号码">
           </el-table-column>
           <el-table-column
             prop="address"
             label="国家地区">
           </el-table-column>

           <el-table-column
             label="操作" width="120">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row,0)"></el-button>
             <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(scope.row,0)"></el-button>
             <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row,0)"></el-button>

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
      <el-dialog title="上传模板" :visible.sync="uploadDialogVisible"  width="640px">
        <el-form>
        <el-row type="flex" class="mb-6">
         <el-col :span="24" class="input-item">
              <el-upload
                class="yy-input-input"
                ref="upload"
                :action='actions+"/manage-platform/riskNameList/riskReadExcel/"'
                :file-list="fileList"
                multiple
                :on-success="upSuccess"
                :before-upload="beforeAvatarUpload"
                :limit="1"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                <br/>
                <span slot="tip" class="el-upload__tip">只能上传EXCEL文件</span>
              </el-upload>
            </el-col>
          </el-row>
        </el-form>
      </el-dialog>
      <el-dialog title="编辑" :visible.sync="editsDialogVisible">
        <el-form   ref="editForm">
          <el-row :gutter="3"  class="mb-6">
            <el-col :span="8" class="input-item">
             <span class="yy-input-text">省：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TITLE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text">行政区划：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text">签发机关：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>

            <el-col :span="8" class="input-item">
             <span class="yy-input-text">姓名：</span>
               <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text">性别：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text">出生日期：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="yy-input-text">国家地区：</span>
               <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="yy-input-text">证件种类：</span>
               <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text" title="入境证件号码">入境证件号码：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text">签证种类：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
             <span class="yy-input-text">签证号码：</span>
              <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text" title="签证签发日期">签证签发日期：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text" title="签证有效日期">签证有效日期：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text">入境日期：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text">入境口岸：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text">邀请单位：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text">住址：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text">联系电话：</span>
                <el-input placeholder="请输入内容" size="small" v-model="editForm.APPLY_TYPE" class="yy-input-input"></el-input>
            </el-col>
          </el-row>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="editsItem('editForm')" size="small">确 定</el-button>
          <el-button @click="editsDialogVisible = false" size="small">取 消</el-button>
        </div>
      </el-dialog>
      <el-dialog title="详情" :visible.sync="detailsDialogVisible">
        <el-form   ref="mapForm">
          <el-row :gutter="3"  class="mb-6">
              <el-col :span="8" class="input-item">
               <span class="yy-input-text">省：</span>
               <span class="yy-input-input detailinput">  {{mapForm.APPLY_TITLE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="yy-input-text">行政区划：</span>
                <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="yy-input-text">签发机关：</span>
                <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
              </el-col>

              <el-col :span="8" class="input-item">
               <span class="yy-input-text">姓名：</span>
               <span class="yy-input-input detailinput">  {{mapForm.APPLY_TITLE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="yy-input-text">性别：</span>
                <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="yy-input-text">出生日期：</span>
                <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
              </el-col>

              <el-col :span="8" class="input-item">
               <span class="yy-input-text">国家地区：</span>
               <span class="yy-input-input detailinput">  {{mapForm.APPLY_TITLE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="yy-input-text">证件种类：</span>
                <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="yy-input-text" title="入境证件号码">入境证件号码：</span>
                <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
               <span class="yy-input-text">签证种类：</span>
               <span class="yy-input-input detailinput">  {{mapForm.APPLY_TITLE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="yy-input-text">签证号码：</span>
                <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="yy-input-text">签证签发日期：</span>
                <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="yy-input-text">签证有效日期：</span>
                <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="yy-input-text">入境日期：</span>
                <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="yy-input-text">入境口岸：</span>
                <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="yy-input-text">邀请单位：</span>
                <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="yy-input-text">住址：</span>
                <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="yy-input-text">联系电话：</span>
                <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
              </el-col>
          </el-row>
          <el-row :gutter="2" style="border-top:1px solid #eee; padding-top:10px;">
            <el-col :span="8" class="input-item">
              <span class="yy-input-text">操作人：</span>
              <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text">操作日期：</span>
              <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
            </el-col>
          </el-row>
          <el-row :gutter="2">
            <el-col :span="8" class="input-item">
              <span class="yy-input-text">修改人：</span>
              <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="yy-input-text">修改日期：</span>
              <span class="yy-input-input detailinput">  {{mapForm.APPLY_TYPE}}</span>
            </el-col>
          </el-row>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
        </div>
      </el-dialog>

      </div>
      <div v-show="page==1">
        <el-row class="mb-15">
           <el-button type="primary"  size="small" @click="showUpload(1)">批量导入</el-button>
           <el-button type="success" size="small" @click="download">模板下载</el-button>
         </el-row>
         <el-table
              ref="multipleTable"
              :data="tableData1"
              border
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <!-- <el-table-column
                type="selection"
                width="55">
              </el-table-column> -->
              <el-table-column
                prop="address"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="address"
                label="性别">
              </el-table-column>
              <el-table-column
                prop="address"
                label="出生日期">
              </el-table-column>
              <el-table-column
                prop="address"
                label="签证号码">
              </el-table-column>
              <el-table-column
                prop="address"
                label="国家地区">
              </el-table-column>

              <el-table-column
                label="操作" width="120">
                <template slot-scope="scope">
                <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row,1)"></el-button>
                <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(scope.row,1)"></el-button>
                <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row,1)"></el-button>

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
             :current-page.sync ="CurrentPage1"
             :page-size="pageSize1"
             layout="prev, pager, next"
             :total="TotalResult1">
           </el-pagination>
        </div>
         <el-dialog title="上传模板" :visible.sync="uploadDialogVisible1"  width="640px">
           <el-form>
           <el-row type="flex" class="mb-6">
            <el-col :span="24" class="input-item">
                 <el-upload
                   class="yy-input-input"
                   ref="upload"
                   :action='actions+"/manage-platform/riskNameList/riskReadExcel/"'
                   :file-list="fileList"
                   multiple
                   :on-success="upSuccess"
                   :before-upload="beforeAvatarUpload"
                   :limit="1"
                   :auto-upload="false">
                   <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                   <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                   <br/>
                   <span slot="tip" class="el-upload__tip">只能上传EXCEL文件</span>
                 </el-upload>
               </el-col>
             </el-row>
           </el-form>
         </el-dialog>
         <el-dialog title="编辑" :visible.sync="editsDialogVisible1">
           <el-form   ref="editForm1">
             <el-row :gutter="3"  class="mb-6">
               <el-col :span="8" class="input-item">
                <span class="yy-input-text">省：</span>
               <el-input placeholder="请输入内容" size="small" v-model="editForm1.APPLY_TITLE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">入境口岸：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm1.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>

               <el-col :span="8" class="input-item">
                <span class="yy-input-text">姓名：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="editForm1.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">性别：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm1.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">出生日期：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm1.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                <span class="yy-input-text">国家地区：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="editForm1.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                <span class="yy-input-text">证件种类：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="editForm1.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text" title="入境证件号码">入境证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm1.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">签证种类：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm1.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                <span class="yy-input-text">签证号码：</span>
                 <el-input placeholder="请输入内容" size="small" v-model="editForm1.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text" title="签证签发日期">签证签发日期：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm1.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">签证机关：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm1.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text" title="签证有效日期">签证有效日期：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm1.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">入境日期：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm1.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>

             </el-row>

           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button type="primary" @click="editsItem('editForm',1)" size="small">确 定</el-button>
             <el-button @click="editsDialogVisible1 = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
         <el-dialog title="详情" :visible.sync="detailsDialogVisible1">
           <el-form   ref="mapForm1">
             <el-row :gutter="3"  class="mb-6">
                 <el-col :span="8" class="input-item">
                  <span class="yy-input-text">省：</span>
                  <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TITLE}}</span>
                 </el-col>

                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">签发机关：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>

                 <el-col :span="8" class="input-item">
                  <span class="yy-input-text">姓名：</span>
                  <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TITLE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">性别：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">出生日期：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>

                 <el-col :span="8" class="input-item">
                  <span class="yy-input-text">国家地区：</span>
                  <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TITLE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">证件种类：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text" title="入境证件号码">入境证件号码：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                  <span class="yy-input-text">签证种类：</span>
                  <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TITLE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">签证号码：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">签证签发日期：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">签证有效日期：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">入境日期：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">入境口岸：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>


             </el-row>
             <el-row :gutter="2" style="border-top:1px solid #eee; padding-top:10px;">
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">操作人：</span>
                 <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">操作日期：</span>
                 <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
               </el-col>
             </el-row>
             <el-row :gutter="2">
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">修改人：</span>
                 <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">修改日期：</span>
                 <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
               </el-col>
             </el-row>

           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button @click="detailsDialogVisible1 = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
      </div>
      <div v-show="page==2">
        <el-row class="mb-15">
           <el-button type="primary"  size="small" @click="showUpload(2)">批量导入</el-button>
           <el-button type="success" size="small" @click="download">模板下载</el-button>
         </el-row>
         <el-table
              ref="multipleTable"
              :data="tableData2"
              border
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <!-- <el-table-column
                type="selection"
                width="55">
              </el-table-column> -->
              <el-table-column
                prop="address"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="address"
                label="性别">
              </el-table-column>
              <el-table-column
                prop="address"
                label="出生日期">
              </el-table-column>
              <el-table-column
                prop="address"
                label="签证号码">
              </el-table-column>
              <el-table-column
                prop="address"
                label="国家地区">
              </el-table-column>

              <el-table-column
                label="操作" width="120">
                <template slot-scope="scope">
                <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row,2)"></el-button>
                <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(scope.row,2)"></el-button>
                <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row,2)"></el-button>

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
             :current-page.sync ="CurrentPage2"
             :page-size="pageSize2"
             layout="prev, pager, next"
             :total="TotalResult2">
           </el-pagination>
        </div>
         <el-dialog title="上传模板" :visible.sync="uploadDialogVisible2"  width="640px">
           <el-form>
           <el-row type="flex" class="mb-6">
            <el-col :span="24" class="input-item">
                 <el-upload
                   class="yy-input-input"
                   ref="upload"
                   :action='actions+"/manage-platform/riskNameList/riskReadExcel/"'
                   :file-list="fileList"
                   multiple
                   :on-success="upSuccess"
                   :before-upload="beforeAvatarUpload"
                   :limit="1"
                   :auto-upload="false">
                   <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                   <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                   <br/>
                   <span slot="tip" class="el-upload__tip">只能上传EXCEL文件</span>
                 </el-upload>
               </el-col>
             </el-row>
           </el-form>
         </el-dialog>
         <el-dialog title="编辑" :visible.sync="editsDialogVisible2">
           <el-form   ref="editForm2">
             <el-row :gutter="3"  class="mb-6">
               <el-col :span="8" class="input-item">
                <span class="yy-input-text">省：</span>
               <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TITLE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">行政区划：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">住宿登记地：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>

               <el-col :span="8" class="input-item">
                <span class="yy-input-text">姓名：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">性别：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">出生日期：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                <span class="yy-input-text">国家地区：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                <span class="yy-input-text">证件种类：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text" title="入境证件号码">入境证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">签证种类：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                <span class="yy-input-text">签证号码：</span>
                 <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text" title="签证签发日期">签证签发日期：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">签证机关：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text" title="签证有效日期">签证有效日期：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">入境日期：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">入境口岸：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">入境签证号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>

               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">最后住宿登记日期：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm2.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
             </el-row>

           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button type="primary" @click="editsItem('editForm',2)" size="small">确 定</el-button>
             <el-button @click="editsDialogVisible2 = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
         <el-dialog title="详情" :visible.sync="detailsDialogVisible2">
           <el-form   ref="mapForm1">
             <el-row :gutter="3"  class="mb-6">
                 <el-col :span="8" class="input-item">
                  <span class="yy-input-text">省：</span>
                  <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TITLE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">行政区划：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">住宿登记地：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>

                 <el-col :span="8" class="input-item">
                  <span class="yy-input-text">姓名：</span>
                  <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TITLE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">性别：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">出生日期：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>

                 <el-col :span="8" class="input-item">
                  <span class="yy-input-text">国家地区：</span>
                  <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TITLE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">证件种类：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text" title="入境证件号码">入境证件号码：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                  <span class="yy-input-text">签证种类：</span>
                  <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TITLE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">签证号码：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">签证签发日期：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">签证机关：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">签证有效日期：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">入境日期：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">入境口岸：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">入境签证号码：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">住宿城市：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">最后住宿登记日期：</span>
                   <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
                 </el-col>
             </el-row>
             <el-row :gutter="2" style="border-top:1px solid #eee; padding-top:10px;">
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">操作人：</span>
                 <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">操作日期：</span>
                 <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
               </el-col>
             </el-row>
             <el-row :gutter="2">
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">修改人：</span>
                 <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">修改日期：</span>
                 <span class="yy-input-input detailinput">  {{mapForm1.APPLY_TYPE}}</span>
               </el-col>
             </el-row>

           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button @click="detailsDialogVisible2 = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
      </div>
      <div v-show="page==3">
        <el-row class="mb-15">
           <el-button type="primary"  size="small" @click="showUpload(3)">批量导入</el-button>
           <el-button type="success" size="small" @click="download">模板下载</el-button>
         </el-row>
         <el-table
              ref="multipleTable"
              :data="tableData3"
              border
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <!-- <el-table-column
                type="selection"
                width="55">
              </el-table-column> -->
              <el-table-column
                prop="address"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="address"
                label="性别">
              </el-table-column>
              <el-table-column
                prop="address"
                label="出生日期">
              </el-table-column>
              <el-table-column
                prop="address"
                label="签证号码">
              </el-table-column>
              <el-table-column
                prop="address"
                label="国家地区">
              </el-table-column>

              <el-table-column
                label="操作" width="120">
                <template slot-scope="scope">
                <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row,3)"></el-button>
                <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(scope.row,3)"></el-button>
                <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row,3)"></el-button>

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
             :current-page.sync ="CurrentPage3"
             :page-size="pageSize3"
             layout="prev, pager, next"
             :total="TotalResult3">
           </el-pagination>
        </div>
         <el-dialog title="上传模板" :visible.sync="uploadDialogVisible3"  width="640px">
           <el-form>
           <el-row type="flex" class="mb-6">
            <el-col :span="24" class="input-item">
                 <el-upload
                   class="yy-input-input"
                   ref="upload"
                   :action='actions+"/manage-platform/riskNameList/riskReadExcel/"'
                   :file-list="fileList"
                   multiple
                   :on-success="upSuccess"
                   :before-upload="beforeAvatarUpload"
                   :limit="1"
                   :auto-upload="false">
                   <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                   <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                   <br/>
                   <span slot="tip" class="el-upload__tip">只能上传EXCEL文件</span>
                 </el-upload>
               </el-col>
             </el-row>
           </el-form>
         </el-dialog>
         <el-dialog title="编辑" :visible.sync="editsDialogVisible3">
           <el-form   ref="editForm3">
             <el-row :gutter="3"  class="mb-6">
               <el-col :span="8" class="input-item">
                <span class="yy-input-text">省：</span>
               <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TITLE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">口岸：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>


               <el-col :span="8" class="input-item">
                <span class="yy-input-text">姓名：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">性别：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">出生日期：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>

               <el-col :span="8" class="input-item">
                <span class="yy-input-text">入境证件种类：</span>
                  <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text" title="入境证件号码">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">签证种类：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                <span class="yy-input-text">签证号码：</span>
                 <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text" title="签证签发日期">签发日期：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text" title="签证有效日期">签证地：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">签证有效日期：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">入境日期：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">最后住宿登记地：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">住宿登记日期：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="editForm3.APPLY_TYPE" class="yy-input-input"></el-input>
               </el-col>
             </el-row>
           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button type="primary" @click="editsItem('editForm')" size="small">确 定</el-button>
             <el-button @click="editsDialogVisible3 = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
         <el-dialog title="详情" :visible.sync="detailsDialogVisible3">
           <el-form   ref="mapForm3">
             <el-row :gutter="3"  class="mb-6">
                 <el-col :span="8" class="input-item">
                  <span class="yy-input-text">省：</span>
                  <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TITLE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">口岸：</span>
                   <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
                 </el-col>
                <el-col :span="8" class="input-item">
                  <span class="yy-input-text">姓名：</span>
                  <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TITLE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">性别：</span>
                   <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">出生日期：</span>
                   <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
                 </el-col>

                 <el-col :span="8" class="input-item">
                  <span class="yy-input-text">国家地区：</span>
                  <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TITLE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">入境证件种类：</span>
                   <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text" >证件号码：</span>
                   <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                  <span class="yy-input-text">签证种类：</span>
                  <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TITLE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">签证号码：</span>
                   <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">签发日期：</span>
                   <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">签证地：</span>
                   <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">签证有效期：</span>
                   <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">入境日期：</span>
                   <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">最后住宿登记地：</span>
                   <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
                 </el-col>
                 <el-col :span="8" class="input-item">
                   <span class="yy-input-text">住宿登记日期：</span>
                   <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
                 </el-col>

             </el-row>
             <el-row :gutter="2" style="border-top:1px solid #eee; padding-top:10px;">
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">操作人：</span>
                 <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">操作日期：</span>
                 <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
               </el-col>
             </el-row>
             <el-row :gutter="2">
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">修改人：</span>
                 <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
               </el-col>
               <el-col :span="8" class="input-item">
                 <span class="yy-input-text">修改日期：</span>
                 <span class="yy-input-input detailinput">  {{mapForm3.APPLY_TYPE}}</span>
               </el-col>
             </el-row>

           </el-form>
           <div slot="footer" class="dialog-footer">
             <el-button @click="detailsDialogVisible3 = false" size="small">取 消</el-button>
           </div>
         </el-dialog>
      </div>
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
      CurrentPage1: 1,
      pageSize1: 10,
      TotalResult1: 0,
      CurrentPage2: 1,
      pageSize2: 10,
      TotalResult2: 0,
      CurrentPage3: 1,
      pageSize3: 10,
      TotalResult3: 0,
      pd: {},
      pd1: {},
      pd2: {},
      pd3: {},
      nation: [],
      fileList: [],
      actions: "",
      page:0,
      uploadDialogVisible: false,
      detailsDialogVisible:false,
      editsDialogVisible:false,
      uploadDialogVisible1: false,
      detailsDialogVisible1:false,
      editsDialogVisible1:false,
      uploadDialogVisible2: false,
      detailsDialogVisible2:false,
      editsDialogVisible2:false,
      uploadDialogVisible3: false,
      detailsDialogVisible3:false,
      editsDialogVisible3:false,
      editForm:{},
      mapForm:{},
      editForm1:{},
      mapForm1:{},
      editForm2:{},
      mapForm2:{},
      editForm3:{},
      mapForm3:{},
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
      tableData1: [{
        date: '2016-05-02',
        name: '王小虎',
        address: 'XXXXX'
      }],
      tableData2: [{
        date: '2016-05-02',
        name: '王小虎',
        address: 'XXXXX'
      }],
      tableData3: [{
        date: '2016-05-02',
        name: '王小虎',
        address: 'XXXXX'
      }],

    }
  },
  mounted() {

  },
  methods: {
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
    pageSizeChange1(val) {
      this.getList1(this.CurrentPage1, val, this.pd1);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange1(val) {
      this.getList1(val, this.pageSize1, this.pd1);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange2(val) {
      this.getList2(this.CurrentPage2, val, this.pd2);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange2(val) {
      this.getList(val, this.pageSize2, this.pd2);
      console.log(`当前页: ${val}`);
    },
    pageSizeChange3(val) {
      this.getList3(this.CurrentPage3, val, this.pd3);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange3(val) {
      this.getList(val, this.pageSize3, this.pd3);
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
    getList1(currentPage, showCount, pd) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      this.$api.post('/manage-platform/riskNameList/getRiskNameListPage', p,
        r => {
          this.tableData1 = r.data.resultList;
          this.TotalResult1 = r.data.totalResult;
        })
    },
    getList2(currentPage, showCount, pd) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      this.$api.post('/manage-platform/riskNameList/getRiskNameListPage', p,
        r => {
          this.tableData2 = r.data.resultList;
          this.TotalResult2 = r.data.totalResult;
        })
    },
    getList3(currentPage, showCount, pd) {
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      this.$api.post('/manage-platform/riskNameList/getRiskNameListPage', p,
        r => {
          this.tableData3 = r.data.resultList;
          this.TotalResult3 = r.data.totalResult;
        })
    },
    details(n,t)
    {
    if(t==0){
      this.detailsDialogVisible=true;
      this.mapForm=n;
    }else if(t==1){
      this.detailsDialogVisible1=true;
      this.mapForm1=n;
    }else if(t==2){
        this.detailsDialogVisible2=true;
        this.mapForm2=n;
      }else if(t==3){
          this.detailsDialogVisible3=true;
          this.mapForm1=3;
          }
    },
    edits(n,t){
    if(t==0){
      this.editsDialogVisible=true;
      this.editForm=n;
      }else if(t==1){
        this.editsDialogVisible1=true;
        this.editForm1=n;
      }else if(t==2){
        this.editsDialogVisible2=true;
        this.editForm2=n;
      }else if(t==3){
        this.editsDialogVisible3=true;
        this.editForm3=n;
        }
    },
    editsItem(formName)
    {

    },
    deletes(i,t) {
    let p = {
      "id": i.SERIAL
    };
    var url='/manage-platform/riskNameList/updateRiskNameListById';
    if(t==1){
      url='';
    }else if(t==2){
      url='';
    }else if(t==3){
      url='';
    }
    this.$confirm('您是否确认删除？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.$api.post(url, p,
        r => {
          console.log("===" + r);
          if (r.success) {
            this.$message({
              message: '删除成功！',
              type: 'success'
            });
            this.getList(this.CurrentPage, this.pageSize, this.pd);
          } else {
            this.$message.error(r.Message);
          }
        }, e => {
          this.$message.error('失败了');
        });
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '已取消删除'
      });
    });
  },
    upSuccess(r) {
      if (r.success) {
        this.$message({
          message: r.data,
          type: 'success'
        });

      } else {
        this.$message.error(r.message);
      }
      this.uploadDialogVisible = false;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    beforeAvatarUpload(file) {
      console.log(file.type)
      const isEXL = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

      if (!isEXL) {
        this.$message.error('上传文件只能是 xlsl 格式!');
      }
      return isEXL;
    },
    showUpload(t) {
      this.uploadDialogVisible = true;
      if(t==1){
        this.uploadDialogVisible1 = true;
      }else if(t==2){this.uploadDialogVisible2 = true;}else if(t==3){this.uploadDialogVisible3 = true;}

      this.typemd = "";
      this.actions = this.$api.rootUrl;
      console.log(this.$refs.upload)
      if (this.$refs.upload) {
        this.$refs.upload.clearFiles();
      }
    },
    submitUpload() {
      if (this.$refs.upload.uploadFiles.length == 0) {
        this.$message({
          message: '请先选择文件！',
          type: 'warning'
        });
        return
      }
      this.$refs.upload.submit();
    },
    download() {
      window.location.href = this.$api.rootUrl + '/manage-platform/templateFile/riskNameListFile.xlsx'
    },
  }
}
</script>

<style scoped>

</style>
<style>
.ffjs .el-dialog{
  width: 60%!important;
  /* max-height: 400px!important;
  overflow-y: scroll; */
}
</style>
