<!--
 * @Date: 2021-11-15 17:24:11
 * @LastEditors: wenfujie
 * @LastEditTime: 2021-11-17 11:11:42
 * @FilePath: /play-ts/src/components/HelloWorld.vue
-->
<template>
  <div class="hello">
    <div @click="handleEnable">修改值</div>
    <div>isEnable = {{ isEnable }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

// @Component 表示这个是vue类，不能缺省
@Component
export default class HelloWorld extends Vue {
  // props
  @Prop() private msg!: string;

  // data
  isEnable: boolean = false;

  // computed
  get getCount(): number {
    return 1 + 1;
  }

  created() {
    console.log("生命周期 created");
  }

  // methods
  handleEnable() {
    this.isEnable = !this.isEnable;
  }

  // watch
  @Watch("isEnable")
  onIsEnableChange(boo: boolean) {
    console.log(`监听isEnable变化事件，值为${this.isEnable}`);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
