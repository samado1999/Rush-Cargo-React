import React from 'react'

import PropTypes from 'prop-types'

import './form-card.css'

const FormCard = (props) => {
  return (
    <div className={`form-card-container ${props.rootClassName} `}>
      <form className="form-card-form">
        <div className="form-card-container1">
          <span className="form-card-text">{props.text2}</span>
          <textarea
            placeholder={props.textarea_placeholder}
            id="message-area"
            className="form-card-textarea textarea"
            required
          ></textarea>
        </div>
      </form>
    </div>
  )
}

FormCard.defaultProps = {
  text2: 'Envíanos un mensaje 😃',
  textarea_placeholder: 'mensaje',
  rootClassName: '',
}

FormCard.propTypes = {
  text2: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FormCard
