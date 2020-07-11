import React from 'react';

import Carousel from '../components/carousel/carousel.component';
import Directory from '../components/directory/directory.component';

import './homepage.styles.scss';

const Homepage = () => (
    <div className='homepage'>
        <Carousel />
        <Directory />
    </div>
);

export default Homepage;