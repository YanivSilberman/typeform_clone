import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import $ from "jquery";

import { updatePage } from "../../actions";

import './style.css'


export class Wrapper extends React.Component {

  footerClick = dir => {
    let new_page = parseInt(this.props.page);
    const add = ( dir === "up" ) ? new_page-1 : new_page+1;
    //this.props.dispatch(updatePage(add));
    this.props.translate(add);
  }

  createFooterBtns = () => {
    const btns = ["up", "down"], iconPrefix = "keyboard_arrow_";

    return btns.map((btn, i) =>
      <div key={i} className="btn" onClick={()=>{this.footerClick(btn)}}>
        <i className="material-icons large">
          { iconPrefix + btn }
        </i>
      </div>
    )
  }

  render() {

    return (
      <div className="wrapper" id="wrapper">
        {this.props.children}
        <div className="footer">
          <div className="sticker">
            <span>Powered by Yanform</span>
            { this.createFooterBtns() }
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { ...updatePage },
      dispatch
    )
  };
}

export default connect(mapDispatchToProps)(Wrapper);
