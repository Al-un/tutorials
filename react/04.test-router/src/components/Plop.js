import React from 'react';

export default function Plop(props) {
  return (
    <div>
      <h2>Plop</h2>
      <div>
        This is a plop page for value: {props.value || props.match.params.value}
        .
      </div>
    </div>
  );
}
