/*
 * @Date: 2022-02-14 10:55:04
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-25 14:18:32
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
            name: "zhangsan",
            age: 26
          }
        ],
        msg: "ok",
        code: 0
      };
    }
  },
  {
    url: "/updateUser",
    type: "post",
    response: (_) => {
      return {
        data: [
          {
            id: "1",
            name: "lisi",
            age: 26
          }
        ],
        msg: "ok",
        code: 0
      };
    }
  }
];
