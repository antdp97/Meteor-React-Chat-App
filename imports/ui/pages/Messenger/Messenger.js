import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
//collection
import Users from '../../../api/users/users';

//Component
/*
 */
import InvitationList from '../../components/Messenger/InvitationList/InvitationList';
import Conversation from '../../components/Messenger/Conversation/Conversation';
import DirectoryList from '../../components/Messenger/Directory/Directory';
import InviteNotification from '../../components/Modal/Modal';
//Style file
import './Messenger.scss';
import { ModalApp } from '../../components/Messenger/InviteNotification/InviteNotification';

export default class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentContact: '',
    };
    this.changeCurrentContact = this.changeCurrentContact.bind(this);
  }

  changeCurrentContact(targetContact) {
    this.setState({
      currentContact: targetContact,
    });
  }
  //If user try to access this Page without login then the system will push him/her back to login page
  // componentWillMount(){
  //     if (!this.props.loggedIn){
  //         return this.props.history.push('/login');
  //     }
  // }
  //Same as before
  // shouldComponentUpdate(nextProps) {
  //     if (!nextProps.loggedIn) {
  //       nextProps.history.push('/login');
  //       return false;
  //     }
  //     return true;
  //   }

  render() {
    //Check if user has login or not?
    const { loggedIn } = this.props;

    if (!loggedIn) {
      return null;
    }

    return (
      <div className="mh-100 container-fluid border border-primary">
        <ModalApp />
        {/* Row 1:User Profile + Invite List */}
        <div className="row border-bottom">
          {/* User Profile */}
          <div className="col-3 border-right">
            {Meteor.user().emails[0].address}
          </div>

          {/* Invite List */}
          <div className="col-9">
            <InvitationList />
          </div>
        </div>

        {/* Row 2:Directory List + Chat Box ( Conversation + Chat Input ) */}
        <div className="row">
          {/* Directory( Invite Button + Directory ) */}
          <div className="col-3 border-right text-center">
            <DirectoryList onChange={this.changeCurrentContact} />
          </div>

          {/* Conversation + Chat Input */}
          <div className="col-9 align-self-end">
            <Conversation
              // datacontact={this.state.currentContact}
              onChange={this.changeCurrentContact}
            />
          </div>
        </div>
      </div>
    );
  }
}
