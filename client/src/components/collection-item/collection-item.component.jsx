import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ title, imageUrl, price }) => (
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
        <CustomButton inverted>add to cart</CustomButton>
    </div>
);

export default CollectionItem;