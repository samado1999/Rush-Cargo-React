import React from 'react'

import PropTypes from 'prop-types'

import './text-card.css'

const TextCard = (props) => {
  return (
    <div className={`text-card-container ${props.rootClassName} `}>
      <span className="text-card-text">{props.text}</span>
    </div>
  )
}

TextCard.defaultProps = {
  rootClassName: '',
  text: 'Text',
}

TextCard.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default TextCard
