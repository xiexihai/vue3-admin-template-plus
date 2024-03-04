import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
// import {
//   Setting,
//   Odometer,
//   Discount,
//   Aim
// } from '@element-plus/icons-vue'
import LayoutView from '@/components/layout/LayoutView.vue';
const LoginView = () => import('@/views/login/LoginView.vue') 
import settingRoutes from './setting'
// import { useMenus } from '@/stores/menus';
// const {addMenus} = useMenus()
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: LayoutView,
    redirect: '/dashboard',
    meta: {
      title: '控制台'
    },
    children: [
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
        children: settingRoutes
      },
    ]
  },
]
/* @function 平铺菜单
* @params { menus } array
* @return { result } array
*/
export function flatMenus(menus: RouteRecordRaw[]) {
  const result: RouteRecordRaw[] = []
  const flatChildren = (rows: RouteRecordRaw[]) => {
    rows.forEach((item) => {
      if(item.children) {
        flatChildren(item.children)
      } else {
        result.push(item)
      }
    })
  }
  flatChildren(menus)
  return result
}
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  // 由于部署到github，history模式刷新404问题，所以暂时使用hash模式
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayoutView,
      redirect: '/dashboard',
      meta: {
        title: '控制台'
      },
      children: flatMenus(routes)
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})


export default router
