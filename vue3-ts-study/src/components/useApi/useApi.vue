<!--
 * @Date: 2022-02-14 12:02:19
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-24 17:46:22
 * @FilePath: /vue3-ts-study/src/components/useApi/useApi.vue
-->
<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { getUser, updateUser } from "@/api";

// 使用 ts 全局类型 【src/typings/domain.d.ts】
let list = ref<Domains.Users>([]);

const callback = (res: Domains.Users) => {
  list.value = res;
};

getUser().then((res) => callback(res));

setTimeout(() => {
  updateUser().then((res) => callback(res));
},2000);
</script>
