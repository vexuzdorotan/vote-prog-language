import React from 'react';

class AddBar extends React.Component {
  state = { input: '' };

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onButtonClick = () => {
    this.props.languageList.push({
      language: this.state.input,
      voteCount: 0,
    });

    this.props.onNewList(this.props.languageList);

    this.setState({ input: '' });
  };

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-5">Vote Your Programming Language!</h1>
        <p className="lead">
          A simple React app that adds a programming language, upvote and
          downvote, and sort list by most number of votes.
        </p>
        <hr className="my-4" />
        <div className="input-group input-group-lg mt-5">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Add Programming Language
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            value={this.state.input}
            onChange={this.onInputChange}
          />
          <button
            className="btn btn-secondary btn-lg"
            onClick={this.onButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddBar;
