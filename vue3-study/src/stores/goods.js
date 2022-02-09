/*
 * @Date: 2022-01-28 17:51:09
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-01-28 17:59:00
 * @FilePath: /vue3-study/src/stores/goods.js
 */
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 0
    }
  }
})
