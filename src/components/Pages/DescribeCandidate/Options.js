import React from "react";
import Chip from "./Chip";

export default class Options extends React.Component {
  createChip = (id, i) => {
    const { optionsDescribeCandidate } = this.props;
    let o = optionsDescribeCandidate;
    return <Chip key={i} id={id} option={o.byIds[id]} onChipClick={this.props.onChipClick} />
  }

  getOptions = () => {
    const { optionsDescribeCandidate } = this.props;
    return optionsDescribeCandidate.allIds.map(this.createChip);
  };

  render() {
    return (
      <ul id="options_list">
        { this.getOptions() }
      </ul>
    );
  }
}
