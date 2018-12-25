import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
  let element = document.createElement('div');

  // Lodash required
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // CSS
  element.classList.add('hello');

  // Add the image to our existing div
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
console.log(Data);
