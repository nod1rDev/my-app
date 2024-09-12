import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import CartSlice from "./Redux/CartSlice";

// Create the Redux store
export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

// Define RootState and AppDispatch
// RootState va AppDispatch turini TypeScriptda aniqlashdan voz kechish kerak
// chunki JavaScriptda tur aniq belgilanmagan

// Create a typed version of useDispatch and useSelector
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
