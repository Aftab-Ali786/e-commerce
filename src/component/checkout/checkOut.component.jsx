import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from '../../assets/Redux/Cart/cart.selector';
import { CheckoutItem } from '../checout-item/checkout-item.component'; // Corrected import path
import './checkOut.styles.scss';

export const CheckOut = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span> {/* Display the total */}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems, // Ensure this matches the prop name in the component
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);