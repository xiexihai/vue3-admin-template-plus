<script lang="ts" setup>
import { Sunny } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
import BreadcrumbView from './BreadcrumbView.vue';

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
  <div class="g-layout-header">
    <BreadcrumbView />
    <div class="g-header-right" @click="toggleDark()">
      <el-tooltip
        content="切换夜间模式"
        placement="top-start"
      >
        <el-icon><Sunny /></el-icon>
      </el-tooltip>
    </div>
  </div>
</template>
<style scoped>
  .g-header-right {
    padding-right: 16px;
  }
</style>