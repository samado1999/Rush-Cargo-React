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
          <span className="">{props.text2}</span>
        </div>
      </div>
      <div className="cotizador-container08">
        <div className="cotizador-container09">
          <h1 className="cotizador-text5">{props.heading2}</h1>
        </div>
        <div className="cotizador-container10">
          <span className="">{props.text3}</span>
        </div>
      </div>
    </div>
  )
}

Cotizador.defaultProps = {
  heading: 'TRM',
  text: '1',
  text1: '4300',
  heading1: 'Cantidad Libras',
  text2: '5',
  heading2: 'Total (En Pesos)',
  text3: '10',
  rootClassName: '',
}

Cotizador.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  heading1: PropTypes.string,
  text2: PropTypes.string,
  heading2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Cotizador
