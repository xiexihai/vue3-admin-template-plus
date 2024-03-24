<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router';
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
<style scoped lang="scss">
.g-breadcrumb {
  padding: 16px;
  flex: 1;
  overflow: hidden;
}

.g-tabs {
  --el-tabs-header-height: 32px;
}
.g-tabs :deep(.el-tabs__header) {
  border-bottom: none !important;
  margin-bottom: 1px;
}
.g-tabs :deep(.el-tabs__item) {
  border: 1px solid var(--el-color-primary-light-9);
  margin: 0 5px;
  border-radius: 2px;
  &.is-active {
    border-bottom-color: var(--el-color-primary-light-9);
  }
  &:first-child {
    border-left: 1px solid var(--el-color-primary-light-9);
  }
}
.g-tabs {
  :deep(.el-tabs__header .el-tabs__nav) {
    border: none !important;
  }
}
.g-tabs {
  :deep(.el-tabs__nav-prev),
  :deep(.el-tabs__nav-next) {
    height: 100%;
    display: flex;
    align-items: center;
    box-shadow: 0 0 10px rgba(0,21,41,.08);
  }
}
</style>

