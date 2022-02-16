<!--
 * @Date: 2022-02-14 12:02:19
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-14 13:48:42
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
import { onMounted } from "vue";
import { getUser } from "@/api";

// 使用 ts 全局类型 【src/typings/domain.d.ts】
let list: Domains.ListItem[] = reactive([]);

onMounted(async () => {
  const { data } = await getUser({});
  list = data;
});
</script>
