/*
* 模拟接口请求返回菜单信息
*/
export type IMenuItem = {
  path: string, // 路由跳转路径
  name: string, // 路由名称
  meta: { // 路由额外信息
    title: string, // 菜单名称
    [x: string]: string | number
  },
  component: string, // 路由对应的组件地址，前端通过该地址做映射
  children?: IMenuItem[] // IMenuItem
}

// 超级管理员（全部菜单）
export const adminMenus: IMenuItem[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      title: '控制台'
    },
    component: 'views/main/MainView'
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      title: '系统管理'
    },
    component: 'views/system',
    children: [
      {
        path: '/system/user',
        name: 'systemUser',
        meta: {
          title: '用户管理'
        },
        component: 'views/system/UserView'
      },
      {
        path: '/system/menus',
        name: 'systemMenus',
        meta: {
          title: '菜单权限管理'
        },
        component: 'views/system/MenusView'
      },
      {
        path: '/system/role',
        name: 'systemRole',
        meta: {
          title: '角色权限管理'
        },
        component: 'views/system/RoleView'
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    meta: {
      title: '表单页面',
    },
    component: 'views/form',
    children: [
      {
        path: '/form/basic',
        name: 'formBasic',
        meta: {
          title: '基础表单',
        },
        component: 'views/form/FormBasicView'
      },
      {
        path: '/form/grade',
        name: 'formGrade',
        meta: {
          title: '高级表单',
        },
        component: 'views/form/FormGradeView'
      },
      {
        path: '/form/detail',
        name: 'formDetail',
        meta: {
          title: '表单详情',
        },
        component: 'views/form/FormDetailView'
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      title: '设置页面',
    },
    component: 'views/setting',
    children: [
      {
        name: 'settingAccount',
        path: '/setting/account',
        meta: {
          title: '账户设置',
        },
        component: 'views/setting/AccountView'
      },
      {
        name: 'settingUser',
        path: '/setting/user',
        meta: {
          title: '个人设置',
        },
        component: 'views/setting/UserView'
      }
    ]
  }
]
// 普通管理员（部分菜单）
export const userMenus: IMenuItem[] = [
  {
    path: '/dashboard',
    name: 'home',
    meta: {
      title: '控制台'
    },
    component: 'views/main/MainView',
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      title: '系统管理',
    },
    component: 'views/system',
    children: [
      // {
      //   path: '/system/user',
      //   name: 'systemUser',
      //   meta: {
      //     title: '用户管理',
      //   },
      //   component: 'views/system/UserView'
      // },
      {
        path: '/system/role',
        name: 'systemRole',
        meta: {
          title: '角色权限管理',
        },
        component: 'views/system/RoleView'
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    meta: {
      title: '表单页面',
    },
    component: 'views/form',
    children: [
      {
        path: '/form/basic',
        name: 'formBasic',
        meta: {
          title: '基础表单',
        },
        component: 'views/form/FormBasicView'
      },
      {
        path: '/form/detail',
        name: 'formDetail',
        meta: {
          title: '表单详情',
        },
        component: 'views/form/FormDetailView'
      }
    ]
  }
]
