
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useMenus } from './menus'
import { useQuickMenus } from './quickMenus'
export const useUser = defineStore('user', () => {
  const router = useRouter()
  const { resetSidebar } = useMenus()
  const { resetQuickMenus } = useQuickMenus()
  // 退出登录
  function logout() {
    localStorage.removeItem('login')
    localStorage.removeItem('quickMenus')
    resetSidebar()
    resetQuickMenus()
    router.replace('/login')
  }
  return { logout }
})