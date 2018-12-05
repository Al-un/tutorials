import React from 'react';
import PersonList from './PersonList';
import { WithLoading } from '../utils/Loader';

export default class PersonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      status: undefined,
      // loader stuff
      loading: false
    };
  }

  /**
   * Loading on component mounting
   */
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    this.loadAdditionalPersons();
  }

  /**
   * Destroying component
   */
  componentWillMount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      this.state.persons.length &&
      !this.state.loading
    ) {
      // console.log(`Loading infinite scroll at scrollY: ${window.scrollY}`);
      this.setState({ scrollY: window.scrollY });
      this.loadAdditionalPersons();
    }
  };

  /**
   * Fetch additional random persons 10 by 10
   */
  loadAdditionalPersons() {
    console.log(`${new Date().toISOString()}: Fetching persons data start`);
    this.setState({ status: 'Fetching data', loading: true });
    fetch('https://randomuser.me/api?results=20')
      .then(results => {
        this.setState({ status: 'Parsing data' });
        return results.json();
      })
      .then(data => {
        this.setState({
          persons: this.state.persons.concat(data.results)
        });
        console.log(
          `${new Date().toISOString()}: Fetching persons data completed`
        );
        this.setState({ status: 'Parsing completed', loading: false });
        return this.state.scrollY;
      })
      .then(scrollY => {
        console.log(`Loading scrollY: ${scrollY}`);
        if (scrollY) {
          window.scrollTo(0, scrollY);
        }
      })
      .catch(error => {
        this.setState({ error: error });
        console.log(
          `${new Date().toISOString()}: Fetching persons data error: ${error}`
        );
      });
  }

  render() {
    const ListWithLoading = WithLoading(PersonList, this.state.status);
    return (
      <ListWithLoading
        isLoading={this.state.loading}
        persons={this.state.persons}
      />
    );
  }
}
