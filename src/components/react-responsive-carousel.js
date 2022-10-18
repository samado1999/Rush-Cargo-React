import React from 'react'

import PropTypes from 'prop-types'

import './react-responsive-carousel.css'

const ReactResponsiveCarousel = (props) => {
  return (
    <div
      className={`react-responsive-carousel-container ${props.rootClassName} `}
    ></div>
  )
}

ReactResponsiveCarousel.defaultProps = {
  rootClassName: '',
}

ReactResponsiveCarousel.propTypes = {
  rootClassName: PropTypes.string,
}

export default ReactResponsiveCarousel
