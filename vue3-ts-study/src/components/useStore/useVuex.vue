<!--
 * @Date: 2022-02-24 21:50:07
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-24 22:45:52
 * @FilePath: /vue3-ts-study/src/components/useStore/useVuex.vue
-->

<template>
  <div>
    <h3>vuex state:</h3>
    <div>get:</div>
    <ul>
      <li>count=>{{ count }}</li>
      <li>productName=>{{ productName }}</li>
    </ul>

    <div>set: <button @click="add">add1</button> <button @click="addCart">add2</button></div>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "@/store";
import { useCartStore } from "@/store/cart";

const store = useStore();
const cartStore = useCartStore();
const add = () => store.commit("increment");
const addCart = () => cartStore.commit("increment");

const count = computed(() => store.state.count);
const productName = computed(() => cartStore.state.productName);
</script>
