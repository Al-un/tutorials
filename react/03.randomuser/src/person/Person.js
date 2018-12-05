import React, { Component } from 'react';
import './Person.css';

export default class Person extends Component {
  get FullName() {
    return this.props.person.name.first + ' ' + this.props.person.name.last;
  }

  get BirthDate() {
    return new Date(this.props.person.dob.date).toDateString();
  }

  get Title() {
    return this.props.index
      ? `${this.props.person.name.title} #${this.props.index}`
      : this.props.person.name.title;
  }

  render() {
    return (
      <div className="Person">
        <div className="Person-picture-container">
          <img
            className="Person-picture"
            src={this.props.person.picture.large}
            alt={this.FullName}
          />
        </div>
        <div className="Person-info">
          <div className="Person-info-entry">
            <div className="Person-info-subject">Title</div>
            <div className="Person-info-value">{this.Title}</div>
          </div>
          <div className="Person-info-entry">
            <div className="Person-info-subject">Name</div>
            <div className="Person-info-value">{this.FullName}</div>
          </div>
          <div className="Person-info-entry">
            <div className="Person-info-subject">Birth date</div>
            <div className="Person-info-value">
              {this.BirthDate} ({this.props.person.dob.age})
            </div>
          </div>
          <div className="Person-info-entry">
            <div className="Person-info-subject">Phone</div>
            <div className="Person-info-value">{this.props.person.phone}</div>
          </div>
        </div>
      </div>
    );
  }
}
