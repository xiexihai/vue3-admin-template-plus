import type { RouteRecordRaw } from 'vue-router';

/*
* 默认接口请求返回菜单信息
*/

// 超级管理员（全部菜单）
export const adminMenus: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'home',
    meta: {
      title: '控制台'
    },
    component: import('../views/main/MainView.vue'),
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      title: '系统管理',
    },
    children: [
      {
        path: '/system/user',
        name: 'systemUser',
        meta: {
          title: '用户管理',
        },
        component: () => import('../views/system/UserView.vue')
      },
      {
        path: '/system/menus',
        name: 'systemMenus',
        meta: {
          title: '菜单权限管理',
        },
        component: () => import('../views/system/MenusView.vue')
      },
      {
        path: '/system/role',
        name: 'systemRole',
        meta: {
          title: '角色权限管理',
        },
        component: () => import('../views/system/RoleView.vue')
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    meta: {
      title: '表单页面',
    },
    children: [
      {
        path: '/form/basic',
        name: 'formBasic',
        meta: {
          title: '基础表单',
        },
        component: () => import('../views/form/FormBasicView.vue')
      },
      {
        path: '/form/grade',
        name: 'formGrade',
        meta: {
          title: '高级表单',
        },
        component: () => import('../views/form/FormGradeView.vue')
      },
      {
        path: '/form/detail',
        name: 'formDetail',
        meta: {
          title: '表单详情',
        },
        component: () => import('../views/form/FormDetailView.vue')
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      title: '设置页面',
    },
    children: [
      {
        name: 'settingAccount',
        path: '/setting/account',
        meta: {
          title: '账户设置',
        },
        component: import('../views/setting/AccountView.vue')
      },
      {
        name: 'settingUser',
        path: '/setting/user',
        meta: {
          title: '个人设置',
        },
        component: import('../views/setting/UserView.vue')
      }
    ]
  }
]
// 普通管理员（部分菜单）
export const userMenus: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'home',
    meta: {
      title: '控制台'
    },
    component: import('../views/main/MainView.vue'),
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      title: '系统管理',
    },
    children: [
      {
        path: '/system/user',
        name: 'systemUser',
        meta: {
          title: '用户管理',
        },
        component: () => import('../views/system/UserView.vue')
      },
      {
        path: '/system/role',
        name: 'systemRole',
        meta: {
          title: '角色权限管理',
        },
        component: () => import('../views/system/RoleView.vue')
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    meta: {
      title: '表单页面',
    },
    children: [
      {
        path: '/form/basic',
        name: 'formBasic',
        meta: {
          title: '基础表单',
        },
        component: () => import('../views/form/FormBasicView.vue')
      },
      {
        path: '/form/detail',
        name: 'formDetail',
        meta: {
          title: '表单详情',
        },
        component: () => import('../views/form/FormDetailView.vue')
      }
    ]
  }
]
