import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'

export const useQuickMenus = defineStore('quickMenus', () => {
  const localMenus = localStorage.getItem('quickMenus')
  const menus: RouteRecordRaw[] = reactive(localMenus ? JSON.parse(localMenus) : [])
  function addQuickMenus(obj: RouteRecordRaw) {
    const isHas = menus.some(item => item.name === obj.name)
    if(!isHas) {
      menus.push(obj)
    }
    localStorage.setItem('quickMenus', JSON.stringify(menus))
  }
  function delQuickMenus(index: number, menus: RouteRecordRaw[]) {
    menus.splice(index, 1)
    localStorage.setItem('quickMenus', JSON.stringify(menus))
    return menus
  }
  return { menus, addQuickMenus, delQuickMenus }
})