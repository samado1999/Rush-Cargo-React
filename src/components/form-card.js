import React, { useState } from 'react';

import PropTypes from 'prop-types';

import ReactWhatsapp from 'react-whatsapp';

import './form-card.css';

const FormCard = (props) => {
  const [message, setMessage] = useState('');

  function invalid(event) {
    event.target.setCustomValidity('Ingrese su mensaje');
  }

  function setMessageValue(event) {
    setMessage(event.target.value);
  }

  function handleFormSubmit(event) {}
  return (
    <div className={`form-card-container ${props.rootClassName} `}>
      <form className='form-card-form'>
        <div className='form-card-container1'>
          <span className='form-card-text'>{props.text2}</span>
          <textarea
            placeholder={props.textarea_placeholder}
            id='message-area'
            className='form-card-textarea textarea'
            value={message}
            onChange={setMessageValue}
          ></textarea>
        </div>
        <div className='form-card-container2'>
          <ReactWhatsapp
            className='form-card-button button'
            number='+57 316 8331920'
            message={message}
            onClick={handleFormSubmit}
          >
            {props.button}
          </ReactWhatsapp>
        </div>
      </form>
    </div>
  );
};

FormCard.defaultProps = {
  text2: 'Envíanos un mensaje 😃',
  textarea_placeholder: 'mensaje',
  rootClassName: '',
  button: '¡Contactar!',
  link_button: 'https://wa.me/message/F4ZSFNDG5G64D1',
};

FormCard.propTypes = {
  text2: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  link_button: PropTypes.string,
};

export default FormCard;
