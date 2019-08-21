import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

// Contact component - represents a Contact item in Invite List
const inlineList = {
  display: 'inline',
  padding: '5px',
};

// Style for last child (maybe upgrade the style of bubble chat of message in the future)
const childstyle ={

}


export default class InviteItem extends Component {
  constructor(props){
    super(props);
    this.setState = {
      emailTrue : null
    }
    this.getUserEmail = this.getUserEmail.bind(this);
  }


  getUserEmail(){
    Meteor.call('getuserEmail',this.props.contact.receiverId,(e,result)=>{
      if(!e){
        console.log(`Get ${result.email}`)
        // this.setState() 
      }
    })
  }

  render() {
    // console.log(this.props.contact);
    const { receiverId } = this.props.contact;
    return <li style={inlineList}>{receiverId}</li>;
  }
}
