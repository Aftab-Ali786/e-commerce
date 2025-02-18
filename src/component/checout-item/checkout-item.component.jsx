import React from "react";
import './checkout-item.styles.scss';

export const CheckoutItem = ({ cartItem = {} }) => {
    // Destructure with default values directly in the function parameters
    const { name = '', imageUrl = '', price = 0, quantity = 0 } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">${price}</span>
            <span className="remove-button" aria-label="Remove item">&#10005;</span>
        </div>
    );
};

export default CheckoutItem;