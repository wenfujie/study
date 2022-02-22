<!--
 * @Date: 2022-02-12 11:33:53
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-22 10:11:37
 * @FilePath: /vue3-ts-study/README.md
-->
- [项目介绍](#项目介绍)
- [工程搭建问题](#工程搭建问题)
- [提升效率的包](#提升效率的包)
  - [vue-global-api](#vue-global-api)


## 项目介绍

该项目为 vue3 + ts 开发模板工程，主要介绍搭建过程需注意问题。

若对 `ts` 不熟悉可先[前往学习ts](https://github.com/wenfujie/study/tree/main/play-ts)。

若对 `vue3` 不熟悉可先[前往学习vue3](https://github.com/wenfujie/document-library/blob/master/articles/Vue/Vue3%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B.md)

## 工程搭建问题
- [如何请求接口](src/components/useApi/useApi.vue)
- [为第三方包添加属性方法提示](src/components/usePackage/useLodash.vue)

## 提升效率的包

### vue-global-api

安装 `vue-global-api` 后，会全局导入 ref、computed 等 Api，无需逐个在文件中引入。

```bash
npm i vue-global-api -S
```

```js
// src/main.ts
import 'vue-global-api'
```
