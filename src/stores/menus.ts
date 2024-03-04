import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import router from '@/router'

export const useMenus = defineStore('menus', () => {

  const localMenus = localStorage.getItem('menus')

  const menus = ref<RouteRecordRaw[]>(localMenus? JSON.parse(localMenus) : [])
  function addMenus(data: RouteRecordRaw[]) {
    // router.addRoute('home',{
    //   path: '/',
    //   name: 'home',
    //   component: import('@/components/layout/LayoutView.vue'),
    //   redirect: '/dashboard',
    //   meta: {
    //     title: '控制台'
    //   },
    //   children: flatMenus(data)
    // })
    console.log(router.getRoutes())
    localStorage.setItem('menus', JSON.stringify(data))
    menus.value = data
  }
  return { menus, addMenus }
})