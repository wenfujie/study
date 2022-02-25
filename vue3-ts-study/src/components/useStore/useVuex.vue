<!--
 * @Date: 2022-02-24 21:50:07
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-25 14:57:09
 * @FilePath: /vue3-ts-study/src/components/useStore/useVuex.vue
-->

<template>
  <div>
    <h3>vuex state:</h3>
    <div>get:</div>
    <ul>
      <li>
        楼盘：{{ cart.productName }} {{cart.num}} 套
        </li>
        <li>
          购买者：{{user.userInfo.name}}
        </li>
    </ul>

    <div>
      set:
      <button @click="add">add</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "@/store";

const store = useStore();
const add = () => store.commit("cart/increment");
const cart = computed(() => store.state.cart);
const user = computed(() => store.state.user);

// 通过 vuex action 拉取用户信息
store.dispatch('user/getUser')
</script>
