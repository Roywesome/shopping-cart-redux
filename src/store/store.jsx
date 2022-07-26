import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "../features/shopping/ShoppingSlice";

const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});

export default store;
