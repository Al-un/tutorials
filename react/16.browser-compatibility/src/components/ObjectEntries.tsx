import React from "react";

export default class ObjectEntries extends React.Component<any, any> {
  render() {
    const obj = { foo: "bar", baz: 42 };
    const entries = Object.entries(obj);

    return (
      <div>
        <h2>Object Entries</h2>

        <p>
          Trying to call <code>Object.entries()</code> with the following code:
        </p>

        <pre>{`
const obj = { foo: "bar", baz: 42 };
const entries = Object.entries(obj);
        `}</pre>

        <div>{entries}</div>
        <p>
          With a <code>JSON.stringify</code>:
        </p>
        <div>{JSON.stringify(entries)}</div>
      </div>
    );
  }
}
