import React from 'react'

import PropTypes from 'prop-types'

import './form-card.css'

const FormCard = (props) => {
  return (
    <div className={`form-card-container ${props.rootClassName} `}>
      <form className="form-card-form">
        <div className="form-card-container1">
          <span className="form-card-text">{props.text}</span>
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className="form-card-input input"
          />
        </div>
        <div className="form-card-container2">
          <span className="form-card-text1">{props.text1}</span>
          <input
            type="text"
            placeholder={props.textinput_placeholder1}
            className="form-card-textinput input"
          />
        </div>
        <div className="form-card-container3">
          <span className="form-card-text2">{props.text2}</span>
          <textarea
            placeholder={props.textarea_placeholder}
            className="form-card-textarea textarea"
          ></textarea>
        </div>
      </form>
    </div>
  )
}

FormCard.defaultProps = {
  text2: 'Mensaje',
  textinput_placeholder1: 'E-mail',
  textarea_placeholder: 'Mensaje',
  text1: 'E-mail',
  rootClassName: '',
  textinput_placeholder: 'Nombre',
  text: 'Nombre',
}

FormCard.propTypes = {
  text2: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
}

export default FormCard
