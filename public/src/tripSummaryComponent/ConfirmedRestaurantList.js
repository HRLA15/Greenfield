import React, {Component} from 'react'
import ConfirmedRestaurantListEntry from './ConfirmedRestaurantListEntry'
class ConfirmedRestaurantList extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return(
      <tr>
        {console.log("in confirmed hotel list?", this.props.confirmedRestaurantList[0])}
        {
          this.props.confirmedRestaurantList.map((confirmedRestaurantListEntry)=>(
            <ConfirmedRestaurantListEntry confirmedRestaurantListEntry={confirmedRestaurantListEntry}/>
          ))
        }
      </tr>
    )
  }
}
export default ConfirmedRestaurantList