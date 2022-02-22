<!--
 * @Date: 2022-02-14 12:02:19
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-22 18:00:35
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
let list = ref<Domains.ListItem[]>([]);

onMounted(async () => {
  const { data } = await getUser({});
  list.value = data;
});
</script>
