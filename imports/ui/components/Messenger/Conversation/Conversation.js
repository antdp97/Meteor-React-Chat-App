import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';

//collection of Conversations
import Conversations from '../../../../api/conversations/conversations';

//Message in Chat
import Message from './Messages';


class Conversation extends React.Component {
  constructor(){
    super();
    //Save the Chat in Input
    this.state = {
      payloadChat : ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //Check whether the sender is current logged User or not for RENDERING ( LEFT OR RIGHT )
  //When press enter call the method to insert the message
  //parameter list : userId , conversationId, chat content
  handleKeyDown = (e)=>{
    if (e.key === 'Enter'){
      Meteor.call('enterChat',Meteor.userId(),this.props.conversation[0]._id,this.state.payloadChat,(e,result) => {
        if(!e){  
          //console.log(`Chat have submited by "${Meteor.userId()}" to "${this.props.conversation[0]._id._str}" with the content "${this.state.payloadChat}"`);
          console.log('Chat submited'); 
        } 
      })
    }
    //Reset the Chat
    this.state.payloadChat=""
  }

  //Handle the Input Box
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
    console.log(this.state.payloadChat);
  }

  //Render Individual Message in Chat Log
  renderMessage() {
    return this.props.conversation[0].messages.map((message,index) => (
      <Message key={index} message={message} />
    ));
  }
  //check
  // publish(payloadChat){
  //   alert(this.refs.payloadChat.value);
  // }

  render() {
    if(!this.props.conversationReady){
      return this.props.conversationReady;
    }
    else{
      //console.log(this.props.conversationReady);
      // console.log();
      // console.log(this.props.conversation[0]._id._str);
      
      return (
        <div className="container overflow-auto" id="chatRoom">
          {/* <p className="text-center">{this.props.datacontact}</p> */}
          <div>{this.renderMessage()}</div>
          <input
            type="text"
            name="payloadChat"
            // datacontact={this.props.currentContact}
            className="form-control"
            placeholder="Enter a message"
            value={this.state.payloadChat}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        
      );
    }
  }
}

export default withTracker(() => {
  const conversationSub = Meteor.subscribe('conversations.chat');
  const conversation = Conversations.find({}).fetch();
  const conversationReady = conversationSub.ready();
  return {
    conversationReady,
    conversation,
  }
  
  
})(Conversation)