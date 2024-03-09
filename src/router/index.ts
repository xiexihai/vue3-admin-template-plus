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
const NotFoundView = () => import('@/views/main/NotFoundView.vue') 
import { adminMenus } from '@/apis/mock';
import { getUserMenus } from '@/apis';
import { useMenus } from '@/stores/menus';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: LayoutView,
    redirect: '/dashboard',
    meta: {
      title: '控制台'
    },
    children: adminMenus
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
      // children: [
        // {
        //   path: '/404',
        //   name: 'NotFound',
        //   component: NotFoundView
        // }
      // ]
      children: flatMenus(routes)
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

router.beforeEach((to, form, next) => {
  const { setSidebar} = useMenus()
  const loginInfo = localStorage.getItem('login')
  if (!loginInfo && to.name !== 'login') {
    next({
      name: 'login'
    })
  }else {
    if (loginInfo) {
     getUserMenus(JSON.parse(loginInfo).username).then(res => {
        router.addRoute({
          path: '/',
          name: 'home',
          component: LayoutView,
          redirect: '/dashboard',
          meta: {
            title: '控制台'
          },
          children: res
        })
        setSidebar(res)
        if (!to.name) {
          router.push('/404')
          next()
        } else {
          next({
            ...to,
            replace: true
          })
        }
      })
    }
  }
  next()
})

export default router
