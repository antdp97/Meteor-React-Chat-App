/* eslint-disable no-unused-vars */
/**
 * Meteor methods
 */

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
    // 'message.insert'(text){
    //     check(text,String);
    // }
    //Return user Email from server
    getuserEmail(userId){
        //Find user match ID and return 2 fields : id and emails
        const userTarget = Meteor.user.findOne({_id:userId},{_id:1,emails:1});
        if(userTarget){
            return {email : userTarget._id && userTarget.emails[0].address ? userTarget.id : 0 , status:"success"}
        }

        return {status: " Error "}
    }

})