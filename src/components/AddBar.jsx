import React from 'react';

class AddBar extends React.Component {
  state = { input: '' };

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onButtonClick = () => {
    let backgroundColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase()}`;
    const r = parseInt(backgroundColor.slice(1, 3), 16),
      g = parseInt(backgroundColor.slice(3, 5), 16),
      b = parseInt(backgroundColor.slice(5, 7), 16);
    const tempBackgroundColor = backgroundColor;
    backgroundColor = `rgba(${r}, ${g}, ${b}, 0.5)`;

    const foregroundColor = `#${(
      Number(`0x1${tempBackgroundColor.slice(1)}`) ^ 0xffffff
    )
      .toString(16)
      .substr(1)
      .toUpperCase()}`;

    this.props.languageList.push({
      language: this.state.input,
      voteCount: 0,
      backgroundColor,
      foregroundColor,
    });

    this.props.onNewList(this.props.languageList);
    this.setState({ input: '' });

    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
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
