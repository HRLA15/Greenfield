import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'


class ConfirmedHotelListEntry extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    console.log("in confirmed hotellist entry",this.props.confirmedHotelListEntry.name);
    return(
      
        <Col xs={3}>
        <img width={150} height={150} src={`${this.props.confirmedHotelListEntry.photo}`}/>
        </Col>
      
    )
  }
}
export default ConfirmedHotelListEntry
