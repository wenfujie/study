/*
 * @Author: cheesekun
 * @Date: 2021-04-07 14:18:29
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-14 12:00:26
 * @FilePath: /vue3-ts-study/src/utils/request.ts
 */
import axios from 'axios'

axios.defaults.timeout = 15000
axios.defaults.baseURL = ''

axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    return Promise.reject(err)
  }
)

export default axios
