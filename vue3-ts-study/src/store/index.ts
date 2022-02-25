/*
 * @Date: 2022-02-24 21:34:32
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-25 15:03:56
 * @FilePath: /vue3-ts-study/src/store/index.ts
 */

import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import cart from "@/store/modules/cart";
import user from "@/store/modules/user";
import { AllState, RootState } from "./interface";

// 定义 injection key
export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  modules: {
    cart,
    user
  }
});

export const useStore = <T = AllState>() => baseUseStore<T>(key);
