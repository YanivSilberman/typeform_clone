import React from 'react'

import YouTube from 'react-youtube';
import Modal from 'react-modal';

const modal_style = {
   overlay: {
      position: "fixed",
      zIndex: "9999",
      top: "-25%",
      left: "0",
      bottom: "0",
      right: "0",
      height: "125%",
      width: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      willChange: "opacity",
   },
   content: {
     background: "black",
     color: '#333',
     position: "fixed",
     left: "0",
     right: "0",
     border: "0px",
     padding: "0",
     maxHeight: "90%",
     width: "65%",
     margin: "auto",
     overflowY: "auto",
     borderRadius: "0px",
     boxShadow: "0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.3)",
   }
 }

const opts = {
  height: '100%',
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#modal')

const VideoPlayer = ({ src }) => {

  return(
    <Modal
        isOpen={true}
        onAfterOpen={this.props.afterOpenModal}
        onRequestClose={this.props.closeModal}
        style={modal_style}
        contentLabel="Modal"
        shouldCloseOnOverlayClick={true}
      >

      <YouTube
        videoId={src}
        opts={opts}
      />

    </Modal>
  )
}

export default VideoPlayer;
