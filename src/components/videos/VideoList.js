import React from "react";
import VideoItem from "./VideoItem";

function VideoList(props) {
  const renderedList = props.videos.map((item) => {
    return (
      <VideoItem
        onSelectVideo={props.onSelectVideo}
        video={item}
        key={item.id.videoId}
      />
    );
  });
  return <div className="ui segment">{renderedList}</div>;
}

export default VideoList;
