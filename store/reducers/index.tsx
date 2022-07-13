import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
const reducers = combineReducers({
  allProducts: productReducer,
  cart: cartReducer,
});
export default reducers;
