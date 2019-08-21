import { Meteor } from 'meteor/meteor';
//import Collection
import Invitations from  './invitations';

//Make sure the server is running
if ( Meteor.isServer ){
    //Publish the List of invitation user have received but havent answered. Friend Request
    //Only publish those invitation has not been respoded
    Meteor.publish('invitations.received',function(){
        // console.log(this.userId + "here");
        if(!this.userId){
            return this.ready();
        }        
        return Invitations.find(
            {$and:[
                { receiverId : this.userId},
                { isResponded: false}
            ]}
        );
        
    })

    //Publish the list of invitation user have sent so when new invitation sent user can notice the change
    //Only publish those invitation has not been respoded
    Meteor.publish('invitations.sent', function(){
        console.log(this.userId);
        if(!this.userId){
            return this.ready();
        }
        return Invitations.find(
            {$and:[
                { senderId:    this.userId},
                { isResponded: false}
            ]}
        );
    })
}
