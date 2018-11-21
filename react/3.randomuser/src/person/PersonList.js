import React, { Component } from 'react';
import './PersonList.css';
import Person from './Person';

export default class PersonList extends Component {
  render() {
    return (
      <div>
        <p>Total persons count: {this.props.persons.length}.</p>
        {this.props.error}
        {this.props.persons.map((person, index) => (
          <Person person={person} key={person.login.uuid} index={index} />
        ))}
      </div>
    );
  }
}
