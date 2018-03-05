import React from "react";
import './style.css'

export default class Candidate extends React.Component {

  onBtnClick = () => {
  }

  render(){
    const { name, src } = this.props;
    const $bg = "url(%)".replace("%", src)
    return (
      <div className="candidate">

        <div className="img_container"
          style={{backgroundImage: $bg}}>
        </div>

        <div className="bio">
          <h5>{ name }</h5>
        </div>

        <button onClick={()=>this.onBtnClick()}>
          HIRE
        </button>
      </div>
    )
  }
}
