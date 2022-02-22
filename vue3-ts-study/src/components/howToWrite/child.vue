<!--
 * @Date: 2022-02-22 13:41:55
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-22 18:36:42
 * @FilePath: /vue3-ts-study/src/components/howToWrite/child.vue
-->
<template>
  <span>form: {{ JSON.stringify(form) }}</span>
</template>
<script lang="ts" setup>
import type { exposeType } from "./child";

defineExpose<exposeType>({
  showDialog() {
    console.log("----触发弹窗显示----");
  },
  closeDialog() {
    console.log("----触发弹窗关闭----");
  }
});

const form = inject<Domains.LoginForm>("form");
</script>
