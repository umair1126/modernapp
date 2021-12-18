import React from "react";
import "./videoItem.css";

export default class VideoItem extends React.Component {
  render() {
    return (
      <div>
        <div
          onClick={() => this.props.onSelectVideo(this.props.video)}
          className="video-item"
        >
          <img
            src={this.props.video.snippet.thumbnails.default.url}
            alt={this.props.video.snippet.title}
          />
          <h4 className="title">{this.props.video.snippet.title}</h4>
        </div>
        <hr />
      </div>
    );
  }
}
