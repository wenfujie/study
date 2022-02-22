<!--
 * @Date: 2022-02-22 10:51:58
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-02-22 17:25:07
 * @FilePath: /vue3-ts-study/src/components/howToWrite/vue3AndTsWrite.vue
-->
<template>
  <div>
    <div>
      <h3>data</h3>
      <ul>
        <li>string: {{ str }}</li>
        <li>number: {{ num }}</li>
        <li>
          <h4>object</h4>

          <span>name:</span>
          <input type="text" v-model="form.userName" />
          <span>password:</span>
          <input type="text" v-model="form.password" />

          <div>form: {{ JSON.stringify(form) }}</div>
        </li>
      </ul>
    </div>
    <div>
      <h3>$refs</h3>
      子组件：<Child ref="child" />
    </div>
  </div>
</template>

<!-- 需同时使用 option api  -->
<script lang="ts">
export default {
  name: "test"
};
</script>

<script lang="ts" setup>
import { PropType } from "vue";
import type { exposeType } from "./child";
/** use 子组件 */
import Child from "./child.vue";

/** data */
const str = ref<string>("string data");
const num = ref<number>(666);
const form = reactive<Domains.LoginForm>({} as Domains.LoginForm);

/** computed */
const filterUser = computed<Domains.LoginForm>(() => {
  return { userName: "wfj", password: "wfj" };
});

/** watch */
watch(
  () => form,
  (obj, preObj) => {
    console.log(obj.userName, "--");
  },
  { deep: true }
);

/** defineProps */
// 写法一
const props = defineProps({
  foo: {
    type: Object as PropType<Domains.LoginForm>,
    default: () => {}
  }
});
console.log(props.foo, "----foo----");

// 写法二 （仅限类型，无默认值）
// const props = defineProps<{
//   foo: Domains.LoginForm
//   bar?: Number
// }>()

/** $refs语法 */
const child = ref<exposeType>({} as exposeType);
nextTick(() => {
  child.value.showDialog();
});

/** defineEmits */
const emit = defineEmits<{
  (e: "change", id?: number ): void;
}>();
emit("change", 123);
</script>
