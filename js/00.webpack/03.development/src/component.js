import printMe from './print';

export default function component() {
  let element = document.createElement('div');

  // Lodash required
  element.innerHTML = _.join(['Hello', 'webpack', 'plop'], ' ');

  let btn = document.createElement('button');
  btn.innerHTML = 'Click me and check console';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}
