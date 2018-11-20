import React from 'react';

function Toggle(props) {
  return <button onClick={props.onClick}>{props.value}</button>;
}

export class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      now: new Date(),
      running: true
    };

    this.toggleClock = this.toggleClock.bind(this);
  }

  componentDidMount() {
    this.startClock();
  }

  componentWillUnmount() {
    this.stopClock();
  }

  tick() {
    this.setState({
      now: new Date()
    });
  }

  startClock() {
    this.timerId = setInterval(() => this.tick(), 1000);
    this.setState({
      running: true
    });
  }

  stopClock() {
    clearInterval(this.timerId);
    this.setState({
      running: false
    });
  }

  toggleClock() {
    if (this.state.running) {
      console.log('stopping clock');
      this.stopClock();
      this.timerId = undefined;
    } else {
      console.log('starting clock');
      this.tick();
      this.startClock();
    }
  }

  render() {
    const pauseStyle = {
      color: 'red'
    };
    const clockStyle = {
      border: '1px solid darkcyan',
      background: 'eee',
      padding: '8px',
      margin: '8px',
      minWidth: '40%'
    };

    return (
      <div style={clockStyle}>
        <h3>This is a clock {this.props.name}</h3>
        <p>Current time is {this.state.now.toISOString()}</p>
        {!this.state.running && (
          <div style={pauseStyle}>Clock is currently paused</div>
        )}
        <Toggle
          onClick={this.toggleClock}
          value={this.state.running ? 'Pause' : 'Resume'}
        />
      </div>
    );
  }
}
