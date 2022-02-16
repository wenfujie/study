<!--
 * @Date: 2022-02-12 11:33:45
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-14 13:46:39
 * @FilePath: /vue3-ts-study/src/App.vue
-->
<template>
  <SetupCom />
  <TsCom />
  <UseApi />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SetupCom from "./components/SetupCom.vue";
import TsCom from "./components/TsCom.vue";
import UseApi from "@/components/useApi/useApi.vue";

export default defineComponent({
  name: "App",
  components: {
    SetupCom,
    TsCom,
    UseApi
  }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
