import _ from 'lodash';
import component from './component';
import printMe from './print';
import './styles.css';

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
    document.body.removeChild(element);
    element = component(); // Re-render element
    document.body.appendChild(element);
  });
}
