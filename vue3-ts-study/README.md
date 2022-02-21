<!--
 * @Date: 2022-02-12 11:33:53
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-21 17:11:26
 * @FilePath: /vue3-ts-study/README.md
-->
# vue3-ts-study

vue3 + ts 工程模板，主要介绍搭建过程需注意问题。

## 问题
- [如何请求接口](src/components/useApi/useApi.vue)
- [为第三方包添加属性方法提示](src/components/usePackage/useLodash.vue)

### 提升效率的包

**vue-global-api**

安装 `vue-global-api` 后，会全局导入 ref、computed 等 Api，无需逐个在文件中引入。