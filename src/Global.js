const token='';//this.$store.state.token
const userName='';
const hasEnter=false;
const org="";
const xsd=80;
// const aport="http://10.33.72.144:9420";//正式环境
const aport="/api-reporter";//大师网关
// const aport="http://192.168.3.217:9420";//大师
// const aport1="http://10.33.72.144:9435";//正式环境
const aport1="api-permission";//大师网关
// const aport1="http://192.168.3.217:9435";//大师
// const aport2="http://10.33.72.144:9439";//正式环境
const aport2="api-yewu";//左星海网关
// const aport2="http://192.168.3.217:9439";//左星海
// const aport3="http://10.33.72.144:9439";//正式环境
const aport3="api-yewu";//石飞网关
// const aport3="http://192.168.3.217:9439";//石飞
// const aport4="http://10.33.72.144:9440";//正式环境
const aport4="api-yujing";//李文龙 预警
// const aport4="http://192.168.3.217:9440";//李文龙

const aport5="api-yanpan";//李文龙研判
// const aport5="http://10.0.30.47:9438";//李文龙


const dmall="/data_report/selectDmList" //加载全部代码
const ssdw="/org/getSelfAndChilds"//所属单位
const gjdq="/service/getRedisDataByDm?tablename=DM_GJDQ";//国家地区
const zjzl="/service/getRedisDataByDm?tablename=DM_ZJZL";//证件种类
const qzzl="/service/getRedisDataByDm?tablename=DM_QZZL";//签证种类
const rjkn="/service/getRedisDataByDm?tablename=DM_RJKA"//入境口岸
const rjsy="/service/getRedisDataByDm?tablename=DM_RJSY"//入境事由
const qfjg="/service/getRedisDataByDm?tablename=DM_QFJG"//签发机关
const pcs="/service/getRedisDataByDm?tablename=DM_PCS"//派出所
const jzlx="/service/getRedisDataByDm?tablename=DM_JZLX"//居住类型
const zsxz="/service/getRedisDataByDm?tablename=DM_ZSXZ"//住所性质,住房类型
const jzzt="/service/getRedisDataByDm?tablename=DM_JZZT"//居住状态
const xzqh="/service/getRedisDataByDm?tablename=DM_XZQH"//行政区划
const jtgx="/service/getRedisDataByDm?tablename=DM_JTGX"//家庭关系
const sflx="/service/getRedisDataByDm?tablename=DM_NMSF"//身份类型
const xb="/service/getRedisDataByDm?tablename=DM_XB"//性别
const rjqzzl="/service/getRedisDataByDm?tablename=DM_WGR_QZZL"//入境签证类型
const dwlb="/service/getRedisDataByDm?tablename=JZ_DWLB"//单位类别
const dwxz="/service/getRedisDataByDm?tablename=JZ_DWSX"//单位性质
const zsbg="/service/getRedisDataByDm?tablename=JZ_LGBM"//住宿宾馆
const tlyxq="/service/getRedisDataByDm?tablename=DM_TLYXQ";//停留有效期
const sf="/service/getRedisDataByDm?tablename=DM_JWRYSF";//身份
const clzt="/service/getRedisDataByDm?tablename=DM_CLZT";//处理状态
const sjly="/service/getRedisDataByDm?tablename=DM_SJLY";//数据来源
const rzfs="/service/getRedisDataByDm?tablename=DM_RZFS";//入住方式(地图用的)
const zflx="/service/getRedisDataByDm?tablename=DM_CZ_ZFXZ";//住房类型（地图用的）
const jzztlx="/service/getRedisDataByDm?tablename=DM_JWRYJZZTLX";//居住状态类型（地图用的）
const tablists=[];
export default
{
  org,//用户机构代码
  xsd,//相似度
  userName,//用户名
  token,//用户token身份
  hasEnter,//用户登录状态
  aport,//首页
  aport1,//大师
  aport2,//左星海
  aport3,//石飞
  aport4,//李文龙
  aport5,//李文龙
  gjdq,zjzl,qzzl,rjkn,rjsy,qfjg,pcs,jzlx,zsxz,jzzt,xzqh,jtgx,sflx,xb,rjqzzl,dmall,ssdw,
  dwlb,dwxz,zsbg,tlyxq,sf,tablists,clzt,sjly,rzfs,zflx,jzztlx
}
