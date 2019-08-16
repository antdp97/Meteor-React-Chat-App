import { Meteor } from 'meteor/meteor';
import Invitations from './invitations';

Meteor.methods({
    //Create new Invitation from Invite Button
    createInvitation(emailadd,userId){
        const invitedUser = Meteor.users.findOne({"emails.address": emailadd });
        console.log(invitedUser);
        if( invitedUser === undefined ){
            console.log("Can't find user");
        }
        else{
            Invitations.insert(
                {
                senderId : userId,
                receiverId : invitedUser._id,
                isResponded : false,
                isAccepted : false
                }
            )
        }
    },


    //Handle React Modal Form to modify the Invitation, 
    //isResponded will always be changed to true after answering the form.
    //isAccepted will be changed based on the answer.
    confirmAnswered(answer,invitationId){
        Invitations.updateOne(
            { _id: invitationId },
            {
                $set: { isResponded : true , isAccepted : answer }
            }
        )
    }
    

})