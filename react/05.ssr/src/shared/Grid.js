import React, { Component } from 'react';

class Grid extends Component {
  constructor(props) {
    super(props);

    let repos;
    if (__isBrowser__) {
      console.log(`[Grid] Loading data with initial data`);
      repos = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      console.log(`[Grid] Loading data from context`);
      repos = props.staticContext.data;
    }

    this.state = {
      repos,
      loading: repos ? false : true
    };
    // console.log(`Init Grid with state ${JSON.stringify(this.state)}`);
  }

  componentDidMount() {
    if (!this.state.repos) {
      this.fetchRepos(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRepos(this.props.match.params.id);
    }
  }

  fetchRepos(lang) {
    this.setState({
      loading: true
    });

    this.props.fetchInitialData(lang).then(repos =>
      this.setState({
        repos,
        loading: false
      })
    );
  }

  render() {
    const { repos, loading } = this.state;

    if (loading === true) {
      return <p>Loading...</p>;
    }
    // console.log(`Rendering Grid with ${JSON.stringify(repos)}`);

    return (
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {repos.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} style={{ margin: 30 }}>
            <ul>
              <li>
                <a href={html_url}>{name}</a>
              </li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

export default Grid;