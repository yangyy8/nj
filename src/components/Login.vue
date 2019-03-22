<template>
  <div class="loginbg">
     <div class="logintop">
        <img src="../assets/img/logodl.png">
     </div>
       <div class="login-box">
         <div class="logintitle">用户登录</div>
         <div class="login-item yzform"  data-scope="demo" data-name="userName" data-type="input"
          v-validate-easy="[['required']]">
        <el-input  placeholder="用户名" v-model="user.userName" >
          <i slot="prefix" class="el-input__icon"><img src="../assets/img/logo01.png"></i>
        </el-input>
        </div>
      <div class="login-item yzform"  data-scope="demo" data-name="password" data-type="input"
       v-validate-easy="[['required']]">
        <el-input
          placeholder="密码"
          type="password" v-model="user.password">
          <i slot="prefix" class="el-input__icon"><img src="../assets/img/logo02.png"></i>
        </el-input>
      </div>
        <div class="login-item2">
         <el-checkbox v-model="jzmm">记住密码</el-checkbox>
        <!-- <a class="login-a">忘记密码</a> -->
        </div>
      <button class="login-btn" @click="login">登录</button>
       <div class="loginmessage">{{msg}}</div>
    </div>
<el-dialog title="选择单位" :visible.sync="companyDialogVisible" width="25%">
  <el-row align="center"   :gutter="1">
        <el-col  :span="24"  class="input-item yzform"  data-scope="demo" data-name="org" data-type="input"
         v-validate-easy="[['required']]">
          <span class="input-text">所属单位：</span>
           <el-select v-model="org"  filterable clearable  class="input-input" placeholder="请选择"  size="small">
             <el-option
              v-for="item in companys"
              :key="item.dm"
              :label="item.mc"
              :value="item.dm">
            </el-option>
           </el-select>
        </el-col>
  </el-row>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="getLogin()" size="small">确定</el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
import {ToData} from '@/assets/js/ToArray.js'
export default {
  data(){
    return {
      user:{},
      jzmm:false,
      org:'',
      companyDialogVisible:false,
      companys:[],
      msg:'',
    }
  },
  mounted(){
    this.initJzmm();
  },
  methods:{
    initJzmm(){
      if(sessionStorage.getItem('jzmm')==1){
        this.user={
          userName:sessionStorage.getItem('userName'),
          password:sessionStorage.getItem('password')
        }
      }
    },
    isJzmm(){
      if(this.jzmm){
        sessionStorage.setItem('jzmm',1);
        sessionStorage.setItem('userName',this.user.userName);
        sessionStorage.setItem('password',this.user.password);
      }else {
        sessionStorage.clear();
      }
    },
    login(){
        this.V.$submit('demo', (canSumit,data) => {
          if(!canSumit) return;
          var ff=new FormData();
          ff.append("userName",this.user.userName);
          ff.append("password",this.user.password);
          let p=ff;
          var url=this.Global.aport1+'/user/doLogin';
          this.$api.post(url,p,
             r => {
              if(r.success){
                console.log('r.data.ssdw',ToData(r.data.ssdw));
                this.companys=ToData(r.data.ssdw);
                this.msg="";
                this.companyDialogVisible=true;
              }else {
                this.msg=r.message;
              }
          })
      });
    },
    getLogin(){
      this.V.$submit('demo', (canSumit,data) => {
        if(!canSumit) return;
        var ff=new FormData();
        ff.append("userName",this.user.userName);
        ff.append("password",this.user.password);
        ff.append("org",this.org);
        let p=ff;
        var url=this.Global.aport1+'/user/doLogin';
        this.$api.post(url,p,r => {
          if(r.success){
            this.$message({
              message: '登录成功',
              type: 'success'
            });
            this.$store.commit('getToken',r.data.token)
          
            console.log(this.$store.state.token)
            // this.Global.token=r.data.token;
            this.Global.hasEnter="1";
            this.$router.push({name: 'Index',params:{ id:'1'}});
          }else {
            this.$error("登录失败！");
          }
        })
      });
    }
  },
<<<<<<< .mine
  getLogin(){

    this.V.$submit('demo', (canSumit,data) => {
           // canSumit为true时，则所有该scope的所有表单验证通过
            if(!canSumit) return;
            var ff=new FormData();
            ff.append("userName",this.user.userName);
            ff.append("password",this.user.password);
            ff.append("org",this.org);
            let p=ff;
            var url=this.Global.aport1+'/user/doLogin';
            this.$api.post(url,p,
                 r => {
                  if(r.success){
                    this.$message({
                      message: '登录成功',
                      type: 'success'
                    });
                   this.Global.token=r.data.token;
                   this.Global.hasEnter="1";
                   this.$router.push({name: 'Index',params:{ id:'1'}});
                  }else {
                    this.$error("登录失败！");
                  }
                })
          });
  }
  },
||||||| .r3444
  getLogin(){

    this.V.$submit('demo', (canSumit,data) => {
           // canSumit为true时，则所有该scope的所有表单验证通过
            if(!canSumit) return;
            var ff=new FormData();
            ff.append("userName",this.user.userName);
            ff.append("password",this.user.password);
            ff.append("org",this.org);
            let p=ff;
            var url=this.Global.aport1+'/user/doLogin';
            this.$api.post(url,p,
                 r => {
                  if(r.success){
                    this.$message({
                      message: '登录成功',
                      type: 'success'
                    });
                   this.Global.token="da7dc5f1-b2cb-46fc-8c55-9ef862472d66";
                   this.Global.hasEnter="1";
                   this.$router.push({name: 'Index',params:{ id:'1'}});
                  }else {
                    this.$error("登录失败！");
                  }
                })
          });
  }
  },
=======
>>>>>>> .r3445
}
</script>
<style scoped>
.logintop{
  padding: 76px 0px 0px 10%;
}
.loginbg{
  width: 100%;
  height: 100%;
  min-height: 1000px;
  background: url('../assets/img/loginbg.png');
  background-size: 100% 100%;
  color: #fff;
}
.login-box{
  width: 25%;
  height: 45%;
  position: fixed;
  top:50%;
  left:50%;
  background: #ffffff;
  border-radius: 10px;
  margin-left: -200px;
  margin-top: -200px;
  z-index: 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  min-height: 400px;
  /* justify-content:center; */
}
.logintitle{
  font-size: 20px; text-align: center; color: #3E79EA;
  margin: 45px 0 15px 0;
}
.loginmessage{font-size: 18px; text-align:center;color: red; padding-top: 10px;}
.login-item{
  margin-top: 20px;
  width: 80%;
  color: #fff;

}
.login-item2{
  margin-top: 15px;
  width: 80%;
  font-size: 14px;
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.login-btn{
  margin-top: 40px;
  border: none;
  border-radius: 5px;
  background: #4186F4;
  width: 80%;
  height: 48px;
  cursor:pointer;
  font-size: 16px;
  color: #FFFFFF;
}
.el-input__icon img{
  padding-left: 8px;
  vertical-align: middle;
}
.login-a{
  color: #6d90c0;
  text-decoration: underline;
}

</style>
<style>
.login-box .el-input__inner{
  height: 45px!important;
  line-height: 45px!important;
}
</style>
