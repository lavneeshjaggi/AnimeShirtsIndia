import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, title, price } = item
    return (
        <div className='collection-item'>
            <div 
                className='img'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{title}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton 
                inverted
                onClick={() => addItem(item)}
            >
                add to cart
            </CustomButton>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);