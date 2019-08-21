import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

const styleInline ={
    display: 'inline-block', 
}
  
const styleuserItem ={
    display: 'inline-block', 
    marginLeft: '10px' ,
    width: '100px'
}
  
const styleImg ={
    width: "50px",
    height: "50px"
}

export default class FriendRequest extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.handleAcceptOnClick = this.handleAcceptOnClick.bind(this);
        this.handleRejectOnClick = this.handleRejectOnClick.bind(this);
    }


    //Hard Code the onclick Function ACCEPT
    handleAcceptOnClick(){
        
        //If Accept Call the method confirmAnswered to change isAccepted and isResponded to true 
        //After update the invitation , Call the method createNewConversation to createNewConversation
        Meteor.call('confirmAnswered',true,this.props.request._id,(e,result)=>{
            if(!e){
                console.log("Accepted")
            }
        });
        Meteor.call('createNewConversation',Meteor.userId(),this.props.request._id,(e,result)=>{
            if(!e){
                console.log("Create new Conversation success.")
            }
        });

    }

    //Hard Code the onclick Function REJECT
    handleRejectOnClick(){
        
        //If Reject Call the method confirmAnswered to change isAccepted to false and isResponded to true
        Meteor.call('confirmAnswered',false,this.props.request._id,(e,result)=>{
            if(!e){
                console.log("Rejected")
            }
        })
    }


    render(){
        //console.log(this.props.request);
        return(
            <div>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                <img src="" className="rounded-circle" style={styleImg}/>
                <div className="text-left user-item" style={styleuserItem}>
                    {this.props.request.senderId}
                </div>
                <div style={styleInline}>
                    <input type="button" className="btn btn-primary btn-sm" value="Accept" onClick={this.handleAcceptOnClick} />
                    <input type="button" className="btn btn-default btn-sm" value="Reject" onClick={this.handleRejectOnClick}/>
                </div>
                </a>
            </div>
        )

    }

}