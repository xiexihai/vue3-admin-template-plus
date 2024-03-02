import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/main/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/system',
      name: 'system',
      children: [
        {
          path: '/system/user',
          name: 'systemUser',
          component: () => import('../views/system/UserView.vue')
        },
        {
          path: '/system/menus',
          name: 'systemMenus',
          component: () => import('../views/system/MenusView.vue')
        },
        {
          path: '/system/role',
          name: 'systemRole',
          component: () => import('../views/system/RoleView.vue')
        }
      ]
    },
    {
      path: '/form',
      name: 'form',
      children: [
        {
          path: '/form/basic',
          name: 'formBasic',
          component: () => import('../views/form/FormBasicView.vue')
        },
        {
          path: '/form/grade',
          name: 'formGrade',
          component: () => import('../views/form/FormGradeView.vue')
        },
        {
          path: '/form/detail',
          name: 'formDetail',
          component: () => import('../views/form/FormDetailView.vue')
        }
      ]
    },
    {
      path: '/setting',
      name: 'setting',
      children: [
        {
          path: '/setting/user',
          name: 'settingUser',
          component: () => import('../views/setting/UserView.vue')
        },
        {
          path: '/setting/account',
          name: 'settingAccount',
          component: () => import('../views/setting/AccountView.vue')
        }
      ]
    }
  ]
})

export default router
