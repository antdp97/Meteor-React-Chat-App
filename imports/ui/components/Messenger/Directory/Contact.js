import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


// Contact component - represents a Contact item
export default class Contact extends Component {
  //Check ID of 2 talkers
  // checkTalker(){
    
  //   //console.log(result);
  //   // return result;
  //   // if( this.props.contact[0] === Meteor.userId()){
  //   //   return this.props.contact[1] ;
  //   // }
  //   // else {
  //   //   return this.props.contact[0];
  //   // }
  // }
  
  //OnClick when user Click the User Email the currentContact will change to this email to render in Conversation

  render() {
    //console.log(this.props.contact);
    const {talker} = this.props.contact;
    //Check if which talker is login user and return the other one.
    const result = (talker[0] === Meteor.userId()) ? talker[1] : talker[0];
    //console.log(result);
    //console.log(this.props.contact);  
    return (      
      <div className="contact-container">
        <a className="list-group-item list-group-item-action"
          onClick={() => {
            this.props.onChange(result._str);
          }}
        >     
          {result}
        </a>
      </div>
    )
  }
}
