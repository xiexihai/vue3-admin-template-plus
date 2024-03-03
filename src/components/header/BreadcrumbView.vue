<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue'
import { useQuickMenus } from '../../stores/quickMenus'
const { menus } = useQuickMenus()
const router = useRouter()
console.log(menus)

const handleTab = (url: string) => {
  console.log(url)
  router.push(url)
}
</script>
<template>
  <div class="g-breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>控制台</el-breadcrumb-item>
      <el-breadcrumb-item>基础表单</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <el-tabs
    type="card"
    class="demo-tabs"
    closable
    @tab-change="handleTab"
  >
    <el-tab-pane
      v-for="item in menus"
      :key="item.name"
      :label="item.meta?.title"
      :name="item.path"
    >
    </el-tab-pane>
  </el-tabs>
</template>
<style scoped>
.g-breadcrumb {
  padding: 16px;
  flex: 1;
}
</style>

