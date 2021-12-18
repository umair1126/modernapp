import React, { useState } from "react";
import SearchVideos from "./SearchVideos";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../../api/youtube";

function Youtube() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onFormSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
    console.log(response.data.items);
  };

  const onSelectVideo = (video) => {
    console.log("selected video: ", video);
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchVideos onFormSubmit={onFormSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList onSelectVideo={onSelectVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
