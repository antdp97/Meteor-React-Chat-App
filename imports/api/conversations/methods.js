import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Conversations from './conversations';

Meteor.methods({
    //Handle the press Enter event of Input to Update the conversation
    enterChat(userId,conversationId,chatContent){
        Conversations.update(
            { _id : conversationId },
            { $push: {"messages":{
                    senderId: userId ,content: chatContent ,status:false}
            }}
        )
        
    }

})