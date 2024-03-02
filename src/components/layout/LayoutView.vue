<script setup lang="ts">
import AsideView from '../aside/AsideView.vue';
import HeaderView from '../header/HeaderView.vue';
import MainView from '@/views/main/MainView.vue';
</script>

<template>
  <div class="g-layout-wrapper">
    <div class="g-layout-aside">
      <AsideView />
    </div>
    <div class="g-layout-main">
      <HeaderView />

      <div class="g-layout-body">
        <MainView />
      </div>
    </div>
  </div>
</template>
<style scoped>
  .g-layout-wrapper {
    width: 100%;
    min-height: 100%;
    display: flex;
  }
  .g-layout-aside {
    width: 256px;
    box-shadow: 2px 0 8px 0 rgba(29,35,41,.05);
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #fff;
  }
  .g-layout-main {
    padding-left: 256px;
    flex: 1;
  }
  .g-layout-header {
    position: fixed;
    left: 256px;
    top: 0;
    right: 0;
    height: 64px;
    display: flex;
    align-items: center;
    background-color: #fff;
    z-index: 2622;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    transition: all .2s ease-in-out;
  }
  .g-layout-body {
    padding: 80px 16px 16px 16px;
  }
</style>