<!--
 * @Date: 2022-02-12 11:33:45
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-23 14:03:20
 * @FilePath: /vue3-ts-study/src/App.vue
-->
<template>
  <UseApi />
  <vue3AndTsWrite
    :foo="{ userName: 'wfj', password: 'wfj' }"
    @change="change"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UseApi from "@/components/useApi/useApi.vue";
import vue3AndTsWrite from "@/components/howToWrite/vue3AndTsWrite.vue";

export default defineComponent({
  name: "App",
  components: {
    UseApi,
    vue3AndTsWrite
  },
  methods: {
    change(id?: number) {
      console.log(id, "----id----");
    }
  },
  created() {
    /** TODO: 
     * 使用pinia
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
