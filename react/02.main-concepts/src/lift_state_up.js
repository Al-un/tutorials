import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function BoilingVerdict(props) {
  return props.celsius >= 100 ? (
    <p>The water would boil</p>
  ) : (
    <p>The water would not boil</p>
  );
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convertFn) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convertFn(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.state = { temperature: '' };
  }

  handleChange(e) {
    // this.setState({ temperature: e.target.value });
    console.log(
      `TemperatureInput.handleChange e.target.value:${JSON.stringify(
        e.target.value
      )}`
    );
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    // const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange(temperature) {
    console.log(
      `Calculator.handleCelsiusChange: state (Before)=${JSON.stringify(
        this.state
      )} with new temperature ${JSON.stringify(temperature)}`
    );
    this.setState({ temperature: temperature, scale: 'c' });
    console.log(
      `Calculator.handleCelsiusChange: state (After)=${JSON.stringify(
        this.state
      )}`
    );
  }

  handleFahrenheitChange(temperature) {
    console.log(
      `Calculator.handleFahrenheitChange: state (Before)=${JSON.stringify(
        this.state
      )} with new temperature ${JSON.stringify(temperature)}`
    );
    this.setState({ temperature, scale: 'f' });
    console.log(
      `Calculator.handleFahrenheitChange: state (After)=${JSON.stringify(
        this.state
      )}`
    );
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;

    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      //   <fieldset>
      //     <legend>Enter temperature in Celsius</legend>
      //     <input value={temperature} onChange={this.handleChange} />
      //     <BoilingVerdict celsius={parseFloat(temperature)} />
      //   </fieldset>
      <div>
        <p>
          Fahrenheit use 'temperature' with argument as as state key instead of
          Celsius which does 'temperature: temperature' in setState
        </p>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
