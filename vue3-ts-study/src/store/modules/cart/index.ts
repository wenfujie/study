/*
 * @Date: 2022-02-24 21:34:32
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-25 15:04:59
 * @FilePath: /vue3-ts-study/src/store/modules/cart/index.ts
 */

import { CartState } from "./interface";
import { Module } from "vuex";
import { RootState } from "@/store/interface";

const CartModule: Module<CartState, RootState> = {
  namespaced: true, // 是否独立命名空间
  state() {
    return {
      productName: "建发·三里云卢",
      num: 1
    };
  },
  mutations: {
    increment(state) {
      state.num += 1
    }
  }
};

export default CartModule
