<script setup>
import { RouterView } from "vue-router";
import { ElConfigProvider } from "element-plus";
import locale from "element-plus/lib/locale/lang/zh-cn";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <el-config-provider :z-index="3000" size="small" :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped></style>
