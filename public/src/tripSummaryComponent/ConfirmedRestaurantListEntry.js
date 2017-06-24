import React, {Component} from 'react'

class ConfirmedRestaurantListEntry extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return(
      <td>
        this should be Restaurant name
        {console.log("in confirmed res entry list",this.props.confirmedRestaurantListEntry.name)}
        {this.props.confirmedRestaurantListEntry.name}
      </td>
    )
  }
}
export default ConfirmedRestaurantListEntry