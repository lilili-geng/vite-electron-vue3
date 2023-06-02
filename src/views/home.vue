<template>
  <div>
    <el-button @click="testCilck">点击爬取</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import { crawler } from "../api/http";
const testCilck = () => {
  crawler();
};
</script>

<style scoped></style>
