import React from 'react';

export default class List extends React.Component {
  render() {
    return (
      <table className="myClass">
        <thead>
          <tr>
            <th>Name</th>
            <th>Index</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>{index}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
