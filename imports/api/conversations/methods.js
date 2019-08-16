import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Conversations from './conversations';

Meteor.methods({
    //Handle the press Enter event of Input to Update the conversation
    enterChat(userId,conversationId,chatContent){
        Conversations.update(
            { _id : conversationId },
            { $push: {"messages":{
                    senderId: userId ,
                    content: chatContent ,
                    status:false,
                    createdAt:new Date()
                }
            }}
        )
    },

    //Count all Chat in Messages of ONE Conversation
    countAllMessages(){
        // const messages = Conversations.aggregate([
        //     {$match : 
        //         { _id: new Meteor.Collection.ObjectID("5d53c6d5b48de1c9fe2e2e4f")}
        //     },
        //     {$project: { count:{ $size : "$messages" } } }
        // ]);
        const messages = Conversations.findOne(
            {_id: new Meteor.Collection.ObjectID("5d53c6d5b48de1c9fe2e2e4f")},
            {fields:
                {messages:1}
            }
        )
        //console.log(messages);
        if(messages)  {
        
            return { count : messages && messages.messages ? messages.messages.length : 0 , status:"success"};
        };

        return { status : "error" };
    },


    //Count Chat in a range of time ( Form type date)
    // countMessages(start,end){
    //     const messages = Conversations.findOne(
    //         {$and:[
    //            { _id: new Meteor.Collection.ObjectID("5d53c6d5b48de1c9fe2e2e4f")},
    //            { $and:[
    //                {messages. createdAt : {$lt : end}},
    //                {messages. createdAt : {$gt : start}}
    //            ]}
    //         ]
    //         }
    //         ,
    //         {fields:
    //             {messages:1}
    //         }
    //     )
    //     //console.log(messages);
    //     if(messages)  {
        
    //         return { count : messages && messages.messages ? messages.messages.length : 0 , status:"success"};
    //     };

    //     return { status : "error" };
    // }
    


})