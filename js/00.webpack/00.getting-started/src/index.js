import _ from 'lodash';

function component() {
  let element = document.createElement('div');

  // Lodash required
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
