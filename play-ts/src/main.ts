/*
 * @Date: 2021-11-15 17:24:11
 * @LastEditors: wenfujie
 * @LastEditTime: 2021-11-17 11:06:58
 * @FilePath: /play-ts/src/main.ts
 */
import Vue from "vue";
import App from "./App.vue";

Vue.prototype.$EventBus = new Vue();
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
