import React, { Component } from "react";
import "./imageCard.css";

export default class ImageCard extends Component {
  render() {
    return (
      <div className="gallery">
        <div className="image-card">
          {this.props.images.map(({ description, id, urls }) => {
            return <img alt={description} key={id} src={urls.small}></img>;
          })}
        </div>
      </div>
    );
  }
}
