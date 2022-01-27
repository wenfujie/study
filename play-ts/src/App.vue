<!--
 * @Date: 2021-11-15 17:24:11
 * @LastEditors: wenfujie
 * @LastEditTime: 2021-11-17 09:53:12
 * @FilePath: /play-ts/src/App.vue
-->
<template>
  <div id="app">
    <div class="main-cont">
      <Left />
      <Right class="main-cont__right"/>
    </div>

    <!-- <HelloWorld/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from './components/HelloWorld.vue';
import Left from "./components/Left.vue";
import Right from "./components/Right.vue";

@Component({
  components: {
    // HelloWorld,
    Left,
    Right,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
*{
  margin: 0;
}
html,body,#app,.main-cont{
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.main-cont {
  display: flex;
  .main-cont__right{
    flex: 1;
  }

}
</style>
