import React from 'react';
import LanguageItem from './LanguageItem';

const LanguageList = ({ languageList, onNewList }) => {
  const onVote = () => {
    onNewList(languageList);
  };

  const renderedList = languageList.map((item, index) => {
    return <LanguageItem key={index} language={item} onVote={onVote} />;
  });

  return (
    <div className="container">
      <div className="row" style={{ marginBottom: '6rem' }}>
        <div className="col">
          <ul className="list-group">{renderedList}</ul>
        </div>
      </div>
    </div>
  );
};

export default LanguageList;
