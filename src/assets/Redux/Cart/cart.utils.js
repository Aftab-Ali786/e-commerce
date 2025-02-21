export const addItemToCart =(cartItems , cartItemToAdd)=>{
    const existingCartItem = cartItems.find(
        cartItem=> cartItem.id ===cartItemToAdd.id
    );

    if(existingCartItem){
        return cartItems.map(cartItem=> cartItem.id === cartItemToAdd.id
            ?{...cartItem,quantity:cartItem.quantity+1}
            :cartItem
        )
    }
    return[...cartItems ,{...cartItemToAdd, quantity:1}]
} 

export const removeItemFromTheCart = (cartItems, cartItemToRemove) => {
    // Find the item to remove
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    // If the item doesn't exist, return the original cart items
    if (!existingCartItem) {
      return cartItems;
    }
  
    // If the item's quantity is 1, remove it from the cart
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
  
    // If the item's quantity is greater than 1, decrement the quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 } // Decrement quantity
        : cartItem // Leave other items unchanged
    );
  };