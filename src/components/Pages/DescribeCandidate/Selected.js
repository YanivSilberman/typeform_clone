import React from "react";
import './style.css'

export default class Selected extends React.Component {

  createSpan = (id, i) => {
    const { optionsDescribeCandidate } = this.props;
    let o = optionsDescribeCandidate;
    return <span onClick={()=>this.props.removeSelected(id)}
      key={i}>{o.byIds[id]}</span>
  };

  getSelected = () => {
    const { selectedDescribeCandidate } = this.props;
    return selectedDescribeCandidate.map(this.createSpan);
  };


  render() {

    return (
      <div className="describe_selected_input">
        <div className="left"> { this.getSelected() } </div>
        <div className="right"> <span>press ENTER</span> </div>
      </div>
    );
  }
}
