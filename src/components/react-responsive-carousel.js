import React from 'react';

import PropTypes from 'prop-types';

import './react-responsive-carousel.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ReactResponsiveCarousel = (props) => {
  return (
    <div
      className={`react-responsive-carousel-container ${props.rootClassName} `}
    >
      <div className='service-method-card-container1'>
        <Carousel className='service-method-card-image'>
          <div>
            <img src={props.image1} />
          </div>
          <div>
            <img src={props.image2} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

ReactResponsiveCarousel.defaultProps = {
  rootClassName: '',
  image1: '/playground_assets/Carousel-1.jpeg',
  image2: '/playground_assets/Carousel-2.jpeg',
};

ReactResponsiveCarousel.propTypes = {
  rootClassName: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
};

export default ReactResponsiveCarousel;
