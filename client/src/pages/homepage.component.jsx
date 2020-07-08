import React from 'react';

import './homepage.styles.scss';

const Homepage = () => (
    <div className='homepage'>
        <div className='directory'>
            <div className='categories'>
                <div className='content'>
                    <h2 className='title'>T-SHIRTS</h2>
                    <h3 className='subtitle'>SHOP NOW</h3>
                </div>
            </div>
            <div className='categories'>
                <div className='content'>
                    <h2 className='title'>JACKETS</h2>
                    <h3 className='subtitle'>SHOP NOW</h3>
                </div>
            </div>
            <div className='categories'>
                <div className='content'>
                    <h2 className='title'>ART WORK</h2>
                    <h3 className='subtitle'>SHOP NOW</h3>
                </div>
            </div>
            <div className='categories'>
                <div className='content'>
                    <h2 className='title'>MENS</h2>
                    <h3 className='subtitle'>SHOP NOW</h3>
                </div>
            </div>
            <div className='categories'>
                <div className='content'>
                    <h2 className='title'>WOMENS</h2>
                    <h3 className='subtitle'>SHOP NOW</h3>
                </div>
            </div>
        </div>
    </div>
)

export default Homepage;