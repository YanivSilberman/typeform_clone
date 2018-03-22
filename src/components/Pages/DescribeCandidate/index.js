import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addDescription, removeDescription } from "../../../actions";
import "../style.css"
import "./style.css"
import PageWrapper from "../wrapper";

import Selected from "./Selected";
import Options from "./Options";

export class DescribeCandidate extends React.Component {

  onChipClick = id => this.props.dispatch(addDescription(id))
  removeSelected = id => this.props.dispatch(removeDescription(id))


  onKeyUp = val => {
    let ul, li, a, i, filter;
    filter = val.toUpperCase();
    ul = document.getElementById("options_list");
    li = ul.getElementsByClassName('chip');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  }

  onEnter = e => (e.key === 'Enter') ? this.props.translate(3) : null;

  render() {
    return (
      <PageWrapper {...this.props}>
        <h3>3 Describe your perfect candidate</h3>
        <input
          onKeyPress={(e)=>{this.onEnter(e)}}
          onKeyUp={(event)=>this.onKeyUp(event.target.value)}
          id="describe_input"
          className="typeform_input"
          type="text"
        />
        <Selected {...this.props} removeSelected={this.removeSelected} />
        <Options {...this.props} onChipClick={this.onChipClick} />
      </PageWrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { ...addDescription, ...removeDescription },
      dispatch
    )
  };
}
export default connect(mapDispatchToProps)(DescribeCandidate);
