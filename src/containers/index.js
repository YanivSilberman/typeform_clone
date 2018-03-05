import React from "react";
import { connect } from "react-redux";
import Scroller from "../components/Scroller";

export class Typeform extends React.Component {

  render() {
    return <Scroller {...this.props} />
  }
}

function mapStateToProps(state) {
  return {
    nameValue: state.form.nameValue,
    pageHeight: state.form.pageHeight,
    selectedDescribeCandidate: state.form.selectedDescribeCandidate,
    optionsDescribeCandidate: state.form.optionsDescribeCandidate,
    topCandidates: state.form.topCandidates,
    page: state.form.page,
  };
}
export default connect(mapStateToProps)(Scroller);
