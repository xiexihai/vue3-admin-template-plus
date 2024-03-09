<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue'
import { useQuickMenus } from '../../stores/quickMenus'
const { menus, delQuickMenus } = useQuickMenus()
const route = useRoute()
const router = useRouter()

const curMenu = ref(route.path || '')

const handleChangeTab = (url: string) => {
  router.push(url)
  curMenu.value = url
}
const handleRemoveTab = (url: string) => {
  const curIndex = menus.findIndex(item => item.path === url)
  delQuickMenus(curIndex, menus)
  if (curMenu.value === url && menus.length) {
    console.log('ss')
    const prevPath = menus[menus.length - 1]?.path
    console.log(prevPath)
    curMenu.value = prevPath
    router.push(prevPath)
  } else if (menus.length === 0) {
    router.push(menus[0]?.path)
  }
  
}

watch(() => route.path, (val) => {
  console.log(val)
  curMenu.value = val
})

</script>
<template>
  <div class="g-breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight" class="g-breadcrumb-list">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>控制台</el-breadcrumb-item>
      <el-breadcrumb-item>基础表单</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs
      type="card"
      class="g-tabs"
      size="small"
      v-model="curMenu"
      :closable="menus.length > 1"
      @tab-change="handleChangeTab"
      @tab-remove="handleRemoveTab"
    >
      <el-tab-pane
        v-for="item in menus"
        :key="item.name"
        :label="item.meta?.title"
        :name="item.path"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped>
.g-breadcrumb {
  padding: 16px;
  flex: 1;
}
.g-breadcrumb-list {
  margin-top: -22px;
}
.g-tabs {
  --el-tabs-header-height: 32px;
  position: absolute;
  bottom: 0;
}
.g-tabs /deep/ .el-tabs__header {
  border-bottom: none !important;
  margin-bottom: 1px;
}
.g-tabs /deep/ .el-tabs__item {
  border-bottom: none;
}
</style>

