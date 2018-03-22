import React from "react";
import PropTypes from 'prop-types';

import './style.css'

export default class Candidate extends React.Component {

  onBtnClick = () => {
  }

  render(){
    const { name, src, video_id } = this.props;
    const $bg = "url(%)".replace("%", src)
    return (
      <div className="candidate">

        <div
          className="img_container"
          style={{backgroundImage: $bg}}
          onClick={()=>this.props.onVideoClick(video_id)}>
          <i className="material-icons large">play_arrow</i>
        </div>

        <div className="bio">
          <h5>{ name }</h5>
        </div>

        <button onClick={()=>this.onBtnClick(name)}>
          HIRE
        </button>
      </div>
    )
  }
}


Candidate.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
};
