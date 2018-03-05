import React from "react";
import './style.css'

export default class AnswerBlock extends React.Component {
  render() {
    const { label, letter, onClick } = this.props;
    return (
      <div onClick={()=>onClick()} className="answer_block">
        <div className="answer_block_top">{ label }</div>
        <div className="answer_block_bot">{ letter }</div>
      </div>
    );
  }
}
