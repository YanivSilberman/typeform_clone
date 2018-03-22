/*

MAIN CONTAINER HANDLES ALL INPUT PROPS

*/

import React from "react";
import { connect } from "react-redux";
import Scroller from "../components/Scroller";

export const Typeform = ({ props }) => <Scroller {...props} />

function mapStateToProps(state) {
  return {
    // modules/form_reducers
    nameValue: state.form.nameValue,
    selectedCandidates: state.form.selectedCandidates,
    optionsCandidates: state.form.optionsCandidates,
    topCandidates: state.form.topCandidates,

    // modules/page_reducers
    pageHeight: state.page.pageHeight,
    page: state.page.page,
  };
}

export default connect(mapStateToProps)(Scroller);
