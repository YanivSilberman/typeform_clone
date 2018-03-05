import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateName, updatePage } from "../../../actions";
import PageWrapper from "../wrapper";
import ContBtn from './continue'
import "./style.css"
import "../style.css"
import $ from 'jquery'

export class Name extends React.Component {

  onChange = value => {
    this.props.dispatch(updateName(value));
  };

  onNextClick = () => this.props.translate(1);

  onEnter = e => {
    const { nameValue } = this.props;
    if (e.key === 'Enter' && nameValue != '') {
      this.props.translate(1);
    }
  }

  render() {
    const { nameValue } = this.props;
    const $btn = (nameValue != "") ? <ContBtn onNextClick={this.onNextClick} /> : null;

    return (
      <PageWrapper {...this.props}>
        <h3>1 What is your name?</h3>
        <div>
          <input
            id="name_input"
            className="typeform_input"
            type="text"
            value={nameValue}
            onChange={event => this.onChange(event.target.value)}
            onKeyPress={(e)=>{this.onEnter(e)}}
          />
        </div>
        { $btn }
      </PageWrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...updateName }, dispatch)
  };
}
export default connect(mapDispatchToProps)(Name);
