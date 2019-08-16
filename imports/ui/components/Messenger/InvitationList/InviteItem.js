import React, { Component } from 'react';

// Contact component - represents a Contact item in Invite List
const inlineList = {
  display: 'inline',
  padding: '5px',
};

export default class InviteItem extends Component {
  render() {
    console.log(this.props.contact);
    const { receiverId } = this.props.contact;
    return <li style={inlineList}>{receiverId}</li>;
  }
}
