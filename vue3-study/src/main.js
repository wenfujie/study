/*
 * @Date: 2022-01-21 16:09:17
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-01-29 09:42:35
 * @FilePath: /vue3-study/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import stores from '@/stores'

const app = createApp(App)
app.use(stores).mount('#app')
