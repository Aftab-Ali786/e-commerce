import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../assets/Redux/Cart/cart.actions';
import  ShoppingIcon  from '../../assets/shopping-bag.svg'; // Ensure this import works
import './cart-icon.styles.scss';
import { Link } from 'react-router-dom'; // Import Link
const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total item count
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <Link>
      <img src={ShoppingIcon} alt="" />
      </Link>
      <span className='item-count'>{itemCount}</span>
      
    </div>
  );
};

export default CartIcon;