//Collection definition

import { Mongo } from 'meteor/mongo';
import SimpleSChema from 'simpl-schema';

//define collection
const Conversations = new Mongo.Collection('conversations');

//define schema
// const Schema = new SimpleSChema({
//   _id: {
//     type: String,
//   },
//   //User A 's ID(Invttation SENDER's ID )
//   userA: {
//     type: String,
//   },
//   //User B 's ID(Invitation RECEIVER's ID)
//   userB: {
//     type: String,
//   },
//   //Array of Messages
//   //Each Message contains:id,content,status(SEEN - UNSEEN),createAt(new Date()),senderID
//   messages: [
//     {
//       _id: {
//         type: String,
//       },
//       //Depending on the senderId the Message will be renders in different styles
//       senderId: {
//         type: String,
//       },
//       content: {
//         type: String,
//       },
//       //UNSEEN or SEEN . UNSEEN will be changed to SEEN when ComponentDidMount is runned
//       status: {
//         type: Boolean,
//       },
//       //Timestamp for counting function 
//       createdAt: {
//         type: Date,
//       },
//     },
//   ],
//   //Counting the amount of unseen message
//   countUnseen: {
//     type: SimpleSChema.Integer,
//   },
// });

// //attach schema
// Conversations.attachSchema(Schema);

export default Conversations;
