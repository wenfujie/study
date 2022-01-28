<!--
 * @Date: 2022-01-28 11:33:17
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-01-28 17:22:24
 * @FilePath: /vue3-study/src/views/study-jsx.vue
-->

<script>
import { onMounted } from 'vue'
// import { ref } from 'vue'
export default {
  emits: ['customEvent'],
  setup (props, { slots, emit }) {
    onMounted(() => {
      emit('customEvent')
    })
    /** v-if v-for */
    // const data = [{ id: 1, content: '静夜诗' }]
    // return () => {
    //   if (data.length) {
    //     const liVnode = data.map((item) => <li>{item.content}</li>)
    //     return <ul>{liVnode}</ul>
    //   } else {
    //     return <p>暂无数据</p>
    //   }
    // }

    /** css */
    // const isLoading = ref(true)
    // return () => (
    //   <div class={{ selected: isLoading.value }} style={{ color: 'red' }}>
    //     css
    //   </div>
    // )

    /** v-show */
    // const isShow = ref(true)
    // return () => <div v-show={isShow.value}>v-show</div>

    /** v-model */
    // const val = ref('hello')
    // return () => <input v-model={val} />
    // return () => <input v-model:argument={val} />

    /** 插槽 */
    // return () => (
    //   <div>
    //     <div>{slots.default() /* 默认插槽 */}</div>
    //     <div>{slots.title() /* 具名插槽 */}</div>
    //   </div>
    // )

    // // 使用
    // const slotObj = {
    //   default: () => <div>A</div>,
    //   title: () => <span>B</span>
    // }
    // return () => (
    //   <Demo v-slots={slotObj}>
    //     // 默认插槽亦可写在此处 <div>A</div>
    //   </Demo>
    // )

    /** 接收 emit */
    // emit('customEvent')
    const fn = () => {}
    return <demo onCustomEvent={fn}></demo>
  }
}
</script>
