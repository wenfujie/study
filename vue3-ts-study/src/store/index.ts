/*
 * @Date: 2022-02-24 21:34:32
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-24 22:26:33
 * @FilePath: /vue3-ts-study/src/store/index.ts
 */

/**
 * TODO: 
 * 1.改造store，使得创建新的js文件后，无需在手动引入main.ts
 * 2.
 */

import { InjectionKey } from "vue";
import { createStore, Store, useStore as indexStore } from "vuex";

// 为 store state 声明类型
export interface State {
  count: number;
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      // 变更状态
      state.count++;
    }
  }
});

export const useStore = () => indexStore(key);
