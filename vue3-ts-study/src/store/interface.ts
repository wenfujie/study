/*
 * @Date: 2022-02-25 14:44:31
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-25 15:10:53
 * @FilePath: /vue3-ts-study/src/store/interface.ts
 */

import { UserState } from "./modules/user/interface";
import { CartState } from "./modules/cart/interface";

export interface RootState {}

// 集成所有子模块状态
export interface AllState extends RootState {
  user: UserState;
  cart: CartState;
}
