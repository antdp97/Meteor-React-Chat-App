import React, { Component } from 'react';

// Contact component - represents a Contact item in Invite List
const inlineList = {
  display: 'inline',
  padding: '5px',
};

export default class InviteItem extends Component {
  render() {
    return <li style={inlineList}>{this.props.contact.emails[0].address}</li>;
  }
}
