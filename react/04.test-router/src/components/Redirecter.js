import React from 'react';

export default class Redirecter extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      console.log('Redirecting to /plop');
      this.props.history.push('/plop');
    }, 5000);
  }

  render() {
    return (
      <div>
        <h2>Redirection page</h2>
        <p>You will be redirect to "/plop" in 5 seconds.</p>
      </div>
    );
  }
}
