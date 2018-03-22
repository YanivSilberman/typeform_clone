import React from "react";
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateHowAreYou } from "../../../actions";
import PageWrapper from "../wrapper";

import AnswerBlock from './block'

export class HowAreYou extends React.Component {
  onClick = value => {
    this.props.dispatch(updateHowAreYou(value));
    this.props.translate(2);
  };

  render() {

    return (
      <PageWrapper {...this.props}>
        <h3>2 How are you {this.props.nameValue}?</h3>
        <div>
          <AnswerBlock onClick={this.onClick} label={"GREAT"} letter={"A"} />
          <AnswerBlock onClick={this.onClick} label={"F***ING AMAZING"} letter={"B"} />
        </div>
      </PageWrapper>
    );
  }
}

HowAreYou.propTypes = {
  nameValue: PropTypes.string
};


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...updateHowAreYou }, dispatch)
  };
}
export default connect(mapDispatchToProps)(HowAreYou);
