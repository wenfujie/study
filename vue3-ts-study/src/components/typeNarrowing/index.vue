<!--
 * @Date: 2022-02-15 14:56:10
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-15 15:11:58
 * @FilePath: /vue3-ts-study/src/components/typeNarrowing/index.vue
 * @Describes: 类型缩窄的几种形式
-->
<template>
  <div></div>
</template>
<script lang="ts" setup>
/**
 * TODO: 一、as 类型断言
 */

/**
 * 二、类型守卫
    typeof：用于判断 number，string，boolean或 symbol 四种类型；
    instanceof：用于判断一个实例是否属于某个类
    in：用于判断一个属性/方法是否属于某个对象
 */

// instanceof
class Man {
  handsome = true;
}
class Woman {
  beautiful = true;
}
function human(person: Man | Woman) {
  // console.log(person.handsome); // 报错

  if (person instanceof Man) {
    console.log(person.handsome);
  } else if (person instanceof Woman) {
    console.log(person.beautiful);
  }
}

// in
interface A {
  a: string;
}
interface B {
  b: string;
}
function foo(x: A | B) {
  if ("a" in x) {
    return x.a
  }
  return x.b
}
</script>
