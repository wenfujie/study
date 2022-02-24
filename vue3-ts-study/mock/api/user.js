/*
 * @Date: 2022-02-14 10:55:04
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-24 16:44:56
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
            name: "lisi"
          }
        ],
        msg: "ok",
        code: 0
      };
    }
  }
];
