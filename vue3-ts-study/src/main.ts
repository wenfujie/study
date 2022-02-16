/*
 * @Date: 2022-02-12 11:33:45
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-14 10:07:03
 * @FilePath: /vue3-ts-study/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
// 全局导入 ref、computed 等 Api
import 'vue-global-api'

createApp(App).mount('#app')
