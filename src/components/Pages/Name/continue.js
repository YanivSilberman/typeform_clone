import React from 'react'
import './style.css'

export default class ContBtn extends React.Component {

  render(){
    return(
      <div className="continue_container">
        <div className="continue_btn" onClick={() => this.props.onNextClick()}>
          OK
        </div>
        <span>press ENTER</span>
      </div>
    )
  }
}
