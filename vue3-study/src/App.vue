<!--
 * @Date: 2022-01-21 16:09:17
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-01-29 09:51:35
 * @FilePath: /vue3-study/src/App.vue
-->

<script>
import { goodsDom, getGood } from '@/App.js'
import StudyJsx from '@/views/study-jsx.vue'
import { useStore } from '@/stores/goods'

export default {
  components: { StudyJsx },
  setup () {
    const store = useStore()
    const add = () => store.count++

    getGood()

    return () => (
      <>
        <div>合计的值：{store.count}</div>
        <button onClick={add}>相加</button>
        <ul>{goodsDom()}</ul>
      </>
    )
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
body,
html {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main {
  display: flex;
}
.selected {
  color: burlywood;
}
</style>
