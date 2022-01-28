/*
 * @Date: 2022-01-27 17:07:52
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-01-27 17:27:54
 * @FilePath: /vue3-study/src/hooks/useRequest.js
 */
import axios from 'axios'

const http = axios.create({
  timeout: 15000
})

http.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err)
)

http.interceptors.response.use(
  (res) => Promise.resolve(res.data.data),
  (err) => Promise.reject(err)
)

export default http
