/*
 * @Date: 2021-11-15 17:24:11
 * @LastEditors: wenfujie
 * @LastEditTime: 2021-11-17 10:03:04
 * @FilePath: /play-ts/src/shims-vue.d.ts
 */
import Vue from "vue";

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue/types/vue" {
  // 声明为 Vue 补充的东西
  interface Vue {
    $EventBus: any;
  }
}
