<template lang="html">
  <div class="gjcx">
    <el-tabs type="border-card">
      <el-tab-pane label="基本信息">
        <el-row align="center"   :gutter="1">
          <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
             <span class="input-text">中文姓名：</span>
             <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM" class="input-input"></el-input>
          </el-col>
          <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
             <span class="input-text">英文姓名：</span>
             <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM" class="input-input"></el-input>
          </el-col>
          <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
            <span class="input-text">出生日期：</span>
            <div class="input-input t-flex t-date">
              <el-date-picker
                 v-model="pd.beginTime" format="yyyy-MM-dd"
                 type="date" size="small" value-format="yyyyMMdd"
                 placeholder="开始时间" >
              </el-date-picker>
              <span class="septum">-</span>
              <el-date-picker
                  v-model="pd.endTime" format="yyyy-MM-dd"
                  type="date" size="small" value-format="yyyyMMdd"
                  placeholder="结束时间" >
              </el-date-picker>
           </div>
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
              <span class="input-text">国家地区：</span>
              <el-select v-model="pd.GJDQ" multiple :multiple-limit="5"   collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
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
             <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM" class="input-input"></el-input>
          </el-col>
       </el-row>

      </el-tab-pane>
      <el-tab-pane label="签证信息">配置管理</el-tab-pane>
      <el-tab-pane label="临住信息">角色管理</el-tab-pane>
      <el-tab-pane label="常住信息">定时任务补偿</el-tab-pane>
      <el-tab-pane label="案件信息">定时任务补偿</el-tab-pane>
    </el-tabs>
    <div>
      <el-button type="primary">主要按钮</el-button>
      </div>

  </div>
</template>
<script scoped>
export default{
  data(){
    return{
      pd:{},
    }
  }
}
</script>
<style scoped>
.gjcx{background: #ffffff; min-height: 700px; margin: 10px;}
</style>
