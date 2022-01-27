/*
 * @Date: 2021-11-16 17:34:46
 * @LastEditors: wenfujie
 * @LastEditTime: 2021-11-17 10:58:36
 * @FilePath: /play-ts/src/types/common.ts
 */

interface menuItem {
  id: number;
  name: string;
  content: string;
}

type menuStateType = "default" | "selected" | "hover";

export { menuItem, menuStateType };
