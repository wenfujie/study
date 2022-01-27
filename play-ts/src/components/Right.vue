<!--
 * @Date: 2021-11-16 16:41:16
 * @LastEditors: wenfujie
 * @LastEditTime: 2021-11-17 09:55:04
 * @FilePath: /play-ts/src/components/Right.vue
-->
<template>
  <div class="main">
    {{ content }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { menuItem } from "@/types/common";

@Component
export default class Right extends Vue {
  content: string = "";

  mounted() {
    this.$EventBus.$on("clickItem", (item: menuItem) => {
      this.content = item.content;
    });
  }
}
</script>

<style scoped lang="scss">
.main {
  height: 100%;
}
</style>
