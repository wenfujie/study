/*
 * @Date: 2022-02-14 10:42:21
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-24 17:06:12
 * @FilePath: /vue3-ts-study/src/typings/domain.d.ts
 * @Describes: 全局接口
 */

declare namespace Domains {
  // 用户数据
  interface ListItem {
    id: string;
    name: string;
    age: number;
  }

  // 登入表单
  type LoginForm = { userName: string; password: string };
  // 用户列表
  type Users = Domains.ListItem[]
}
