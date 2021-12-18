import React from "react";

export default class VideoDetail extends React.Component {
  render() {
    if (!this.props.video) {
      return <div>Loading...</div>;
    } else {
      const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
      return (
        <div className="ui segment">
          <div className="ui embed">
            <iframe title={this.props.video.snippet.title} src={videoSrc} />
          </div>
          <h3 className="ui header">{this.props.video.snippet.title}</h3>
          <p>{this.props.video.snippet.description}</p>
        </div>
      );
    }
  }
}
