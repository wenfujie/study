<!--
 * @Date: 2022-01-21 16:09:17
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-01-28 17:08:47
 * @FilePath: /vue3-study/src/App.vue
-->

<script>
import { goodsDom, getGood } from '@/App.js'
import StudyJsx from '@/views/study-jsx.vue'

export default {
  components: { StudyJsx },
  setup () {
    getGood()
    const fn = () => {
      console.log(11)
    }
    return () => (
      <>
        <ul>{goodsDom()}</ul>
        <StudyJsx onCustomEvent={fn} />
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
