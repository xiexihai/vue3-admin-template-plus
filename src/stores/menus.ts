import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
interface ISidebar {
  menus: RouteRecordRaw[]
}
export const useMenus = defineStore('menus', () => {

  const sidebar: ISidebar = reactive({
    menus: []
  })
  function setSidebar(data: RouteRecordRaw[]) {
    sidebar.menus = data
  }
  function resetSidebar() {
    sidebar.menus = []
  }
  return { sidebar, setSidebar, resetSidebar }
})