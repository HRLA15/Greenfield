import React, {Component} from 'react'

class ConfirmedHotelListEntry extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    console.log("in confirmed hotellist entry",this.props.confirmedHotelListEntry.name);
    return(
      <td>
        {this.props.confirmedHotelListEntry.name}
      </td>
    )
  }
}
export default ConfirmedHotelListEntry