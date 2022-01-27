<!--
 * @Date: 2021-11-16 16:41:16
 * @LastEditors: wenfujie
 * @LastEditTime: 2021-11-17 11:05:08
 * @FilePath: /play-ts/src/components/Left.vue
-->
<template>
  <div class="main">
    <ul>
      <li v-for="item in menus" :key="item.id" @click="handleClickItem(item)">
        {{ item.name }}
        <button @click.stop="handleDelete(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { menuItem, menuStateType } from "@/types/common";

@Component
export default class Left extends Vue {
  menuState: menuStateType = "default";
  menus: menuItem[] = [];

  handleClickItem(item: menuItem) {
    this.$EventBus.$emit("clickItem", item);
  }

  handleDelete(id: number) {
    const targetIndex = this.menus.findIndex((item) => item.id === id);
    if (targetIndex > -1) {
      this.menus.splice(targetIndex, 1);
    }
  }

  created() {
    this.menus = [
      {
        id: 1,
        name: "滕王阁序",
        content: "鹅鹅鹅，曲项向天歌",
      },
      {
        id: 2,
        name: "咏鹅",
        content: "老夫聊发少年狂",
      },
    ];
  }
}
</script>

<style scoped lang="scss">
li {
  list-style-type: none;
}
.main {
  width: 300px;
  height: 100%;
}
</style>
