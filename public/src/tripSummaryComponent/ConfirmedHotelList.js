import React, {Component} from 'react'
import ConfirmedHotelListEntry from './ConfirmedHotelListEntry'


class ConfirmedHotelList extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    console.log("in confirmedhotel list", this.props.confirmedHotelList)
    return(
      <tr>
        {
          this.props.confirmedHotelList.map((confirmedHotelListEntry)=>(
            <ConfirmedHotelListEntry 
              confirmedHotelListEntry={confirmedHotelListEntry}/>
          ))
        }
      </tr>
    )
  }
}
export default ConfirmedHotelList