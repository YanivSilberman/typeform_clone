import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updatePage } from '../../actions'

import {focusVisibleElements, focusVisibleContainer} from "./focus"
import Wrapper from "./wrapper";

import Name from "../Pages/Name";
import HowAreYou from "../Pages/HowAreYou";
import TopCandidates from "../Pages/TopCandidates";
import DescribeCandidate from "../Pages/DescribeCandidate";

import $ from 'jquery'

export class Scroller extends React.Component {

  componentDidMount(){
    this.onScroll();
  }

  onScroll = event => {
    let i, is_focused;
    let input_list = [ "name_input", "describe_input" ];
    for (i in input_list) focusVisibleElements(input_list[i]);

    let container_list = ["name_container", "how_container", "desc_container", "top_container"];
    for (i in container_list) {
      is_focused = focusVisibleContainer(container_list[i]);
      if (is_focused) this.props.dispatch(updatePage(i));
    };
  };

  translate = page => {
    const { pageHeight } = this.props;
    const tran = page * pageHeight;
    const $t = tran.toString() + "px";
    $("#wrapper").animate(
      { scrollTop: $t },
      300,
      this.onScroll
    );
  }

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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...updatePage}, dispatch)
  };
}
export default connect(mapDispatchToProps)(Scroller);
