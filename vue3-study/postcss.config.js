/*
 * @Date: 2022-01-26 14:05:54
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-01-26 14:05:54
 * @FilePath: /vue3-study/postcss.config.js
 */

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // Vant 官方根字体大小是 37.5
      propList: ['*'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    }
  }
}
