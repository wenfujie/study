/*
 * @Date: 2022-02-14 10:42:21
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-22 14:41:23
 * @FilePath: /vue3-ts-study/src/typings/domain.d.ts
 * @Describes: 全局接口
 */

declare namespace Domains {
  type LoginForm = { userName: string; password: string };
  interface ListItem {
    id: string;
    name: string;
    age: number;
  }
}
