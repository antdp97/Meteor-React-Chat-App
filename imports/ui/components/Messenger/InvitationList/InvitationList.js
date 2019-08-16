import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
//collection of Invited User for Directory List
//import  from '../../../api/users/users';
import InviteItem from './InviteItem';
import Invitations from '../../../../api/invitations/invitations';

class InvitationList extends React.Component {
  
  //Render Individual User's email invited
  renderInviteItem() {
    //console.log(this.props.invitations);
    return this.props.invitations.map((contact,index) => (
      <InviteItem key={index} contact={contact} />
    ));
  }

  render() {
    //Always check if the subscription has ready or not.
    if(!this.props.invitationReady){
      return this.props.invitationReady;
    }
    else{
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
}

export default withTracker(() => {
  const invitationSub = Meteor.subscribe('invitations.sent');
  const invitations = Invitations.find({}).fetch();
  const invitationReady = invitationSub.ready();
  // console.log(invitation);
  return {
    invitationReady,
    invitations,
  }


})(InvitationList)