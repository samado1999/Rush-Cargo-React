import React from 'react'

import PropTypes from 'prop-types'

import './form-card.css'

const FormCard = (props) => {
  return (
    <div className={`form-card-container ${props.rootClassName} `}>
      <div className="form-card-container1">
        <span className="form-card-text">{props.text}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="form-card-textinput input"
        />
      </div>
      <div className="form-card-container2">
        <span className="form-card-text1">{props.text1}</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder1}
          className="form-card-textinput1 input"
        />
      </div>
      <div className="form-card-container3">
        <span className="form-card-text2">{props.text2}</span>
        <textarea
          placeholder={props.textarea_placeholder}
          className="form-card-textarea textarea"
        ></textarea>
      </div>
    </div>
  )
}

FormCard.defaultProps = {
  textinput_placeholder: 'placeholder',
  textinput_placeholder1: 'placeholder',
  textarea_placeholder: 'placeholder',
  text: 'Nombre',
  text1: 'E-mail',
  text2: 'Mensaje',
  rootClassName: '',
}

FormCard.propTypes = {
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FormCard
