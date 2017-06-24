import React, {Component} from 'react'

class ConfirmedFunList extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return(
      <td>
        {this.props.confirmedFunListEntry.name}
      </td>
    )
  }
}
export default ConfirmedFunList