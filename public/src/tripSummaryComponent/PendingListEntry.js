import React, { Component } from 'react'

class PendingListEntry extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      voteup : 0,
      votedown : 0,
      vote : 0
    }
    this.handleVoteUp = this.handleVoteUp.bind(this);
    this.handleVoteDown=this.handleVoteDown.bind(this);
  }

  handleVoteUp(){
    var curState = this
    var tempVoteCount = curState.state.vote
    var tempVoteUpCount = curState.state.voteup
    tempVoteCount ++;
    tempVoteUpCount ++
    this.setState({
      voteup: tempVoteUpCount,
      vote : tempVoteCount
    })
  }
  handleVoteDown(){
    var curState = this
    var tempVoteCount = curState.state.vote
    var tempVoteDownCount = curState.state.votedown
    tempVoteCount --;
    tempVoteDownCount ++
    this.setState({
      votedown: tempVoteDownCount,
      vote : tempVoteCount
    })
  }

  render(){
    console.log("pendinglistentry", this.props.pendingListEntry)
    return(
      
      <tr>
        <td 
          onClick={()=>
          {this.props.handleListEntryClick(this.props.queryType)}}
        >
          {this.props.pendingListEntry.name}
          <button onClick={this.handleVoteUp}> {`Vote up: ${this.state.voteup} times`} </button>
          <button onClick={this.handleVoteDown}> {`Vote down: ${this.state.votedown} times`} </button>
          {`Vote Count : ${this.state.vote}`}
          <button onClick={()=>{this.props.handleAddToConfirmList(this.props.queryType, this.props.pendingListEntry)}}> Let's Do it! </button>
        </td>
      </tr>
      
    )
  }
}


export default PendingListEntry
