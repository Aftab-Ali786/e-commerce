import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../assets/Redux/Cart/cart.actions';
import ShoppingIcon from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Safer calculation with optional chaining
  const itemCount = cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())} role="button" tabIndex={0}>
      <img src={ShoppingIcon} alt="Shopping Cart" className='shopping-icon' />
      {itemCount > 0 && (
        <span className='item-count' aria-hidden="true">
          {itemCount}
        </span>
      )}
    </div>
  );
};





export default React.memo(CartIcon); // Memoize for performance