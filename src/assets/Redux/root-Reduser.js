// src/assets/Redux/root-Reducer.js
import { combineReducers } from "redux";
import userReducer from "./Users/user.reduser"; // Example reducer
import cartReducer from "./Cart/cart.reducer"; // Example reducer
import directoryReduser from "./directory/directory.reduser";
import shopReducer from "./shop/shop.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReduser,
  shop:shopReducer
});

export default rootReducer;