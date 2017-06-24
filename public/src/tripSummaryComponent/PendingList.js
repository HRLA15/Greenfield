import React, { Component } from 'react'
import PendingListEntry from './PendingListEntry'

class PendingList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      curPendingList:this.props.pendingList
    }
  }
  render(){
    console.log("pendinglist in pendinglist entry",this.props.pendingList);
    return(
       <div>
        <table>
          <thead>
            <tr>
              <td>Pending List:</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.curPendingList.map((pendingListEntry) => (
                <PendingListEntry pendingListEntry={pendingListEntry} />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }

}

export default PendingList