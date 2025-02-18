import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Use `useNavigate` instead of `withRouter`
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';


export const CartDropdown = ({ cartItems}) => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => navigate('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown); // No need for `withRouter`