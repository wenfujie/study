/*
 * @Date: 2022-01-27 14:07:50
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-01-28 10:05:04
 * @FilePath: /vue3-study/mock/api/good.js
 */

module.exports = [
  // user login
  {
    url: '/getGoods',
    type: 'get',
    response: (_) => {
      return {
        data: [
          {
            id: 1,
            name: '外星人电脑',
            img: ''
          },
          {
            id: 1,
            name: '豪宅一套',
            img: ''
          }
        ],
        msg: 'ok',
        state: 0
      }
    }
  }
]
