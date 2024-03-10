<script setup lang="ts">
import Logo from '@/assets/images/logo.png'
</script>

<template>
  <div class="g-logo">
    <img :src="Logo" width="36px" style="margin-right: 12px;" />
    <h1>后台管理系统</h1>
  </div>
</template>
<style scoped>
  .g-logo {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--el-color-primary-light-9);
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }
  .g-logo h1 {
    font-weight: 500;
    font-size: 24px;
  }
</style>