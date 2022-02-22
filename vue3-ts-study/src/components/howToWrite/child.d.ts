/*
 * @Date: 2022-02-22 15:16:26
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-22 15:20:21
 * @FilePath: /vue3-ts-study/src/components/howToWrite/vue3ApiChild.d.ts
 */

// 定义 vue3ApiChild.vue 中 defineExpose 类型
export interface exposeType {
  showDialog: Function;
  closeDialog: Function;
}