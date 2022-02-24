<!--
 * @Date: 2022-02-12 11:33:45
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-24 22:48:00
 * @FilePath: /vue3-ts-study/src/App.vue
-->
<template>
  <UseApi />
  <vue3AndTsWrite
    :foo="{ userName: 'wfj', password: 'wfj' }"
    @change="change"
  />
  <useVuex />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UseApi from "@/components/useApi/useApi.vue";
import vue3AndTsWrite from "@/components/howToWrite/vue3AndTsWrite.vue";
import useVuex from "@/components/useStore/useVuex.vue";

export default defineComponent({
  name: "App",
  components: {
    UseApi,
    vue3AndTsWrite,
    useVuex
  },
  methods: {
    change(id?: number) {
      console.log(id, "----id----");
    }
  },
  created() {
    /** TODO:
     * 过滤一遍支付项目
     */
  }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
