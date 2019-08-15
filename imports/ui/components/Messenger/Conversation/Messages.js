import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

// Contact component - represents a Contact item

const msgUser = {
  backgroundImage: 'linear-gradient(rgba(24,201,255,1), rgba(5,230,195,1))',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  borderRadius: '30px',
  
  margin: '1px',
};

const msg = {
  borderRadius: '30px',
  margin: '1px',
  backgroundColor: 'gray',
  color: 'white'
};

export default class Message extends Component {
  //CHECK IF THE MESSAGE COME FROM USER OR RECEIVER
  checkMessageSender() {
    
    //if message is sent from user the message will be rendered on the right of the context

    if (this.props.message.senderId === Meteor.userId()) {
      return (
        <div className="d-flex flex-row-reverse">
          <div className="p-2" style={msgUser}>
            {this.props.message.content}
          </div>
        </div>
      );
    } else {
      return (
        <div className="d-flex flex-row ">
          <div className="border p-2" style={msg}>
            {this.props.message.content}
          </div>
        </div>
      );
    }
  }

  render() {
    return <div className="msg-container">{this.checkMessageSender()}</div>;
  }
}
