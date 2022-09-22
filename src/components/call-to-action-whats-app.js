import React from 'react'

import PropTypes from 'prop-types'

import './call-to-action-whats-app.css'

const CallToActionWhatsApp = (props) => {
  return (
    <div
      className={`call-to-action-whats-app-container ${props.rootClassName} `}
    >
      <div className="call-to-action-whats-app-container1">
        <svg
          viewBox="0 0 877.7142857142857 1024"
          className="call-to-action-whats-app-icon"
        >
          <path
            d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"
            className=""
          ></path>
        </svg>
        <span className="call-to-action-whats-app-text">{props.text}</span>
      </div>
    </div>
  )
}

CallToActionWhatsApp.defaultProps = {
  text: 'Solicita tu asesoría personalizada',
  rootClassName: '',
}

CallToActionWhatsApp.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CallToActionWhatsApp
