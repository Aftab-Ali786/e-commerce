import React from 'react';
import './checkout-item.styles.scss';
import { useDispatch } from 'react-redux';
import { clearItemFromCart, additem, removeItem } from '../../assets/Redux/Cart/cart.actions';

export const CheckoutItem = ({ cartItem = {} }) => {
  const dispatch = useDispatch();
  const { name = '', imageUrl = '', price = 0, quantity = 0 } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(additem(cartItem))}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
        aria-label="Remove item"
      >
        &#10005;
      </span>
    </div>
  );
};


export default CheckoutItem;