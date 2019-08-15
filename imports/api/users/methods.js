/* eslint-disable no-unused-vars */
/**
 * Meteor methods
 */

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
    'message.insert'(text){
        check(text,String);
    }
})