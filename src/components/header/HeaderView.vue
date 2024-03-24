<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Sunny, SwitchButton, Moon } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
import { useUser } from '@/stores/user';
import BreadcrumbView from './BreadcrumbView.vue';

const isDark = useDark()
const { logout } = useUser()
const toggleDark = useToggle(isDark)
const username = ref('')

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
      <span v-if="username">{{username}}</span>
      <el-tooltip
        content="切换夜间模式"
        placement="top-start"
      >
        <span class="g-dark" :class="{active: isDark}" @click="toggleDark()">
          <el-icon v-if="isDark"><Moon /></el-icon>
          <el-icon v-else><Sunny /></el-icon>
        </span>
      </el-tooltip>
      <span style="margin-left: 16px;" @click="logout()">
        <el-icon>
          <SwitchButton />
        </el-icon>
      </span>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .g-header-right {
    padding-right: 16px;
    display: flex;
    align-items: center;
  }
  .g-dark {
    margin-left: 10px;
    display: inline-flex;
    position: relative;
    align-items: center;
    min-width: 40px;
    height: 20px;
    padding: 2px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transition: all 0.3s;
    cursor: pointer;
    &.active {
      justify-content: flex-end;
      border-color: #4C4D4F;
      background-color: #2c2c2c;
      :deep(.el-icon) {
        color: #fff;
      }
    }
  }
</style>