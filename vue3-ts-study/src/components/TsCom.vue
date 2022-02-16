<!--
 * @Date: 2022-02-12 11:57:57
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-15 18:02:58
 * @FilePath: /vue3-ts-study/src/components/TsCom.vue
-->
<template>
  <p v-if="currSize === size.big">big</p>
  <p v-else-if="currSize === size.small">small</p>
  <p v-else>normal</p>
  <button @click="onclickSwitch">切换</button>
</template>
<script lang="ts" setup>
import { stringifyStyle } from '@vue/shared';


/** 枚举测试 */
enum size {
  big,
  normal,
  small
}

let currSize = ref(size.big);
const onclickSwitch = () => {
  currSize.value = size.small;
};

/** 高级类型 */

/** 类型索引 keyof */
interface A {
  a: string,
  b: number
}
// 等效于 'a' | 'b'
type customType = keyof A
let param: customType = 'a'

/** 
 * 类型约束 extends
 * 注意：一般在泛型中使用
 */

type BaseType = string | number

function getParam<T extends BaseType>(param: T): T {
  return param
}

getParam(1) // 1
// getParam(true) // error

/** 工具泛型 */
type Person = {
  id: string;
  age: number;
  name: string;
}

// Exclude 与 Extract

/** Partial 与 Required */
// Partial 用于将一个接口的所有属性设置为可选状态
// 同理，Required则是将所有属性改为必须

// 等价{ id?:string, age?:number, name?:string }
type NewPerson = Partial<Person>

/** Pick 与 Omit */
// Pick 主要用于提取接口的某几个属性
// 同理，Omit 用于剔除部分属性

// 等价 {id: string, age: number }
type NewPickPerson = Pick<Person, 'id' | 'age' >

</script>
