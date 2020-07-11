import React from 'react';

import Glide, { Controls, Breakpoints, Autoplay } from '@glidejs/glide/dist/glide.modular.esm';

import './carousel.styles.scss';

class Carousel extends React.Component {
  componentDidMount () {
    const config = {
      type: 'carousel',
      gap: 0,
      autoplay: 6000,
      animationDuration: 3000,
      animationTimingFunc: 'linear'
    }

    new Glide('.glide', config).mount({ Controls, Breakpoints, Autoplay });
  }


  render () {
    const imageUrl_1 = 'https://negativespace.co/wp-content/uploads/2020/03/negative-space-clothing-bed-style-flat-1062x708.jpg';
    const imageUrl_2 = 'https://negativespace.co/wp-content/uploads/2020/06/negative-space-bed-fashion-outfit-style-1062x708.jpg';
    const imageUrl_3 = 'https://negativespace.co/wp-content/uploads/2019/11/negative-space-cosmetics-and-stationery-for-the-holiday-1062x708.jpg';
    const imageUrl_4 = 'https://negativespace.co/wp-content/uploads/2017/10/negative-space-women-dressing-room-fashion-model-makeup-mirror-bags-flaunter-thumb-1.jpg';
    const imageUrl_5 = 'https://negativespace.co/wp-content/uploads/2017/10/fashion-travel-accessories-sunglasses-bag-camera-watch-freephotoscc-thumb-1.jpg';
    const imageUrl_6 = 'https://negativespace.co/wp-content/uploads/2017/06/negative-space-classic-clothes-fashion-man-terje-sollie-thumb-1.jpg';

    return (
      <div className='carousel'>
        <div class='glide'>
          <div class='glide__track' data-glide-el='track'>
            <ul class='glide__slides'>
              <li class='glide__slide'>
                <div className='image' style={{
                    backgroundImage: `url(${imageUrl_1})`
                  }}
                />
              </li>
              <li class='glide__slide'>
                <div className='image' style={{
                    backgroundImage: `url(${imageUrl_2})`
                  }}
                />
              </li>
              <li class='glide__slide'>
                <div className='image' style={{
                    backgroundImage: `url(${imageUrl_3})`
                  }}
                />
              </li>
              <li class='glide__slide'>
                <div className='image' style={{
                    backgroundImage: `url(${imageUrl_4})`
                  }}
                />
              </li>
              <li class='glide__slide'>
                <div className='image' style={{
                    backgroundImage: `url(${imageUrl_5})`
                  }}
                />
              </li>
              <li class='glide__slide'>
                <div className='image' style={{
                    backgroundImage: `url(${imageUrl_6})`
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )  
  }
};

export default Carousel;