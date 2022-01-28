/*
 * @Date: 2022-01-28 11:00:40
 * @LastEditors: wenfujie
 * @LastEditTime: 2022-01-28 11:18:48
 * @FilePath: /vue3-study/src/App.js
 */
import { ref } from 'vue'
import { getGoods } from '@/api/goods.js'

const goods = ref([])
const actIndex = ref(-1)

const goodsDom = () => {
  return goods.value.map((item, index) => (
    <li
      key={item.id}
      onClick={() => clickGoodItem(item, index)}
      class={[{ selected: actIndex.value === index }]}
    >
      {item.name}
      |||{actIndex.value},{index}
    </li>
  ))
}

const clickGoodItem = (item, index) => {
  actIndex.value = index
}
const getGood = async () => {
  goods.value = await getGoods()
}

export { goodsDom, clickGoodItem, getGood }
