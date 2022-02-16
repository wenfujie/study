<!--
 * @Date: 2022-02-12 11:33:45
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-12 11:46:45
 * @FilePath: /vue3-ts-study/src/components/HelloWorld.vue
-->
<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let msg = ref("msg value");
</script>