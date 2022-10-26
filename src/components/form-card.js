import React from 'react'

import PropTypes from 'prop-types'

import './form-card.css'

const FormCard = (props) => {
  return (
    <div className={`form-card-container ${props.rootClassName} `}>
      <form className="form-card-form">
        <div className="form-card-container1">
          <span className="form-card-text">{props.text}</span>
        </div>
        <div className="form-card-container2">
          <span className="form-card-text1">{props.text2}</span>
          <textarea
            id="message-area"
            placeholder={props.textarea_placeholder}
            className="form-card-textarea textarea"
          ></textarea>
        </div>
        <div className="form-card-container3">
          <button className="form-card-button button">{props.button}</button>
        </div>
      </form>
    </div>
  )
}

FormCard.defaultProps = {
  text2: 'Envíanos un mensaje 😃',
  textarea_placeholder: 'placeholder',
  button: '¡Enviar!',
  link_button: 'https://wa.me/message/F4ZSFNDG5G64D1',
  rootClassName: '',
  text: 'Mensaje enviado correctamente',
}

FormCard.propTypes = {
  text2: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  button: PropTypes.string,
  link_button: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default FormCard
