<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Sunny, SwitchButton } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
import { useRouter } from 'vue-router';
import BreadcrumbView from './BreadcrumbView.vue';
const router = useRouter()
const isDark = useDark()
const toggleDark = useToggle(isDark)
const username = ref('')

const handleLogout = () => {
  localStorage.removeItem('login')
  localStorage.removeItem('menus')
  router.replace('/login')
}

onMounted(() => {
  const loginInfo = localStorage.getItem('login')
  if (loginInfo && JSON.parse(loginInfo)) {
    username.value = JSON.parse(loginInfo).username
  }
})
</script>
<template>
  <div class="g-layout-header">
    <BreadcrumbView />
    <div class="g-header-right">
      <span v-if="username">欢迎,{{username}}</span>
      <el-tooltip
        content="切换夜间模式"
        placement="top-start"
      >
        <span @click="toggleDark()">
          <el-icon><Sunny /></el-icon>
        </span>
      </el-tooltip>
      <span style="margin-left: 16px;" @click="handleLogout()">
        <el-icon>
          <SwitchButton />
        </el-icon>
      </span>
    </div>
  </div>
</template>
<style scoped>
  .g-header-right {
    padding-right: 16px;
    display: flex;
    align-items: center;
  }
</style>