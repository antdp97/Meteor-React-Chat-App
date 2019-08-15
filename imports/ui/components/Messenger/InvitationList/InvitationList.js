import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
//collection of Invited User for Directory List
//import  from '../../../api/users/users';
import InviteItem from './InviteItem';

export default class InvitationList extends React.Component {
  //Return Testing Data
  getDirectory() {
    return [
      {
        _id: '1',
        emails: [
          {
            address: 'bamboobammam@gmail.com',
          },
        ],
      },
      {
        _id: '2',
        emails: [
          {
            address: 'nguyentheviet@gmail.com',
          },
        ],
      },
      {
        _id: '3',
        emails: [
          {
            address: 'tranhuunhan@gmail.com',
          },
        ],
      },
    ];
  }

  //Render Individual User's email invited
  renderInviteItem() {
    return this.getDirectory().map(contact => (
      <InviteItem key={contact._id} contact={contact} />
    ));
  }

  render() {
    return (
      <div id="invitation">
        <ul>
          {' '}
          Invite List:
          {this.renderInviteItem()}
        </ul>
      </div>
    );
  }
}
