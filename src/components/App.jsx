import React from 'react';

import AddBar from './AddBar';
import LanguageList from './LanguageList';

class App extends React.Component {
  state = {
    languageList: [
      { language: 'JavaScript', voteCount: 1 },
      { language: 'Python', voteCount: 3 },
      { language: 'Java', voteCount: 4 },
      { language: 'C++', voteCount: 5 },
      { language: 'Dart', voteCount: 2 },
    ],
  };

  onNewList = (newLanguageList) => {
    // newLanguageList.sort((a, b) => {
    //   return b.voteCount - a.voteCount;
    // });

    this.setState({ languageList: newLanguageList });
  };

  render() {
    return (
      <div>
        <AddBar
          languageList={this.state.languageList}
          onNewList={this.onNewList}
        />
        <LanguageList languageList={this.state.languageList} />
      </div>
    );
  }
}

export default App;
