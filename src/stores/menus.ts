import { reactive } from 'vue'
import { defineStore } from 'pinia'
// import type { RouteRecordRaw } from 'vue-router'
import type { IMenuItem } from '@/apis/mock'
interface ISidebar {
  menus: IMenuItem[]
}
export const useMenus = defineStore('menus', () => {

  const sidebar: ISidebar = reactive({
    menus: []
  })
  function setSidebar(data: IMenuItem[]) {
    sidebar.menus = data
  }
  function resetSidebar() {
    sidebar.menus = []
  }
  return { sidebar, setSidebar, resetSidebar }
})