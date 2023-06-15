import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getItems = createAsyncThunk("items/fetchItems", () => {
  return fetch('https://fakestoreapi.com/products')
  .then((response) => {
    response.json()
  })
})

const initialState = [
]

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducer: {
    addItems: (state, action) => {
      return state.push(action.payload)
    }
  }
  // extraReducers: {
  //   [getItems.pending]: (state, action) => {
  //     state.loading = true;
  //     console.log(state)
  //   },
  //   [getItems.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.posts = action.payload
  //   },
  //   [getItems.rejected]: (state, action) => {
  //     state.loading = false;
  //   },

  // }
})

// Action creators are generated for each case reducer function
export const { addItems } = itemsSlice.actions

export default itemsSlice.reducer