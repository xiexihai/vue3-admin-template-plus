<script setup lang="ts">

</script>

<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content">1</div></el-col>
      <el-col :span="6"><div class="grid-content">2</div></el-col>
      <el-col :span="6"><div class="grid-content">3</div></el-col>
      <el-col :span="6"><div class="grid-content">4</div></el-col>
    </el-row>
    <el-row :gutter="20" class="group">
      <el-col :span="8"><div class="grid-content">1</div></el-col>
      <el-col :span="8"><div class="grid-content">2</div></el-col>
      <el-col :span="8"><div class="grid-content">3</div></el-col>
    </el-row>
    <el-row :gutter="20" class="group">
      <el-col :span="12"><div class="grid-content">1</div></el-col>
      <el-col :span="12"><div class="grid-content">2</div></el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.grid-content {
  height: 100px;
  background-color: #fff;
}
.group {
  margin-top: 20px;
  .grid-content {
    height: 300px;
  }
}
</style>
