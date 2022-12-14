import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-container ${props.rootClassName} `}>
      <footer className="footer-footer">
        <img
          alt="logo"
          src="/playground_assets/rush-icon-200h.png"
          className="footer-image"
        />
        <div className="footer-separator"></div>
        <span className="footer-text">© 2022 Rush Cargo.</span>
      </footer>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="footer-image1"
      />
    </div>
  )
}

Footer.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/waves-white.svg',
  image_alt: 'image',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Footer
