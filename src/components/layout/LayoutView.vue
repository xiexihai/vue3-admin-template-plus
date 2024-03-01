<script setup lang="ts">
</script>

<template>
  <div class="layout-wrapper">
    <div class="layout-header">header</div>
    <div class="layout-body">
      <div class="layout-aside">aside</div>
      <div class="layout-main">main</div>
    </div>
  </div>
</template>
<style scoped>
  .layout-wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .layout-header {
    height: 50px;
    background-color: #aaa
  }
  .layout-body {
    flex: 1;
    display: flex;
  }
  .layout-aside {
    width: 200px;
    background-color: #bbb;
  }
  .layout-main {
    flex: 1;
    background-color: #ccc;
  }
</style>