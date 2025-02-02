// src/Redux/root.reducer.js

import { combineReducers } from 'redux';
import userReducer from './Users/user.reduser';
import cartReducer from './Cart/cart.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
