import React from "react";

export default class SearchBar extends React.Component {
  state = {
    text: "",
  };

  onSubmitForm(e) {
    e.preventDefault();
    this.props.onSubmitting(this.state.text);
  }

  //   onSubmitForm = (e) => {
  //     e.preventDefault();
  //     console.log(this.state.text);
  //   };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.onSubmitForm(e)}>
          <div className="ui input">
            <label>
              Search Images
              <input
                type="text"
                placeholder="Search..."
                value={this.state.text}
                onChange={(e) => this.setState({ text: e.target.value })}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
