// import Comments from "./components/Comments/comments";
// import faker from "faker";
// import ApprovalCard from "./components/ApprovalCard/approvalCard";
// import Seasons from "./components/Seasons/Seasons";
import SearchBar from "./components/Pics/SearchBar";
import React from "react";
import unsplash from "./api/unsplash";
import ImageList from "./components/Pics/ImageList";
// import SearchVideos from "./components/videos/SearchVideos";
// import youtube from "./api/youtube";
// import VideoList from "./components/videos/VideoList";
// import VideoDetail from "./components/videos/VideoDetail";

// class App extends React.Component {
//   state = {
//     videos: [],
//     selectedVideo: null,
//   };

//   onFormSubmit = async (term) => {
//     console.log(term);
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });
//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0],
//     });
//     console.log(response.data.items);
//   };

//   onSelectVideo = (video) => {
//     console.log("selected video: ", video);
//     this.setState({ selectedVideo: video });
//   };

//   render() {
//     return (
//       <div className="ui container">
//         <SearchVideos onFormSubmit={this.onFormSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="ten wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="six wide column">
//               <VideoList
//                 onSelectVideo={this.onSelectVideo}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  state = {
    images: [],
  };
  doSomething = async (term) => {
    const response = await unsplash.get(`/search/photos`, {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    console.log(response.data.results);
  };

  render() {
    return (
      <div className="ui container">
        {/* <div className="ui container comments">
          <ApprovalCard>
            <Comments
              author="ben Stokes"
              text="we the guys!"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>

          <ApprovalCard>
            <Comments
              author="jos buttler"
              text="flying mood"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>

          <ApprovalCard>
            <Comments
              author="chris gayle"
              text="boss is here"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
        </div> */}
        {/* <Seasons /> */}
        <SearchBar onSubmitting={this.doSomething} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
