import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    name: 'a',
}]

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {}
})

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions

export default counterSlice.reducer