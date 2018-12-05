import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Clock } from './component';
import { NumberedList } from './list';
import { MyForm, NameForm, EssayForm, FlavorForm, Reservation } from './form';
import { Calculator } from './lift_state_up';
import { Box } from './containement';

// ---------- App --------------------------------------------------------------
class App extends React.Component {
  render() {
    const clockSetStyle = {
      display: 'flex',
      flexWrap: 'wrap'
    };

    return (
      <div>
        <Box color="blue">
          <h1>Clocks</h1>
          <sub>
            (Rendering Elements, Component/Props, State/Lifecycle, Events)
          </sub>
          <div style={clockSetStyle}>
            <Clock name={'1'} />
            <Clock />
          </div>
        </Box>
        <Box color="green">
          <h1>Lists</h1>
          <NumberedList numbers={[1, 5, 6, 9, 7]} />
        </Box>
        <Box color="orange">
          <h1>Forms</h1>
          <p>MyForm:</p>
          <MyForm />
          <p>NameForm:</p>
          <NameForm />
          <p>EssayForm:</p>
          <EssayForm />
          <p>FlavorForm:</p>
          <FlavorForm />
          <p>Reservation:</p>
          <Reservation />
        </Box>
        <Box color="red">
          <h1>States</h1>
          <Calculator />
        </Box>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// setInterval(() => {
//   ReactDOM.render(
//     <Clock now={new Date().toISOString()} />,
//     document.getElementById('root')
//   );
// }, 1000);
