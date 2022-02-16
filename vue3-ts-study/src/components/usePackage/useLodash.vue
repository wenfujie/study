<!--
 * @Date: 2022-02-14 09:59:47
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-14 10:34:16
 * @FilePath: /vue3-ts-study/src/components/usePackage/useLodash.vue
 * @Describes: ts下使用第三方包，需安装【@types/lodash】，增加ts智能提示
-->
<template>
<div></div>
</template>
<script lang='ts' setup>
import _ from 'lodash'
// 使用 _. 时，会提示 lodash 下所有方法
console.log(_.concat([1,2], [3]));
</script>