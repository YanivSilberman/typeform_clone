import React from "react";
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { pickCandidate } from "../../../actions";

import PageWrapper from "../wrapper";
import VideoPlayer from './Video'
import Candidate from "./Candidate";

import './style.css'

export class TopCandidates extends React.Component {

  state = {
    showVideo: false,
    videoSrc: ""
  }

  createCandidates = (candidate, i) =>
    <Candidate {...candidate} onClick={this.onClick} onVideoClick={this.onVideoClick} key={i} />

  mapCandidates = () => this.props.topCandidates.map(this.createCandidates);

  onClick = pick => this.props.dispatch(pickCandidate(pick));
  onVideoClick = src => this.setState({ showVideo: true, videoSrc: src })

  afterOpenModal = () => {
  }

  closeModal = () => {
    this.setState({showVideo: false, videoSrc: ""});
  }

  render() {

    const $modal = !this.state.showVideo ? null :
      <VideoPlayer
        closeModal={this.closeModal}
        afterOpenModal={this.afterOpenModal}
        src={this.state.videoSrc}
      />;

    return (
      <PageWrapper {...this.props}>
        { $modal }

        <h3>4 Select between our top 3 matches</h3>
        <div className="top_container">
        { this.mapCandidates() }
        </div>
      </PageWrapper>);
  }
}


TopCandidates.propTypes = {
  topCandidates: PropTypes.array
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...pickCandidate }, dispatch)
  };
}
export default connect(mapDispatchToProps)(TopCandidates);
