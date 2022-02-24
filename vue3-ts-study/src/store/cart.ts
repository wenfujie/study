/*
 * @Date: 2022-02-24 21:34:32
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-24 22:44:37
 * @FilePath: /vue3-ts-study/src/store/cart.ts
 */

import { InjectionKey } from "vue";
import { createStore, Store, useStore } from "vuex";

// 为 store state 声明类型
export interface State {
  productName: string;
}

// 定义 injection key
export const cartKey: InjectionKey<Store<State>> = Symbol();

export const cartStore = createStore<State>({
  state: {
    productName: "三里云卢一套"
  },
  mutations: {
    increment(state) {
      // 变更状态
      state.productName += 1;
    }
  }
});

export const useCartStore = () => useStore(cartKey);
