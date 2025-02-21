// src/assets/Redux/root-Reducer.js
import { combineReducers } from "redux";
import userReducer from "./Users/user.reduser"; // Example reducer
import cartReducer from "./Cart/cart.reducer"; // Example reducer

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;