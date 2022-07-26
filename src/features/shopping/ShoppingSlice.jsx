import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../db";


const Store = () => {
  let data;
  if(localStorage.getItem('cartItems')){
    data = JSON.parse(localStorage.getItem('cartItems'));
  }else{
    data = []
  }
  return data;
}

export const ShoppingSlice = createSlice({
  name: "shopping",
  initialState: {
    products,
    cartItems: Store(),
    checkout: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const selectedProduct = state.products.find(
        (product) => product.id === action.payload
      );
      const productInCart = state.cartItems.find(
        (cartItem) => cartItem.id === selectedProduct.id
      );

      return productInCart
        ? {
            ...state,
            cartItems: state.cartItems.map((cartItem) =>
              cartItem.id === selectedProduct.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ),
          }
        : {
            ...state,
            cartItems: [
              ...state.cartItems,
              { ...selectedProduct, quantity: 1 },
            ],
          };
    },
    decrease: (state, action) => {
      const removeProduct = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload
      );
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === removeProduct.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
      };
    },
    removeItem: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload)
      }
    },
    clear: (state) => {
      return {
        ...state,
        cartItems: []
      }
    },
    checkout: (state) => {
      return {
        ...state,
        cartItems: [],
        checkout: true
      }
    },
  },
});

export const { addToCart, removeItem, decrease, checkout, clear } =
  ShoppingSlice.actions;

export default ShoppingSlice.reducer;
