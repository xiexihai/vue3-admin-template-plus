import type { Directive, DirectiveBinding } from "vue"
import router from "@/router"
const permissions: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const route = router.currentRoute.value
    const meta = route.meta
    if (meta?.permissions && !!(meta?.permissions as string[]) .length) {
      const permissions = route.meta.permissions as string[]
      console.log(permissions, binding.value)
      if (!permissions.includes(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
}
export default permissions