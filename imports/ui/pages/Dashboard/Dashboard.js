import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React , { Component } from 'react';

//import Conversations Collections
import Conversations from '../../../api/conversations/publications'


export default class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
        this.getMessCounter = this.getMessCounter.bind(this);
    }



    getMessCounter(){
        Meteor.call('countAllMessages',(e,result) =>{
            // console.log(result.count);
            if(!e){
                // console.log('get Counter');
                this.setState(() => {
                    return { counter: result.count}
                });
            }

            
        })
        
    }
    

    
    render(){   
        return(
                <div className="container" id="dashboard">
                    <h2>Dashboard</h2>
                    <p>This dashboard is for counting the amount of messages in a specific time by choosing Start Date and End Date </p>

                    <div id="test-countall">
                        <button onClick={this.getMessCounter}>Click</button>
                        <button>{this.state.counter}</button>
                    </div>

                    <form className="form-inline">
                        <div className= "form-group"> 
                            <label htmlFor = "FromTime"> From:  </label>
                            <input type = "date" className = "form-control" name="from" id = "FromTime"/>
                        </div>
                        <div className= "form-group"> 
                            <label htmlFor = "ToTime"> To:   </label>
                            <input type = "date" className = "form-control" name="to" id = "ToTime" />
                        </div>
                    </form>
                    <button className="btn btn-info">Count</button>
                </div>

            )
        }

}


// export default withTracker(() => {
//     const conversationSub = Meteor.subscribe('conversations.dashboard');
//     // const messagesCounter = Conversations.aggregate([
//     //             {$match : 
//     //                 { _id: "5d53c6d5b48de1c9fe2e2e4f"}
//     //             },
//     //             {$project: { count:{ $size : "$messages" } } }
//     //         ]);
//     const conversationReady = conversationSub.ready();

//     return {
//       conversationReady,
//     }
    
    
//   })(Dashboard)