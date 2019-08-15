import { Meteor } from 'meteor/meteor';
import Conversations from './conversations.js';

if (Meteor.isServer) {
  // Meteor.publish('conversation.directory',() => {
  //   if(!this.userId){
  //     return this.ready();
  //   }
  //   return Conversations.
  // })

  //return Conversation match this.userId and currentContact Id
  //Publish Conversation for both user
  Meteor.publish('conversations.chat', function(){
    // if(!this.userId){
    //   return this.ready();
    // }
    //console.log('here');
    return Conversations.find(
      {$or : [ 
        { $and : [ { userA : "5wFCcb3SGHF72Knec" } , { userB : "YYxkg9kevpvSZR48g" } ] }, 
        { $and : [ { userA : "YYxkg9kevpvSZR48g" } , { userB : "5wFCcb3SGHF72Knec" } ] }        
      ]}
    )
  });

}
