import React, { Component } from 'react';
import LanguageItem from './LanguageItem';

const LanguageList = ({ languageList }) => {
  // const sorted = languageList.sort((a, b) => {
  //   return b.voteCount - a.voteCount;
  // });

  const renderedList = languageList.map((item, index) => {
    return <LanguageItem key={index} language={item} />;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="list-group">{renderedList}</ul>
          {/* {console.log(sorted)} */}
        </div>
      </div>
    </div>
  );
};

// class LanguageList extends Component {
//   sorted = this.props.languageList.sort((a, b) => {
//     return b.voteCount - a.voteCount;
//   });

//   state = { languageList: this.sorted };

//   renderedList = this.state.languageList.map((item, index) => {
//     return <LanguageItem key={index} language={item} />;
//   });

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <ul className="list-group">{this.renderedList}</ul>
//             {console.log(this.sorted)}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default LanguageList;
