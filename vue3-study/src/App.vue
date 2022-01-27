<!--
 * @Date: 2022-01-21 16:09:17
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-01-26 17:38:06
 * @FilePath: /vue3-study/src/App.vue
-->
<template>
  <div class="main">
    <Left></Left>
    <Right ref="dom"></Right>
  </div>
</template>

<script>
import { provide, ref, computed, onMounted } from 'vue'
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import articles from '@/config/articles.js'
import { useLocalStorage } from '@vueuse/core'

export default {
  name: 'App',
  components: {
    Left,
    Right
  },
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
    const dom = ref(null)
    onMounted(() => {
      console.log(dom.value.store.hello, '---')
    })
    return { dom }
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
