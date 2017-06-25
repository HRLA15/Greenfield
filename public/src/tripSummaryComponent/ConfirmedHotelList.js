import React, {Component} from 'react'
import ConfirmedHotelListEntry from './ConfirmedHotelListEntry'
import {Grid, Row} from 'react-bootstrap'

class ConfirmedHotelList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:this.props.confirmedHotelList.length
    }
  }

  render(){
    console.log("in confirmedhotel list", this.props.confirmedHotelList)
    return(
      
      <Grid>
        <Row>
        {
          this.props.confirmedHotelList.map((confirmedHotelListEntry)=>(
            <ConfirmedHotelListEntry 
              confirmedHotelListEntry={confirmedHotelListEntry}
              count={this.state.count}
            />
          ))
        }
        </Row>
      </Grid>
      
      
    )
  }
}
export default ConfirmedHotelList