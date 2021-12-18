import React from "react";

export default class SearchVideos extends React.Component {
  state = {
    term: "",
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmitting = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmitting} className="ui form">
          <div className="ui input focus">
            <label>
              Search Videos
              <input
                type="text"
                placeholder="Search..."
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
