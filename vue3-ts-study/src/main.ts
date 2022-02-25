/*
 * @Date: 2022-02-12 11:33:45
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-25 10:40:12
 * @FilePath: /vue3-ts-study/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
// 全局导入 ref、computed 等 Api
import 'vue-global-api'
import { store, key } from './store'

const app = createApp(App)

// 传入 injection key
app.use(store, key)

app.mount('#app')
