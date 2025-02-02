import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../assets/Redux/Cart/cart.actions';
import ShoppingIcon from '../../assets/shopping-bag.svg'; // Ensure this path is correct
import './cart-icon.styles.scss';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total item count
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <img src={ShoppingIcon} alt="Shopping Cart" className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

export default CartIcon;