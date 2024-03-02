<script setup lang="ts">
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>控制台</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-2">菜单权限管理</el-menu-item>
        <el-menu-item index="1-3">角色权限管理</el-menu-item>
        <el-menu-item index="1-4">基础表单</el-menu-item>
        <el-menu-item index="1-4-1">基础列表</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>搜索页面</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>详情页面</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>结果页面</template>
    </el-menu-item>
    <el-sub-menu index="5">
      <template #title>
        <el-icon><location /></el-icon>
        <span>设置页面</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="5-1">系统设置</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped></style>