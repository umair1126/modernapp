import React from "react";
import DisplaySeasons from "./DisplaySeasons";
import Spinner from "./Spinner";

class Seasons extends React.Component {
  state = {
    lat: null,
    errorMessasge: "",
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessasge: err.message })
    );
  }

  renderContent() {
    if (!this.state.errorMessasge && this.state.lat) {
      return (
        <div>
          <DisplaySeasons lat={this.state.lat} />
        </div>
      );
    } else if (this.state.errorMessasge && !this.state.lat) {
      return (
        <div>
          <h1>Error: {this.state.errorMessasge}</h1>
        </div>
      );
    } else {
      return <Spinner message="please accept location request" />;
    }
  }

  render() {
    return (
      <div style={{ border: "5px solid yellow" }}>{this.renderContent()}</div>
    );
  }
}

export default Seasons;
