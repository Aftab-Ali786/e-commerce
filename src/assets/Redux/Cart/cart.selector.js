import {createSelector} from 'reselect'


const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    cart=>cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCart],
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem)=>
                accumalatedQuantity+cartItem.quantity,
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity * cartItem.price,
            0
        )
);