/*
 * @Date: 2022-02-14 11:01:23
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-14 11:59:55
 * @FilePath: /vue3-ts-study/src/api/index.ts
 */

import http from '@/utils/request'
export const getUser = (data: any) => http.get('/getUser', data)
