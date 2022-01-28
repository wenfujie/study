/*
 * @Date: 2022-01-27 14:28:23
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-01-27 14:34:26
 * @FilePath: /vue3-study/vue.config.js
 */

module.exports = {
  devServer: {
    after: require('./mock/mock-server.js')
  }
}
