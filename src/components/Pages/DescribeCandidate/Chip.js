import React from "react";

export default class Chip extends React.Component {

  render() {
    const { onChipClick, option, id } = this.props
    return (
      <li className="chip" onClick={()=>{onChipClick(id)}}>
        { option }
      </li>
    );
  }
}
