import React from 'react';

import './categories.styles.scss';

const Categories = ({ title, imageUrl, size }) => (
    <div className={`${size} categories`}>
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <h2 className='subtitle'>SHOP NOW</h2>
        </div>
    </div>
);

export default Categories;