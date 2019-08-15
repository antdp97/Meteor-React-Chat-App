import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
//collection of Invited User for Directory List
//import  from '../../../api/users/users';

//Contact Info in Directory
import Contact from './Contact';

//container no margin

export default class Directory extends React.Component {
  //Imagination Data for testing
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
    ];
    //     {
    //         "_id": "2",
    //         "emails": [
    //           {
    //             "address": "nguyentheviet@gmail.com",
    //           }
    //         ]
    //     },
    //     {
    //         "_id": "3",
    //         "emails": [
    //           {
    //             "address": "tranhuunhan@gmail.com",
    //           }
    //         ]
    //     }
  }

  renderDirectoryList() {
    return this.getDirectory().map(contact => (
      <Contact
        key={contact._id}
        contact={contact}
        onChange={this.props.onChange}
      />
    ));
  }
  render() {
    //this.props.sample
    return (
      <div className="container-fluid">
        <div id="directory-list" className="list-group">
          {this.renderDirectoryList()}
        </div>
        <a
          className="btn btn-info"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Invite
        </a>
        <div className="collapse" id="collapseExample">
          <input
            type="text"
            className="form-control"
            placeholder="Enter user's email."
          />
        </div>
      </div>
    );
  }
}
