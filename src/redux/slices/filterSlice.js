import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'Best Sellers',
    sortProperty: 'rating',
  },
  // search : ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    // setSearch(state, action) {
    //   state.sort = action.payload
    // },
  },
})

export const { setCategoryId, setSort, setCurrentPage, setSearch } =
  filterSlice.actions

export default filterSlice.reducer
