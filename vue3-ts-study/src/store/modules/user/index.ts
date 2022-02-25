/*
 * @Date: 2022-02-25 11:12:01
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-25 15:04:11
 * @FilePath: /vue3-ts-study/src/store/modules/user/index.ts
 */
import { getUser } from "@/api/index";
import { Module } from "vuex";
import { RootState } from "@/store/interface";
import { UserState } from "./interface";

const userModule: Module<UserState, RootState> = {
  namespaced: true, // 是否独立命名空间
  state() {
    return {
      userInfo: {} as Domains.ListItem
    };
  },
  mutations: {
    updateUser(state, user: Domains.ListItem) {
      state.userInfo = user;
    }
  },
  actions: {
    getUser({ state, commit, rootState }) {
      getUser().then((res) => {
        commit("updateUser", res[0]);
      });
    }
  }
};

export default userModule;
