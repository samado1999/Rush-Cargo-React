import React from 'react'

import PropTypes from 'prop-types'

import './about-card.css'

const AboutCard = (props) => {
  return (
    <div className={`about-card-container ${props.rootClassName} `}>
      <h1 className="about-card-heading">{props.heading}</h1>
      <span className="about-card-text">{props.text}</span>
    </div>
  )
}

AboutCard.defaultProps = {
  rootClassName: '',
  heading: 'Nuestra historia',
  text: 'Rush Cargo se fundó hace más de 20 años con el propósito de brindar soluciones a todas las personas y empresas que amplían su mercado de posibilidades en el exterior, ofreciendo el servicio personalizado más confiable en la traída y envío de mercancían a nivel internacional.',
}

AboutCard.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default AboutCard
