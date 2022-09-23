import React from 'react'

import PropTypes from 'prop-types'

import './about-card.css'

const AboutCard = (props) => {
  return (
    <div className={`about-card-container ${props.rootClassName} `}>
      <div className="about-card-container1">
        <h1 className="about-card-text">{props.heading}</h1>
        <span className="about-card-text1">{props.text}</span>
      </div>
    </div>
  )
}

AboutCard.defaultProps = {
  heading: 'Nuestra historia',
  text: 'Rush Cargo se fundó hace más de 20 años con el propósito de brindar soluciones a todas las personas y empresas que amplían su mercado de posibilidades en el exterior, ofreciendo el servicio personalizado más confiable en la traída y envío de mercancían a nivel internacional.',
  rootClassName: '',
}

AboutCard.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AboutCard
