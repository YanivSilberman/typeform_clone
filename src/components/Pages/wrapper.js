import React from "react";
import './style.css'

export default class PageWrapper extends React.Component {


  render() {
    const { pageHeight, id } = this.props;
    if (!pageHeight) return null;
    const $height = pageHeight.toString() + "px";


    return (
      <div className="page_wrapper" style={{ height: $height }}>
        <div id={id} className="inner_wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}
