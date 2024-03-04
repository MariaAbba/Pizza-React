import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
   setItems(state, action){
    state.items = action.payload.items
   }
  },
})

export const {  setItems} = pizzaSlice.actions

export default pizzaSlice.reducer
