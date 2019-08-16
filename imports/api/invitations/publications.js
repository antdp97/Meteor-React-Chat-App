import { Meteor } from 'meteor/meteor';
//import Collection
import Invitations from  './invitations';

//Make sure the server is running
if ( Meteor.isServer ){
    //Publish the list of invitation user have sent so when new invitation sent user can notice the change
    //Only publish those invitation has not been respoded
    Meteor.publish('invitations.sent', function(){
        
        if(!this.userId){
            return this.ready();
        }
        // console.log( Invitations.find({
        //     senderId: this.userId
        // }));
        return Invitations.find(
            {$and:[
                {senderId: this.userId},{isResponded:false}
            ]}
        );
    })
}
