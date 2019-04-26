import React from "react";

import { tests } from "./misc";

export default class Home extends React.Component<any, any> {
  render() {
    const test = tests.map(test => (
      <tr>
        <td>{test.name}</td>
        <td>
          <a target="_blank" rel="noopener noreferrer" href={test.caniuse}>
            caniuse
          </a>
        </td>
        <td>
          <a target="_blank" rel="noopener noreferrer" href={test.doc}>
            doc
          </a>
        </td>
      </tr>
    ));

    return (
      <div>
        <h2>Testing various features</h2>

        <table>{test}</table>
      </div>
    );
  }
}
