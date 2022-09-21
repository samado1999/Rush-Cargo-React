import React from 'react'

import PropTypes from 'prop-types'

import './text-card.css'

const TextCard = (props) => {
  return (
    <div className={`text-card-container ${props.rootClassName} `}>
      <div className="text-card-container1">
        <h1 className="text-card-text">{props.heading}</h1>
      </div>
    </div>
  )
}

TextCard.defaultProps = {
  heading: 'Heading',
  rootClassName: '',
}

TextCard.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TextCard
