import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
//collection of Invited User for Directory List 
//import Conversation directory 
import Conversations from '../../../../api/conversations/conversations';

//Contact Info in Directory
import Contact from './Contact';
// import { thisExpression } from '@babel/types';

//container no margin

class Directory extends React.Component {
  constructor(props){
    super(props);
    //Save the Chat in Input
    this.state = {
      payloadInvite : ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  //Input Email
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
    // console.log(this.state.payloadInvite);
  }

  //Press Enter to submit
  handleKeyDown = (e) =>{
    //console.log(this.state.payloadInvite);
    if(e.key === "Enter"){
      confirm("Are you sure you want to invite this User?");
      Meteor.call("createInvitation",this.state.payloadInvite,Meteor.userId(),(e,result)=>{
        if(!e){  
          console.log(this.state.payloadInvite); 
        }
      })
    }
    this.state.payloadInvite="";
  }

  renderDirectoryList() {
    return this.props.directory.map((contact,index) => (
      <Contact
        key={index}
        contact={contact}
        onChange={this.props.onChange}
      />
    ));
  }

  render() {
    if(!this.props.directoryReady){
      return this.props.directoryReady;
    }
    else{
      //console.log(this.props.directory);
      //this.props.sample
      return (
        <div className="container-fluid">
          <div id="directory-list" className="list-group">
            {this.renderDirectoryList()}
          </div>
          <a
            className="btn btn-info"
            data-toggle="collapse"
            href="#collapseInvite"
            role="button"
          >
            Invite
          </a>
          <div className="collapse" id="collapseInvite">
            <input
              type="text"
              className="form-control"
              name="payloadInvite"
              value={this.state.payloadInvite}
              onKeyDown={this.handleKeyDown}
              onChange={this.handleChange}
              placeholder="Enter an email to invite"
            />
          </div>
        </div>
      );
    }
  }
}

export default withTracker(() => {
  const directorySub = Meteor.subscribe('conversations.directory');
  const directory = Conversations.find({}).fetch();
  const directoryReady = directorySub.ready();
  return {
    directoryReady,
    directory,
  }


})(Directory)
