<!--
 * @Date: 2022-02-22 13:41:55
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-22 16:34:21
 * @FilePath: /vue3-ts-study/src/components/howToWrite/child.vue
-->
<template>
  <span>子组件内容</span>
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
</script>
