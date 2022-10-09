import React from 'react'

import PropTypes from 'prop-types'

import './cotizador.css'

const Cotizador = (props) => {
  return (
    <div className={`cotizador-container ${props.rootClassName} `}>
      <div className="cotizador-container01">
        <div className="cotizador-container02">
          <h1 className="cotizador-text">{props.heading}</h1>
        </div>
        <div className="cotizador-container03">
          <span className="">{props.text}</span>
        </div>
        <div className="cotizador-container04">
          <span className="">{props.text1}</span>
        </div>
      </div>
      <div className="cotizador-container05">
        <div className="cotizador-container06">
          <h1 className="cotizador-text3">{props.heading1}</h1>
        </div>
        <div className="cotizador-container07">
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className="input"
          />
        </div>
      </div>
      <div className="cotizador-container08">
        <div className="cotizador-container09">
          <h1 className="cotizador-text4">{props.heading2}</h1>
        </div>
        <div className="cotizador-container10">
          <span className="">{props.text3}</span>
        </div>
      </div>
    </div>
  )
}

Cotizador.defaultProps = {
  heading1: 'Cantidad Libras',
  text3: '10',
  text: '1',
  heading2: 'Total (En Pesos)',
  heading: 'TRM',
  text1: '4300',
  rootClassName: '',
  textinput_placeholder: 'placeholder',
}

Cotizador.propTypes = {
  heading1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  heading2: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default Cotizador
