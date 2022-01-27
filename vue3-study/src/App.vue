<!--
 * @Date: 2022-01-21 16:09:17
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-01-27 11:44:13
 * @FilePath: /vue3-study/src/App.vue
-->
<template>
  <div class="main">123</div>
</template>

<script>
import { provide, ref, computed } from 'vue'
import articles from '@/config/articles.js'
import { useLocalStorage } from '@vueuse/core'

export default {
  name: 'App',
  components: {},
  setup () {
    useLocalStorage('my-store', { hello: 'hi', greeting: 'Hello' })
    const activeIdx = ref(0)
    const activeItem = computed(() => articles[activeIdx.value] || {})

    provide('articles', articles)
    provide('activeIdx', activeIdx)
    provide('activeItem', activeItem)
    provide('updateActiveIdx', (val) => {
      activeIdx.value = val
    })
  }
}
</script>

<style lang="less">
body,
html {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  display: flex;
}
</style>
