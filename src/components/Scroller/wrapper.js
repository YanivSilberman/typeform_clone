import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updatePageHeight, updatePage } from "../../actions";
import disableScroll from "./disable";
import './style.css'
import $ from "jquery";



export class Wrapper extends React.Component {

  componentDidMount() {
    this.getContainerHeight();

    let scrollableElement = document.getElementById("wrapper");
    scrollableElement.addEventListener("wheel", this.props.onScroll);
  }

  footerClick = dir => {
    const { page } = this.props;
    let new_page = parseInt(page);
    const add = ( dir === "up" ) ? new_page-1 : new_page+1;
    console.log("footer click", add)
    this.props.translate(add);
  }

  getContainerHeight = () => {
    let height = $("#wrapper").height();
    height = height / 2;
    this.props.dispatch(updatePageHeight(height));
  };



  render() {
    const { translateY } = this.props;

    return (
      <div className="wrapper" id="wrapper">
        {this.props.children}
        <div className="footer">
          <div className="sticker">
            <span>Powered by Yanform</span>
            <div className="btn" onClick={()=>{this.footerClick("down")}}>
              <i className="material-icons large">keyboard_arrow_down</i>
            </div>
            <div className="btn" onClick={()=>{this.footerClick("up")}}>
              <i className="material-icons large">keyboard_arrow_up</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { ...updatePageHeight, ...updatePage },
      dispatch
    )
  };
}

export default connect(mapDispatchToProps)(Wrapper);
