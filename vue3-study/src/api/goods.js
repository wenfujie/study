/*
 * @Date: 2022-01-28 09:44:21
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-01-28 09:45:00
 * @FilePath: /vue3-study/src/api/goods.js
 */
import http from '@/hooks/useRequest.js'

const getGoods = () => http.get('/getGoods')

export { getGoods }
