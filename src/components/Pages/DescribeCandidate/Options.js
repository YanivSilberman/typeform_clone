import React from "react";
import Chip from "./Chip";

export default class Options extends React.Component {
  createChip = (id, i) => {
    const { optionsCandidates } = this.props;
    let o = optionsCandidates;
    return <Chip key={i} id={id} option={o.byIds[id]} onChipClick={this.props.onChipClick} />
  }

  getOptions = () => {
    const { optionsCandidates } = this.props;
    return optionsCandidates.allIds.map(this.createChip);
  };

  render() {
    return (
      <ul id="options_list">
        { this.getOptions() }
      </ul>
    );
  }
}
