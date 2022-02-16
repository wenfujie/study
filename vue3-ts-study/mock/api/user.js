/*
 * @Date: 2022-02-14 10:55:04
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-14 11:15:06
 * @FilePath: /vue3-ts-study/mock/api/user.js
 */
module.exports = [
  {
    url: "/getUser",
    type: "get",
    response: (_) => {
      return {
        data: [
          {
            id: "1",
            name: "zhangsan"
          }
        ],
        msg: "ok",
        state: 0
      };
    }
  }
];
