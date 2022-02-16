/*
 * @Date: 2022-02-14 10:55:57
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-14 10:57:09
 * @FilePath: /vue3-ts-study/vue.config.ts
 */

module.exports = {
  devServer: {
    after: require("./mock/mock-server.js")
  }
};
