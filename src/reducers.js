import { createReducer, createAction } from "@reduxjs/toolkit";

const increment = createAction("increment");
const decrement = createAction("decrement");
const incrementByValue = createAction("incrementByValue");
const initialState = {
  c: 998,
};

//  DEPRECIATED FROM THE NEWER VERSION
// export const customReducer = createReducer(initialState, {
//   increment: (state, action) => (state.c = state.c + 1),
//   incrementByValue: (state, action) => (state.c = state.c + action.payload),
//   decrement: (state, action) => (state.c = state.c - 1),
// });

export const customReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.c = state.c + 1;
    })
    .addCase(decrement, (state, action) => {
      state.c = state.c - 1;
    })
    .addCase(incrementByValue, (state, action) => {
      state.c = state.c + action.payload;
    })
    .addDefaultCase((state, action) => {
      state.c++;
    });
});
