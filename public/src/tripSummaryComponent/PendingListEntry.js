import React, { Component } from 'react'

class PendingListEntry extends React.Component{
  constructor(props){
    super(props)
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
        </td>
      </tr>
      
    )
  }
}


export default PendingListEntry
