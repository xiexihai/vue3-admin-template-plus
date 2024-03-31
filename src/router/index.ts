import { createRouter, createWebHashHistory } from 'vue-router'
// import type { RouteRecordRaw } from 'vue-router';
// import {
//   Setting,
//   Odometer,
//   Discount,
//   Aim
// } from '@element-plus/icons-vue'
import LayoutView from '@/components/layout/LayoutView.vue';
const LoginView = () => import('@/views/login/LoginView.vue') 
const NotFoundView = () => import('@/views/main/NotFoundView.vue') 
import { getUserMenus } from '@/apis';
import { useMenus } from '@/stores/menus';
import { type IMenuItem } from '@/apis/mock';

/* @function 平铺菜单
* @params { menus } array
* @return { result } array
*/
export function flatMenus(menus: IMenuItem[]) {
  const result: IMenuItem[] = []
  const flatChildren = (rows: IMenuItem[]) => {
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
      children: []
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFoundView
    }
  ]
})

router.beforeEach((to, form, next) => {
  const { sidebar, setSidebar} = useMenus()
  const loginInfo = localStorage.getItem('login')
  if (!loginInfo && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    if (loginInfo) {
     if (sidebar.menus.length) {
      next()
     } else {
        const username = JSON.parse(loginInfo).username
        getUserMenus(username).then(res => {
          flatMenus(res).forEach(item => {
            const obj = {
              name: item.name,
              path: item.path,
              meta: item.meta,
              component: () => import(`@/${item.component}.vue`)
            }
            if(item.name && !router.hasRoute(item.name))router.addRoute('home', obj)
          })
          console.log('res=>', res)
          setSidebar(res)
          next({...to, replace: true})
        })
      }
    } else {
      next()
    }
  }
})

export default router
