import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IMenuItem } from '@/apis/mock'

export const useQuickMenus = defineStore('quickMenus', () => {
  const localMenus = localStorage.getItem('quickMenus')
  const menus: IMenuItem[] = reactive(localMenus ? JSON.parse(localMenus) : [])
  function addQuickMenus(obj: IMenuItem) {
    const isHas = menus.some(item => item.name === obj.name)
    if(!isHas) {
      menus.push(obj)
    }
    localStorage.setItem('quickMenus', JSON.stringify(menus))
  }
  function delQuickMenus(index: number, menus: IMenuItem[]) {
    menus.splice(index, 1)
    localStorage.setItem('quickMenus', JSON.stringify(menus))
    return menus
  }
  function resetQuickMenus() {
    menus.length = 0
  }
  return { menus, addQuickMenus, delQuickMenus, resetQuickMenus }
})