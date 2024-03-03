import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'

export const useQuickMenus = defineStore('quickMenus', () => {
  const menus: RouteRecordRaw[] = reactive([])
  function addQuickMenus(obj: RouteRecordRaw) {
    const isHas = menus.some(item => item.name === obj.name)
    if(!isHas) {
      menus.push(obj)
    }
  }
  return { menus, addQuickMenus }
})