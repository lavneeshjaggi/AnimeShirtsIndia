import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem }) => {
    const { imageUrl, title, quantity, price } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={title} />
            </div>
            <span className='title'>{title}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: cartItem => dispatch(clearItemFromCart(cartItem))
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);