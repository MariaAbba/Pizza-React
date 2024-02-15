import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sort: {
    name: 'Best Sellers',
    sortProperty: 'rating',
  },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log(action)
state.categoryId = action.payload
    },
  },
})

export const {setCategoryId} = filterSlice.actions;

export default filterSlice.reducer;


