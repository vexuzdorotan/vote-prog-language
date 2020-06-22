import React from 'react';

import AddBar from './AddBar';
import LanguageList from './LanguageList';
import fakerProgLang from '../data/fakerProgLang';

class App extends React.Component {
  state = {
    languageList: fakerProgLang,
  };

  onNewList = (newLanguageList) => {
    newLanguageList.sort((a, b) => {
      return b.voteCount - a.voteCount;
    });

    this.setState({ languageList: newLanguageList });
  };

  render() {
    return (
      <div>
        <AddBar
          languageList={this.state.languageList}
          onNewList={this.onNewList}
        />
        <LanguageList
          languageList={this.state.languageList}
          onNewList={this.onNewList}
        />
      </div>
    );
  }
}

export default App;
