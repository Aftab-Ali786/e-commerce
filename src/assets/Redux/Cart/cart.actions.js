import CartActionTypes from "./cart.types";

// Action to toggle cart visibility
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

// Action to add an item to the cart
export const additem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

// Action to clear an item from the cart
export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

// Action to remove an item from the cart
export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});