<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { IMenuItem } from '@/apis/mock'
import { useQuickMenus } from '@/stores/quickMenus';
import { useMenus } from '@/stores/menus';
const { addQuickMenus } = useQuickMenus()
const { sidebar } = useMenus()
const router = useRouter()
const route = useRoute()
const isCollapse = ref(false)

const menus = ref(sidebar.menus || [])

const defaultActive = ref(route.path || '/') // 默认选中的菜单

const handleRouterLink = (obj: IMenuItem) => {
  addQuickMenus(obj)
  router.push(obj.path)
}
// 监听路由变化，设置默认选中菜单
watch(() => route.path, (val) => {
  defaultActive.value = val
})

watch(() => sidebar.menus, (val) => {
  menus.value = val
})
console.log('sidebar', sidebar.menus)
</script>

<template>
  <el-menu
    class="g-aside-menus"
    :default-active="defaultActive"
    :collapse="isCollapse"
    :unique-opened="true"
  >
    <template v-for="item in menus" :key="item.name">
      <el-menu-item v-if="!item.children" :index="item.path" @click="handleRouterLink(item)">
        <el-icon>
          <component :is="item.meta?.icons"></component>
        </el-icon>
        <template #title>{{item.meta?.title}}</template>
      </el-menu-item>
      <el-sub-menu v-else :key="item.name" :index="item.path">
        <template #title>
          <el-icon><component :is="item.meta?.icons"></component></el-icon>
          <span>{{item.meta?.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="menu in item.children"
            :index="menu.path"
            :key="menu.name"
            @click="handleRouterLink(menu)"
          >
            {{menu.meta?.title}}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<style scoped>
.g-aside-menus :deep(.el-menu-item-group__title) {
  padding: 0;
}
.g-aside-menus {
  border-right: none;
}
</style>