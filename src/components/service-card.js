import React from 'react'

import PropTypes from 'prop-types'

import './service-card.css'

const ServiceCard = (props) => {
  return (
    <div className={`service-card-container ${props.rootClassName} `}>
      <div className="service-card-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="service-card-image"
        />
      </div>
      <h1 className="service-card-text">{props.heading}</h1>
    </div>
  )
}

ServiceCard.defaultProps = {
  image_src: '/playground_assets/truck-200h.png',
  rootClassName: '',
  image_alt: 'image',
  heading: 'Heading',
}

ServiceCard.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
}

export default ServiceCard
