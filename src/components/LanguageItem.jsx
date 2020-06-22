import React, { Component } from 'react';

class LanguageItem extends Component {
  state = { lang: this.props.language };

  onButtonUpClick(lang) {
    lang.voteCount += 1;
    this.setState({ lang });
  }

  onButtonDownClick(lang) {
    lang.voteCount -= 1;
    this.setState({ lang });
  }

  render() {
    return (
      <div>
        <li className="list-group-item d-flex align-items-center">
          <div className="p-2 bd-highlight">{this.props.language.language}</div>
          <div className="ml-auto p-2 bd-highlight">
            <button
              className="btn btn-light btn-sm"
              onClick={() => this.onButtonUpClick(this.props.language)}
            >
              <span>
                <i className="fas fa-chevron-up"></i>
              </span>
            </button>

            <h4 style={{ display: 'inline' }}>
              <span className="badge badge-secondary badge-pill mx-3">
                {this.props.language.voteCount}
              </span>
            </h4>
            <button
              className="btn btn-light btn-sm"
              onClick={() => this.onButtonDownClick(this.props.language)}
            >
              <span>
                <i className="fas fa-chevron-down"></i>
              </span>
            </button>
          </div>
        </li>
      </div>
    );
  }
}

export default LanguageItem;
