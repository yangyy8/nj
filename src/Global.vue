<script>
const token=sessionStorage.getItem('token');
const userName='';
const hasEnter=false;
const org="320116000000";
const aport1="http://192.168.3.217:9424";//api-permission
const aport2="http://192.168.3.217:9420";
const aport3="";
const aport4="";
const aport5="";
const gjdq="/service/getRedisDataByDm?tablename=DM_GJDQB";//国家地区

  export default
  {
    org,//用户机构代码
    userName,//用户名
    token,//用户token身份
    hasEnter,//用户登录状态
    aport1,//大师
    aport2,//左星海
    aport3,//石飞
    aport4,//李文龙
    aport5,//任智强
    gjdq,
  }
</script>
