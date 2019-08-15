import React, { Component } from 'react';

// Contact component - represents a Contact item
export default class Contact extends Component {
  //OnClick when user Click the User Email the currentContact will change to this email to render in Conversation

  render() {
    return (
      <a
        className="list-group-item list-group-item-action"
        onClick={() => {
          this.props.onChange(this.props.contact.emails[0].address);
        }}
      >
        {this.props.contact.emails[0].address}
      </a>
    );
  }
}
