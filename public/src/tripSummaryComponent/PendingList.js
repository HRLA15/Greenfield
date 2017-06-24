import React, { Component } from 'react'
import PendingListEntry from './PendingListEntry'

class PendingList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      curPendingList:this.props.pendingList
    }

    this.handleListEntryClick = this.handleListEntryClick.bind(this);

  }


  handleListEntryClick(type){
    console.log("add this to type:", type)
  }

  render(){
    console.log("pendinglist in pendinglist entry",this.props.queryType);
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
                <PendingListEntry queryType={this.props.queryType}
                                  handleListEntryClick={this.handleListEntryClick} 
                                  pendingListEntry={pendingListEntry} />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }

}

export default PendingList