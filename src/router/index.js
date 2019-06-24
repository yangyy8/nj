import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,

    },
    {
    path:'/index',
    name:'Index',
    meta: {logined:true},
    component:resolve => require(['@/components/index'], resolve),
    },
    {
    path:'/homemap',
    name:'Homemap',
    meta: {logined:true},
    component:resolve => require(['@/components/homemap'], resolve),
    },
    {
    path:'/indexmap',
    name:'Indexmap',
    meta: {logined:true},
    component:resolve => require(['@/components/indexmap'], resolve),
    },
    {
      path: '/Home',
      name: 'Home',
      meta: {logined:true},
      component: resolve => require(['@/components/Home'], resolve),

      children: [
        // 预警============================================================================================
        {
          path: 'ZBKYJ',
          name: 'ZBKYJ',
          meta:{title:['预警研判','预警','临住预警','布控预警']},
          component: resolve => require(['@/components/YJYP/YJ/LZYJ/LZBKYJ'], resolve),
        },
        {
          path: 'ZBKYJ_X',
          name: 'ZBKYJ_X',
          meta:{title:['预警研判','预警','临住预警','布控预警'],father:'ZBKYJ'},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSXXGLYJ'], resolve),
        },
        {
          path: 'ZBKYJ_XQ',
          name: 'ZBKYJ_XQ',
          meta:{title:['预警研判','预警','临住预警','临住布控预警详情'],father:'ZBKYJ'},
          component: resolve => require(['@/components/GYZJ/ASJXQ'], resolve),
        },
        {
          path: 'YJCLXQ',
          name: 'YJCLXQ',
          meta:{title:['预警研判','预警','临住预警','预警详情']},
          component: resolve => require(['@/components/YJYP/YJ/LZYJ/YJCLXQ'], resolve),
        },
        {
          path: 'ZDGZCZWYJ',
          name: 'ZDGZCZWYJ',
          meta:{title:['预警研判','预警','临住预警','重点关注出租屋预警']},
          component: resolve => require(['@/components/YJYP/YJ/LZYJ/ZDGZCZWYJ'], resolve),
        },
        {
          path: 'GJYWWYLZYJ',
          name: 'GJYWWYLZYJ',
          meta:{title:['预警研判','预警','临住预警','重点国家境外人员临住预警']},
          component: resolve => require(['@/components/YJYP/YJ/LZYJ/GJYWWYLZYJ'], resolve),
        },
        {
          path: 'GJYWWYLZYJ_XQ',
          name: 'GJYWWYLZYJ_XQ',
          meta:{title:['预警研判','预警','临住预警','重点国家境外人员临住预警'],father:'GJYWWYLZYJ'},
          component: resolve => require(['@/components/YJYP/YJ/LZYJ/GJYWWYLZYJ_XQ'], resolve),
        },
        {
          path: 'GJYWWYLZYJ_LB',
          name: 'GJYWWYLZYJ_LB',
          meta:{title:['预警研判','预警','临住预警','重点国家境外人员临住预警'],father:'GJYWWYLZYJ'},
          component: resolve => require(['@/components/YJYP/YJ/LZYJ/GJYWWYLZYJ_LB'], resolve),
        },
        {
          path: 'CZFWYHYJ',
          name: 'CZFWYHYJ',
          meta:{title:['预警研判','预警','临住预警','出租房屋隐患预警']},
          component: resolve => require(['@/components/YJYP/YJ/LZYJ/CZFWYHYJ'], resolve),
        },
        {
          path: 'CZFWYHYJ_XQ',
          name: 'CZFWYHYJ_XQ',
          meta:{title:['预警研判','预警','临住预警','出租房屋隐患预警'],father:'CZFWYHYJ'},
          component: resolve => require(['@/components/YJYP/YJ/LZYJ/CZFWYHYJ_XQ'], resolve),
        },
        {
          path: '202TFZLYJ',
          name: '202TFZLYJ',
          meta:{title:['预警研判','预警','留学生预警','202表突发增量预警']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/202TFZLYJ'], resolve),
        },
        {
          path: 'JYTZSYJ',
          name: 'JYTZSYJ',
          meta:{title:['预警研判','预警','留学生预警','教育厅招生预警、审核']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/JYTZSYJ'], resolve),
        },
        {
          path: 'JYTZSYJ-XQ',
          name: 'JYTZSYJ-XQ',
          meta:{title:['预警研判','预警','留学生预警','教育厅招生预警、审核详情']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/JYTZSYJ-XQ'], resolve),
        },
        {
          path: 'LXSWBDYJ',
          name: 'LXSWBDYJ',
          meta:{title:['预警研判','预警','留学生预警','留学生录取未报到预警']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSWBDYJ'], resolve),
        },
        {
          path: 'LXSWBDYJ_X',
          name: 'LXSWBDYJ_X',
          meta:{title:['预警研判','预警','留学生预警','留学生录取未报到预警'],father:'LXSWBDYJ'},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSXXGLYJ'], resolve),
        },
        {
          path: 'LXSXXGLYJ',
          name: 'LXSXXGLYJ',
          meta:{title:['预警研判','预警','留学生预警','留学生市外临住预警']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSXXGLYJ'], resolve),
        },
        {
          path: 'LXSSWLZ_X',
          name: 'LXSSWLZ_X',
          meta:{title:['预警研判','预警','留学生预警','留学生市外临住预警'],father:'LXSSWLZ'},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSXXGLYJ'], resolve),
        },
        {
          path: 'LXSSWLZ',
          name: 'LXSSWLZ',
          meta:{title:['预警研判','预警','留学生预警','留学生市外临住预警']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSSWLZ'], resolve),
        },
        {
          path: 'LXSXXGLYJ_XQ',
          name: 'LXSXXGLYJ_XQ',
          meta:{title:['预警研判','预警','留学生预警','留学生市外临住预警'],father:'LXSXXGLYJ'},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSXXGLYJ_XQ'], resolve),
        },
        {
          path: 'LXSCRJYJ',
          name: 'LXSCRJYJ',
          meta:{title:['预警研判','预警','留学生预警','留学生出入境提醒']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSCRJYJ'], resolve),
        },
        {
          path: 'LXSCRJYJ_X',
          name: 'LXSCRJYJ_X',
          meta:{title:['预警研判','预警','留学生预警','留学生出入境提醒'],father:'LXSCRJYJ'},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSXXGLYJ'], resolve),
        },
        {
          path: 'LXSSKYJ',
          name: 'LXSSKYJ',
          meta:{title:['预警研判','预警','留学生预警','留学生涉恐预警']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSSKYJ'], resolve),
        },
        {
          path: 'LXSSKYJ_X',
          name: 'LXSSKYJ_X',
          meta:{title:['预警研判','预警','留学生预警','留学生涉恐预警'],father:'LXSSKYJ'},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSXXGLYJ'], resolve),
        },
        {
          path: 'LZHCYJ',
          name: 'LZHCYJ',
          meta:{title:['预警研判','预警','留学生预警','临住核查预警']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LZHCYJ'], resolve),
        },
        {
          path: 'LZHCYJ_X',
          name: 'LZHCYJ_X',
          meta:{title:['预警研判','预警','留学生预警','临住核查预警'],father:'LZHCYJ'},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSXXGLYJ'], resolve),
        },
        {
          path: "StuWarning",
          name: "StuWarning",
          meta:{title:['预警研判','预警','留学生预警','留学生信息管理预警详情']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/StuWarning'], resolve),
        },
        {
          path: "LXSYJ-JBXQ",
          name: "LXSYJ-JBXQ",
          meta:{title:['预警研判','预警','留学生预警','留学生信息管理预警详情'],father:'StuWarning'},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSYJ-JBXQ'], resolve),
        },
        {
          path: "StuBaseInfo",
          name: "StuBaseInfo",
          meta:{title:['预警研判','预警','留学生预警','留学生信息管理预警详情']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/StuBaseInfo'], resolve),
        },
        {
          path: 'ZXSTFZLYJ',
          name: 'ZXSTFZLYJ',
          meta:{title:['预警研判','预警','留学生预警','在校学生突发增量预警']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/ZXSTFZLYJ'], resolve),
        },
        {
          path: 'NMXQPHZYJ',
          name: 'NMXQPHZYJ',
          meta:{title:['预警研判','预警','常住预警','难民和需求庇护者预警']},
          component: resolve => require(['@/components/YJYP/YJ/CZYJ/NMXQPHZYJ'], resolve),
        },
        {
          path: 'NMXQPHZYJ_X',
          name: 'NMXQPHZYJ_X',
          meta:{title:['预警研判','预警','常住预警','难民和需求庇护者预警'],father:'NMXQPHZYJ'},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSXXGLYJ'], resolve),
        },
        {
          path: 'NMXQPHZYJ_XQ',
          name: 'NMXQPHZYJ_XQ',
          meta:{title:['预警研判','预警','常住预警','难民和需求庇护者预警详情'],father:'NMXQPHZYJ'},
          component: resolve => require(['@/components/YJYP/YJ/CZYJ/NMXQPHZYJ_XQ'], resolve),
        },
        {
          path: 'SWDWFXYJ',
          name: 'SWDWFXYJ',
          meta:{title:['预警研判','预警','涉外单位预警','涉外单位风险预警']},
          component: resolve => require(['@/components/YJYP/YJ/SWDWYJ/SWDWFXYJ'], resolve),
        },
        {
          path: 'DQQZFFJYYJ',
          name: 'DQQZFFJYYJ',
          meta:{title:['预警研判','预警','案事件预警','持短期签证非法就业预警']},
          component: resolve => require(['@/components/YJYP/YJ/ASJYJ/DQQZFFJYYJ'], resolve),
        },
        {
          path: 'DQQZFFJYYJ_XQ',
          name: 'DQQZFFJYYJ_XQ',
          meta:{title:['预警研判','预警','临住预警','持短期签证非法就业预警详情'],father:'DQQZFFJYYJ'},
          component: resolve => require(['@/components/GYZJ/ASJXQ'], resolve),
        },
        {
          path: 'WGRFFJLYJ',
          name: 'WGRFFJLYJ',
          meta:{title:['预警研判','预警','案事件预警','外国人非法居留预警']},
          component: resolve => require(['@/components/YJYP/YJ/ASJYJ/WGRFFJLYJ'], resolve),
        },
        {
          path: 'WGRFFJLYJ_XQ',
          name: 'WGRFFJLYJ_XQ',
          meta:{title:['预警研判','预警','临住预警','外国人非法居留预警详情'],father:'WGRFFJLYJ'},
          component: resolve => require(['@/components/GYZJ/ASJXQ'], resolve),
        },
        {
          path: 'CQQZFFJYYJ',
          name: 'CQQZFFJYYJ',
          meta:{title:['预警研判','预警信息','留学生非法就业预警']},
          component: resolve => require(['@/components/YJYP/YJ/ASJYJ/CQQZFFJYYJ'], resolve),
        },
        {
          path: 'WLYPYJ',
          name: 'WLYPYJ',
          meta:{title:['预警研判','预警','案事件预警','违临预判预警']},
          component: resolve => require(['@/components/YJYP/YJ/ASJYJ/WLYPYJ'], resolve),
        },
        {
          path: 'WLYPYJ_XQ',
          name: 'WLYPYJ_XQ',
          meta:{title:['预警研判','预警','临住预警','违临预判预警详情'],father:'WLYPYJ'},
          component: resolve => require(['@/components/GYZJ/ASJXQ'], resolve),
        },
        {
          path: 'SKGJRYXXYJ_X',
          name: 'SKGJRYXXYJ_X',
          meta:{title:['预警研判','预警','案事件预警','涉恐国家人员信息预警'],father:'SKGJRYXXYJ'},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSXXGLYJ'], resolve),
        },
        {
          path: 'SKGJRYXXYJ',
          name: 'SKGJRYXXYJ',
          meta:{title:['预警研判','预警','案事件预警','涉恐国家人员信息预警']},
          component: resolve => require(['@/components/YJYP/YJ/ASJYJ/SKGJRYXXYJ'], resolve),
        },
        {
          path: 'SKGJRYXXYJ_XQ',
          name: 'SKGJRYXXYJ_XQ',
          meta:{title:['预警研判','预警','案事件预警','涉恐国家人员信息预警详情'],father:'SKGJRYXXYJ'},
          component: resolve => require(['@/components/YJYP/YJ/ASJYJ/SKGJRYXXYJ_XQ'], resolve),
        },
        {
          path: 'ZDQYJKFX',
          name: 'ZDQYJKFX',
          meta:{title:['预警研判','预警','案事件预警','重点区域监控分析']},
          component: resolve => require(['@/components/YJYP/YJ/ASJYJ/ZDQYJKFX'], resolve),
        },
        {
          path: 'SLQFXXYJ',
          name: 'SLQFXXYJ',
          meta:{title:['预警研判','预警','签证信息预警','受理、签发信息核查预警']},
          component: resolve => require(['@/components/YJYP/YJ/QZXXYJ/SLQFXXYJ'], resolve),
        },
        // 研判=====================================================================================
        {
          path: 'CZJWZHFX',
          name: 'CZJWZHFX',
          meta:{title:['预警研判','研判','常住研判','常住境外人员综合分析']},
          component: resolve => require(['@/components/YJYP/YP/CZYP/CZJWZHFX'], resolve),
        },
        {
          path: 'NMFX',
          name: 'NMFX',
          meta:{title:['预警研判','研判','常住研判','难民和寻求庇护者分析']},
          component: resolve => require(['@/components/YJYP/YP/CZYP/NMFX'], resolve),
        },
        {
          path: 'CZDJBHL',
          name: 'CZDJBHL',
          meta:{title:['预警研判','研判','常住研判','常住登记变化量']},
          component: resolve => require(['@/components/YJYP/YP/CZYP/CZDJBHL'], resolve),
        },
        {
          path: 'CZGZYBB',
          name: 'CZGZYBB',
          meta:{title:['预警研判','研判','常住研判','常住工作月报表']},
          component: resolve => require(['@/components/YJYP/YP/CZYP/CZGZYBB'], resolve),
        },
        {
          path: 'CZJWRYFBFX',
          name: 'CZJWRYFBFX',
          meta:{title:['预警研判','研判','常住研判','常住境外人员分布分析']},
          component: resolve => require(['@/components/YJYP/YP/CZYP/CZJWRYFBFX'], resolve),
        },
        {
          path: 'CZJWRYGLQK',
          name: 'CZJWRYGLQK',
          meta:{title:['预警研判','研判','常住研判','常住境外人员管理情况']},
          component: resolve => require(['@/components/YJYP/YP/CZYP/CZJWRYGLQK'], resolve),
        },
        {
          path: 'SWDWFBFX',
          name: 'SWDWFBFX',
          meta:{title:['预警研判','研判','涉外单位分析','涉外单位分布分析']},
          component: resolve => require(['@/components/YJYP/YP/SWDWFX/SWDWFBFX'], resolve),
        },
        {
          path: 'LXSSJFX',
          name: 'LXSSJFX',
          meta:{title:['预警研判','研判','留学生研判','留学生散居社会面分析']},
          component: resolve => require(['@/components/YJYP/YP/LXSYP/LXSSJFX'], resolve),
        },
        {
          path: 'RYHX',
          name: 'RYHX',
          meta:{title:['预警研判','研判','人员画像','人员画像']},
          component: resolve => require(['@/components/YJYP/YP/LXSYP/RYHX'], resolve),
        },
        {
          path: 'RYHX_XQ',
          name: 'RYHX_XQ',
          meta:{title:['预警研判','研判','人员画像','人员画像'],father:'RYHX'},
          component: resolve => require(['@/components/YJYP/YP/LXSYP/RYHX_XQ'], resolve),
        },
        {
          path: 'RYHXGJCX',
          name: 'RYHXGJCX',
          meta:{title:['预警研判','研判','人员画像','人员高级查询'],father:'RYHX'},
          component: resolve => require(['@/components/YJYP/YP/LXSYP/RYHXGJCX'], resolve),
        },
        {
          path: 'RYHXGJCX_D',
          name: 'RYHXGJCX_D',
          meta:{title:['预警研判','研判','人员画像','人员高级查询'],father:'RYPLCX'},
          component: resolve => require(['@/components/YJYP/YP/LXSYP/RYHXGJCX'], resolve),
        },
        {
          path: 'RYPLCX',
          name: 'RYPLCX',
          meta:{title:['预警研判','研判','人员画像','人员批量查询']},
          component: resolve => require(['@/components/YJYP/YP/LXSYP/RYPLCX'], resolve),
        },
        {
          path: 'JYTZSTJ',
          name: 'JYTZSTJ',
          meta:{title:['预警研判','研判','留学生研判','教育厅招生统计']},
          component: resolve => require(['@/components/YJYP/YP/LXSYP/JYTZSTJ'], resolve),
        },
        {
          path: 'LZXXZHFX',
          name: 'LZXXZHFX',
          meta:{title:['预警研判','研判','临住研判','临住信息综合分析']},
          component: resolve => require(['@/components/YJYP/YP/LZYP/LZXXZHFX'], resolve),
        },
        {
          path: 'JWRYXX',
          name: 'JWRYXX',
          meta:{title:['预警研判','研判','临住研判','临住信息综合分析'],father:'LZXXZHFX'},
          component: resolve => require(['@/components/YJYP/YP/LZYP/JWRYXX'], resolve),
        },
        {
          path: 'JWRYCZWYHFX',
          name: 'JWRYCZWYHFX',
          meta:{title:['数据分析','临住分析','境外人员出租房屋隐患分析']},
          component: resolve => require(['@/components/YJYP/YP/LZYP/JWRYCZWYHFX'], resolve),
        },
        {
          path: 'LZDJBHL',
          name: 'LZDJBHL',
          meta:{title:['预警研判','研判','临住研判','临住登记变化量']},
          component: resolve => require(['@/components/YJYP/YP/LZYP/LZDJBHL'], resolve),
        },
        {
          path: 'BGLZXXQS',
          name: 'BGLZXXQS',
          meta:{title:['预警研判','研判','临住研判','宾馆临住信息趋势']},
          component: resolve => require(['@/components/YJYP/YP/LZYP/BGLZXXQS'], resolve),
        },
        {
          path: 'LZRYFBFX',
          name: 'LZRYFBFX',
          meta:{title:['预警研判','研判','临住研判','临住人员分布分析']},
          component: resolve => require(['@/components/YJYP/YP/LZYP/LZRYFBFX'], resolve),
        },
        {
          path: 'TZRXBDYJFX',
          name: 'TZRXBDYJFX',
          meta:{title:['预警研判','研判','临住研判','图侦人像比对预警分析']},
          component: resolve => require(['@/components/YJYP/YP/LZYP/TZRXBDYJFX'], resolve),
        },
        {
          path: 'CRJZJFX',
          name: 'CRJZJFX',
          meta:{title:['预警研判','研判','移民研判','因私出入境中介分析']},
          component: resolve => require(['@/components/YJYP/YP/YMYP/CRJZJFX'], resolve),
        },
        {
          path: 'DBQZXXTJ',
          name: 'DBQZXXTJ',
          meta:{title:['预警研判','研判','移民研判','代办签证信息统计']},
          component: resolve => require(['@/components/YJYP/YP/YMYP/DBQZXXTJ'], resolve),
        },
        {
          path: 'QZXXTJ',
          name: 'QZXXTJ',
          meta:{title:['预警研判','研判','签证信息研判','签证信息统计']},
          component: resolve => require(['@/components/YJYP/YP/QZXXYP/QZXXTJ'], resolve),
        },
        {
          path: 'QFXXBB',
          name: 'QFXXBB',
          meta:{title:['预警研判','研判','签证信息研判','签发信息报表']},
          component: resolve => require(['@/components/YJYP/YP/QZXXYP/QFXXBB'], resolve),
        },
        // 业务操作=====================================================================
        {
          path: 'CRJJLHC',
          name: 'CRJJLHC',
          meta:{title:['业务操作','临住信息','临住数据核查']},
          component: resolve => require(['@/components/YWCZ/LZXX/CRJJLHC'], resolve),
        },
        {

          path: 'LZSJHE',
          name: 'LZSJHE',
          meta:{title:['业务操作','临住信息','临住数据核查'],father:'CRJJLHC'},
          component: resolve => require(['@/components/YWCZ/LZXX/LZSJHE'], resolve),
        },
        {
          path: 'JSQKKH',
          name: 'JSQKKH',
          meta:{title:['业务操作','临住信息','临住登记及时情况考核']},
          component: resolve => require(['@/components/YWCZ/LZXX/JSQKKH'], resolve),
        },
        {
          path: 'ZQQKKH',
          name: 'ZQQKKH',
          meta:{title:['业务操作','临住信息','临住登记统计情况考核']},
          component: resolve => require(['@/components/YWCZ/LZXX/ZQQKKH'], resolve),
        },
        {
          path: 'CWSJXG',
          name: 'CWSJXG',
          meta:{title:['业务操作','临住信息','错误数据修改']},
          component: resolve => require(['@/components/YWCZ/LZXX/CWSJXG'], resolve),
        },
        {
          path: 'SJDJZLKH',
          name: 'SJDJZLKH',
          meta:{title:['业务操作','常住信息','常住境外人员数据登记质量考核']},
          component: resolve => require(['@/components/YWCZ/CZXX/SJDJZLKH'], resolve),
        },
        {
          path: 'NMDXFS',
          name: 'NMDXFS',
          meta:{title:['业务操作','常住信息','常住、难民短信发送']},
          component: resolve => require(['@/components/YWCZ/CZXX/NMDXFS'], resolve),
        },
        {
          path: 'LXSWBDDR',
          name: 'LXSWBDDR',
          meta:{title:['业务操作','数据导入','留学生录入未报到信息导入']},
          component: resolve => require(['@/components/YWCZ/SJDR/LXSWBDDR'], resolve),
        },
        {
          path: 'LZBKRYDR',
          name: 'LZBKRYDR',
          meta:{title:['业务操作','数据导入','临住布控人员导入']},
          component: resolve => require(['@/components/YWCZ/SJDR/LZBKRYDR'], resolve),
        },

        {
          path: 'NMSJCJ',
          name: 'NMSJCJ',
          meta:{title:['业务操作','数据导入','难民和寻求庇护者数据采集']},
          component: resolve => require(['@/components/YWCZ/SJDR/NMSJCJ'], resolve),
        },

        {
          path: 'YMDR',
          name: 'YMDR',
          meta:{title:['业务操作','数据导入','移民导入']},
          component: resolve => require(['@/components/YWCZ/SJDR/YMDR'], resolve),
        },
        {
          path: 'FFJLRY',
          name: 'FFJLRY',
          meta:{title:['业务操作','数据导入','非法居留人员导入']},
          component: resolve => require(['@/components/YWCZ/SJDR/FFJLRY'], resolve),
        },
        {
          path: 'TBRY',
          name: 'TBRY',
          meta:{title:['业务操作','数据导入','247数据导入']},
          component: resolve => require(['@/components/YWCZ/SJDR/TBRY'], resolve),
        },
        {
          path: 'YYGSBA',
          name: 'YYGSBA',
          meta:{title:['业务操作','涉外单位','演绎公司备案']},
          component: resolve => require(['@/components/YWCZ/SWDW/YYGSBA'], resolve),
        },
        {
          path: 'QYPWXXXF',
          name: 'QYPWXXXF',
          meta:{title:['业务操作','涉外单位','涉外企业批文信息下发']},
          component: resolve => require(['@/components/YWCZ/SWDW/QYPWXXXF'], resolve),
        },

        {
          path: 'ASJYBB',
          name: 'ASJYBB',
          meta:{title:['业务操作','案事件','涉外案事件月报表']},
          component: resolve => require(['@/components/YWCZ/ASJ/ASJYBB'], resolve),
        },
        {
          path: 'ASJTJBB',
          name: 'ASJTJBB',
          meta:{title:['业务操作','案事件','涉外案事件统计报表']},
          component: resolve => require(['@/components/YWCZ/ASJ/ASJTJBB'], resolve),
        },
        // 系统管理==========================================================================
        {
          path: 'YHGL',
          name: 'YHGL',
          meta:{title:['系统管理','用户权限','用户管理']},
          component: resolve => require(['@/components/XTGL/YHQX/YHGL'], resolve),
        },
        {
          path: 'XGMM',
          name: 'XGMM',
          meta:{title:['系统管理','用户权限','修改密码']},
          component: resolve => require(['@/components/XTGL/YHQX/XGMM'], resolve),
        },
        {
          path: 'JSGL',
          name: 'JSGL',
          meta:{title:['系统管理','用户权限','角色管理']},
          component: resolve => require(['@/components/XTGL/YHQX/JSGL'], resolve),
        },
        {
          path: 'GNSQ',
          name: 'GNSQ',
          meta:{title:['系统管理','用户权限','功能授权']},
          component: resolve => require(['@/components/XTGL/YHQX/GNSQ'], resolve),
        },
        {
          path: 'YHSQ',
          name: 'YHSQ',
          meta:{title:['系统管理','用户权限','用户授权']},
          component: resolve => require(['@/components/XTGL/YHQX/YHSQ'], resolve),
        },
        {
          path: 'PLSQ',
          name: 'PLSQ',
          meta:{title:['系统管理','用户权限','批量授权']},
          component: resolve => require(['@/components/XTGL/YHQX/PLSQ'], resolve),
        },
        {
          path: 'Login',
          name: 'Login',
          meta:{title:['用户登录']},
          component: resolve => require(['@/components/Login'], resolve),
        },
        {
          path: 'YHSZRZ',
          name: 'YHSZRZ',
          meta:{title:['系统管理','日志查看','用户操作日志']},
          component: resolve => require(['@/components/XTGL/RZCK/YHSZRZ'], resolve),
        },
        {
          path: 'TZSF',
          name: 'TZSF',
          meta:{title:['数据分析','图帧人像','图帧身份','图帧身份'],father:'RLSB'},
          component: resolve => require(['@/components/XTGL/RZCK/TZSF'], resolve),
        },
        {
          path: 'RLSB',
          name: 'RLSB',
          meta:{title:['数据分析','图帧人像','图帧身份','图帧身份']},
          component: resolve => require(['@/components/XTGL/RZCK/RLSB'], resolve),
        },
        {
          path: 'JWRYGJ',
          name: 'JWRYGJ',
          meta:{title:['数据分析','图帧人像','图帧身份','境外人员轨迹']},
          component: resolve => require(['@/components/XTGL/RZCK/JWRYGJ'], resolve),
        },

      ]
    },

  ]
})
