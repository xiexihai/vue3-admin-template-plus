<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>
<template>
  <div class="g-breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>控制台</el-breadcrumb-item>
      <el-breadcrumb-item>基础表单</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<style scoped>
.g-breadcrumb {
  padding: 16px;
  flex: 1;
}
</style>

