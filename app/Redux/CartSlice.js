"use client";
import { createSlice } from "@reduxjs/toolkit";
import { items } from "../wheels/page";

export const CartSlice = createSlice({
  name: "counter",
  initialState: {
    modal: false,
    items: items,
    slected: items.filter((e) => e.inCart).length,
  },
  reducers: {
    changeModal: (state, { payload }) => {
      state.modal = payload;
    },

    SetCartt: (state, { payload }) => {
      const pureData = state.items.map((e) =>
        e.id == payload ? { ...e, inCart: true } : e
      );
      state.slected = state.slected + 1;
      state.items = pureData;
    },
    RemoveCart: (state, { payload }) => {
      const pureData = state.items.map((e) =>
        e.id == payload ? { ...e, inCart: false } : e
      );
      state.slected = state.slected - 1;
      state.items = pureData;
    },
  },
});

// Export the actions and reducer
export const { changeModal, SetCartt, RemoveCart } = CartSlice.actions;
export default CartSlice.reducer;
