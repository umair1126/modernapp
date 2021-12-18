import React from "react";
import ImageCard from "./ImageCard";

export default class ImageList extends React.Component {
  render() {
    return (
      <div>
        <ImageCard images={this.props.images} />
      </div>
    );
  }
}
