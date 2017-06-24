import React, { Component } from 'react'

class PendingListEntry extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log("pendinglistentry", this.props.pendingListEntry.name)
    return(
      <tr>
        <td>{this.props.pendingListEntry.name}</td>
      </tr>
    )
  }
}


export default PendingListEntry
