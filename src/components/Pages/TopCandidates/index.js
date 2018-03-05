import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { pickCandidate } from "../../../actions";

import './style.css'
import PageWrapper from "../wrapper";

import Candidate from "./Candidate";

export class TopCandidates extends React.Component {

  createCandidates = (candidate, i) => <Candidate {...candidate} onClick={this.onClick} key={i} />

  mapCandidates = () => this.props.topCandidates.map(this.createCandidates);

  onClick = pick => this.props.dispatch(pickCandidate(pick));

  render() {
    return (
      <PageWrapper {...this.props}>
        <h3>4 Select between our top 3 matches</h3>
        <div className="top_container">
        { this.mapCandidates() }
        </div>
      </PageWrapper>);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...pickCandidate }, dispatch)
  };
}
export default connect(mapDispatchToProps)(TopCandidates);
