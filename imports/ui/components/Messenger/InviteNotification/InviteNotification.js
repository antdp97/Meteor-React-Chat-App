//InviteNotification Component
import React, { Component } from 'react';
// import ReactModal from 'react-modal';
import { withTracker } from 'meteor/react-meteor-data';
//Small Friend Request
import FriendRequest from './FriendRequest';

//Invitation Collection - Request
import Invitations from '../../../../api/invitations/invitations';

//
import './InviteNotifcation.css';

const styleMinWidth = {
  minWidth: "300px"
}
class InviteNotification extends Component {
  constructor() {
    super();
    // this.state = {
    //   showModal: false,
    // };

    // this.handleOpenModal = this.handleOpenModal.bind(this);
    // this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  //Open Modal
  // handleOpenModal() {
  //   this.setState({ showModal: true });
  // }
  // ///Close Modal
  // handleCloseModal() {
  //   this.setState({ showModal: false });
  // }
  //Render Small Request
  renderRequestList() {
    console.log(this.props.requests);
    return this.props.requests.map((request,index) => (
      <FriendRequest
        key={index}
        request={request}
      />
    ));
  }


  render() {

    return (
      
      <div>
            <li className="nav-item dropdown">
            {/* DropDown List */}
            <a className="nav-link dropdown-toggle mr-lg-2" id="contactsDropdown" href="#" data-toggle="dropdown">
            <i className="fa fa-fw fa-bell"></i>
          <span className="" >
              Contacts
            <span className="badge badge-pill badge-warning">0 new</span>
          </span>
          <span className="indicator text-warning">
            {/* <i className="fa fa-fw fa-circle">Here</i> */}
          </span>
          </a>
            {/* DropDown Items */}
          <div className="dropdown-menu dropdown-menu-right" style={styleMinWidth} aria-labelledby="contactsDropdown">
            <h6 className="dropdown-header">Contacts:</h6>     
            {this.renderRequestList()}       
          </div>
        </li>
      </div>
    );
  }
}



export default withTracker(() => {
  const requestsSub = Meteor.subscribe('invitations.received');
  const requests = Invitations.find({}).fetch();
  const requestReady = requestsSub.ready();
  // console.log(invitation);
  return {
    requestReady,
    requests,
  }


})(InviteNotification)