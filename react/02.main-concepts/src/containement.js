import React from 'react';

export function Box(props) {
  return <div className={'box box-' + props.color}>{props.children}</div>;
}
