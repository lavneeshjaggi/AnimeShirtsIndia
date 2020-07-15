import React, { useState } from 'react';

import './carousel.styles.scss';

var images = [
    {
        id: 1,
        imageUrl: 'https://negativespace.co/wp-content/uploads/2020/06/negative-space-bed-fashion-outfit-style-1062x708.jpg',
    },
    {
        id: 2,
        imageUrl: 'https://negativespace.co/wp-content/uploads/2020/03/negative-space-clothing-bed-style-flat-1062x708.jpg',
    },
    {
        id: 3,
        imageUrl: 'https://negativespace.co/wp-content/uploads/2019/11/negative-space-cosmetics-and-stationery-for-the-holiday-1062x708.jpg',
    },
    {
        id: 4,
        imageUrl: 'https://negativespace.co/wp-content/uploads/2018/01/negative-space-fashion-books-magazine-vogue-daria-shevtsova-thumb-1.jpg',
    },
    {
        id: 5,
        imageUrl: 'https://negativespace.co/wp-content/uploads/2017/10/negative-space-women-dressing-room-fashion-model-makeup-mirror-bags-flaunter-thumb-1.jpg',
    },
    {
        id: 6,
        imageUrl: 'https://negativespace.co/wp-content/uploads/2017/10/fashion-travel-accessories-sunglasses-bag-camera-watch-freephotoscc-thumb-1.jpg',
    }
];

const Carousel = () => {
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (images.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (images.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className='carousel'>
                {images.map(({ id, imageUrl }) => (
                    <div 
                        key={id}
                        className='img' 
                        style={{
                            backgroundImage: `url(${imageUrl})`,
                            transform: `translateX(${x}%)`,
                        }} 
                    />
                ))}
                <button 
                    id='left' 
                    onClick={goLeft}
                >
                    &lt;
                </button>
                <button 
                    id='right' 
                    onClick={goRight}
                >
                    &gt;
                </button>
        </div>
    )
};

export default Carousel;