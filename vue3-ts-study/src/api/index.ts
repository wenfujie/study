/*
 * @Date: 2022-02-14 11:01:23
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-24 17:03:25
 * @FilePath: /vue3-ts-study/src/api/index.ts
 */

import http from "@/utils/request";

export const getUser = () => http.get<Domains.Users>("/getUser");
export const updateUser = () => http.post<Domains.Users>("/updateUser");
