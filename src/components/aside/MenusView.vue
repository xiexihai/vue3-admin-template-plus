<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { IMenuItem } from '@/apis/mock'
import {
  Setting,
  Odometer,
  // Discount,
  // Aim
} from '@element-plus/icons-vue'
// import { routes } from '@/router';
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
  console.log('sss', val)
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
        <el-icon><Odometer /></el-icon>
        <template #title>{{item.meta?.title}}</template>
      </el-menu-item>
      <el-sub-menu v-else :key="item.name" :index="item.path">
        <template #title>
          <el-icon><Setting /></el-icon>
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
    <!-- <el-menu-item index="1" @click="handleRouterLink('/')">
      <el-icon><Odometer /></el-icon>
      <template #title>控制台</template>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1" @click="handleRouterLink('/system/user')">用户管理</el-menu-item>
        <el-menu-item index="2-2" @click="handleRouterLink('/system/menus')">菜单权限管理</el-menu-item>
        <el-menu-item index="2-3" @click="handleRouterLink('/system/role')">角色权限管理</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><Discount /></el-icon>
        <span>表单页面</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1" @click="handleRouterLink('/form/basic')">基础表单</el-menu-item>
        <el-menu-item index="3-2" @click="handleRouterLink('/form/grade')">高级表单</el-menu-item>
        <el-menu-item index="3-3" @click="handleRouterLink('/form/detail')">表单详情</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>
        <el-icon><Aim /></el-icon>
        <span>设置页面</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1" @click="handleRouterLink('/setting/user')">个人设置</el-menu-item>
        <el-menu-item index="4-2" @click="handleRouterLink('/setting/account')">账户设置</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu> -->
  </el-menu>
</template>

<style scoped>
.g-aside-menus /deep/ .el-menu-item-group__title {
  padding: 0;
}
.g-aside-menus {
  border-right: none;
}
</style>