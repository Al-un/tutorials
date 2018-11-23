import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li key={el.id} className="list-group-item">
        {el.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);
export default List;

// export default class List extends React.Component {
//   render() {
//     return <div>List to be implemented</div>;
//   }
// }
