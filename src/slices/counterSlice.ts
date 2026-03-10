import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 3,
  },
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

console.log(counterSlice.reducer);
console.log(counterSlice.actions);

export const { increase, decrease } = counterSlice.actions;
