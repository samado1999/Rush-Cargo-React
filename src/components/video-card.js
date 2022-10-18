import React from 'react'

import PropTypes from 'prop-types'

import './video-card.css'

const VideoCard = (props) => {
  return (
    <div className={`video-card-container ${props.rootClassName} `}>
      <video
        src={props.video_src}
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        className="video-card-video"
      ></video>
    </div>
  )
}

VideoCard.defaultProps = {
  rootClassName: '',
  video_src: '/playground_assets/metodo%20servicio%20low.mp4',
}

VideoCard.propTypes = {
  rootClassName: PropTypes.string,
  video_src: PropTypes.string,
}

export default VideoCard
