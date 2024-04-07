import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzaStatus',
  async (params) => {
    const { order, search, currentPage, categoryId, sortType } = params
    const { data } = await axios.get(
      `https://65bcb01fb51f9b29e9320d4c.mockapi.io/items?&page=${currentPage}&limit=6&${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.replace('-', '')}&order=${order}${search}`
    )
    return data
  }
)

const initialState = {
  items: [], // Initial state for items
  status: '', // loading | success | error
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'loading'
        state.items = [] // Initialize or clear the items array during pending state
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = 'success'
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.status = 'error'
        state.items = [] // Clear the items array on rejection
      })
  },
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
