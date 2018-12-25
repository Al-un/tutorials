import _ from 'lodash';
import component from './component';

// function component() {
//   let element = document.createElement('div');

//   // Lodash required
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   let btn = document.createElement('button');
//   btn.innerHTML = 'Click me and check console';
//   btn.onclick = printMe;
  
//   element.appendChild(btn);
//   return element;
// }

document.body.appendChild(component());
