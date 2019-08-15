//Collection definition

import { Mongo } from 'meteor/mongo';
import SimpleSChema from 'simpl-schema';

//define collection
const Invitations = new Mongo.Collection('invitation');

//define schema
const Schema = new SimpleSChema({
  _id: {
    type: String,
  },
  //User A 's ID(Invttation SENDER's ID )
  senderId: {
    type: String,
  },
  //User B 's ID(Invitation RECEIVER's ID)
  receiverId: {
    type: String,
  },
  //TRUE means RESPONDED , FALSE means HAS NOT RESPONDED
  isResponded: {
    type: Boolean,
  },
  //isAccepted will support to make decision whether the Conversation will be created.
  isAccepted: {
    type: Boolean,
  },
});

//attach schema
Invitations.attachSchema(Schema);

export default Invitations;
