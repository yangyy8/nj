const token='';//this.$store.state.token
const userName='';
const hasEnter=false;
const org="";
const aport="http://192.168.3.217:9420";//公安网地址http://10.33.72.144
const aport1="http://192.168.3.217:9424";//api-permission
const aport2="http://192.168.3.217:9439";
const aport3="http://10.0.30.111:9424";//石飞
const aport4="";
const aport5="";
const gjdq="/service/getRedisDataByDm?tablename=DM_GJDQB";//国家地区
const zjzl="/service/getRedisDataByDm?tablename=DM_ZJZLB";//证件种类
const qzzl="/service/getRedisDataByDm?tablename=DM_QZZL";//签证种类
const rjkn="/service/getRedisDataByDm?tablename=DM_RJKA"//入境口岸
const rjsy="/service/getRedisDataByDm?tablename=DM_RJSYB"//入境事由
const qfjg="/service/getRedisDataByDm?tablename=DM_QFJG"//签发机关
const pcs="/service/getRedisDataByDm?tablename=DM_PCS"//派出所
const jzlx="/service/getRedisDataByDm?tablename=DM_JZLX"//居住类型
const zsxz="/service/getRedisDataByDm?tablename=DM_ZSXZ"//住所性质
const jzzt="/service/getRedisDataByDm?tablename=DM_JZZT"//居住状态
const xzqh="/service/getRedisDataByDm?tablename=DM_XZQHB"//行政区划
export default
{
  org,//用户机构代码
  userName,//用户名
  token,//用户token身份
  hasEnter,//用户登录状态
  aport,//首页
  aport1,//大师
  aport2,//左星海
  aport3,//石飞
  aport4,//李文龙
  aport5,//任智强
  gjdq,zjzl,qzzl,rjkn,rjsy,qfjg,pcs,jzlx,zsxz,jzzt,xzqh
}
