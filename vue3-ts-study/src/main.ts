/*
 * @Date: 2022-02-12 11:33:45
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-24 22:32:45
 * @FilePath: /vue3-ts-study/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
// 全局导入 ref、computed 等 Api
import 'vue-global-api'
import { store, key } from './store'
import { cartStore, cartKey } from '@/store/cart'

const app = createApp(App)

// 传入 injection key
app.use(store, key)
app.use(cartStore, cartKey)

app.mount('#app')
