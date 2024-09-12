
import { createSlice } from "@reduxjs/toolkit";

// Define the initial items array directly here
const initialItems = [
  {
    img: "https://sibirkoleso.ru/local/templates/sk/src/images/no_photo.gif",
    title: "Mefro ",
    type: "ВАЗ-2103 Черный 60.1",
    size: " 5.0x13 / 4x98 / 29",
    id: 1,
    inCart: false,
    price: 170,
  },
  {
    img: "https://sibirkoleso.ru/local/templates/sk/src/images/no_photo.gif",
    title: "ТЗСК",
    type: "Снежная королева 58.6",
    size: " 5.5x14 / 4x98 / 35",
    id: 2,
    inCart: false,
    price: 17230,
  },
  {
    img: "https://sibirkoleso.ru/local/templates/sk/src/images/no_photo.gif",
    title: "Mefro ",
    type: "ВАЗ-2103 Черный 60.1",
    size: " 5.0x13 / 4x98 / 29",
    id: 3,
    inCart: false,
    price: 2093,
  },
  {
    img: "https://sibirkoleso.ru/local/templates/sk/src/images/no_photo.gif",
    title: "Arfon ",
    type: "ВАЗ-2103 Черный 60.1",
    size: " 5.0x13 / 4x98 / 29",
    id: 4,
    inCart: false,
    price: 190,
  },
  {
    img: "https://sibirkoleso.ru/local/templates/sk/src/images/no_photo.gif",
    title: "Grof ",
    type: "ВАЗ-2103 Черный 60.1",
    size: " 5.0x13 / 4x98 / 29",
    id: 5,
    inCart: false,
    price: 1230,
  },
];

// Create the Redux slice
export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    modal: false,
    items: initialItems, // Reference the initial items directly
    selected: initialItems.filter((e) => e.inCart).length, // Fix typo and calculate selected items
  },
  reducers: {
    changeModal: (state, { payload }) => {
      state.modal = payload;
    },

    SetCartt: (state, { payload }) => {
      const updatedItems = state.items.map((e) =>
        e.id === payload ? { ...e, inCart: true } : e
      );
      state.selected += 1;
      state.items = updatedItems;
    },

    RemoveCart: (state, { payload }) => {
      const updatedItems = state.items.map((e) =>
        e.id === payload ? { ...e, inCart: false } : e
      );
      state.selected -= 1;
      state.items = updatedItems;
    },
  },
});

// Export the actions and reducer
export const { changeModal, SetCartt, RemoveCart } = CartSlice.actions;
export default CartSlice.reducer;
