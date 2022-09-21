import React from 'react'

import PropTypes from 'prop-types'

import './text-card.css'

const TextCard = (props) => {
  return (
    <div className="text-card-container">
      <span className="text-card-text">{props.text}</span>
    </div>
  )
}

TextCard.defaultProps = {
  text: 'Text',
}

TextCard.propTypes = {
  text: PropTypes.string,
}

export default TextCard
