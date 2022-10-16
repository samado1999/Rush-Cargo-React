import React from 'react'

import PropTypes from 'prop-types'

import './heading-card.css'

const HeadingCard = (props) => {
  return (
    <div className={`heading-card-container ${props.rootClassName} `}>
      <div className="heading-card-container1">
        <h1 className="heading-card-text">{props.heading}</h1>
      </div>
    </div>
  )
}

HeadingCard.defaultProps = {
  heading: 'Personalización',
  rootClassName: '',
}

HeadingCard.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HeadingCard
