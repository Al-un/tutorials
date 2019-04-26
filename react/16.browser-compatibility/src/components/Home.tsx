import React from "react";

import { tests, Test } from "./misc";

export default class Home extends React.Component<{}, {}> {
  public async componentDidMount(): Promise<void> {
    const nothing = await Promise.resolve(1);
    console.log(`Nothing is loaded: ${nothing}`);
  }

  public render(): JSX.Element {
    const test = tests.map(
      (test: Test): JSX.Element => (
        <tr key={test.name}>
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
      )
    );

    return (
      <div>
        <h2>Testing various features</h2>

        <table>{test}</table>
      </div>
    );
  }
}
