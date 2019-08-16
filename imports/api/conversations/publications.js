import { Meteor } from 'meteor/meteor';
import Conversations from './conversations.js';

//Make sure the server is running
if (Meteor.isServer) {
  //Return all Conversation
  Meteor.publish('conversations.dashboard',function(){
    return Conversations.find({})
  })


  //return Conversation match this.userId and currentContact Id
  //Publish all Conversations that current user participate
  Meteor.publish('conversations.chat', function(){
    if(!this.userId){
      return this.ready();
    }
    // console.log(this.userId);
    return Conversations.find(
      {talker: { $in: [this.userId]}}
    )
  });
  //return Conversation match this.userId for Directory
  //ONLY return talker field and conversationID
  Meteor.publish('conversations.directory', function(){
    if(!this.userId){
      return this.ready();
    }
    // console.log(this.userId);
    return Conversations.find(
      {talker: { $in: [this.userId]},
    fields:{
      talkers:1,
      _id:1
    }}
    )
  });

}
