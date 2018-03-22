import React from "react";
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// redux actions
import { updatePage } from '../../actions'

// helper functions
import handleElementFocus from "../../helpers/focus"
import wheel from "../../helpers/wheel"

// page #wrapper
import Wrapper from "./wrapper";

// form components
import Name from "../Pages/Name";
import HowAreYou from "../Pages/HowAreYou";
import TopCandidates from "../Pages/TopCandidates";
import DescribeCandidate from "../Pages/DescribeCandidate";


export class Scroller extends React.Component {

  componentDidMount = () => {
    this.onScroll();
    let scrollableElement = document.getElementById("wrapper");
    scrollableElement.addEventListener("wheel", this.onScroll);
  };

  _focus = () => {
    const self = this;
    function callback(i){
      self.props.dispatch(updatePage(i))
    }
    handleElementFocus(callback);
  }

  // manage page in reducer and element focus
  onScroll = event => this._focus();

  updatePage = page => this.props.dispatch(updatePage(page));

  // wheel scrollTop to corrent height
  translate = page => wheel(page, this.updatePage);

  render() {
    return (
      <Wrapper {...this.props} translate={this.translate} onScroll={this.onScroll} >
        <div style={{height:"100px"}}></div>

        <Name {...this.props} translate={this.translate} id={"name_container"} />
        <HowAreYou {...this.props} translate={this.translate} id={"how_container"} />
        <DescribeCandidate {...this.props} translate={this.translate} id={"desc_container"} />
        <TopCandidates {...this.props} id={"top_container"} />

        <div style={{height:"500px"}}></div>
      </Wrapper>
    );
  }
}

Scroller.propTypes = {
  pageHeight: PropTypes.number
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...updatePage}, dispatch)
  };
}
export default connect(mapDispatchToProps)(Scroller);
