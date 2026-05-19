<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  calculateExpenseTotal,
  normalizeExpenseAmountInput,
} from './utils/expenseAmount.js'

type ExpenseRow = {
  id: number
  expenseItem: string
  expenseAmount: string
}

const rows = ref<ExpenseRow[]>([
  { id: 1, expenseItem: '', expenseAmount: '' },
  { id: 2, expenseItem: '', expenseAmount: '' },
  { id: 3, expenseItem: '', expenseAmount: '' },
])

const totalAmount = computed(() =>
  calculateExpenseTotal(rows.value.map((row) => row.expenseAmount)),
)

const displayAmount = computed(() => totalAmount.value.toFixed(2))

function updateExpenseItem(id: number, value: string) {
  const row = rows.value.find((entry) => entry.id === id)
  if (!row) {
    return
  }
  row.expenseItem = value
}

function updateExpenseAmount(id: number, rawValue: string) {
  const row = rows.value.find((entry) => entry.id === id)
  if (!row) {
    return
  }
  row.expenseAmount = normalizeExpenseAmountInput(rawValue)
}

function addRow() {
  rows.value.push({
    id: rows.value.length > 0 ? rows.value[rows.value.length - 1].id + 1 : 1,
    expenseItem: '',
    expenseAmount: '',
  })
}
</script>

<template>
  <main class="expense-page">
    <section class="expense-card">
      <header class="expense-header">
        <p class="eyebrow">Expense Console</p>
        <h1>花销统计页面</h1>
        <p class="summary">录入花销项和金额，系统会实时计算下方总金额 amount。</p>
      </header>

      <div class="table-wrap">
        <table class="expense-table">
          <thead>
            <tr>
              <th scope="col">花销项</th>
              <th scope="col">花销金额</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.id">
              <td>
                <input
                  :value="row.expenseItem"
                  type="text"
                  placeholder="例如：午餐、交通费"
                  @input="
                    updateExpenseItem(
                      row.id,
                      ($event.target as HTMLInputElement).value,
                    )
                  "
                />
              </td>
              <td>
                <input
                  :value="row.expenseAmount"
                  type="text"
                  inputmode="decimal"
                  placeholder="0.00"
                  @input="
                    updateExpenseAmount(
                      row.id,
                      ($event.target as HTMLInputElement).value,
                    )
                  "
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="footer-bar">
        <button type="button" class="ghost-btn" @click="addRow">新增一行</button>
        <p class="total">总金额：<strong>{{ displayAmount }}</strong></p>
      </div>
    </section>
  </main>
</template>
