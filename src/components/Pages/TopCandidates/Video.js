import React from 'react'
// import YouTube from 'react-youtube';
import Modal from 'react-modal';
import './style.css'

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
     background: "transparent",
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
     display: "flex",
     flexDirection: "rows",
     alignItems: "center",
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

const VideoPlayer = ({ afterOpenModal, closeModal, candidate }) => {
  const { name, bio, src, bg, skills } = candidate;
  const $bg = `url('${bg}') no-repeat center center fixed`;
  return(
    <Modal
        isOpen={true}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modal_style}
        contentLabel="Modal"
        shouldCloseOnOverlayClick={true}
      >
      <div className="profile">
        <div className="modal-header" style={{background: $bg}}>
          <div className="modal-profile-pic">
            <img src={src} />
          </div>
        </div>
        <div className="modal-body">
          <h5>{ name }</h5>
          <p>{ bio }</p>
          <h6>Skills</h6>
          <ul>
            {skills.map(skill=><li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </div>
      <div className="gif-container">
      </div>
    </Modal>
  )
}

/*
<YouTube
  videoId={src}
  opts={opts}
/>
*/

export default VideoPlayer;
