import React, { useState } from 'react';

import './carousel.styles.scss';

var images = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
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