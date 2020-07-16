import React from 'react';

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
    </div>
);

export default CollectionItem;