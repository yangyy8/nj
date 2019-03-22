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
    component:resolve => require(['@/components/index'], resolve),
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
          meta:{title:['预警研判','预警','临住预警','临住布控预警']},
          component: resolve => require(['@/components/YJYP/YJ/LZYJ/LZBKYJ'], resolve),
        },
        {
          path: 'YJCLXQ',
          name: 'YJCLXQ',
          meta:{title:['预警研判','预警','临住预警','预警详情']},
          component: resolve => require(['@/components/YJYP/YJ/LZYJ/YJCLXQ'], resolve),
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
          meta:{title:['预警研判','预警','留学生预警','教育厅招生预警、审核']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/JYTZSYJ-XQ'], resolve),
        },
        {
          path: 'LXSWBDYJ',
          name: 'LXSWBDYJ',
          meta:{title:['预警研判','预警','留学生预警','留学生录取未报到预警']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSWBDYJ'], resolve),
        },
        {
          path: 'LXSXXGLYJ',
          name: 'LXSXXGLYJ',
          meta:{title:['预警研判','预警','留学生预警','留学生信息管理预警']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/LXSXXGLYJ'], resolve),
        },
        {
        path: "StuWarning",
        name: "StuWarning",
        component: resolve => require(['@/components/YJYP/YJ/LXSYJ/StuWarning'], resolve),
        },
        {
        path: "StuBaseInfo",
        name: "StuBaseInfo",
        component: resolve => require(['@/components/YJYP/YJ/LXSYJ/StuBaseInfo'], resolve),
        },
        {
          path: 'ZXSTFZLYJ',
          name: 'ZXSTFZLYJ',
          meta:{title:['预警研判','预警','留学生预警','在校学生突发增量预警']},
          component: resolve => require(['@/components/YJYP/YJ/LXSYJ/ZXSTFZLYJ'], resolve),
        },
        {
          path: 'DQQZFFJYYJ',
          name: 'DQQZFFJYYJ',
          meta:{title:['预警研判','预警','案事件预警','持短期签证非法就业预警']},
          component: resolve => require(['@/components/YJYP/YJ/ASJYJ/DQQZFFJYYJ'], resolve),
        },
        {
          path: 'WGRFFJLYJ',
          name: 'WGRFFJLYJ',
          meta:{title:['预警研判','预警','案事件预警','外国人非法居留visa预警']},
          component: resolve => require(['@/components/YJYP/YJ/ASJYJ/WGRFFJLYJ'], resolve),
        },
        {
          path: 'WLYPYJ',
          name: 'WLYPYJ',
          meta:{title:['预警研判','预警','案事件预警','违临预判预警']},
          component: resolve => require(['@/components/YJYP/YJ/ASJYJ/WLYPYJ'], resolve),
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
          path: 'LXSSJFX',
          name: 'LXSSJFX',
          meta:{title:['预警研判','研判','留学生研判','留学生散居社会面分析']},
          component: resolve => require(['@/components/YJYP/YP/LXSYP/LXSSJFX'], resolve),
        },
        {
          path: 'LZXXZHFX',
          name: 'LZXXZHFX',
          meta:{title:['预警研判','研判','临住研判','临住信息综合分析']},
          component: resolve => require(['@/components/YJYP/YP/LZYP/LZXXZHFX'], resolve),
        },
        // 业务操作=====================================================================
        {
          path: 'CRJJLHC',
          name: 'CRJJLHC',
          meta:{title:['业务操作','临住信息','出入境记录核查']},
          component: resolve => require(['@/components/YWCZ/LZXX/CRJJLHC'], resolve),
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
          path: 'YHGL',
          name: 'YHGL',
          meta:{title:['系统管理','用户权限','用户管理']},
          component: resolve => require(['@/components/XTGL/YHQX/YHGL'], resolve),
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
          path: 'Login',
          name: 'Login',
          meta:{title:['用户登录']},
          component: resolve => require(['@/components/Login'], resolve),
        },

      ]
    },

  ]
})
