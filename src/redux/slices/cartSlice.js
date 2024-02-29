import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: [],
}

const findItem = findItemById(state.items, action.payload.id)
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload)

      if (findItem.count > 1) {
        findItem.count--
        state.totalPrice -= findItem.price * findItem.count
      }
    },

    removeItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload)

      state.items = state.items.filter((obj) => obj.id !== action.payload)
      state.totalPrice -= findItem.price * findItem.count
    },

    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions

export default cartSlice.reducer
