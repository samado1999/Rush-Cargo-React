import React from 'react'

import PropTypes from 'prop-types'

import './service-method-card.css'

const ServiceMethodCard = (props) => {
  return (
    <div className={`service-method-card-container ${props.rootClassName} `}>
      <div className="service-method-card-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="service-method-card-image"
        />
      </div>
    </div>
  )
}

ServiceMethodCard.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src: '/playground_assets/roadmap%20metodo%20servicio%202-400w.jpg',
}

ServiceMethodCard.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default ServiceMethodCard
