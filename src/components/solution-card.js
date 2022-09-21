import React from 'react'

import PropTypes from 'prop-types'

import './solution-card.css'

const SolutionCard = (props) => {
  return (
    <div className={`solution-card-container ${props.rootClassName} `}>
      <h1 className="solution-card-text">{props.heading}</h1>
    </div>
  )
}

SolutionCard.defaultProps = {
  heading: 'Heading',
  rootClassName: '',
}

SolutionCard.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SolutionCard
